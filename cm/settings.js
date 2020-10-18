var liveEditor = function() {
  var settings = arguments[0] || {},
    _codeMirrorInstance = null,
    _livePreview = document.createElement("iframe"),
    _resizeBar = document.createElement("y"),
    _resizeArea = document.createElement("y"),
    // _fontsizeStylesheet = document.createElement("style"),
    // _menuBar = document.getElementById("menu-bar"),
    _menuStartButton = document.createElement("y"),
    // _imagepathTooltip = document.getElementById("imagepath-tooltip"),
    // _introTooltip = document.getElementById("intro-tooltip"),
    // _menuBtnStyleBright = document.getElementById("btn-style-bright"),
    // _menuBtnStyleDark = document.getElementById("btn-style-dark"),
    // _menuBtnFonsizeIncrease = document.getElementById("btn-fontsize-increase"),
    // _menuBtnFonsizeDecrease = document.getElementById("btn-fontsize-decrease"),
    // _menuBtnFonsizeReset = document.getElementById("btn-fontsize-reset"),
    // _menuBtnOptionsGutter = document.getElementById("btn-options-gutter"),
    // _menuBtnOptionsWordwrap = document.getElementById("btn-options-wordwrap"),
    // _menuLabelImagePath = document.getElementById("label-imagepath"),
    // _menuTxtImagePath = document.getElementById("txt-imagepath"),
    // _menuBtnResetCode = document.getElementById("btn-reset-code"),
    // _menuBtnResetSettings = document.getElementById("btn-reset-settings"),
    _menuTxtImagePathFocus = false,
    _initialized = false,
    _resizeBarMouseDown = false,
    _resizeBarStartPosition = null,
    _resizeBarWidth = 6,
    _menuBarTimer = null,
    _codeView = null,
    _codeViewStartWidth = null,
    _codeViewWidthRatio = 50,
    _livePreviewWidthRatio = 50,
    _browserWidth = parseInt(window.innerWidth),
    _browserHeight = parseInt(window.innerHeight),
    _imageProxyPath = settings.imageProxyPath || null,
    _jsLintResult = null,
    _editorStorageSettings = {},
    _editorDefaultSettings = {
      theme: settings.theme || "bright",
      fontSize: 1,
      wordWrap: settings.wordWrap === false ? false : true,
      gutter: settings.gutter === false ? false : true,
      imageProxyPath: _imageProxyPath,
      codeViewWidth: parseInt(window.innerWidth) / 2,
      livePreviewWidth: (parseInt(window.innerWidth) / 2) - _resizeBarWidth
    };

  var _updateViews = function() {
    var codeMirrorContent = _codeMirrorInstance.getValue(),
      livePreview = _livePreview.contentDocument || _livePreview.contentWindow.document;
    livePreview.open();

    if (_imageProxyPath !== null && typeof _imageProxyPath !== "undefined") {
      _imageProxyPath = _imageProxyPath.replace(/\\/g, "/");
      if (_imageProxyPath.match(/^file:\/\/\//g) === null) _imageProxyPath = "file:///" + _imageProxyPath;
      if (_imageProxyPath.substr(-1) !== "/") _imageProxyPath = _imageProxyPath + "/";
      codeMirrorContent = codeMirrorContent.replace(/url\(['"]{0,}(.+?)['"]{0,}\)/g, "url('" + _imageProxyPath + "$1?" + new Date().getTime() + "')");
      codeMirrorContent = codeMirrorContent.replace(/<img([^>]*)\ssrc=(['"])(.*?)\2(.*?)>/gi, "<img$1 src=$2" + _imageProxyPath + "$3?" + new Date().getTime() + "$2 $4>");
    }

    var codeMirrorContentTrimmed = codeMirrorContent.replace(/[\r\n\t]+/gm, ""),
      codeMirrorContentScripts = codeMirrorContentTrimmed.match(/<\s*script(?:.*)>(.*)<\/\s*script\s*>/i);

    if (codeMirrorContentScripts !== null) {
      try {
        _jsLintResult = JSLINT("/*jslint anon:true, bitwise:true, cap:true, css:true, debug:true, devel:true, eqeq:true, es5:true, evil:true, forin:true, fragment:true, newcap:true, nomen:true, on:true, passfail:true, plusplus:true, regexp:true, undef:true, unparam:true, sloppy:true, sub:true, vars:true, white:true */" + codeMirrorContentScripts[1]);
        if (_jsLintResult) livePreview.write(codeMirrorContent);
      }
      catch (e) {}
    }
    else {
      livePreview.write(codeMirrorContent);
    }

    livePreview.close();
  }

  var _foldFunc = CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);

  var _fadeOut = function(obj, duration) {
    obj.style.opacity = 1;

    var alphaDifference = parseFloat((1 / duration) * 13),
      fadeOutTimer = setInterval(function() {
        var alpha = obj.style.opacity;

        if (alpha - alphaDifference > 0) {
          obj.style.opacity -= alphaDifference;
        }
        else {
          obj.style.opacity = 0;
          obj.style.display = "none";
          clearInterval(fadeOutTimer);
        }
      }, 13);
  }

  var _cloneObject = function(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    else {
      var objClone = obj.constructor();

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) objClone[property] = obj[property];
      }

      return objClone;
    }
  }

  function _injectCSS() {
    var head = document.getElementsByTagName('iframe')[0];
    var style = document.createElement('link');
    style.href = 'https://unpkg.com/yogurt-css@1.1.0/dist/yogurt-1.1.0_solidcore.min.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
  }

  var _settingsController = {
    updateStorageSetting: function(settingKey, settingValue) {
      _editorStorageSettings[settingKey] = settingValue;
      localStorage.setItem("htmlivecodeSettings", JSON.stringify(_editorStorageSettings));
    },
    checkStorageSetting: function(settingValue) {
      return (settings[settingValue] !== null && typeof settings[settingValue] !== "undefined") ? settings[settingValue] : (_editorStorageSettings[settingValue] !== null && typeof _editorStorageSettings[settingValue] !== "undefined") ? _editorStorageSettings[settingValue] : _editorDefaultSettings[settingValue];
    },
    applySettings: function() {
      _codeMirrorInstance.setOption("lineNumbers", _settingsController.checkStorageSetting("gutter"));
      _codeMirrorInstance.setOption("lineWrapping", _settingsController.checkStorageSetting("wordWrap"));
      _codeMirrorInstance.setOption("gutter", _settingsController.checkStorageSetting("gutter"));
      _codeMirrorInstance.setOption("theme", _settingsController.checkStorageSetting("theme"));
      _imageProxyPath = _settingsController.checkStorageSetting("imageProxyPath");
      _updateViews();
      _codeView.style.width = _settingsController.checkStorageSetting("codeViewWidth") + "px";
      _livePreview.style.width = _settingsController.checkStorageSetting("livePreviewWidth") + "px";
      _codeViewWidthRatio = (parseInt(_codeView.style.width) / _browserWidth) * 100;
      _livePreviewWidthRatio = (parseInt(_livePreview.style.width) / _browserWidth) * 100;
      _resizeController.finishResizeAreas();
      _fontsizeStylesheet.removeChild(_fontsizeStylesheet.childNodes[0])
      _fontsizeStylesheet.appendChild(document.createTextNode(".CodeMirror{font-size:" + parseFloat(_editorStorageSettings.fontSize) + "em;}"));
      _codeMirrorInstance.refresh();
    }
  }

  var _resizeController = {
    init: function() {
      window.addEventListener("mouseup", function() {
        _resizeBarMouseDown = false;
        _codeViewWidthRatio = (parseInt(_codeView.style.width) / _browserWidth) * 100;
        _livePreviewWidthRatio = (parseInt(_livePreview.style.width) / _browserWidth) * 100;
        _resizeArea.style.display = "none";
        window.removeEventListener("mousemove", _resizeController.resizeMouseMoveHandler);
      });

      window.addEventListener("mouseout", function() {
        if (!_resizeBarMouseDown) document.body.style.cursor = "default";
      });

      window.addEventListener("resize", function() {
        _resizeController.resizeAreas();
      });

      _resizeBar.addEventListener("mousedown", _resizeController.resizeMouseDownHandler);
      _resizeBar.addEventListener("mouseover", _resizeController.resizeMouseOverHandler);
      _resizeBar.addEventListener("mouseout", _resizeController.resizeMouseOutHandler);
      _resizeArea.addEventListener("mousedown", function(evt) {
        evt.preventDefault();
      });
    },
    resizeAreas: function() {
      _browserWidth = parseInt(window.innerWidth),
        _browserHeight = parseInt(window.innerHeight);

      if (_codeView.style.width == "") {
        _codeView.style.width = (_browserWidth / 2) + "px";
        _livePreview.style.width = (_browserWidth / 2) - _resizeBarWidth + "px";
      }
      else {
        _codeView.style.width = ((_codeViewWidthRatio / 100) * _browserWidth) + "px";
        _livePreview.style.width = (_browserWidth - parseFloat(_codeView.style.width) - _resizeBarWidth) + "px";
      }

      _resizeController.finishResizeAreas();
    },
    finishResizeAreas: function() {
      if (parseInt(_codeView.style.width) <= 200) {
        _codeView.style.width = "200px";
        _livePreview.style.width = (_browserWidth - 200 - _resizeBarWidth) + "px";
      }

      if (parseInt(_codeView.style.width) >= (_browserWidth - 200 - _resizeBarWidth)) {
        _codeView.style.width = (_browserWidth - 200 - _resizeBarWidth) + "px";
        _livePreview.style.width = "200px";
      }

      _settingsController.updateStorageSetting("codeViewWidth", parseFloat(_codeView.style.width));
      _settingsController.updateStorageSetting("livePreviewWidth", parseFloat(_livePreview.style.width));
      _resizeBar.style.left = parseFloat(_codeView.style.width) + "px";
      _editorDefaultSettings.codeViewWidth = parseInt(window.innerWidth) / 2;
      _editorDefaultSettings.livePreviewWidth = (parseInt(window.innerWidth) / 2) - _resizeBarWidth;
      _codeMirrorInstance.refresh();
    },
    resizeMouseMoveHandler: function(evt) {
      var mouseDistance = parseInt(evt.pageX) - _resizeBarStartPosition;
      _codeView.style.width = (_codeViewStartWidth + mouseDistance) + "px";
      _livePreview.style.width = (_browserWidth - _codeViewStartWidth - mouseDistance) - _resizeBarWidth + "px";
      _resizeController.finishResizeAreas();
    },
    resizeMouseDownHandler: function(evt) {
      _resizeBarMouseDown = true;
      _resizeBarStartPosition = parseInt(evt.pageX);
      _codeViewStartWidth = parseInt(_codeView.style.width);
      _resizeArea.style.display = "block";
      window.addEventListener("mousemove", _resizeController.resizeMouseMoveHandler);
      evt.preventDefault();
    },
    resizeMouseOverHandler: function(evt) {
      document.body.style.cursor = "ew-resize";
    },
    resizeMouseOutHandler: function(evt) {
      if (!_resizeBarMouseDown) document.body.style.cursor = "default";
    }
  }

  try {
    var localStorage = window.localStorage;
  }
  catch (e) {
    alert("Cookies must be enabled in order to use Yogurt Playground.\nThe editor will work but you will lose all data on reload.")

    var localStorage = {};
    localStorage.arrStore = [];

    localStorage.getItem = function(key) {
      return (localStorage.arrStore[key]) ? localStorage.arrStore[key] : null;
    }

    localStorage.setItem = function(key, object) {
      localStorage.arrStore[key] = object;
    }

    localStorage.removeItem = function(key) {
      for (var _key in localStorage.arrStore) {
        if (localStorage.arrStore[_key] == key) {
          localStorage.arrStore.splice(_key, 1);
        }
      }
    }
  }

  return {
    init: function() {
      CodeMirror.keyMap.editorSettings = {
        "Alt-0": function() { _menuController.changeEditorFontsize(0); },
        "Alt-I": function() { _menuController.changeEditorFontsize(1); },
        "Alt-O": function() { _menuController.changeEditorFontsize(-1); },
        "Alt-G": function() { _menuController.toggleGutter(); },
        "Alt-M": function() {
          if (_menuBar.style.display === "none" || _menuBar.style.display === "") {
            _menuController.showMenuBar();
          }
          else {
            _menuController.hideMenuBar();
          }
        },
        "Alt-T": function() {
          var brightThemeIsActive = _menuBtnStyleBright.getAttribute("class") === "menu-button-active";
          _menuController.setTheme(brightThemeIsActive ? _menuBtnStyleDark : _menuBtnStyleBright, brightThemeIsActive ? "dark" : "bright");
        },
        "Alt-W": function() { _menuController.toggleWordWrap(); },
        fallthrough: ["default"]
      };

      _codeMirrorInstance = CodeMirror(document.body, {
        mode: "text/html",
        indentWithTabs: true,
        lineWrapping: true,
        gutter: true,
        fixedGutter: true,
        lineNumbers: true,
        matchBrackets: true,
        indentUnit: 2,
        tabSize: 2,
        tabMode: "indent",
        theme: _editorDefaultSettings.theme,
        keyMap: "editorSettings",
        onHighlightComplete: function() {
          if (!_initialized) {
            _initialized = true;
            _codeView = _codeMirrorInstance.getWrapperElement();

            // if (localStorage.getItem("yogurtPlayground") !== null) {
            //   _codeMirrorInstance.setValue(localStorage.getItem("yogurtPlayground"));
            // }
            // else {
            _codeMirrorInstance.setValue(PrototypeTemplate);
            // }

            // if (localStorage.getItem("htmlivecodeSettings") !== null) {
            //   _editorStorageSettings = JSON.parse(localStorage.getItem("htmlivecodeSettings"));
            //   _settingsController.applySettings();
            // }
            // else {
            //   localStorage.setItem("htmlivecodeSettings", JSON.stringify(_editorDefaultSettings));
            //   _editorStorageSettings = _cloneObject(_editorDefaultSettings);
            // }

            _resizeController.resizeAreas();
            _updateViews();
            _resizeController.init();
          }
        },
        onChange: function() {
          _updateViews();
          localStorage.setItem("yogurtPlayground", _codeMirrorInstance.getValue());
        },
        onGutterClick: _foldFunc
      });

      _resizeBar.setAttribute("id", "resize-control");
      document.body.appendChild(_resizeBar);

      _resizeArea.setAttribute("id", "resize-area");
      document.body.appendChild(_resizeArea);

      _livePreview.setAttribute("id", "live-preview");
      document.body.appendChild(_livePreview);

      _fontsizeStylesheet.setAttribute("type", "text/css");
      _fontsizeStylesheet.appendChild(document.createTextNode(".CodeMirror{font-size:" + _editorDefaultSettings.fontSize + "em;}"));
      document.body.appendChild(_fontsizeStylesheet);

      // if (localStorage.getItem("yogurtPlayground") === null) {
      //   _introTooltip.style.left = ((_browserWidth / 2) - 235) + "px";
      //   _introTooltip.style.display = "inline";
      //   setTimeout(function() {
      //     _fadeOut(_introTooltip, 2000);
      //   }, 3000);
      // }
    },
    resizeAreas: _resizeController.resizeAreas
  }
};

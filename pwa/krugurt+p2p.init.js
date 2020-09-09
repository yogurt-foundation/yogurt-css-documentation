var cachep2p = new CacheP2P()

cachep2p.on('ready', function(){
  console.log('This page has been cached!')
})

cachep2p.on('cachep2p  message', console.log)
cachep2p.on('cachep2p  alert', console.log)
cachep2p.on('cachep2p success', console.log)


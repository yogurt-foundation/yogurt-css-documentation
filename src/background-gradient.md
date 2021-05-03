---
id: background-gradient
title: Background Gradient
description: Utilities for sets the background gradient color to an element with flexible control over color, color space and angles.
layout: default
---

> Background

# Background Gradient <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the background gradient color to an element with flexible control over color, color space and angles.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-gradient `{start-color}` `{start-space}` `{stop-color}` `{stop-space}` `{angle}` | linear-gradient(var(--bg-gradient-angle), var(--bg-gradient-start-color) var(--bg-gradient-primary), var(--bg-gradient-stop-color) var(--bg-gradient-secondary)) |

<style>
.supports {
  display: block
}
@supports (background-image: linear-gradient(red, yellow)) {
  .supports {
    display: none
  }
}
</style>

<y class="supports m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #222c35 | <y class="w-16 h-8 rounded bg-charcoal-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #1f2831 | <y class="w-16 h-8 rounded bg-charcoal-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #1c252c | <y class="w-16 h-8 rounded bg-charcoal-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #192127 | <y class="w-16 h-8 rounded bg-charcoal-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #161d22 | <y class="w-16 h-8 rounded bg-charcoal-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #13181d | <y class="w-16 h-8 rounded bg-charcoal-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #101419 | <y class="w-16 h-8 rounded bg-charcoal-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #0d1014 | <y class="w-16 h-8 rounded bg-charcoal-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-charcoal-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #0a0c0f | <y class="w-16 h-8 rounded bg-charcoal-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f7fafc | <y class="w-16 h-8 rounded bg-gray-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #edf2f7 | <y class="w-16 h-8 rounded bg-gray-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e2e8f0 | <y class="w-16 h-8 rounded bg-gray-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #cbd5e0 | <y class="w-16 h-8 rounded bg-gray-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #a0aec0 | <y class="w-16 h-8 rounded bg-gray-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #718096 | <y class="w-16 h-8 rounded bg-gray-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #4a5568 | <y class="w-16 h-8 rounded bg-gray-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2d3748 | <y class="w-16 h-8 rounded bg-gray-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-gray-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #1a202c | <y class="w-16 h-8 rounded bg-gray-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fff5f5 | <y class="w-16 h-8 rounded bg-red-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fed7d7 | <y class="w-16 h-8 rounded bg-red-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #feb2b2 | <y class="w-16 h-8 rounded bg-red-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fc8181 | <y class="w-16 h-8 rounded bg-red-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f56565 | <y class="w-16 h-8 rounded bg-red-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e53e3e | <y class="w-16 h-8 rounded bg-red-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c53030 | <y class="w-16 h-8 rounded bg-red-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #9b2c2c | <y class="w-16 h-8 rounded bg-red-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-red-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #742a2a | <y class="w-16 h-8 rounded bg-red-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fffaf0 | <y class="w-16 h-8 rounded bg-orange-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #feebc8 | <y class="w-16 h-8 rounded bg-orange-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fbd38d | <y class="w-16 h-8 rounded bg-orange-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f6ad55 | <y class="w-16 h-8 rounded bg-orange-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ed8936 | <y class="w-16 h-8 rounded bg-orange-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #dd6b20 | <y class="w-16 h-8 rounded bg-orange-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c05621 | <y class="w-16 h-8 rounded bg-orange-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #9c4221 | <y class="w-16 h-8 rounded bg-orange-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-orange-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #7b341e | <y class="w-16 h-8 rounded bg-orange-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f0fff4 | <y class="w-16 h-8 rounded bg-green-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c6f6d5 | <y class="w-16 h-8 rounded bg-green-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #9ae6b4 | <y class="w-16 h-8 rounded bg-green-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #68d391 | <y class="w-16 h-8 rounded bg-green-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #48bb78 | <y class="w-16 h-8 rounded bg-green-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #38a169 | <y class="w-16 h-8 rounded bg-green-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2f855a | <y class="w-16 h-8 rounded bg-green-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #276749 | <y class="w-16 h-8 rounded bg-green-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-green-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #22543d | <y class="w-16 h-8 rounded bg-green-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e6fffa | <y class="w-16 h-8 rounded bg-teal-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #b2f5ea | <y class="w-16 h-8 rounded bg-teal-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #81e6d9 | <y class="w-16 h-8 rounded bg-teal-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #4fd1c5 | <y class="w-16 h-8 rounded bg-teal-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #38b2ac | <y class="w-16 h-8 rounded bg-teal-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #319795 | <y class="w-16 h-8 rounded bg-teal-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2c7a7b | <y class="w-16 h-8 rounded bg-teal-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #285e61 | <y class="w-16 h-8 rounded bg-teal-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-teal-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #234e52 | <y class="w-16 h-8 rounded bg-teal-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ebf8ff | <y class="w-16 h-8 rounded bg-blue-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #bee3f8 | <y class="w-16 h-8 rounded bg-blue-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #90cdf4 | <y class="w-16 h-8 rounded bg-blue-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #63b3ed | <y class="w-16 h-8 rounded bg-blue-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #4299e1 | <y class="w-16 h-8 rounded bg-blue-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #3182ce | <y class="w-16 h-8 rounded bg-blue-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2b6cb0 | <y class="w-16 h-8 rounded bg-blue-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2c5282 | <y class="w-16 h-8 rounded bg-blue-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-blue-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #2a4365 | <y class="w-16 h-8 rounded bg-blue-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ebf4ff | <y class="w-16 h-8 rounded bg-indigo-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c3dafe | <y class="w-16 h-8 rounded bg-indigo-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #a3bffa | <y class="w-16 h-8 rounded bg-indigo-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #7f9cf5 | <y class="w-16 h-8 rounded bg-indigo-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #667eea | <y class="w-16 h-8 rounded bg-indigo-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #5a67d8 | <y class="w-16 h-8 rounded bg-indigo-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #4c51bf | <y class="w-16 h-8 rounded bg-indigo-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #434190 | <y class="w-16 h-8 rounded bg-indigo-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-indigo-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #3c366b | <y class="w-16 h-8 rounded bg-indigo-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #faf5ff | <y class="w-16 h-8 rounded bg-purple-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e9d8fd | <y class="w-16 h-8 rounded bg-purple-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #d6bcfa | <y class="w-16 h-8 rounded bg-purple-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #b794f4 | <y class="w-16 h-8 rounded bg-purple-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #9f7aea | <y class="w-16 h-8 rounded bg-purple-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #805ad5 | <y class="w-16 h-8 rounded bg-purple-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #6b46c1 | <y class="w-16 h-8 rounded bg-purple-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #553c9a | <y class="w-16 h-8 rounded bg-purple-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-purple-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #44337a | <y class="w-16 h-8 rounded bg-purple-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fff5f7 | <y class="w-16 h-8 rounded bg-pink-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fed7e2 | <y class="w-16 h-8 rounded bg-pink-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fbb6ce | <y class="w-16 h-8 rounded bg-pink-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f687b3 | <y class="w-16 h-8 rounded bg-pink-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ed64a6 | <y class="w-16 h-8 rounded bg-pink-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #d53f8c | <y class="w-16 h-8 rounded bg-pink-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #b83280 | <y class="w-16 h-8 rounded bg-pink-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #97266d | <y class="w-16 h-8 rounded bg-pink-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-pink-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #702459 | <y class="w-16 h-8 rounded bg-pink-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f9f7f4 | <y class="w-16 h-8 rounded bg-khaki-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #f0ebe4 | <y class="w-16 h-8 rounded bg-khaki-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e7dfd3 | <y class="w-16 h-8 rounded bg-khaki-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #d5c8b2 | <y class="w-16 h-8 rounded bg-khaki-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c3b091 | <y class="w-16 h-8 rounded bg-khaki-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #b09e83 | <y class="w-16 h-8 rounded bg-khaki-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #756a57 | <y class="w-16 h-8 rounded bg-khaki-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #584f41 | <y class="w-16 h-8 rounded bg-khaki-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-khaki-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #3b352c | <y class="w-16 h-8 rounded bg-khaki-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fff9e6 | <y class="w-16 h-8 rounded bg-amber-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #fff0bf | <y class="w-16 h-8 rounded bg-amber-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ffe799 | <y class="w-16 h-8 rounded bg-amber-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ffd54d | <y class="w-16 h-8 rounded bg-amber-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #ffc300 | <y class="w-16 h-8 rounded bg-amber-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e6b000 | <y class="w-16 h-8 rounded bg-amber-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #997500 | <y class="w-16 h-8 rounded bg-amber-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #735800 | <y class="w-16 h-8 rounded bg-amber-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-amber-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #4d3b00 | <y class="w-16 h-8 rounded bg-amber-900 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-100 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #e9e9e9 | <y class="w-16 h-8 rounded bg-nero-100 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-200 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #c7c8c9 | <y class="w-16 h-8 rounded bg-nero-200 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-300 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #a6a7a8 | <y class="w-16 h-8 rounded bg-nero-300 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-400 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #636466 | <y class="w-16 h-8 rounded bg-nero-400 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-500 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #202225 | <y class="w-16 h-8 rounded bg-nero-500 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-600 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #1d1f21 | <y class="w-16 h-8 rounded bg-nero-600 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-700 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #131416 | <y class="w-16 h-8 rounded bg-nero-700 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-800 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #0e0f11 | <y class="w-16 h-8 rounded bg-nero-800 "></y> |
| <span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-nero-900 | --bg-gradient-<span class="text-gray-600">start</span>/<span class="text-gray-600">stop</span>-color: #0a0a0b | <y class="w-16 h-8 rounded bg-nero-900 "></y> |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| start-10 | --bg-gradient-primary: 10% |
| start-20 | --bg-gradient-primary: 20% |
| start-30 | --bg-gradient-primary: 30% |
| start-40 | --bg-gradient-primary: 40% |
| start-50 | --bg-gradient-primary: 50% |
| start-60 | --bg-gradient-primary: 60% |
| start-70 | --bg-gradient-primary: 70% |
| start-80 | --bg-gradient-primary: 80% |
| start-90 | --bg-gradient-primary: 90% |
| stop-10 | --bg-gradient-secondary: 10% |
| stop-20 | --bg-gradient-secondary: 20% |
| stop-30 | --bg-gradient-secondary: 30% |
| stop-40 | --bg-gradient-secondary: 40% |
| stop-50 | --bg-gradient-secondary: 50% |
| stop-60 | --bg-gradient-secondary: 60% |
| stop-70 | --bg-gradient-secondary: 70% |
| stop-80 | --bg-gradient-secondary: 80% |
| stop-90 | --bg-gradient-secondary: 90% |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| angle-0 | --bg-gradient-angle: 0deg |
| angle-45 | --bg-gradient-angle: 45deg |
| angle-90 | --bg-gradient-angle: 90deg |
| angle-180 | --bg-gradient-angle: 180deg |
| -angle-45 | --bg-gradient-angle: -45deg |
| -angle-90 | --bg-gradient-angle: -90deg |
| -angle-180 | --bg-gradient-angle: -180deg |

---

## Usage

Set basic background gradient to an element, start color is `start-{color}` with 10% space `start-{value}`, stop color is `stop-{color}` with 90% space `stop-{value}`, last rotate the gradient in 45 degree `angel-45`.

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 bg-gradient start-amber-400 start-10 stop-red-400 stop-90 angle-45"></y>
</y>

```html
<!-- Example -->
<y class="bg-gradient start-amber-400 start-10 stop-red-400 stop-90 angle-45">
  ...
</y>
```

Set background gradient to `<body>` tag.

```html
<!-- Example -->
<body class="bg-gradient start-amber-400 start-10 stop-red-400 stop-90 angle-45">
  ...
</body>
```

<span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span> Set background gradient clipping as text color by adding `clip-text`.

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 bg-gradient start-amber-400 start-10 stop-red-400 stop-90 angle-45 clip-text inline-block text-8xl font-extrabold">
    TEXT
  </y>
</y>

```html
<!-- Example -->
<y class="bg-gradient start-amber-400 start-10 stop-red-400 stop-90 angle-45 clip-text ... inline-block">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// @file: `src/plugins.scss`

// Add Values
@include yogurt(
  $class: 'bg-gradient.angle',
  $property: --bg-gradient-angle,
  $modifier: (
    270: 270deg
    //...
  )
);

@include yogurt(
  $class: 'bg-gradient.start',
  $property: --bg-gradient-primary,
  $modifier: (
    15: 15%,
    25: 25%
    //...
  )
);

@include yogurt(
  $class: 'bg-gradient.stop',
  $property: --bg-gradient-secondary,
  $modifier: (
    15: 15%,
    25: 25%
    //...
  )
);

@include yogurt(
  $class: 'bg-gradient.start-gray',
  $property: --bg-gradient-start-color,
  $modifier: (
    100: #262626,
    200: #252525
    //...
  )
);

@include yogurt(
  $class: 'bg-gradient.stop-gray',
  $property: --bg-gradient-stop-color,
  $modifier: (
    100: #262626,
    200: #252525
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'bg-gradient.angle',
  $property: --bg-gradient-angle,
  $modifier: (
    270: 270deg
    //...
  ),
  $variant: (
    'hover',
    'focus-within',
    'focus-visible'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundgradient in variants.backgroundgradient %}{% for item in backgroundgradient.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).



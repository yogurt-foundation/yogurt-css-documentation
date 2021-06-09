---
id: scrollbar
title: Scroll Bar
description: Utilities for sets scrollbar styling such as thumb size, track color, thumb color, thumb radius and thumb hover color.
topic: Interactivity
layout: default
---

> Interactivity

# Scroll Bar <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets scrollbar styling such as thumb size, track color, thumb color, thumb radius and thumb hover color.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scrollbar `{bar-size}` `{track-color}` `{thumb-color}` `{thumb-radius}` `{thumb-hover-color}` | ::-webkit-scrollbar { width: var(--scrollbar-size); height: var(--scrollbar-size) } <br><br> ::-webkit-scrollbar-track { background-color: var(--scrollbar-track-color) } <br><br> ::-webkit-scrollbar-thumb { background-color: var(--scrollbar-thumb-bgcolor); border-radius: var(--scrollbar-radius); border: var(--scrollbar-width) solid var(--scrollbar-thumb-color); background-clip: content-box } <br><br> ::-webkit-scrollbar-thumb:hover { background-color: var(--scrollbar-hover-bgcolor) } &nbsp; |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bar-xs | --scrollbar-size: 4px |
| bar-sm | --scrollbar-size: 8px |
| bar-md | --scrollbar-size: 12px |
| bar-lg | --scrollbar-size: 16px |
| bar-xl | --scrollbar-size: 20px |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| thumb-rad-sm | --scrollbar-radius: 0.125rem |
| thumb-rad-md | --scrollbar-radius: 0.375rem |
| thumb-rad-lg | --scrollbar-radius: 0.5rem |
| thumb-rad-xl | --scrollbar-radius: 9999px |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |  |
|:--|:--|:-:|
| track-charcoal-100 | --scrollbar-track-color: #222c35 | <y class="w-16 h-8 rounded bg-charcoal-100 "></y> |
| track-charcoal-200 | --scrollbar-track-color: #1f2831 | <y class="w-16 h-8 rounded bg-charcoal-200 "></y> |
| track-charcoal-300 | --scrollbar-track-color: #1c252c | <y class="w-16 h-8 rounded bg-charcoal-300 "></y> |
| track-charcoal-400 | --scrollbar-track-color: #192127 | <y class="w-16 h-8 rounded bg-charcoal-400 "></y> |
| track-charcoal-500 | --scrollbar-track-color: #161d22 | <y class="w-16 h-8 rounded bg-charcoal-500 "></y> |
| track-charcoal-600 | --scrollbar-track-color: #13181d | <y class="w-16 h-8 rounded bg-charcoal-600 "></y> |
| track-charcoal-700 | --scrollbar-track-color: #101419 | <y class="w-16 h-8 rounded bg-charcoal-700 "></y> |
| track-charcoal-800 | --scrollbar-track-color: #0d1014 | <y class="w-16 h-8 rounded bg-charcoal-800 "></y> |
| track-charcoal-900 | --scrollbar-track-color: #0a0c0f | <y class="w-16 h-8 rounded bg-charcoal-900 "></y> |
| track-gray-100 | --scrollbar-track-color: #f7fafc | <y class="w-16 h-8 rounded bg-gray-100 "></y> |
| track-gray-200 | --scrollbar-track-color: #edf2f7 | <y class="w-16 h-8 rounded bg-gray-200 "></y> |
| track-gray-300 | --scrollbar-track-color: #e2e8f0 | <y class="w-16 h-8 rounded bg-gray-300 "></y> |
| track-gray-400 | --scrollbar-track-color: #cbd5e0 | <y class="w-16 h-8 rounded bg-gray-400 "></y> |
| track-gray-500 | --scrollbar-track-color: #a0aec0 | <y class="w-16 h-8 rounded bg-gray-500 "></y> |
| track-gray-600 | --scrollbar-track-color: #718096 | <y class="w-16 h-8 rounded bg-gray-600 "></y> |
| track-gray-700 | --scrollbar-track-color: #4a5568 | <y class="w-16 h-8 rounded bg-gray-700 "></y> |
| track-gray-800 | --scrollbar-track-color: #2d3748 | <y class="w-16 h-8 rounded bg-gray-800 "></y> |
| track-gray-900 | --scrollbar-track-color: #1a202c | <y class="w-16 h-8 rounded bg-gray-900 "></y> |
| track-red-100 | --scrollbar-track-color: #fff5f5 | <y class="w-16 h-8 rounded bg-red-100 "></y> |
| track-red-200 | --scrollbar-track-color: #fed7d7 | <y class="w-16 h-8 rounded bg-red-200 "></y> |
| track-red-300 | --scrollbar-track-color: #feb2b2 | <y class="w-16 h-8 rounded bg-red-300 "></y> |
| track-red-400 | --scrollbar-track-color: #fc8181 | <y class="w-16 h-8 rounded bg-red-400 "></y> |
| track-red-500 | --scrollbar-track-color: #f56565 | <y class="w-16 h-8 rounded bg-red-500 "></y> |
| track-red-600 | --scrollbar-track-color: #e53e3e | <y class="w-16 h-8 rounded bg-red-600 "></y> |
| track-red-700 | --scrollbar-track-color: #c53030 | <y class="w-16 h-8 rounded bg-red-700 "></y> |
| track-red-800 | --scrollbar-track-color: #9b2c2c | <y class="w-16 h-8 rounded bg-red-800 "></y> |
| track-red-900 | --scrollbar-track-color: #742a2a | <y class="w-16 h-8 rounded bg-red-900 "></y> |
| track-orange-100 | --scrollbar-track-color: #fffaf0 | <y class="w-16 h-8 rounded bg-orange-100 "></y> |
| track-orange-200 | --scrollbar-track-color: #feebc8 | <y class="w-16 h-8 rounded bg-orange-200 "></y> |
| track-orange-300 | --scrollbar-track-color: #fbd38d | <y class="w-16 h-8 rounded bg-orange-300 "></y> |
| track-orange-400 | --scrollbar-track-color: #f6ad55 | <y class="w-16 h-8 rounded bg-orange-400 "></y> |
| track-orange-500 | --scrollbar-track-color: #ed8936 | <y class="w-16 h-8 rounded bg-orange-500 "></y> |
| track-orange-600 | --scrollbar-track-color: #dd6b20 | <y class="w-16 h-8 rounded bg-orange-600 "></y> |
| track-orange-700 | --scrollbar-track-color: #c05621 | <y class="w-16 h-8 rounded bg-orange-700 "></y> |
| track-orange-800 | --scrollbar-track-color: #9c4221 | <y class="w-16 h-8 rounded bg-orange-800 "></y> |
| track-orange-900 | --scrollbar-track-color: #7b341e | <y class="w-16 h-8 rounded bg-orange-900 "></y> |
| track-green-100 | --scrollbar-track-color: #f0fff4 | <y class="w-16 h-8 rounded bg-green-100 "></y> |
| track-green-200 | --scrollbar-track-color: #c6f6d5 | <y class="w-16 h-8 rounded bg-green-200 "></y> |
| track-green-300 | --scrollbar-track-color: #9ae6b4 | <y class="w-16 h-8 rounded bg-green-300 "></y> |
| track-green-400 | --scrollbar-track-color: #68d391 | <y class="w-16 h-8 rounded bg-green-400 "></y> |
| track-green-500 | --scrollbar-track-color: #48bb78 | <y class="w-16 h-8 rounded bg-green-500 "></y> |
| track-green-600 | --scrollbar-track-color: #38a169 | <y class="w-16 h-8 rounded bg-green-600 "></y> |
| track-green-700 | --scrollbar-track-color: #2f855a | <y class="w-16 h-8 rounded bg-green-700 "></y> |
| track-green-800 | --scrollbar-track-color: #276749 | <y class="w-16 h-8 rounded bg-green-800 "></y> |
| track-green-900 | --scrollbar-track-color: #22543d | <y class="w-16 h-8 rounded bg-green-900 "></y> |
| track-teal-100 | --scrollbar-track-color: #e6fffa | <y class="w-16 h-8 rounded bg-teal-100 "></y> |
| track-teal-200 | --scrollbar-track-color: #b2f5ea | <y class="w-16 h-8 rounded bg-teal-200 "></y> |
| track-teal-300 | --scrollbar-track-color: #81e6d9 | <y class="w-16 h-8 rounded bg-teal-300 "></y> |
| track-teal-400 | --scrollbar-track-color: #4fd1c5 | <y class="w-16 h-8 rounded bg-teal-400 "></y> |
| track-teal-500 | --scrollbar-track-color: #38b2ac | <y class="w-16 h-8 rounded bg-teal-500 "></y> |
| track-teal-600 | --scrollbar-track-color: #319795 | <y class="w-16 h-8 rounded bg-teal-600 "></y> |
| track-teal-700 | --scrollbar-track-color: #2c7a7b | <y class="w-16 h-8 rounded bg-teal-700 "></y> |
| track-teal-800 | --scrollbar-track-color: #285e61 | <y class="w-16 h-8 rounded bg-teal-800 "></y> |
| track-teal-900 | --scrollbar-track-color: #234e52 | <y class="w-16 h-8 rounded bg-teal-900 "></y> |
| track-blue-100 | --scrollbar-track-color: #ebf8ff | <y class="w-16 h-8 rounded bg-blue-100 "></y> |
| track-blue-200 | --scrollbar-track-color: #bee3f8 | <y class="w-16 h-8 rounded bg-blue-200 "></y> |
| track-blue-300 | --scrollbar-track-color: #90cdf4 | <y class="w-16 h-8 rounded bg-blue-300 "></y> |
| track-blue-400 | --scrollbar-track-color: #63b3ed | <y class="w-16 h-8 rounded bg-blue-400 "></y> |
| track-blue-500 | --scrollbar-track-color: #4299e1 | <y class="w-16 h-8 rounded bg-blue-500 "></y> |
| track-blue-600 | --scrollbar-track-color: #3182ce | <y class="w-16 h-8 rounded bg-blue-600 "></y> |
| track-blue-700 | --scrollbar-track-color: #2b6cb0 | <y class="w-16 h-8 rounded bg-blue-700 "></y> |
| track-blue-800 | --scrollbar-track-color: #2c5282 | <y class="w-16 h-8 rounded bg-blue-800 "></y> |
| track-blue-900 | --scrollbar-track-color: #2a4365 | <y class="w-16 h-8 rounded bg-blue-900 "></y> |
| track-indigo-100 | --scrollbar-track-color: #ebf4ff | <y class="w-16 h-8 rounded bg-indigo-100 "></y> |
| track-indigo-200 | --scrollbar-track-color: #c3dafe | <y class="w-16 h-8 rounded bg-indigo-200 "></y> |
| track-indigo-300 | --scrollbar-track-color: #a3bffa | <y class="w-16 h-8 rounded bg-indigo-300 "></y> |
| track-indigo-400 | --scrollbar-track-color: #7f9cf5 | <y class="w-16 h-8 rounded bg-indigo-400 "></y> |
| track-indigo-500 | --scrollbar-track-color: #667eea | <y class="w-16 h-8 rounded bg-indigo-500 "></y> |
| track-indigo-600 | --scrollbar-track-color: #5a67d8 | <y class="w-16 h-8 rounded bg-indigo-600 "></y> |
| track-indigo-700 | --scrollbar-track-color: #4c51bf | <y class="w-16 h-8 rounded bg-indigo-700 "></y> |
| track-indigo-800 | --scrollbar-track-color: #434190 | <y class="w-16 h-8 rounded bg-indigo-800 "></y> |
| track-indigo-900 | --scrollbar-track-color: #3c366b | <y class="w-16 h-8 rounded bg-indigo-900 "></y> |
| track-purple-100 | --scrollbar-track-color: #faf5ff | <y class="w-16 h-8 rounded bg-purple-100 "></y> |
| track-purple-200 | --scrollbar-track-color: #e9d8fd | <y class="w-16 h-8 rounded bg-purple-200 "></y> |
| track-purple-300 | --scrollbar-track-color: #d6bcfa | <y class="w-16 h-8 rounded bg-purple-300 "></y> |
| track-purple-400 | --scrollbar-track-color: #b794f4 | <y class="w-16 h-8 rounded bg-purple-400 "></y> |
| track-purple-500 | --scrollbar-track-color: #9f7aea | <y class="w-16 h-8 rounded bg-purple-500 "></y> |
| track-purple-600 | --scrollbar-track-color: #805ad5 | <y class="w-16 h-8 rounded bg-purple-600 "></y> |
| track-purple-700 | --scrollbar-track-color: #6b46c1 | <y class="w-16 h-8 rounded bg-purple-700 "></y> |
| track-purple-800 | --scrollbar-track-color: #553c9a | <y class="w-16 h-8 rounded bg-purple-800 "></y> |
| track-purple-900 | --scrollbar-track-color: #44337a | <y class="w-16 h-8 rounded bg-purple-900 "></y> |
| track-pink-100 | --scrollbar-track-color: #fff5f7 | <y class="w-16 h-8 rounded bg-pink-100 "></y> |
| track-pink-200 | --scrollbar-track-color: #fed7e2 | <y class="w-16 h-8 rounded bg-pink-200 "></y> |
| track-pink-300 | --scrollbar-track-color: #fbb6ce | <y class="w-16 h-8 rounded bg-pink-300 "></y> |
| track-pink-400 | --scrollbar-track-color: #f687b3 | <y class="w-16 h-8 rounded bg-pink-400 "></y> |
| track-pink-500 | --scrollbar-track-color: #ed64a6 | <y class="w-16 h-8 rounded bg-pink-500 "></y> |
| track-pink-600 | --scrollbar-track-color: #d53f8c | <y class="w-16 h-8 rounded bg-pink-600 "></y> |
| track-pink-700 | --scrollbar-track-color: #b83280 | <y class="w-16 h-8 rounded bg-pink-700 "></y> |
| track-pink-800 | --scrollbar-track-color: #97266d | <y class="w-16 h-8 rounded bg-pink-800 "></y> |
| track-pink-900 | --scrollbar-track-color: #702459 | <y class="w-16 h-8 rounded bg-pink-900 "></y> |
| track-khaki-100 | --scrollbar-track-color: #f9f7f4 | <y class="w-16 h-8 rounded bg-khaki-100 "></y> |
| track-khaki-200 | --scrollbar-track-color: #f0ebe4 | <y class="w-16 h-8 rounded bg-khaki-200 "></y> |
| track-khaki-300 | --scrollbar-track-color: #e7dfd3 | <y class="w-16 h-8 rounded bg-khaki-300 "></y> |
| track-khaki-400 | --scrollbar-track-color: #d5c8b2 | <y class="w-16 h-8 rounded bg-khaki-400 "></y> |
| track-khaki-500 | --scrollbar-track-color: #c3b091 | <y class="w-16 h-8 rounded bg-khaki-500 "></y> |
| track-khaki-600 | --scrollbar-track-color: #b09e83 | <y class="w-16 h-8 rounded bg-khaki-600 "></y> |
| track-khaki-700 | --scrollbar-track-color: #756a57 | <y class="w-16 h-8 rounded bg-khaki-700 "></y> |
| track-khaki-800 | --scrollbar-track-color: #584f41 | <y class="w-16 h-8 rounded bg-khaki-800 "></y> |
| track-khaki-900 | --scrollbar-track-color: #3b352c | <y class="w-16 h-8 rounded bg-khaki-900 "></y> |
| track-amber-100 | --scrollbar-track-color: #fff9e6 | <y class="w-16 h-8 rounded bg-amber-100 "></y> |
| track-amber-200 | --scrollbar-track-color: #fff0bf | <y class="w-16 h-8 rounded bg-amber-200 "></y> |
| track-amber-300 | --scrollbar-track-color: #ffe799 | <y class="w-16 h-8 rounded bg-amber-300 "></y> |
| track-amber-400 | --scrollbar-track-color: #ffd54d | <y class="w-16 h-8 rounded bg-amber-400 "></y> |
| track-amber-500 | --scrollbar-track-color: #ffc300 | <y class="w-16 h-8 rounded bg-amber-500 "></y> |
| track-amber-600 | --scrollbar-track-color: #e6b000 | <y class="w-16 h-8 rounded bg-amber-600 "></y> |
| track-amber-700 | --scrollbar-track-color: #997500 | <y class="w-16 h-8 rounded bg-amber-700 "></y> |
| track-amber-800 | --scrollbar-track-color: #735800 | <y class="w-16 h-8 rounded bg-amber-800 "></y> |
| track-amber-900 | --scrollbar-track-color: #4d3b00 | <y class="w-16 h-8 rounded bg-amber-900 "></y> |
| track-nero-100 | --scrollbar-track-color: #e9e9e9 | <y class="w-16 h-8 rounded bg-nero-100 "></y> |
| track-nero-200 | --scrollbar-track-color: #c7c8c9 | <y class="w-16 h-8 rounded bg-nero-200 "></y> |
| track-nero-300 | --scrollbar-track-color: #a6a7a8 | <y class="w-16 h-8 rounded bg-nero-300 "></y> |
| track-nero-400 | --scrollbar-track-color: #636466 | <y class="w-16 h-8 rounded bg-nero-400 "></y> |
| track-nero-500 | --scrollbar-track-color: #202225 | <y class="w-16 h-8 rounded bg-nero-500 "></y> |
| track-nero-600 | --scrollbar-track-color: #1d1f21 | <y class="w-16 h-8 rounded bg-nero-600 "></y> |
| track-nero-700 | --scrollbar-track-color: #131416 | <y class="w-16 h-8 rounded bg-nero-700 "></y> |
| track-nero-800 | --scrollbar-track-color: #0e0f11 | <y class="w-16 h-8 rounded bg-nero-800 "></y> |
| track-nero-900 | --scrollbar-track-color: #0a0a0b | <y class="w-16 h-8 rounded bg-nero-900 "></y> |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |  |
|:--|:--|:-:|
| thumb-charcoal-100 | --scrollbar-thumb-color: #222c35 | <y class="w-16 h-8 rounded bg-charcoal-100 "></y> |
| thumb-charcoal-200 | --scrollbar-thumb-color: #1f2831 | <y class="w-16 h-8 rounded bg-charcoal-200 "></y> |
| thumb-charcoal-300 | --scrollbar-thumb-color: #1c252c | <y class="w-16 h-8 rounded bg-charcoal-300 "></y> |
| thumb-charcoal-400 | --scrollbar-thumb-color: #192127 | <y class="w-16 h-8 rounded bg-charcoal-400 "></y> |
| thumb-charcoal-500 | --scrollbar-thumb-color: #161d22 | <y class="w-16 h-8 rounded bg-charcoal-500 "></y> |
| thumb-charcoal-600 | --scrollbar-thumb-color: #13181d | <y class="w-16 h-8 rounded bg-charcoal-600 "></y> |
| thumb-charcoal-700 | --scrollbar-thumb-color: #101419 | <y class="w-16 h-8 rounded bg-charcoal-700 "></y> |
| thumb-charcoal-800 | --scrollbar-thumb-color: #0d1014 | <y class="w-16 h-8 rounded bg-charcoal-800 "></y> |
| thumb-charcoal-900 | --scrollbar-thumb-color: #0a0c0f | <y class="w-16 h-8 rounded bg-charcoal-900 "></y> |
| thumb-gray-100 | --scrollbar-thumb-color: #f7fafc | <y class="w-16 h-8 rounded bg-gray-100 "></y> |
| thumb-gray-200 | --scrollbar-thumb-color: #edf2f7 | <y class="w-16 h-8 rounded bg-gray-200 "></y> |
| thumb-gray-300 | --scrollbar-thumb-color: #e2e8f0 | <y class="w-16 h-8 rounded bg-gray-300 "></y> |
| thumb-gray-400 | --scrollbar-thumb-color: #cbd5e0 | <y class="w-16 h-8 rounded bg-gray-400 "></y> |
| thumb-gray-500 | --scrollbar-thumb-color: #a0aec0 | <y class="w-16 h-8 rounded bg-gray-500 "></y> |
| thumb-gray-600 | --scrollbar-thumb-color: #718096 | <y class="w-16 h-8 rounded bg-gray-600 "></y> |
| thumb-gray-700 | --scrollbar-thumb-color: #4a5568 | <y class="w-16 h-8 rounded bg-gray-700 "></y> |
| thumb-gray-800 | --scrollbar-thumb-color: #2d3748 | <y class="w-16 h-8 rounded bg-gray-800 "></y> |
| thumb-gray-900 | --scrollbar-thumb-color: #1a202c | <y class="w-16 h-8 rounded bg-gray-900 "></y> |
| thumb-red-100 | --scrollbar-thumb-color: #fff5f5 | <y class="w-16 h-8 rounded bg-red-100 "></y> |
| thumb-red-200 | --scrollbar-thumb-color: #fed7d7 | <y class="w-16 h-8 rounded bg-red-200 "></y> |
| thumb-red-300 | --scrollbar-thumb-color: #feb2b2 | <y class="w-16 h-8 rounded bg-red-300 "></y> |
| thumb-red-400 | --scrollbar-thumb-color: #fc8181 | <y class="w-16 h-8 rounded bg-red-400 "></y> |
| thumb-red-500 | --scrollbar-thumb-color: #f56565 | <y class="w-16 h-8 rounded bg-red-500 "></y> |
| thumb-red-600 | --scrollbar-thumb-color: #e53e3e | <y class="w-16 h-8 rounded bg-red-600 "></y> |
| thumb-red-700 | --scrollbar-thumb-color: #c53030 | <y class="w-16 h-8 rounded bg-red-700 "></y> |
| thumb-red-800 | --scrollbar-thumb-color: #9b2c2c | <y class="w-16 h-8 rounded bg-red-800 "></y> |
| thumb-red-900 | --scrollbar-thumb-color: #742a2a | <y class="w-16 h-8 rounded bg-red-900 "></y> |
| thumb-orange-100 | --scrollbar-thumb-color: #fffaf0 | <y class="w-16 h-8 rounded bg-orange-100 "></y> |
| thumb-orange-200 | --scrollbar-thumb-color: #feebc8 | <y class="w-16 h-8 rounded bg-orange-200 "></y> |
| thumb-orange-300 | --scrollbar-thumb-color: #fbd38d | <y class="w-16 h-8 rounded bg-orange-300 "></y> |
| thumb-orange-400 | --scrollbar-thumb-color: #f6ad55 | <y class="w-16 h-8 rounded bg-orange-400 "></y> |
| thumb-orange-500 | --scrollbar-thumb-color: #ed8936 | <y class="w-16 h-8 rounded bg-orange-500 "></y> |
| thumb-orange-600 | --scrollbar-thumb-color: #dd6b20 | <y class="w-16 h-8 rounded bg-orange-600 "></y> |
| thumb-orange-700 | --scrollbar-thumb-color: #c05621 | <y class="w-16 h-8 rounded bg-orange-700 "></y> |
| thumb-orange-800 | --scrollbar-thumb-color: #9c4221 | <y class="w-16 h-8 rounded bg-orange-800 "></y> |
| thumb-orange-900 | --scrollbar-thumb-color: #7b341e | <y class="w-16 h-8 rounded bg-orange-900 "></y> |
| thumb-green-100 | --scrollbar-thumb-color: #f0fff4 | <y class="w-16 h-8 rounded bg-green-100 "></y> |
| thumb-green-200 | --scrollbar-thumb-color: #c6f6d5 | <y class="w-16 h-8 rounded bg-green-200 "></y> |
| thumb-green-300 | --scrollbar-thumb-color: #9ae6b4 | <y class="w-16 h-8 rounded bg-green-300 "></y> |
| thumb-green-400 | --scrollbar-thumb-color: #68d391 | <y class="w-16 h-8 rounded bg-green-400 "></y> |
| thumb-green-500 | --scrollbar-thumb-color: #48bb78 | <y class="w-16 h-8 rounded bg-green-500 "></y> |
| thumb-green-600 | --scrollbar-thumb-color: #38a169 | <y class="w-16 h-8 rounded bg-green-600 "></y> |
| thumb-green-700 | --scrollbar-thumb-color: #2f855a | <y class="w-16 h-8 rounded bg-green-700 "></y> |
| thumb-green-800 | --scrollbar-thumb-color: #276749 | <y class="w-16 h-8 rounded bg-green-800 "></y> |
| thumb-green-900 | --scrollbar-thumb-color: #22543d | <y class="w-16 h-8 rounded bg-green-900 "></y> |
| thumb-teal-100 | --scrollbar-thumb-color: #e6fffa | <y class="w-16 h-8 rounded bg-teal-100 "></y> |
| thumb-teal-200 | --scrollbar-thumb-color: #b2f5ea | <y class="w-16 h-8 rounded bg-teal-200 "></y> |
| thumb-teal-300 | --scrollbar-thumb-color: #81e6d9 | <y class="w-16 h-8 rounded bg-teal-300 "></y> |
| thumb-teal-400 | --scrollbar-thumb-color: #4fd1c5 | <y class="w-16 h-8 rounded bg-teal-400 "></y> |
| thumb-teal-500 | --scrollbar-thumb-color: #38b2ac | <y class="w-16 h-8 rounded bg-teal-500 "></y> |
| thumb-teal-600 | --scrollbar-thumb-color: #319795 | <y class="w-16 h-8 rounded bg-teal-600 "></y> |
| thumb-teal-700 | --scrollbar-thumb-color: #2c7a7b | <y class="w-16 h-8 rounded bg-teal-700 "></y> |
| thumb-teal-800 | --scrollbar-thumb-color: #285e61 | <y class="w-16 h-8 rounded bg-teal-800 "></y> |
| thumb-teal-900 | --scrollbar-thumb-color: #234e52 | <y class="w-16 h-8 rounded bg-teal-900 "></y> |
| thumb-blue-100 | --scrollbar-thumb-color: #ebf8ff | <y class="w-16 h-8 rounded bg-blue-100 "></y> |
| thumb-blue-200 | --scrollbar-thumb-color: #bee3f8 | <y class="w-16 h-8 rounded bg-blue-200 "></y> |
| thumb-blue-300 | --scrollbar-thumb-color: #90cdf4 | <y class="w-16 h-8 rounded bg-blue-300 "></y> |
| thumb-blue-400 | --scrollbar-thumb-color: #63b3ed | <y class="w-16 h-8 rounded bg-blue-400 "></y> |
| thumb-blue-500 | --scrollbar-thumb-color: #4299e1 | <y class="w-16 h-8 rounded bg-blue-500 "></y> |
| thumb-blue-600 | --scrollbar-thumb-color: #3182ce | <y class="w-16 h-8 rounded bg-blue-600 "></y> |
| thumb-blue-700 | --scrollbar-thumb-color: #2b6cb0 | <y class="w-16 h-8 rounded bg-blue-700 "></y> |
| thumb-blue-800 | --scrollbar-thumb-color: #2c5282 | <y class="w-16 h-8 rounded bg-blue-800 "></y> |
| thumb-blue-900 | --scrollbar-thumb-color: #2a4365 | <y class="w-16 h-8 rounded bg-blue-900 "></y> |
| thumb-indigo-100 | --scrollbar-thumb-color: #ebf4ff | <y class="w-16 h-8 rounded bg-indigo-100 "></y> |
| thumb-indigo-200 | --scrollbar-thumb-color: #c3dafe | <y class="w-16 h-8 rounded bg-indigo-200 "></y> |
| thumb-indigo-300 | --scrollbar-thumb-color: #a3bffa | <y class="w-16 h-8 rounded bg-indigo-300 "></y> |
| thumb-indigo-400 | --scrollbar-thumb-color: #7f9cf5 | <y class="w-16 h-8 rounded bg-indigo-400 "></y> |
| thumb-indigo-500 | --scrollbar-thumb-color: #667eea | <y class="w-16 h-8 rounded bg-indigo-500 "></y> |
| thumb-indigo-600 | --scrollbar-thumb-color: #5a67d8 | <y class="w-16 h-8 rounded bg-indigo-600 "></y> |
| thumb-indigo-700 | --scrollbar-thumb-color: #4c51bf | <y class="w-16 h-8 rounded bg-indigo-700 "></y> |
| thumb-indigo-800 | --scrollbar-thumb-color: #434190 | <y class="w-16 h-8 rounded bg-indigo-800 "></y> |
| thumb-indigo-900 | --scrollbar-thumb-color: #3c366b | <y class="w-16 h-8 rounded bg-indigo-900 "></y> |
| thumb-purple-100 | --scrollbar-thumb-color: #faf5ff | <y class="w-16 h-8 rounded bg-purple-100 "></y> |
| thumb-purple-200 | --scrollbar-thumb-color: #e9d8fd | <y class="w-16 h-8 rounded bg-purple-200 "></y> |
| thumb-purple-300 | --scrollbar-thumb-color: #d6bcfa | <y class="w-16 h-8 rounded bg-purple-300 "></y> |
| thumb-purple-400 | --scrollbar-thumb-color: #b794f4 | <y class="w-16 h-8 rounded bg-purple-400 "></y> |
| thumb-purple-500 | --scrollbar-thumb-color: #9f7aea | <y class="w-16 h-8 rounded bg-purple-500 "></y> |
| thumb-purple-600 | --scrollbar-thumb-color: #805ad5 | <y class="w-16 h-8 rounded bg-purple-600 "></y> |
| thumb-purple-700 | --scrollbar-thumb-color: #6b46c1 | <y class="w-16 h-8 rounded bg-purple-700 "></y> |
| thumb-purple-800 | --scrollbar-thumb-color: #553c9a | <y class="w-16 h-8 rounded bg-purple-800 "></y> |
| thumb-purple-900 | --scrollbar-thumb-color: #44337a | <y class="w-16 h-8 rounded bg-purple-900 "></y> |
| thumb-pink-100 | --scrollbar-thumb-color: #fff5f7 | <y class="w-16 h-8 rounded bg-pink-100 "></y> |
| thumb-pink-200 | --scrollbar-thumb-color: #fed7e2 | <y class="w-16 h-8 rounded bg-pink-200 "></y> |
| thumb-pink-300 | --scrollbar-thumb-color: #fbb6ce | <y class="w-16 h-8 rounded bg-pink-300 "></y> |
| thumb-pink-400 | --scrollbar-thumb-color: #f687b3 | <y class="w-16 h-8 rounded bg-pink-400 "></y> |
| thumb-pink-500 | --scrollbar-thumb-color: #ed64a6 | <y class="w-16 h-8 rounded bg-pink-500 "></y> |
| thumb-pink-600 | --scrollbar-thumb-color: #d53f8c | <y class="w-16 h-8 rounded bg-pink-600 "></y> |
| thumb-pink-700 | --scrollbar-thumb-color: #b83280 | <y class="w-16 h-8 rounded bg-pink-700 "></y> |
| thumb-pink-800 | --scrollbar-thumb-color: #97266d | <y class="w-16 h-8 rounded bg-pink-800 "></y> |
| thumb-pink-900 | --scrollbar-thumb-color: #702459 | <y class="w-16 h-8 rounded bg-pink-900 "></y> |
| thumb-khaki-100 | --scrollbar-thumb-color: #f9f7f4 | <y class="w-16 h-8 rounded bg-khaki-100 "></y> |
| thumb-khaki-200 | --scrollbar-thumb-color: #f0ebe4 | <y class="w-16 h-8 rounded bg-khaki-200 "></y> |
| thumb-khaki-300 | --scrollbar-thumb-color: #e7dfd3 | <y class="w-16 h-8 rounded bg-khaki-300 "></y> |
| thumb-khaki-400 | --scrollbar-thumb-color: #d5c8b2 | <y class="w-16 h-8 rounded bg-khaki-400 "></y> |
| thumb-khaki-500 | --scrollbar-thumb-color: #c3b091 | <y class="w-16 h-8 rounded bg-khaki-500 "></y> |
| thumb-khaki-600 | --scrollbar-thumb-color: #b09e83 | <y class="w-16 h-8 rounded bg-khaki-600 "></y> |
| thumb-khaki-700 | --scrollbar-thumb-color: #756a57 | <y class="w-16 h-8 rounded bg-khaki-700 "></y> |
| thumb-khaki-800 | --scrollbar-thumb-color: #584f41 | <y class="w-16 h-8 rounded bg-khaki-800 "></y> |
| thumb-khaki-900 | --scrollbar-thumb-color: #3b352c | <y class="w-16 h-8 rounded bg-khaki-900 "></y> |
| thumb-amber-100 | --scrollbar-thumb-color: #fff9e6 | <y class="w-16 h-8 rounded bg-amber-100 "></y> |
| thumb-amber-200 | --scrollbar-thumb-color: #fff0bf | <y class="w-16 h-8 rounded bg-amber-200 "></y> |
| thumb-amber-300 | --scrollbar-thumb-color: #ffe799 | <y class="w-16 h-8 rounded bg-amber-300 "></y> |
| thumb-amber-400 | --scrollbar-thumb-color: #ffd54d | <y class="w-16 h-8 rounded bg-amber-400 "></y> |
| thumb-amber-500 | --scrollbar-thumb-color: #ffc300 | <y class="w-16 h-8 rounded bg-amber-500 "></y> |
| thumb-amber-600 | --scrollbar-thumb-color: #e6b000 | <y class="w-16 h-8 rounded bg-amber-600 "></y> |
| thumb-amber-700 | --scrollbar-thumb-color: #997500 | <y class="w-16 h-8 rounded bg-amber-700 "></y> |
| thumb-amber-800 | --scrollbar-thumb-color: #735800 | <y class="w-16 h-8 rounded bg-amber-800 "></y> |
| thumb-amber-900 | --scrollbar-thumb-color: #4d3b00 | <y class="w-16 h-8 rounded bg-amber-900 "></y> |
| thumb-nero-100 | --scrollbar-thumb-color: #e9e9e9 | <y class="w-16 h-8 rounded bg-nero-100 "></y> |
| thumb-nero-200 | --scrollbar-thumb-color: #c7c8c9 | <y class="w-16 h-8 rounded bg-nero-200 "></y> |
| thumb-nero-300 | --scrollbar-thumb-color: #a6a7a8 | <y class="w-16 h-8 rounded bg-nero-300 "></y> |
| thumb-nero-400 | --scrollbar-thumb-color: #636466 | <y class="w-16 h-8 rounded bg-nero-400 "></y> |
| thumb-nero-500 | --scrollbar-thumb-color: #202225 | <y class="w-16 h-8 rounded bg-nero-500 "></y> |
| thumb-nero-600 | --scrollbar-thumb-color: #1d1f21 | <y class="w-16 h-8 rounded bg-nero-600 "></y> |
| thumb-nero-700 | --scrollbar-thumb-color: #131416 | <y class="w-16 h-8 rounded bg-nero-700 "></y> |
| thumb-nero-800 | --scrollbar-thumb-color: #0e0f11 | <y class="w-16 h-8 rounded bg-nero-800 "></y> |
| thumb-nero-900 | --scrollbar-thumb-color: #0a0a0b | <y class="w-16 h-8 rounded bg-nero-900 "></y> |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |  |
|:--|:--|:-:|
| thumb-hover-charcoal-100 | --scrollbar-hover-color: #222c35 | <y class="w-16 h-8 rounded bg-charcoal-100 "></y> |
| thumb-hover-charcoal-200 | --scrollbar-hover-color: #1f2831 | <y class="w-16 h-8 rounded bg-charcoal-200 "></y> |
| thumb-hover-charcoal-300 | --scrollbar-hover-color: #1c252c | <y class="w-16 h-8 rounded bg-charcoal-300 "></y> |
| thumb-hover-charcoal-400 | --scrollbar-hover-color: #192127 | <y class="w-16 h-8 rounded bg-charcoal-400 "></y> |
| thumb-hover-charcoal-500 | --scrollbar-hover-color: #161d22 | <y class="w-16 h-8 rounded bg-charcoal-500 "></y> |
| thumb-hover-charcoal-600 | --scrollbar-hover-color: #13181d | <y class="w-16 h-8 rounded bg-charcoal-600 "></y> |
| thumb-hover-charcoal-700 | --scrollbar-hover-color: #101419 | <y class="w-16 h-8 rounded bg-charcoal-700 "></y> |
| thumb-hover-charcoal-800 | --scrollbar-hover-color: #0d1014 | <y class="w-16 h-8 rounded bg-charcoal-800 "></y> |
| thumb-hover-charcoal-900 | --scrollbar-hover-color: #0a0c0f | <y class="w-16 h-8 rounded bg-charcoal-900 "></y> |
| thumb-hover-gray-100 | --scrollbar-hover-color: #f7fafc | <y class="w-16 h-8 rounded bg-gray-100 "></y> |
| thumb-hover-gray-200 | --scrollbar-hover-color: #edf2f7 | <y class="w-16 h-8 rounded bg-gray-200 "></y> |
| thumb-hover-gray-300 | --scrollbar-hover-color: #e2e8f0 | <y class="w-16 h-8 rounded bg-gray-300 "></y> |
| thumb-hover-gray-400 | --scrollbar-hover-color: #cbd5e0 | <y class="w-16 h-8 rounded bg-gray-400 "></y> |
| thumb-hover-gray-500 | --scrollbar-hover-color: #a0aec0 | <y class="w-16 h-8 rounded bg-gray-500 "></y> |
| thumb-hover-gray-600 | --scrollbar-hover-color: #718096 | <y class="w-16 h-8 rounded bg-gray-600 "></y> |
| thumb-hover-gray-700 | --scrollbar-hover-color: #4a5568 | <y class="w-16 h-8 rounded bg-gray-700 "></y> |
| thumb-hover-gray-800 | --scrollbar-hover-color: #2d3748 | <y class="w-16 h-8 rounded bg-gray-800 "></y> |
| thumb-hover-gray-900 | --scrollbar-hover-color: #1a202c | <y class="w-16 h-8 rounded bg-gray-900 "></y> |
| thumb-hover-red-100 | --scrollbar-hover-color: #fff5f5 | <y class="w-16 h-8 rounded bg-red-100 "></y> |
| thumb-hover-red-200 | --scrollbar-hover-color: #fed7d7 | <y class="w-16 h-8 rounded bg-red-200 "></y> |
| thumb-hover-red-300 | --scrollbar-hover-color: #feb2b2 | <y class="w-16 h-8 rounded bg-red-300 "></y> |
| thumb-hover-red-400 | --scrollbar-hover-color: #fc8181 | <y class="w-16 h-8 rounded bg-red-400 "></y> |
| thumb-hover-red-500 | --scrollbar-hover-color: #f56565 | <y class="w-16 h-8 rounded bg-red-500 "></y> |
| thumb-hover-red-600 | --scrollbar-hover-color: #e53e3e | <y class="w-16 h-8 rounded bg-red-600 "></y> |
| thumb-hover-red-700 | --scrollbar-hover-color: #c53030 | <y class="w-16 h-8 rounded bg-red-700 "></y> |
| thumb-hover-red-800 | --scrollbar-hover-color: #9b2c2c | <y class="w-16 h-8 rounded bg-red-800 "></y> |
| thumb-hover-red-900 | --scrollbar-hover-color: #742a2a | <y class="w-16 h-8 rounded bg-red-900 "></y> |
| thumb-hover-orange-100 | --scrollbar-hover-color: #fffaf0 | <y class="w-16 h-8 rounded bg-orange-100 "></y> |
| thumb-hover-orange-200 | --scrollbar-hover-color: #feebc8 | <y class="w-16 h-8 rounded bg-orange-200 "></y> |
| thumb-hover-orange-300 | --scrollbar-hover-color: #fbd38d | <y class="w-16 h-8 rounded bg-orange-300 "></y> |
| thumb-hover-orange-400 | --scrollbar-hover-color: #f6ad55 | <y class="w-16 h-8 rounded bg-orange-400 "></y> |
| thumb-hover-orange-500 | --scrollbar-hover-color: #ed8936 | <y class="w-16 h-8 rounded bg-orange-500 "></y> |
| thumb-hover-orange-600 | --scrollbar-hover-color: #dd6b20 | <y class="w-16 h-8 rounded bg-orange-600 "></y> |
| thumb-hover-orange-700 | --scrollbar-hover-color: #c05621 | <y class="w-16 h-8 rounded bg-orange-700 "></y> |
| thumb-hover-orange-800 | --scrollbar-hover-color: #9c4221 | <y class="w-16 h-8 rounded bg-orange-800 "></y> |
| thumb-hover-orange-900 | --scrollbar-hover-color: #7b341e | <y class="w-16 h-8 rounded bg-orange-900 "></y> |
| thumb-hover-green-100 | --scrollbar-hover-color: #f0fff4 | <y class="w-16 h-8 rounded bg-green-100 "></y> |
| thumb-hover-green-200 | --scrollbar-hover-color: #c6f6d5 | <y class="w-16 h-8 rounded bg-green-200 "></y> |
| thumb-hover-green-300 | --scrollbar-hover-color: #9ae6b4 | <y class="w-16 h-8 rounded bg-green-300 "></y> |
| thumb-hover-green-400 | --scrollbar-hover-color: #68d391 | <y class="w-16 h-8 rounded bg-green-400 "></y> |
| thumb-hover-green-500 | --scrollbar-hover-color: #48bb78 | <y class="w-16 h-8 rounded bg-green-500 "></y> |
| thumb-hover-green-600 | --scrollbar-hover-color: #38a169 | <y class="w-16 h-8 rounded bg-green-600 "></y> |
| thumb-hover-green-700 | --scrollbar-hover-color: #2f855a | <y class="w-16 h-8 rounded bg-green-700 "></y> |
| thumb-hover-green-800 | --scrollbar-hover-color: #276749 | <y class="w-16 h-8 rounded bg-green-800 "></y> |
| thumb-hover-green-900 | --scrollbar-hover-color: #22543d | <y class="w-16 h-8 rounded bg-green-900 "></y> |
| thumb-hover-teal-100 | --scrollbar-hover-color: #e6fffa | <y class="w-16 h-8 rounded bg-teal-100 "></y> |
| thumb-hover-teal-200 | --scrollbar-hover-color: #b2f5ea | <y class="w-16 h-8 rounded bg-teal-200 "></y> |
| thumb-hover-teal-300 | --scrollbar-hover-color: #81e6d9 | <y class="w-16 h-8 rounded bg-teal-300 "></y> |
| thumb-hover-teal-400 | --scrollbar-hover-color: #4fd1c5 | <y class="w-16 h-8 rounded bg-teal-400 "></y> |
| thumb-hover-teal-500 | --scrollbar-hover-color: #38b2ac | <y class="w-16 h-8 rounded bg-teal-500 "></y> |
| thumb-hover-teal-600 | --scrollbar-hover-color: #319795 | <y class="w-16 h-8 rounded bg-teal-600 "></y> |
| thumb-hover-teal-700 | --scrollbar-hover-color: #2c7a7b | <y class="w-16 h-8 rounded bg-teal-700 "></y> |
| thumb-hover-teal-800 | --scrollbar-hover-color: #285e61 | <y class="w-16 h-8 rounded bg-teal-800 "></y> |
| thumb-hover-teal-900 | --scrollbar-hover-color: #234e52 | <y class="w-16 h-8 rounded bg-teal-900 "></y> |
| thumb-hover-blue-100 | --scrollbar-hover-color: #ebf8ff | <y class="w-16 h-8 rounded bg-blue-100 "></y> |
| thumb-hover-blue-200 | --scrollbar-hover-color: #bee3f8 | <y class="w-16 h-8 rounded bg-blue-200 "></y> |
| thumb-hover-blue-300 | --scrollbar-hover-color: #90cdf4 | <y class="w-16 h-8 rounded bg-blue-300 "></y> |
| thumb-hover-blue-400 | --scrollbar-hover-color: #63b3ed | <y class="w-16 h-8 rounded bg-blue-400 "></y> |
| thumb-hover-blue-500 | --scrollbar-hover-color: #4299e1 | <y class="w-16 h-8 rounded bg-blue-500 "></y> |
| thumb-hover-blue-600 | --scrollbar-hover-color: #3182ce | <y class="w-16 h-8 rounded bg-blue-600 "></y> |
| thumb-hover-blue-700 | --scrollbar-hover-color: #2b6cb0 | <y class="w-16 h-8 rounded bg-blue-700 "></y> |
| thumb-hover-blue-800 | --scrollbar-hover-color: #2c5282 | <y class="w-16 h-8 rounded bg-blue-800 "></y> |
| thumb-hover-blue-900 | --scrollbar-hover-color: #2a4365 | <y class="w-16 h-8 rounded bg-blue-900 "></y> |
| thumb-hover-indigo-100 | --scrollbar-hover-color: #ebf4ff | <y class="w-16 h-8 rounded bg-indigo-100 "></y> |
| thumb-hover-indigo-200 | --scrollbar-hover-color: #c3dafe | <y class="w-16 h-8 rounded bg-indigo-200 "></y> |
| thumb-hover-indigo-300 | --scrollbar-hover-color: #a3bffa | <y class="w-16 h-8 rounded bg-indigo-300 "></y> |
| thumb-hover-indigo-400 | --scrollbar-hover-color: #7f9cf5 | <y class="w-16 h-8 rounded bg-indigo-400 "></y> |
| thumb-hover-indigo-500 | --scrollbar-hover-color: #667eea | <y class="w-16 h-8 rounded bg-indigo-500 "></y> |
| thumb-hover-indigo-600 | --scrollbar-hover-color: #5a67d8 | <y class="w-16 h-8 rounded bg-indigo-600 "></y> |
| thumb-hover-indigo-700 | --scrollbar-hover-color: #4c51bf | <y class="w-16 h-8 rounded bg-indigo-700 "></y> |
| thumb-hover-indigo-800 | --scrollbar-hover-color: #434190 | <y class="w-16 h-8 rounded bg-indigo-800 "></y> |
| thumb-hover-indigo-900 | --scrollbar-hover-color: #3c366b | <y class="w-16 h-8 rounded bg-indigo-900 "></y> |
| thumb-hover-purple-100 | --scrollbar-hover-color: #faf5ff | <y class="w-16 h-8 rounded bg-purple-100 "></y> |
| thumb-hover-purple-200 | --scrollbar-hover-color: #e9d8fd | <y class="w-16 h-8 rounded bg-purple-200 "></y> |
| thumb-hover-purple-300 | --scrollbar-hover-color: #d6bcfa | <y class="w-16 h-8 rounded bg-purple-300 "></y> |
| thumb-hover-purple-400 | --scrollbar-hover-color: #b794f4 | <y class="w-16 h-8 rounded bg-purple-400 "></y> |
| thumb-hover-purple-500 | --scrollbar-hover-color: #9f7aea | <y class="w-16 h-8 rounded bg-purple-500 "></y> |
| thumb-hover-purple-600 | --scrollbar-hover-color: #805ad5 | <y class="w-16 h-8 rounded bg-purple-600 "></y> |
| thumb-hover-purple-700 | --scrollbar-hover-color: #6b46c1 | <y class="w-16 h-8 rounded bg-purple-700 "></y> |
| thumb-hover-purple-800 | --scrollbar-hover-color: #553c9a | <y class="w-16 h-8 rounded bg-purple-800 "></y> |
| thumb-hover-purple-900 | --scrollbar-hover-color: #44337a | <y class="w-16 h-8 rounded bg-purple-900 "></y> |
| thumb-hover-pink-100 | --scrollbar-hover-color: #fff5f7 | <y class="w-16 h-8 rounded bg-pink-100 "></y> |
| thumb-hover-pink-200 | --scrollbar-hover-color: #fed7e2 | <y class="w-16 h-8 rounded bg-pink-200 "></y> |
| thumb-hover-pink-300 | --scrollbar-hover-color: #fbb6ce | <y class="w-16 h-8 rounded bg-pink-300 "></y> |
| thumb-hover-pink-400 | --scrollbar-hover-color: #f687b3 | <y class="w-16 h-8 rounded bg-pink-400 "></y> |
| thumb-hover-pink-500 | --scrollbar-hover-color: #ed64a6 | <y class="w-16 h-8 rounded bg-pink-500 "></y> |
| thumb-hover-pink-600 | --scrollbar-hover-color: #d53f8c | <y class="w-16 h-8 rounded bg-pink-600 "></y> |
| thumb-hover-pink-700 | --scrollbar-hover-color: #b83280 | <y class="w-16 h-8 rounded bg-pink-700 "></y> |
| thumb-hover-pink-800 | --scrollbar-hover-color: #97266d | <y class="w-16 h-8 rounded bg-pink-800 "></y> |
| thumb-hover-pink-900 | --scrollbar-hover-color: #702459 | <y class="w-16 h-8 rounded bg-pink-900 "></y> |
| thumb-hover-khaki-100 | --scrollbar-hover-color: #f9f7f4 | <y class="w-16 h-8 rounded bg-khaki-100 "></y> |
| thumb-hover-khaki-200 | --scrollbar-hover-color: #f0ebe4 | <y class="w-16 h-8 rounded bg-khaki-200 "></y> |
| thumb-hover-khaki-300 | --scrollbar-hover-color: #e7dfd3 | <y class="w-16 h-8 rounded bg-khaki-300 "></y> |
| thumb-hover-khaki-400 | --scrollbar-hover-color: #d5c8b2 | <y class="w-16 h-8 rounded bg-khaki-400 "></y> |
| thumb-hover-khaki-500 | --scrollbar-hover-color: #c3b091 | <y class="w-16 h-8 rounded bg-khaki-500 "></y> |
| thumb-hover-khaki-600 | --scrollbar-hover-color: #b09e83 | <y class="w-16 h-8 rounded bg-khaki-600 "></y> |
| thumb-hover-khaki-700 | --scrollbar-hover-color: #756a57 | <y class="w-16 h-8 rounded bg-khaki-700 "></y> |
| thumb-hover-khaki-800 | --scrollbar-hover-color: #584f41 | <y class="w-16 h-8 rounded bg-khaki-800 "></y> |
| thumb-hover-khaki-900 | --scrollbar-hover-color: #3b352c | <y class="w-16 h-8 rounded bg-khaki-900 "></y> |
| thumb-hover-amber-100 | --scrollbar-hover-color: #fff9e6 | <y class="w-16 h-8 rounded bg-amber-100 "></y> |
| thumb-hover-amber-200 | --scrollbar-hover-color: #fff0bf | <y class="w-16 h-8 rounded bg-amber-200 "></y> |
| thumb-hover-amber-300 | --scrollbar-hover-color: #ffe799 | <y class="w-16 h-8 rounded bg-amber-300 "></y> |
| thumb-hover-amber-400 | --scrollbar-hover-color: #ffd54d | <y class="w-16 h-8 rounded bg-amber-400 "></y> |
| thumb-hover-amber-500 | --scrollbar-hover-color: #ffc300 | <y class="w-16 h-8 rounded bg-amber-500 "></y> |
| thumb-hover-amber-600 | --scrollbar-hover-color: #e6b000 | <y class="w-16 h-8 rounded bg-amber-600 "></y> |
| thumb-hover-amber-700 | --scrollbar-hover-color: #997500 | <y class="w-16 h-8 rounded bg-amber-700 "></y> |
| thumb-hover-amber-800 | --scrollbar-hover-color: #735800 | <y class="w-16 h-8 rounded bg-amber-800 "></y> |
| thumb-hover-amber-900 | --scrollbar-hover-color: #4d3b00 | <y class="w-16 h-8 rounded bg-amber-900 "></y> |
| thumb-hover-nero-100 | --scrollbar-hover-color: #e9e9e9 | <y class="w-16 h-8 rounded bg-nero-100 "></y> |
| thumb-hover-nero-200 | --scrollbar-hover-color: #c7c8c9 | <y class="w-16 h-8 rounded bg-nero-200 "></y> |
| thumb-hover-nero-300 | --scrollbar-hover-color: #a6a7a8 | <y class="w-16 h-8 rounded bg-nero-300 "></y> |
| thumb-hover-nero-400 | --scrollbar-hover-color: #636466 | <y class="w-16 h-8 rounded bg-nero-400 "></y> |
| thumb-hover-nero-500 | --scrollbar-hover-color: #202225 | <y class="w-16 h-8 rounded bg-nero-500 "></y> |
| thumb-hover-nero-600 | --scrollbar-hover-color: #1d1f21 | <y class="w-16 h-8 rounded bg-nero-600 "></y> |
| thumb-hover-nero-700 | --scrollbar-hover-color: #131416 | <y class="w-16 h-8 rounded bg-nero-700 "></y> |
| thumb-hover-nero-800 | --scrollbar-hover-color: #0e0f11 | <y class="w-16 h-8 rounded bg-nero-800 "></y> |
| thumb-hover-nero-900 | --scrollbar-hover-color: #0a0a0b | <y class="w-16 h-8 rounded bg-nero-900 "></y> |

## Usage

```html
<!-- Example -->
<body class="scrollbar bar-sm track-amber-200 thumb-rad-md thumb-amber-500 thumb-hover-amber-700">
  ...
</body>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollbar in variants.scrollbar %}{% for item in scrollbar.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


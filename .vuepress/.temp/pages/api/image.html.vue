<template><div><h1 id="随机图片" tabindex="-1"><a class="header-anchor" href="#随机图片" aria-hidden="true">#</a> 随机图片</h1>
<h2 id="随机图片-1" tabindex="-1"><a class="header-anchor" href="#随机图片-1" aria-hidden="true">#</a> 随机图片</h2>
<p>请求方法：<code v-pre>GET</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="随机图片json" tabindex="-1"><a class="header-anchor" href="#随机图片json" aria-hidden="true">#</a> 随机图片JSON</h2>
<p>请求方法：<code v-pre>GET</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/image?type=json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 提取 pic 的值
{"pic": "https://api.scareye.com/images/wallpaper/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="随机分类图片" tabindex="-1"><a class="header-anchor" href="#随机分类图片" aria-hidden="true">#</a> 随机分类图片</h2>
<p>请求方法：<code v-pre>GET</code></p>
<p>分类名：<code v-pre>wallpaper</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/image?sort=wallpaper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="随机分类图片json" tabindex="-1"><a class="header-anchor" href="#随机分类图片json" aria-hidden="true">#</a> 随机分类图片JSON</h2>
<p>请求方法：<code v-pre>GET</code></p>
<p>分类名：<code v-pre>wallpaper</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/image?sort=wallpaper&amp;type=json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 提取 pic 的值
{"pic": "https://api.scareye.com/images/wallpaper/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<template><div><h1 id="随机lol英雄语音" tabindex="-1"><a class="header-anchor" href="#随机lol英雄语音" aria-hidden="true">#</a> 随机LOL英雄语音</h1>
<h2 id="随机语音" tabindex="-1"><a class="header-anchor" href="#随机语音" aria-hidden="true">#</a> 随机语音</h2>
<p>请求方法：<code v-pre>GET</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/lolrecord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="随机语音json" tabindex="-1"><a class="header-anchor" href="#随机语音json" aria-hidden="true">#</a> 随机语音JSON</h2>
<p>请求方法：<code v-pre>GET</code></p>
<p>文件格式：<code v-pre>OGG</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/lolrecord?type=json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 提取 pic 的值
{"pic": "https://api.scareye.com/lolrecords/Ahri/File0402.ogg"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="随机英雄语音" tabindex="-1"><a class="header-anchor" href="#随机英雄语音" aria-hidden="true">#</a> 随机英雄语音</h2>
<p>请求方法：<code v-pre>GET</code></p>
<p>英雄名：<code v-pre>Yone</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/lolrecord?hero=Yone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="随机分类语音json" tabindex="-1"><a class="header-anchor" href="#随机分类语音json" aria-hidden="true">#</a> 随机分类语音JSON</h2>
<p>请求方法：<code v-pre>GET</code></p>
<p>英雄名：<code v-pre>Yone</code></p>
<p>文件格式：<code v-pre>OGG</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://api.scareye.com/lolrecord?hero=Yone&amp;type=json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 提取 pic 的值
{"pic": "https://api.scareye.com/lolrecords/Ahri/File0402.ogg"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

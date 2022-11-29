<template><div><h1 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h1>
<h2 id="nonebot2-端" tabindex="-1"><a class="header-anchor" href="#nonebot2-端" aria-hidden="true">#</a> NoneBot2 端</h2>
<hr>
<h3 id="pip安装" tabindex="-1"><a class="header-anchor" href="#pip安装" aria-hidden="true">#</a> pip安装</h3>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nonebot-plugin-mcqq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>在 <code v-pre>nonebot2</code> 项目中设置 <code v-pre>load_plugin()</code></li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>nonebot<span class="token punctuation">.</span>load_plugin<span class="token punctuation">(</span><span class="token string">"nonebot_plugin_mcqq"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h5 id="nonebot2-插件商店安装" tabindex="-1"><a class="header-anchor" href="#nonebot2-插件商店安装" aria-hidden="true">#</a> NoneBot2 插件商店安装</h5>
<ul>
<li>安装插件</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nb plugin <span class="token function">install</span> nonebot-plugin-mcqq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h5 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h5>
<ul>
<li>下载频道适配补丁</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nonebot-plugin-guild-patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>从 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 下载 <code v-pre>nonebot_plugin_mcqq</code> 到 <code v-pre>plugins</code> 文件夹</li>
</ul>
</div></template>

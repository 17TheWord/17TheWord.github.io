<template><div><h1 id="mcrcon-插件安装" tabindex="-1"><a class="header-anchor" href="#mcrcon-插件安装" aria-hidden="true">#</a> MCRcon + 插件安装</h1>
<h2 id="nonebot2-端" tabindex="-1"><a class="header-anchor" href="#nonebot2-端" aria-hidden="true">#</a> NoneBot2 端</h2>
<h4 id="脚手架安装" tabindex="-1"><a class="header-anchor" href="#脚手架安装" aria-hidden="true">#</a> 脚手架安装</h4>
<ul>
<li>安装插件</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nonebot-plugin-mcqq-mcrcon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>在 <code v-pre>nonebot2</code> 项目中设置 <code v-pre>load_plugin()</code></li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>nonebot<span class="token punctuation">.</span>load_plugin<span class="token punctuation">(</span><span class="token string">"nonebot_plugin_mcqq"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h4 id="nonebot2-插件商店安装" tabindex="-1"><a class="header-anchor" href="#nonebot2-插件商店安装" aria-hidden="true">#</a> NoneBot2 插件商店安装</h4>
<ul>
<li>安装插件</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nb plugin <span class="token function">install</span> nonebot-plugin-mcqq-mcrcon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<hr>
<h4 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h4>
<ol>
<li>安装频道适配补丁</li>
</ol>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nonebot-plugin-guild-patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ol start="2">
<li>从 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 下载 <code v-pre>nonebot_plugin_mcqq_mcrcon</code> 到 <code v-pre>plugins</code>
文件夹</li>
</ol>
<h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h4>
<ul>
<li>参考 <RouterLink to="/mc_qq/config.html#nonebot2">NoneBot2 配置文件</RouterLink> 填写连接信息</li>
</ul>
<hr>
<h2 id="minecraft-server-端" tabindex="-1"><a class="header-anchor" href="#minecraft-server-端" aria-hidden="true">#</a> Minecraft Server 端</h2>
<ol>
<li>从 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 下载适合自己服务端版本的 <code v-pre>MC_QQ_x.x.x-1.0-SNAPSHOT.jar</code>
到 <code v-pre>plugins</code> 文件夹</li>
<li>若没有找到所需版本，可到 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/tree/minecraft_plugin" target="_blank" rel="noopener noreferrer">分支<ExternalLinkIcon/></a> 下载并自行编译</li>
<li>在配置文件 <code v-pre>server.properties</code> 中开启 <code v-pre>Rcon</code></li>
</ol>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">enable-rcon</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">rcon.port</span><span class="token punctuation">=</span><span class="token value attr-value">25575</span>
<span class="token key attr-name">rcon.password</span><span class="token punctuation">=</span><span class="token value attr-value">设置rcon密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参考 <RouterLink to="/mc_qq/config.html#minecraft-server">Minecraft Server 配置文件</RouterLink> 填写配置文件</li>
</ul>
</div></template>

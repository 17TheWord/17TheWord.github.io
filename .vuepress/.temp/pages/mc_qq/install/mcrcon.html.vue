<template><div><h1 id="mcrcon-日志读取安装" tabindex="-1"><a class="header-anchor" href="#mcrcon-日志读取安装" aria-hidden="true">#</a> MCRcon + 日志读取安装</h1>
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
<h2 id="minecraft-server-端" tabindex="-1"><a class="header-anchor" href="#minecraft-server-端" aria-hidden="true">#</a> Minecraft Server 端</h2>
<div class="custom-container warning"><p class="custom-container-title">已知问题</p>
<p>程序读取日志的在连接到 Bot 时一并发出<br>
导致从开服到第一次消息（玩家聊天信息、玩家加入/离开信息）会混合成一次信息<br>
已在程序中限制传输字符长度，所以第一批并不会发送成功，后续消息可成功发送</p>
</div>
<ol>
<li>
<p>从 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 下载 <code v-pre>MC_QQ_MinecraftServer.jar</code> 到服务端所在目录</p>
</li>
<li>
<p>在配置文件 <code v-pre>server.properties</code> 中开启 <code v-pre>Rcon</code></p>
</li>
</ol>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">enable-rcon</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">rcon.port</span><span class="token punctuation">=</span><span class="token value attr-value">25575</span>
<span class="token key attr-name">rcon.password</span><span class="token punctuation">=</span><span class="token value attr-value">设置rcon密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>参考 <RouterLink to="/mc_qq/config.html#minecraft-server">Minecraft Server 配置文件</RouterLink> 在服务器目录创建配置文件</p>
</li>
<li>
<p>启动 <code v-pre>MC_QQ_MinecraftServer.jar</code></p>
</li>
</ol>
<CodeGroup>
  <CodeGroupItem title="Windows">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 新建一个 `xxx.bat` 文件，写入如下代码</span>

@echo off
java -Xms512g -Xmx512g -jar MC_QQ_MinecraftServer.jar
pause

<span class="token comment"># 双击 xxx.bat 启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Linux" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">touch</span> xxx.sh    <span class="token comment"># 新建一个 xxx.sh 文件</span>

<span class="token function">nano</span> xxx.sh     <span class="token comment"># 打开并写入如下内容：</span>

java -jar MC_QQ_MinecraftServer.jar

<span class="token comment"># 写完之后按 Ctrl + x 退出，按Y二次确认，直接回车保存为原名称文件</span>

<span class="token function">chmod</span> -R <span class="token number">775</span> MC_QQ_MinecraftServer.jar      <span class="token comment"># 更改文件权限，使其可以执行</span>

./xxx.sh    <span class="token comment"># 运行程序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
</div></template>

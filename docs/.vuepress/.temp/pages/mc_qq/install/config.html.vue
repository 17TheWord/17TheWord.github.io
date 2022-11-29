<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<h2 id="nonebot2" tabindex="-1"><a class="header-anchor" href="#nonebot2" aria-hidden="true">#</a> NoneBot2</h2>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<p>安装完插件后，请在机器人的配置文件，如：<code v-pre>.env.dev</code> 中写入相关配置信息<br>
添加配置项只需在 .env.* 文件最底下另起一行直接添加即可。</p>
<details class="custom-container details"><summary>示例（点我展开）</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_GROUP_LIST=<span class="token punctuation">[</span><span class="token punctuation">]</span>
MC_QQ_GUILD_LIST=<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
MC_QQ_IP=<span class="token string">"127.0.0.1"</span>
MC_QQ_WS_PORT=<span class="token number">8765</span>
MC_QQ_MCRCON_PASSWORD=<span class="token string">""</span>
MC_QQ_MCRCON_PORT=<span class="token number">25575</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div>
<h3 id="mc-qq-group-list" tabindex="-1"><a class="header-anchor" href="#mc-qq-group-list" aria-hidden="true">#</a> MC_QQ_GROUP_LIST</h3>
<p>默认值：[]</p>
<p>填写需要开启互通的群号</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_GROUP_LIST=<span class="token punctuation">[</span>QQ群号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="mc-qq-guild-list" tabindex="-1"><a class="header-anchor" href="#mc-qq-guild-list" aria-hidden="true">#</a> MC_QQ_GUILD_LIST</h3>
<p>默认值：[[]]</p>
<p>填写需要开启互通的群号</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_GUILD_LIST=<span class="token punctuation">[</span><span class="token punctuation">[</span>频道ID<span class="token punctuation">,</span>子频道ID<span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">// 如果不需要使用频道通信功能，将此配置项删除</span>
<span class="token comment">// 或改为 MC_QQ_GUILD_LIST=[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="mc-qq-ip" tabindex="-1"><a class="header-anchor" href="#mc-qq-ip" aria-hidden="true">#</a> MC_QQ_IP</h3>
<p>默认值：&quot;127.0.0.1&quot;</p>
<p>MC 服务器 IP</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_IP=<span class="token string">"127.0.0.1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="mc-qq-ws-port" tabindex="-1"><a class="header-anchor" href="#mc-qq-ws-port" aria-hidden="true">#</a> MC_QQ_WS_PORT</h3>
<p>默认值：8765</p>
<p>MC 服务器 WebSocket 端口（MC_QQ插件的端口）</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_WS_PORT=<span class="token number">8765</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="mc-qq-mcrcon-password" tabindex="-1"><a class="header-anchor" href="#mc-qq-mcrcon-password" aria-hidden="true">#</a> MC_QQ_MCRCON_PASSWORD</h3>
<p>默认值：Null</p>
<p>MC 服务器 Rcon 密码</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_MCRCON_PASSWORD=<span class="token string">""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="mc-qq-mcrcon-port" tabindex="-1"><a class="header-anchor" href="#mc-qq-mcrcon-port" aria-hidden="true">#</a> MC_QQ_MCRCON_PORT</h3>
<p>默认值：[]</p>
<p>MC 服务器 Rcon 端口</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>MC_QQ_MCRCON_PORT=<span class="token number">25575</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="minecraft-server" tabindex="-1"><a class="header-anchor" href="#minecraft-server" aria-hidden="true">#</a> Minecraft Server</h2>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<p>若安装方式为：<RouterLink to="/mc_qq/install/mcrcon.html">MCRcon + 日志读取程序安装</RouterLink><br>
则需要在服务端根目录手动创建内容如下、名为 <code v-pre>config.yml</code> 的配置文件</p>
</div>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 是否启用插件</span>
<span class="token comment"># 默认启用</span>
<span class="token key atrule">enable_mc_qq</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 请在冒号后填写 WebSocket 服务的地址端口号。</span>
<span class="token comment"># 只填写数字即可。</span>
<span class="token comment"># 冒号后需要空一格！</span>
<span class="token comment"># 若不填写，则地址默认为 127.0.0.1 ，端口默认为 8765</span>
<span class="token key atrule">websocket_hostname</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token key atrule">websocket_port</span><span class="token punctuation">:</span> <span class="token number">8765</span>

<span class="token comment"># 发送到群消息中，玩家昵称与消息之间的符号</span>
<span class="token comment"># 默认为 “说：”</span>
<span class="token comment"># 例如：</span>
<span class="token comment">#   17TheWord ： 你好</span>
<span class="token key atrule">say_way</span><span class="token punctuation">:</span> <span class="token string">"说："</span>

<span class="token comment"># 是否启用 玩家死亡事件监听</span>
<span class="token comment"># 开启后，当玩家死亡时，Bot会推送信息</span>
<span class="token comment"># 默认启用</span>
<span class="token key atrule">death_message</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 是否启用 加入/离开 服务器监听</span>
<span class="token comment"># 开启后，当玩家 加入/离开 服务器时，Bot会随推送信息</span>
<span class="token comment"># 默认打开</span>
<span class="token comment"># 例如：</span>
<span class="token comment">#   17TheWord 加入了服务器</span>
<span class="token comment">#   17TheWord 离开了服务器</span>
<span class="token key atrule">join_quit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

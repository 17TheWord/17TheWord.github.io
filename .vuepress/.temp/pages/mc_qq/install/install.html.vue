<template><div><h1 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h1>
<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2>
<ul>
<li>
<p><code v-pre>Python 3.10.5</code></p>
<ul>
<li><code v-pre>websockets 10.3</code></li>
</ul>
</li>
<li>
<p><code v-pre>nb-cli 0.6.7</code></p>
<ul>
<li><code v-pre>nonebot-adapter-onebot 2.1.1</code></li>
<li><code v-pre>nonebot2 2.0.0b4</code></li>
<li><code v-pre>nonebot-plugin-guild-patch</code></li>
</ul>
</li>
<li>
<p><code v-pre>OpenJDK 17</code></p>
</li>
<li>
<p><code v-pre>Minecraft 1.18.1</code></p>
</li>
<li>
<p><code v-pre>Spigot 1.18.1</code></p>
</li>
</ul>
<hr>
<h2 id="安装选择" tabindex="-1"><a class="header-anchor" href="#安装选择" aria-hidden="true">#</a> 安装选择</h2>
<div class="custom-container tip"><p class="custom-container-title">插件</p>
<ul>
<li>适用于支持插件的 <code v-pre>Minecraft Server</code></li>
<li><code v-pre>Minecraft Server</code> 与 <code v-pre>NoneBot2</code></li>
<li>特殊消息将转换为纯文本，如：<code v-pre>[图片]</code>、<code v-pre>[视频]</code></li>
<li>操作简单</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">MCRcon + 插件</p>
<ul>
<li>适用于支持插件的 <code v-pre>Minecraft Server</code></li>
<li><code v-pre>Minecraft Server</code> 需要配置 <code v-pre>Rcon</code></li>
<li>特殊消息可在游戏中通过点击，跳转到浏览器查看</li>
<li>操作一般</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">MCRcon + 程序读取日志</p>
<ul>
<li>适用于不支持插件的 <code v-pre>Minecraft Server</code></li>
<li><code v-pre>Minecraft Server</code> 需要配置 <code v-pre>Rcon</code></li>
<li>特殊消息可在游戏中通过点击，跳转到浏览器查看</li>
<li>操作较为复杂</li>
</ul>
</div>
<hr>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h3>
<h4 id="nonebot2-端" tabindex="-1"><a class="header-anchor" href="#nonebot2-端" aria-hidden="true">#</a> NoneBot2 端</h4>
<hr>
<h5 id="pip安装" tabindex="-1"><a class="header-anchor" href="#pip安装" aria-hidden="true">#</a> pip安装</h5>
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
<li>下载频道适配补丁 <code v-pre>pip install nonebot-plugin-guild-patch</code></li>
<li>下载 <code v-pre>nonebot_plugin_mcqq</code> 到 <code v-pre>plugins</code> 文件夹</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 在此填入 WebSocket 地址</span>
<span class="token comment"># 一般修改只修改端口号</span>
ws_url <span class="token operator">=</span> <span class="token string">"ws://localhost:8765"</span>

<span class="token comment"># 开启功能的群和频道列表</span>
group_list <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># 群列表</span>
    <span class="token string">"group_list"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># 群号</span>
        <span class="token number">123456789</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment"># 频道列表</span>
    <span class="token string">"guild_list"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment"># 频道 ID</span>
            <span class="token string">"guild_id"</span><span class="token punctuation">:</span> <span class="token number">12345678909876543</span><span class="token punctuation">,</span>
            <span class="token comment"># 子频道 ID</span>
            <span class="token string">"channel_id"</span><span class="token punctuation">:</span> <span class="token number">1234567</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>目录结构参考：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>📦 test_bot
├── 📂 plugins
│   ├── 📂 nonebot_plugin_mcqq      # mcqq 插件
│   └── 📂 nonebot_plugin_guild_patch        # 频道适配插件
├── 📂 src                 # 或是 test_bot
│   └── 📜 mc_qq_config.py
├── 📜 .env                # 可选的
├── 📜 .env.dev            # 可选的
├── 📜 .env.prod           # 可选的
├── 📜 .gitignore
├── 📜 bot.py
├── 📜 docker-compose.yml
├── 📜 Dockerfile
├── 📜 pyproject.toml
└── 📜 README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="minecraft-server" tabindex="-1"><a class="header-anchor" href="#minecraft-server" aria-hidden="true">#</a> Minecraft Server</h4>
<ul>
<li>将 <code v-pre>MC_QQ.jar</code> 放入 <code v-pre>Minecraft</code> 服务器 <code v-pre>plugins</code> 文件夹</li>
<li>启动服务器后插件将自动生成配置文件并写入默认信息</li>
<li>默认信息参考如下：</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 是否启用插件</span>
<span class="token comment"># 默认为 true</span>
<span class="token key atrule">enable_mc_qq</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 请在冒号后填写 WebSocket 服务的地址端口号。</span>
<span class="token comment"># 只填写数字即可。</span>
<span class="token comment"># 冒号后需要空一格！</span>
<span class="token comment"># 若不填写，则地址默认为 0.0.0.0 ，端口默认为 8765</span>
<span class="token key atrule">websocket_server</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">"0.0.0.0"</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">"8765"</span>

<span class="token comment"># 发送到群消息中，玩家昵称与消息之间的符号</span>
<span class="token comment"># 默认为中文冒号 “：”</span>
<span class="token comment"># 例如：</span>
<span class="token comment">#   17TheWord ： 你好</span>
<span class="token key atrule">say_way</span><span class="token punctuation">:</span> <span class="token string">"说："</span>

<span class="token comment"># 是否启用 加入/离开 服务器监听</span>
<span class="token comment"># 开启后，当玩家 加入/离开 服务器时，Bot会随推送信息</span>
<span class="token comment"># 默认打开</span>
<span class="token comment"># 例如：</span>
<span class="token comment">#   17TheWord 加入了服务器</span>
<span class="token comment">#   17TheWord 离开了服务器</span>
<span class="token key atrule">join_quit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="完成" tabindex="-1"><a class="header-anchor" href="#完成" aria-hidden="true">#</a> 完成</h2>
<p>如果一切顺利的话，到这里你的消息互通已经搭建完成了。</p>
</div></template>

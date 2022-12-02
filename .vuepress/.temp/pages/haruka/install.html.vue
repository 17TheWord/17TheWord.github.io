<template><div><h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h1>
<h3 id="前置需求" tabindex="-1"><a class="header-anchor" href="#前置需求" aria-hidden="true">#</a> 前置需求</h3>
<ul>
<li>
<p><a href="https://github.com/mnixry/nonebot-plugin-guild-patch" target="_blank" rel="noopener noreferrer">nonebot-plugin-guild-patch<ExternalLinkIcon/></a>：频道适配补丁。</p>
</li>
<li>
<p>目录结构参考：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>📦 HarukaBot-master
├── 📂 plugins
│   ├── 📂 haruka_bot      # haruka_bot 的插件！不是 HarukaBot本身 
│   └── 📂 nonebot_plugin_guild_patch        # 频道适配插件
├── 📂 src                 # 或是 HarukaBot-master
├── 📜 .env                # 可选的
├── 📜 .env.dev            # 可选的
├── 📜 .env.prod           # 可选的
├── 📜 .gitignore
├── 📜 bot.py
├── 📜 docker-compose.yml
├── 📜 Dockerfile
├── 📜 pyproject.toml
└── 📜 README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<ul>
<li>
<p>请在 <code v-pre>utils</code> 中的 <code v-pre>__init__.py</code> 中修改 第20行：</p>
</li>
<li>
<p><code v-pre>from plugins.nonebot_plugin_guild_patch import GuildMessageEvent</code></p>
</li>
<li>
<p>中的 <code v-pre>plugins.nonebot_plugin_guild_patch</code> 部分，</p>
</li>
<li>
<p>替换为自己的频道适配补丁的位置。</p>
</li>
<li>
<p>在NoneBot中，<code v-pre>bot.py</code> 所在的目录为 <code v-pre>根目录</code></p>
</li>
<li>
<p>可根据此 <code v-pre>根目录</code> 更改相对位置</p>
</li>
</ul>
<hr>
<h3 id="环境设置" tabindex="-1"><a class="header-anchor" href="#环境设置" aria-hidden="true">#</a> 环境设置</h3>
<ul>
<li>
<p>频道的 <code v-pre>@方式</code> 在最新频道补丁已实现，可以选择 <code v-pre>开启</code> 或 <code v-pre>关闭</code>。</p>
<ul>
<li>在你的环境配置文件中设置 （如：<code v-pre>.env.dev</code> 中），</li>
<li>新建一行，写入：<code v-pre>Haruka_TO_ME=False</code>。</li>
<li><code v-pre>Haruka_TO_ME=False</code> 关闭 @</li>
<li><code v-pre>Haruka_TO_ME=True</code> 开启 @</li>
</ul>
</li>
<li>
<p>设置频道管理员身份组：</p>
<ul>
<li>新建一行，写入：<code v-pre>HARUKA_GUILD_ADMIN_GROUPS=[&quot;xxx&quot;,&quot;Haruka&quot;]</code></li>
<li>将 <code v-pre>xxx</code> 替换为你的身份组的名称</li>
<li>详情见 <code v-pre>安装</code> --&gt; <code v-pre>设置频道管理员身份组</code></li>
</ul>
</li>
</ul>
<hr>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<ul>
<li>
<p><strong>假设 <code v-pre>haruka_bot</code> 目录为 <code v-pre>根目录</code>：</strong></p>
<ul>
<li>
<p>替换 <code v-pre>database</code> 目录下的 <code v-pre>models.py</code></p>
</li>
<li>
<p>替换 <code v-pre>database</code> 目录下的 <code v-pre>db.py</code></p>
</li>
<li>
<p>替换 <code v-pre>utils</code> 目录下的 <code v-pre>__init__.py</code></p>
</li>
<li>
<p>替换 <code v-pre>plugins</code> 目录下的 <code v-pre>__init__.py</code></p>
</li>
<li>
<p>替换 <code v-pre>plugins</code> --&gt; <code v-pre>sub</code> 目录下的 <code v-pre>add_sub.py</code> 和 <code v-pre>delete_sub.py</code></p>
</li>
<li>
<p>复制 <code v-pre>plugins</code> 目录下的 <code v-pre>guildadmin</code> 到你的 <code v-pre>plugins</code> 目录</p>
</li>
</ul>
</li>
<li>
<p><strong>设置频道超级用户，以下步骤二选一 ！！！</strong></p>
<ol>
<li>将 <code v-pre>GuildSuperUsers.py</code> 放到 <code v-pre>根目录 haruka_bot</code> 中：
<ul>
<li>修改 <code v-pre>GuildSuperUserList = [&quot;xxxxxx&quot;,&quot;xxxxxx&quot;]</code></li>
<li>将 <code v-pre>xxxxxx</code> 替换为你要设置的超级用户的 <code v-pre>频道用户ID</code></li>
</ul>
</li>
<li>在 <code v-pre>根目录haruka_bot</code> 目录新建 <code v-pre>GuildSuperUsers.py</code>
<ul>
<li>输入 <code v-pre>GuildSuperUserList = [&quot;xxxxxx&quot;,&quot;xxxxxx&quot;]</code>：</li>
<li>将 <code v-pre>xxxxxx</code> 替换为你要设置的超级用户的 <code v-pre>频道用户ID</code></li>
</ul>
</li>
</ol>
</li>
<li>
<p><strong>设置频道管理员：</strong></p>
<ul>
<li>在频道中使用命令 <code v-pre>添加 / 取消 @xxx</code> 即可进行管理员的增减操作</li>
<li>管理员可以使用 <code v-pre>关注 / 取关</code> 功能</li>
<li>只有 <strong>超级用户</strong> 才可以增减管理员</li>
<li>通过 <code v-pre>@</code> 对管理员进行增减操作</li>
</ul>
</li>
<li>
<p><strong>设置频道管理员身份组：</strong></p>
<ul>
<li>新建一行，写入 <code v-pre>Haruka_GUILD_ADMIN_NAME = [&quot;xxx&quot;, &quot;xxxx&quot;]</code>，</li>
<li>将 <code v-pre>xxx</code> 替换为你的频道管理员的身份组的名称，</li>
<li>支持多个身份组（其实是目前没有一键挪人的功能，干脆直接多个组解决）。</li>
</ul>
</li>
</ul>
</div></template>

<template><div><h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h1>
<h3 id="前置" tabindex="-1"><a class="header-anchor" href="#前置" aria-hidden="true">#</a> 前置</h3>
<ul>
<li>
<p><a href="https://github.com/mnixry/nonebot-plugin-guild-patch" target="_blank" rel="noopener noreferrer">nonebot-plugin-guild-patch<ExternalLinkIcon/></a>：频道适配补丁。</p>
</li>
<li>
<p>Python 3.10.5 （本人环境）</p>
</li>
<li>
<p>当前适配HarukaBot版本：<code v-pre>v1.4.1post5</code></p>
</li>
</ul>
<hr>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<ul>
<li>前往 <a href="https://github.com/17TheWord/HarukaBot_Guild_Patch/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 下载补丁文件</li>
</ul>
<hr>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<h4 id="脚手架安装" tabindex="-1"><a class="header-anchor" href="#脚手架安装" aria-hidden="true">#</a> 脚手架安装</h4>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 Haruka</span>
pip <span class="token function">install</span> haruka_bot

<span class="token comment"># 安装频道适配补丁</span>
pip <span class="token function">install</span> nonebot-plugin-guild-patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<hr>
<h4 id="nonebot2-插件商店安装" tabindex="-1"><a class="header-anchor" href="#nonebot2-插件商店安装" aria-hidden="true">#</a> NoneBot2 插件商店安装</h4>
<CodeGroup>
  <CodeGroupItem title="pip">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 nb-cli</span>
pip <span class="token function">install</span> nb-cli

<span class="token comment"># 安装 Haruka、频道补丁</span>
nb plugin <span class="token function">install</span> haruka_bot
nb plugin <span class="token function">install</span> nonebot-plugin-guild-patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<hr>
<ul>
<li>在虚拟环境找到 <code v-pre>haruka_bot</code></li>
<li>将下载的文件替换虚拟环境中的 <code v-pre>haruka_bot</code></li>
</ul>
<hr>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ul>
<li><strong>其他命令与 <code v-pre>Haruka</code> 无异</strong></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">新版已支持</p>
<ul>
<li>
<p><strong>设置频道管理员身份组</strong></p>
<ul>
<li>新建一行，写入 <code v-pre>HARUKA_GUILD_ADMIN_ROLES = [&quot;Haruka&quot;, &quot;频道主&quot;, &quot;xxx&quot;]</code>，</li>
<li>将 <code v-pre>xxx</code> 替换为你的频道管理员的身份组的名称，</li>
<li>支持多个身份组（其实是目前没有一键挪人的功能，干脆直接多个组解决）。</li>
</ul>
</li>
<li>
<p><strong>设置频道超级用户</strong></p>
<ul>
<li>与普通的超级用户设置方法一致</li>
<li>不同之处为 <code v-pre>频道ID</code> 不同于 <code v-pre>QQ号</code></li>
<li><code v-pre>SUPERUSERS = [xxxxxxxxxx]</code></li>
<li>将 <code v-pre>xxxxxxxxxx</code> 替换为超级用户的ID</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">新版暂未支持（后续考虑更新）</p>
<ul>
<li>
<p><strong>设置频道管理员</strong></p>
<ul>
<li>在频道中使用命令 <code v-pre>添加 / 取消 @xxx</code> 即可进行管理员的增减操作</li>
<li>可在一次命令中对多个用户进行操作</li>
<li>管理员可以使用 <code v-pre>关注 / 取关</code> 功能</li>
<li>只有 <strong>超级用户</strong> 才可以增减管理员</li>
<li>通过 <code v-pre>@</code> 对管理员进行增减操作</li>
</ul>
</li>
<li>
<p><strong>清空订阅列表</strong></p>
<ul>
<li>命令：<code v-pre>清空列表</code></li>
<li>一键清除 <code v-pre>群 / 频道</code> 中的订阅列表</li>
</ul>
</li>
</ul>
</div>
<hr>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<div class="language-json5 ext-json5 line-numbers-mode"><pre v-pre class="language-json5"><code># 配置文件参考

HOST=<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>

PORT=<span class="token number">8080</span>

LOG_LEVEL=DEBUG

# Windows 用户请将此项设置为<span class="token boolean">false</span>
FASTAPI_RELOAD=<span class="token boolean">false</span>    
      
# 超级用户
SUPERUSERS=<span class="token punctuation">[</span><span class="token string">"xxxxxx"</span><span class="token punctuation">]</span>  
       
# Bot 昵称
NICKNAME=<span class="token punctuation">[</span><span class="token string">"Haruka_Bot"</span><span class="token punctuation">]</span>        
           
# 命令头
COMMAND_START=<span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"/"</span><span class="token punctuation">]</span>  
          
# 关闭 @ 前置
Haruka_TO_ME=False

# 开启下播通知
HARUKA_LIVE_OFF_NOTIFY=True
     
# 频道管理员身份组（仅Haruka）
HARUKA_GUILD_ADMIN_ROLES=<span class="token punctuation">[</span><span class="token string">"Haruka"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

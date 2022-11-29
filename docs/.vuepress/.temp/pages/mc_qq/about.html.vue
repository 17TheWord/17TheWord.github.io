<template><div><h1 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h1>
<h2 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录" aria-hidden="true">#</a> 更新记录</h2>
<ul>
<li>前往 <a href="https://github.com/17TheWord/nonebot-plugin-mcqq/releases/" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 查看</li>
</ul>
<h2 id="nonebot-端" tabindex="-1"><a class="header-anchor" href="#nonebot-端" aria-hidden="true">#</a> NoneBot 端</h2>
<ul>
<li>插件版需要 <code v-pre>websockets</code></li>
<li>MCRcon版需要 <code v-pre>mcrcon</code></li>
</ul>
<h2 id="minecraft-server-端" tabindex="-1"><a class="header-anchor" href="#minecraft-server-端" aria-hidden="true">#</a> Minecraft Server 端</h2>
<ul>
<li>版本支持：
<ul>
<li>理论上支持所有版本，但需要编译</li>
<li>插件使用的接口有：
<ul>
<li><code v-pre>AsyncPlayerChatEvent</code> 异步玩家聊天事件</li>
<li><code v-pre>PlayerJoinEvent</code> 玩家加入事件</li>
<li><code v-pre>PlayerQuitEvent</code> 玩家离开事件</li>
</ul>
</li>
<li><code v-pre>Paper</code> 端中 <code v-pre>AsyncPlayerChatEvent</code> 已经过时，改用 <code v-pre>AsyncChatEvent</code></li>
</ul>
</li>
</ul>
</div></template>

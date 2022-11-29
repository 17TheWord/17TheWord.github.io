<template><div><h1 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h1>
<h2 id="nonebot-端" tabindex="-1"><a class="header-anchor" href="#nonebot-端" aria-hidden="true">#</a> NoneBot 端</h2>
<ul>
<li>插件只需要新添加 <code v-pre>websockets</code> 依赖即可</li>
</ul>
<h2 id="minecraft-server-端" tabindex="-1"><a class="header-anchor" href="#minecraft-server-端" aria-hidden="true">#</a> Minecraft Server 端</h2>
<ul>
<li>版本支持：
<ul>
<li>
<p>理论上支持所有版本</p>
</li>
<li>
<p>目前已编译的版本有：<code v-pre>1.16.5</code>、<code v-pre>1.18.1</code>，其他版本需要自行编译</p>
</li>
<li>
<p>插件使用的接口有：</p>
<ul>
<li><code v-pre>AsyncPlayerChatEvent</code> 异步玩家聊天事件</li>
<li><code v-pre>PlayerJoinEvent</code> 玩家加入事件</li>
<li><code v-pre>PlayerQuitEvent</code> 玩家离开事件</li>
</ul>
</li>
<li>
<p>理论上支持以上三个接口的服务端都可以使用</p>
</li>
</ul>
</li>
</ul>
</div></template>

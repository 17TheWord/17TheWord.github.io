<template><div><h1 id="多人联机" tabindex="-1"><a class="header-anchor" href="#多人联机" aria-hidden="true">#</a> 多人联机</h1>
<hr>
<div class="custom-container tip"><p class="custom-container-title">联机要点</p>
<p>注意，如果在联机部分有看不懂的名词如 <code v-pre>IP</code>、<code v-pre>端口</code>、<code v-pre>内网穿透</code>，那说明你需要补充 <strong>网络基础概念</strong>。</p>
<p>以下内容将会分为三个部分：<code v-pre>网络基础概念普及</code>、<code v-pre>MC 客户端联机</code> 以及 <code v-pre>开服联机</code>。</p>
<p><strong>新大佬</strong> 建议仔细阅读所有内容，这对于后续联机有很多帮助，前面的铺垫也更容易理解每一步操作的含义。</p>
</div>
<ul>
<li>
<p><em><strong>网络基础概念普及：</strong></em></p>
<ul>
<li>
<p><strong>IP 地址：</strong></p>
<ul>
<li>我们进入服务器需要输入一个服务器地址，即 <code v-pre>IP 地址</code>，</li>
<li>它的形式可以是数字的，如 <code v-pre>127.0.0.1</code>，也可以是 <strong>英文域名</strong>，如 <code v-pre>mc.hypixel.net</code>，</li>
<li>当然域名的作用只是让数字IP变得更有辨识度，在进入的过程中，你的电脑还会访问 <code v-pre>DNS 服务器</code> 去获取到这个域名的 <code v-pre>实际 IP</code>，</li>
<li>有时候输入域名却无法进入服务器就是因为你访问的 <code v-pre>DNS 服务器</code> 里没有这个 <strong>域名</strong> 的 <code v-pre>IP 记录</code>，电脑没拿到 <code v-pre>实际的 IP 地址</code> 自然也就进不去服务器。</li>
<li>解决方法是在网络设置更换你的 <code v-pre>DNS服务器</code> 地址，一般可以设为 <code v-pre>8.8.8.8</code>（谷歌），备用 <code v-pre>114.114.114.114</code>（114）。</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p><strong>端口：</strong></p>
<ul>
<li>有时候你经常看得见服务器地址后面带着一个数字，比如 <code v-pre>play.shaoxiu.net:30000</code>， 这个 <code v-pre>30000</code> 便是 <strong>端口</strong>，</li>
<li>端口的作用就像是你房子的门，要进入一个服务器就得经过它的 <strong>门 —— 端口</strong>，</li>
<li>要注意的是，很多没有带端口的地址是因为MC默认进入 <code v-pre>25565</code> 这个端口，所以服务器地址可以省略掉它，</li>
<li>例如：<code v-pre>play.shaoxiu.net</code> 等价于 <code v-pre>play.shaoxiu.net:25565</code>。</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p><strong>内网穿透/端口映射</strong>：</p>
<ul>
<li>首先我们需要了解 <code v-pre>内网</code> 与 <code v-pre>外网</code> 的区别，</li>
<li><code v-pre>内网</code> 就是你家里路由器连着的各个设备提供的一个网络环境，就像是你的房子; <code v-pre>外网</code> 则是其他的房子，</li>
<li><code v-pre>内网穿透/端口映射</code> 即把家门打开，这样外人就能进来，</li>
<li>你可以自由控制内部的哪个端口 <code v-pre>穿透/映射</code> 到外部的哪个端口，但你发给别人的地址一定是 <strong>外网 IP</strong> + <strong>外部端口</strong>。</li>
</ul>
</li>
</ul>
<hr>
</li>
<li>
<p><strong>联机部分：</strong></p>
<ul>
<li>
<p>对于少数两三个人而言，建议使用联机而非开服。原因有两点：</p>
<ul>
<li>联机的稳定性要差于开服（即无法 <code v-pre>24 H</code> 运行，服主即开通局域网映射的一方无法退出游戏），但对于性能（<code v-pre>内存</code>、<code v-pre>CPU</code>）的占用要优于开服，人数少会弥补稳定性上的缺点。</li>
<li>开服需要自行寻找各类核心，了解不同插件 <code v-pre>Mod</code> 的 <code v-pre>API</code> 等大量基础知识，且少数人无法体现出插件管理的作用。</li>
</ul>
</li>
<li>
<p>如果你是 <strong>正版玩家</strong>，可以直接往下看 <code v-pre>映射</code> 部分。而离线模式登入的玩家需要了解一下验证的问题。由于自 <code v-pre>1.8</code> 开始客户端之间互相联机需要通过正版验证，我们需要想办法绕过这个验证才能进入游戏，否则映射成功也无法进入游戏。</p>
</li>
</ul>
<hr>
<ul>
<li>
<p>离线玩家绕过正版的方法有两种：</p>
<p><strong>第一种：</strong></p>
<ol>
<li>在顶部导航栏点击皮肤站，在里面注册一个自己的账号，</li>
<li>收到邮件验证成功后，在用户中心将 <code v-pre>Yggdrasil</code> 地址贴入 <code v-pre>PCL2</code> 的外置登录页面，</li>
<li><code v-pre>版本设置</code>-&gt;<code v-pre>设置</code>-&gt;<code v-pre>下滑到底部</code>-&gt;<code v-pre>修改登录方式为</code>-&gt; <code v-pre>第三方登录：Authlib-Injector</code>，或者直接点按钮拖到 <code v-pre>HMCL</code> 可以直接 <code v-pre>添加认证服务器地址</code>，</li>
<li>随后输入注册的账号（邮箱）、密码即可进入游戏并进行下一步联机准备。此方法的好处是可以自定义皮肤与披风，但联机的人都需要注册此皮肤站的账号并登录方可进入。</li>
</ol>
<hr>
<p><strong>第二种：</strong></p>
<ol>
<li>在 <code v-pre>PCL2</code> 搜索 <code v-pre>简单联机 Mod</code> 并下载。 版本高于 <code v-pre>1.12.2</code> 的需跳转至 <code v-pre>mcmod</code> 网页 在评论区找到最新版本的下载链接，</li>
<li>随后启动游戏后，关闭 <code v-pre>config</code> 文件夹里的 <code v-pre>server.properties</code> 配置文件的正版验证，</li>
<li><code v-pre>online-mode: true --&gt; online-mode: false</code>，</li>
<li>再 <strong>重启</strong> 客户端即可，</li>
<li>此方法的好处是其他玩家可以用离线账号直接进入，甚至可以修改配置文件固定内网端口，免去每次开局域网都要修改映射的麻烦，但自定义皮肤披风需要其他 <code v-pre>Mod</code> 解决。</li>
</ol>
</li>
</ul>
</li>
</ul>
<hr>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>以下两种方法任选其一</p>
</div>
<ul>
<li>
<p>第一种方法：</p>
<ol>
<li>
<p><strong>P2P 联机：</strong> 打开 <code v-pre>PCL2</code> -&gt; <code v-pre>进入更多</code>-&gt; <code v-pre>联机</code>，</p>
</li>
<li>
<p>在客户端进入单人游戏地图后，服主打开对局域网开放，并点击 <code v-pre>PCL2</code> 的 <code v-pre>创建房间</code>，将端口号输进弹出的窗口，随后你就发现多了一个 <code v-pre>我的房间</code>，</p>
</li>
<li>
<p>单击一下即可复制你的 <code v-pre>房间码</code>。将它发给你的基友，基友在 <code v-pre>PCL</code> 同样的联机界面点击 <code v-pre>加入房间</code>，输入房间码即可获取到一个 <code v-pre>IP:端口</code> 的地址，</p>
</li>
<li>
<p>将它输进 <code v-pre>多人游戏</code> -&gt; <code v-pre>直接连接</code> 的 <code v-pre>服务器地址栏</code> 里即可 <strong>进入服务器</strong>。</p>
</li>
</ol>
</li>
</ul>
<hr>
<ul>
<li>
<p>第二种方法:</p>
<ol>
<li>
<p>内网穿透：进入游戏后，服主需要打开对局域网开放，并将左下角开放的端口号输入映射软件的内网端口位置（这里以 Netplus 为例），</p>
</li>
<li>
<p>填写完后在主界面点击启动，再点击复制连接地址，把它发给别人，就能进入你的服务器了，</p>
</li>
<li>
<p>对于联机还有疑问的，可以看如下视频：</p>
</li>
</ol>
<iframe src="//player.bilibili.com/player.html?bvid=BV15E411p7bK&cid=161122177&page=1" scrolling="no" border="0" frameborder="no" framespacing="0"></iframe>
</li>
</ul>
</div></template>

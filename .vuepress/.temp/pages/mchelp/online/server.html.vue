<template><div><h1 id="开服部分" tabindex="-1"><a class="header-anchor" href="#开服部分" aria-hidden="true">#</a> 开服部分</h1>
<hr>
<div class="custom-container tip"><p class="custom-container-title">开服步骤</p>
<p>开服其实并没有很难。开服的优势是可自定义的东西很多（添加插件便于管理玩家、稳定性强于联机）。</p>
<p>我们可以通过以下操作来搭建一个 <code v-pre>MC 服务器</code>：</p>
<ul>
<li>
<p>获取一个能够运行 <code v-pre>Minecraft 服务端</code> 的电脑。可以是家里的<code v-pre>现成主机</code>，也可以是淘宝等平台的<code v-pre>面板服</code>。但不建议租用<code v-pre>阿里云</code>、<code v-pre>腾讯云</code>、<code v-pre>华为云</code> 等平台的 <code v-pre>学生机</code>。理由：性能低于目前 MC 服务器的要求，体验会差很多。</p>
</li>
<li>
<p>如果你是从淘宝租用的 <code v-pre>面板服</code>，接下来只需要咨询客服即可开服（当然你愿意折腾的话也可以往下看手动的部分）。</p>
</li>
<li>
<p>搭建一个开服运行环境。只需要安装玩 <code v-pre>MC</code> 用的 <code v-pre>Java</code> 即可，已安装的可以不用理会。</p>
</li>
<li>
<p>在 <em><strong>资源下载</strong></em> 的 <a href="mchelp/resource/online">联机下载区</a> 找到自己想要的服务端（进阶教程的联机与开服细节讲述了不同名字有什么用处）。</p>
</li>
<li>
<p>去对应官网下载服务端核心，随后把它放到一个空文件夹，并在旁边创建一个记事本文件。</p>
</li>
<li>
<p>任意命名为 <code v-pre>xxx.txt</code>，没有后缀请在你的 <code v-pre>系统资源管理器</code> 上方找到 <code v-pre>查看</code>，点击 <strong>展开</strong> 并 <strong>勾选</strong> <code v-pre>文件扩展名</code> 写入如下代码：</p>
</li>
</ul>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
@echo off

java -Xmx4G -Xms1G -jar xxx.jar nogui

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://help.skiesworld.com/images/server.png" alt=""></p>
<ul>
<li>随后保存并将 <code v-pre>xxx.txt</code> 修改为 <code v-pre>xxx.bat</code>，弹出窗口点击 <code v-pre>确定</code>（随后双击这个 <code v-pre>bat</code> 文件即可启动服务器）。</li>
</ul>
<hr>
<ul>
<li>将代码中的 <code v-pre>xxx.jar</code> 改为你当前下载的核心名，服务器的 <code v-pre>最大内存</code>、<code v-pre>最小内存</code> 都可以按照下图中位置设置。随后将 <code v-pre>run.bat</code> 文件与核心放在同一文件夹里，双击 <code v-pre>run.bat</code> 启动。</li>
</ul>
<hr>
<ul>
<li>第一次开服通常都会因为没同意 <code v-pre>eula 协议</code> 而失败（部分服务端将协议内置在 <code v-pre>CMD</code> 里，直接输入同意即可）。这时打开目录里生成的 <code v-pre>eula.txt</code>，将里面的 <code v-pre>false</code> 改为 <code v-pre>true</code>，重新打开 <code v-pre>bat</code>
，启动成功。</li>
</ul>
<hr>
<ul>
<li>基岩版服务端只需要去官网下载到安装包，解压后直接打开就能启动服务器，不需要其他操作，</li>
</ul>
<hr>
<ul>
<li>启动成功后，将内部端口（<code v-pre>Java 版服务器</code> 默认为 <code v-pre>25565</code>，<code v-pre>基岩版服务器</code> 默认为 <code v-pre>19132</code>）输入映射软件的对应位置，再在客户端多人游戏里创建服务器，地址输入外网 <code v-pre>ip:外网端口号</code>
即可连入（用英文输入法，中文的 <code v-pre>：</code>与英文的 <code v-pre>:</code> 不一样）。</li>
</ul>
<hr>
<ul>
<li>如果是离线模式玩家联机，一般需要用记事本打开 <code v-pre>server.properties</code> 文件，在里头找到 <code v-pre>online-mode=true</code> 并将 <code v-pre>true</code> 修改为 <code v-pre>false</code>。</li>
</ul>
</div></template>

<template><div><h1 id="安装-mod" tabindex="-1"><a class="header-anchor" href="#安装-mod" aria-hidden="true">#</a> 安装 Mod</h1>
<hr>
<div class="custom-container tip"><p class="custom-container-title">什么是MOD？</p>
<ul>
<li>
<p>很多玩家，包括一些国际版玩家在内都不了解 <strong>Mod</strong> 是什么，在此先科普一下 <strong>Mod</strong> 的含义。</p>
</li>
<li>
<p>首先，<code v-pre>Mod</code> 可以修改 <code v-pre>MC 原版</code> 的一些数据，例如 <code v-pre>增加物品</code>、<code v-pre>增加世界</code>、<code v-pre>增加附魔属性</code> 等……，如<code v-pre>工业</code>、<code v-pre>暮色森林</code>、<code v-pre>更多附魔</code> 等……；</p>
</li>
<li>
<p>而有些 <code v-pre>Mod</code> 只是提高玩家操作效率，如 <code v-pre>R 键整理</code> 和 <code v-pre>合成表</code> 等……。它们都属于插件的一部分，但不叫插件，因为方便与服务器的插件区分。</p>
</li>
<li>
<p>它能修改游戏数据得益于一个叫 <code v-pre>Forge</code> 的 <code v-pre>API</code>（类似于国际交谈中的翻译），是 <code v-pre>Forge</code> 把 <code v-pre>Mod</code> 修改的部分告诉了 <code v-pre>MC 原版</code>，才使其作出修改。</p>
</li>
<li>
<p>因此，我们安装Mod实际上的主体操作是安装 <code v-pre>Forge</code>，安装 <code v-pre>Mod</code> 的部分只是简单的文件移动。</p>
</li>
<li>
<p>我们将 <code v-pre>Forge</code> 安装的步骤分为启动器 <code v-pre>自动安装</code> 与 <code v-pre>手动安装</code> 两种方式，玩家任选其一即可</p>
</li>
</ul>
</div>
<hr>
<ul>
<li>
<p>自动安装：</p>
<ol>
<li>
<p>打开 <code v-pre>PCL2.exe</code>（没有的看下面的启动器下载区），点击 <code v-pre>下载</code>：
<img src="https://help.skiesworld.com/images/安装forge-1.png" alt="">
<img src="https://help.skiesworld.com/images/安装forge-2.png" alt=""></p>
</li>
<li>
<p>选择好游戏版本及需要的 <code v-pre>API</code> 后，点击 <code v-pre>开始下载</code>，等待下载结束后即可启动游戏开始游玩。</p>
</li>
</ol>
</li>
</ul>
<hr>
<ul>
<li>
<p>手动安装：</p>
<ol>
<li>
<p>首先可以通过 <a href="http://files.minecraftforge.net/" target="_blank" rel="noopener noreferrer">Forge 官网<ExternalLinkIcon/></a> 下载 <code v-pre>Forge</code> 手动安装，注意了！！正常点下载链接会跳转到一个 <code v-pre>Adfoc 网站</code>，这个是 <strong>广告</strong>。
绕开广告下载的方法如下：</p>
<ol>
<li>右键复制下载链接，然后随便找个地方贴出来，你会发现有两个包含 <code v-pre>https://</code> 的链接，</li>
<li>把第二个 <code v-pre>https://</code> 前面的内容删掉，再打开保留的网址，</li>
<li>开始免广告下载！（但现在更建议的是使用第三方启动器一键安装，方便快捷）。</li>
</ol>
</li>
</ol>
<hr>
<ol start="2">
<li>如果是使用官方的正版启动器只需要下载到对应版本的 <code v-pre>Forge 文件</code>（通常叫 <code v-pre>Forge.1.x.x.xx...xx.jar</code>)，在安装完 <code v-pre>Java</code> 后直接双击打开，点击确定即可。</li>
</ol>
<hr>
<ol start="3">
<li>非官方的启动器需要修改路径至你下载根目录一个叫 <code v-pre>.minecraft</code> 的文件夹（即 游戏根目录），<strong>千万注意启动器有没有开版本分隔！</strong> 开了的话无法直接安装 <code v-pre>Forge</code>，只能在启动器里一键安装：
<img src="https://help.skiesworld.com/images/Forge-1.png" alt=""></li>
</ol>
<hr>
<ol start="4">
<li><code v-pre>Forge</code> 手动安装成功后会弹出一个成功安装的弹窗，否则安装失败，重复以上操作至成功为止：
<img src="https://help.skiesworld.com/images/Forge-2.png" alt=""></li>
</ol>
<hr>
<ol start="5">
<li>
<p>随后：</p>
<ol>
<li>在 <code v-pre>.minecraft</code> 文件夹里手动创建一个叫 <code v-pre>mods</code> 的文件夹（也可以用启动器启动一次 <code v-pre>Forge</code> 版本，它会自动生成这个文件夹），</li>
<li>添加你想加的 <code v-pre>Mod</code> 进去（一般都为 <code v-pre>jar</code> 文件。部分 nt 压缩软件会将 <code v-pre>Mod</code> 识别为压缩包，如果是 <code v-pre>jar</code> 文件则不用理会，直接丢到创建的 <code v-pre>mods</code> 文件夹即可，不需要解压）。</li>
</ol>
</li>
</ol>
<hr>
<ol start="6">
<li>打开启动器启动游戏开始游玩。</li>
</ol>
</li>
</ul>
<hr>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<ul>
<li><code v-pre>Fabric</code> 的安装方式与 <code v-pre>Forge</code> 相似，须区分两者的 <code v-pre>Mod</code>，互相之间一般不兼容。</li>
<li><code v-pre>Fabric</code> 一般需要额外添加一个叫 <code v-pre>Fabric API</code> 的 <code v-pre>Mod</code> 用于扩展兼容许多 <code v-pre>Fabric Mod</code>。</li>
<li><code v-pre>Mod</code> 下载方式在资源区集锦后的 Mod 下载区里有提供。</li>
<li>记得启动器要切换成 <code v-pre>Forge</code> 版本，不能仍然启动原来的版本。</li>
<li>还有细节没明白的可以看视频</li>
</ul>
</div>
<iframe src="//player.bilibili.com/player.html?bvid=BV1z7411E7Pd&cid=152951260&page=1" scrolling="no" border="0" frameborder="no" framespacing="0"></iframe>
</div></template>

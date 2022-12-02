<template><div><h1 id="安装光影与材质" tabindex="-1"><a class="header-anchor" href="#安装光影与材质" aria-hidden="true">#</a> 安装光影与材质</h1>
<hr>
<div class="custom-container tip"><p class="custom-container-title">什么是光影？</p>
<ul>
<li>
<p>光影的专业名称为 着色器。</p>
</li>
<li>
<p>它基于 MC 的接口（在 Java 版 上也叫 OptiFine 或 高清修复）修改了许多MC的光照效果。</p>
</li>
<li>
<p>原理上你仍然可以理解为前面提到的 Mod，只不过 API 由 Forge 变为了 OptiFine（高清修复）。</p>
</li>
</ul>
<p>要点如下：</p>
</div>
<hr>
<ul>
<li>
<p>自动安装：</p>
<ul>
<li>打开 <code v-pre>PCL2.exe</code>（ <a href="https://shaoxiu.net/files/" target="_blank" rel="noopener noreferrer">资源收录区<ExternalLinkIcon/></a> 有），点击<code v-pre>下载</code>，点击<code v-pre>自动安装</code>，选择自己需要的游戏版本后，在下面的 <code v-pre>OptiFine</code>
点击选择最上面的就能自动下载安装，然后在启动器切换对应版本打开游戏：
<img src="https://help.skiesworld.com/images/安装optifine-1.png" alt="">
<img src="https://help.skiesworld.com/images/安装optifine-2.png" alt=""></li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p>手动安装：</p>
<ol>
<li>点击进入 <a href="https://www.optifine.net/home" target="_blank" rel="noopener noreferrer">OptiFine 官网<ExternalLinkIcon/></a>，打开后点击上面的 <code v-pre>Download</code> ，随后下载对应版本的 <code v-pre>最新 OptiFine</code>，</li>
</ol>
<hr>
<ol start="2">
<li>可能会遇到与 <code v-pre>Forge</code> 类似的广告页面，点旁边的 <code v-pre>mirror</code> 或用同样的方法即可绕过，</li>
</ol>
<hr>
<ol start="3">
<li>随后双击打开下载到的文件，像 <code v-pre>Forge</code> 一样安装：
<img src="https://help.skiesworld.com/images/安装optifine-3.png" alt=""></li>
</ol>
<hr>
<ol start="4">
<li>也可以作为 <code v-pre>Mod</code> 直接放进 <code v-pre>mods</code> 文件夹用 <code v-pre>Forge</code> 加载，但可能会有部分新版本的最新 <code v-pre>Forge</code> 与未及时更新的 <code v-pre>OptiFine</code> 不兼容。遇到这种情况最好前往 <code v-pre>OptiFine</code>
官网的更新日志检查支持的 <code v-pre>最终 Forge 版本</code> 并回退：
<img src="https://help.skiesworld.com/images/ofchangelog.png" alt=""></li>
</ol>
<hr>
<ol start="5">
<li><code v-pre>Fabric + OptiFine</code> 需要再加一个名称为 <code v-pre>OptiFabric</code> 的 前置 <code v-pre>Mod</code> 才能正常使用，</li>
</ol>
<hr>
<ol start="6">
<li>随后在启动器里找到安装好的 <code v-pre>OptiFine 版本</code>（直接安装的新版本）或打开 <code v-pre>Forge</code> 版本（放进了 <code v-pre>mods</code> 文件夹），进入主界面打开 <code v-pre>设置 -&gt; 视频设置 -&gt; 光影</code>，光影界面就出来了，</li>
</ol>
<hr>
<ol start="7">
<li>点击打开光影包文件夹，将下载好的光影文件放进去（一般为 <code v-pre>.zip</code> 格式，不需要解压），直接在光影界面打开对应名字的光影即可。</li>
</ol>
</li>
</ul>
<hr>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<ul>
<li>
<p><code v-pre>OptiFine 官网</code> 下载界面的 <code v-pre>Preview Versions</code> 一般提供了 <code v-pre>OptiFine</code> 最新的预览版本，没有找到最新版本的正式版时可以看看有没有预览版。</p>
</li>
<li>
<p>光影文件在资源区集锦后的光影下载区提供了一部分，可以去 <a href="https://shaoxiu.net/files/" target="_blank" rel="noopener noreferrer">资源收录区<ExternalLinkIcon/></a> 或去 <code v-pre>Curseforge</code> 下载。</p>
</li>
<li>
<p>如果安装光影后发现帧数非常低或很容易崩溃，应去光影切换界面检查一下底部是否为自己电脑的独立显卡。如果不是，应在显卡控制面板上设置全局启用独立显卡。</p>
</li>
<li>
<p>材质包的安装过程简单很多，直接将压缩包添加至根目录的 <code v-pre>resourcepack</code> 文件夹里，再在 <code v-pre>设置 -&gt; 资源包</code> 中 <strong>添加材质</strong> 即可。</p>
</li>
<li>
<p>光影的兼容性取决于 <code v-pre>OptiFine</code>，一般来说大部分光影都能够兼容 <code v-pre>1.8.9-&gt;最新的版本</code>，而 <code v-pre>1.7.10</code> 则被作为版本弃子处理，不建议用于加载光影。</p>
</li>
<li>
<p>没有看明白的可以通过下面的视频了解：</p>
</li>
</ul>
</div>
  <iframe src="//player.bilibili.com/player.html?bvid=BV1C7411F7hu&cid=154945240&page=1" scrolling="no" border="0" frameborder="no" framespacing="0"></iframe>
</div></template>

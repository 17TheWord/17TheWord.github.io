<template><div><h1 id="光影篇" tabindex="-1"><a class="header-anchor" href="#光影篇" aria-hidden="true">#</a> 光影篇</h1>
<h2 id="请问-xx-显卡-cpu-内存-推荐用什么光影" tabindex="-1"><a class="header-anchor" href="#请问-xx-显卡-cpu-内存-推荐用什么光影" aria-hidden="true">#</a> 请问（<code v-pre>XX 显卡/ CPU / 内存</code>）推荐用什么光影</h2>
<ul>
<li>
<p><strong>不会有具体答案。</strong></p>
</li>
<li>
<p><code v-pre>不同显卡</code> 对应光影的帧数表现 <code v-pre>不同</code>，但 <strong>鉴于</strong> 不同人有不同标准，我们不可能给出一下就让人满意的答复。</p>
</li>
<li>
<p>如果你真想提该问题，请在问题里带上你的 <code v-pre>显卡型号</code>（包括桌面端还是移动端）、需要的帧数，以及你想要的光影风格。</p>
</li>
</ul>
<hr>
<h2 id="请问有没有-稳-xx-帧-的光影" tabindex="-1"><a class="header-anchor" href="#请问有没有-稳-xx-帧-的光影" aria-hidden="true">#</a> 请问有没有 <code v-pre>稳 XX 帧</code> 的光影？</h2>
<ul>
<li>
<p>同上，<strong>不会有具体答案。</strong></p>
</li>
<li>
<p>光影在游戏中的渲染是一个 <strong>动态</strong> 的过程，任何变量（<code v-pre>游戏版本</code>、<code v-pre>地图地形</code>、<code v-pre>材质</code>、<code v-pre>模组</code>、<code v-pre>数据包</code> 等等）都会对光影的帧数 <strong>产生影响</strong>，从而使帧数变得不稳定。</p>
</li>
<li>
<p>此类问题最好的答案是自行寻找。</p>
</li>
</ul>
<hr>
<h2 id="xx-光影-用什么游戏版本-xx-版本-用什么光影" tabindex="-1"><a class="header-anchor" href="#xx-光影-用什么游戏版本-xx-版本-用什么光影" aria-hidden="true">#</a> <code v-pre>XX 光影</code> 用什么游戏版本？/ <code v-pre>XX 版本</code> 用什么光影？</h2>
<ul>
<li>
<p><strong>一般来说，光影不区分游戏版本</strong>，<code v-pre>GLSL</code> 的兼容性可以 <strong>保证</strong> 光影能够在大多数设备上运行。如果你遇到有部分光影不兼容当前客户端的情况，可能是以下几点：</p>
<ol>
<li>
<p><strong>你使用了 <code v-pre>OptiFine 最新预览版</code>：</strong></p>
<ul>
<li>
<p><code v-pre>预览版 OptiFine</code> 用于 <strong>测试</strong> 及 <strong>反馈 <code v-pre>BUG</code></strong> ；</p>
</li>
<li>
<p>直接使用此版本会导致一系列不兼容现象，有时候还会无法启用光影。</p>
</li>
</ul>
</li>
</ol>
<hr>
<ol start="2">
<li>
<p><strong>光影本身年久失修：</strong></p>
<ul>
<li>
<p>可能是 <code v-pre>Shadersmod 时代</code>的产物；</p>
</li>
<li>
<p>在 <code v-pre>OptiFine</code> 严谨的检查下会出现 <strong>代码报错问题</strong>（如 <code v-pre>SEUS RC6</code> ）。</p>
</li>
</ul>
</li>
</ol>
<hr>
<ol start="3">
<li>
<p><strong><code v-pre>Mod</code> 兼容问题：</strong></p>
<ul>
<li>
<p>请检查所用 <code v-pre>Mod</code> 是否有不兼容 <code v-pre>OptiFine</code> 的说明，包括但不限于：</p>
<ul>
<li>
<p><code v-pre>视觉类 Mod</code>（如： <strong>更好的树叶</strong>）、</p>
</li>
<li>
<p><code v-pre>自带渲染的 Mod</code>（如： <strong>植物魔法</strong>）等……</p>
</li>
</ul>
</li>
<li>
<p>如果出现该类问题，请前往 <a href="https://mgchelp.yuque.com/rfigvp/bzn947/ggd9ms" target="_blank" rel="noopener noreferrer">MGC 快速答疑手册——Java版着色器(Shader)<ExternalLinkIcon/></a> 寻找可能的解决方式。</p>
</li>
</ul>
</li>
</ol>
<hr>
<ol start="4">
<li>
<p><strong>你使用了 <code v-pre>Iris</code>：</strong></p>
<ul>
<li>该 <code v-pre>API</code> 目前兼容性不佳，不适用于多数光影；</li>
</ul>
</li>
</ol>
<hr>
<ol start="5">
<li>
<p><strong>你游玩着过于老旧的游戏版本：</strong></p>
<ul>
<li>
<p>一些光影（如 <code v-pre>PTGI</code>） 不兼容 <code v-pre>1.7.10</code> 及以下的老版本，</p>
</li>
<li>
<p>因为这些版本的 <code v-pre>OptiFine</code> 或 <code v-pre>Shadersmod</code> 年久失修，</p>
</li>
<li>
<p>早已不兼容新的光影代码，属于正常现象；</p>
</li>
</ul>
</li>
</ol>
<hr>
<ol start="6">
<li>
<p><strong>你所用的设备不兼容最新的OpenGL版本：</strong></p>
<ul>
<li>
<p>如苹果公司的MacBook最高只支持 <code v-pre>OpenGL 4.1</code>，而最新的版本为4.6。</p>
</li>
<li>
<p>一旦光影文件内指定版本高于 <code v-pre>OpenGL 4.1</code>（即 <code v-pre>GLSL 410</code> ），便极有可能发生兼容性问题。</p>
</li>
</ul>
</li>
</ol>
</li>
</ul>
<hr>
<h2 id="java-版-光影能否用-rtx-显卡-或-rx6000-系列以上-显卡的光追核心来提供更好的实时光线追踪效果" tabindex="-1"><a class="header-anchor" href="#java-版-光影能否用-rtx-显卡-或-rx6000-系列以上-显卡的光追核心来提供更好的实时光线追踪效果" aria-hidden="true">#</a> <code v-pre>Java 版</code> 光影能否用 <code v-pre>RTX</code> 显卡 或 <code v-pre>RX6000 系列以上</code> 显卡的光追核心来提供更好的实时光线追踪效果？</h2>
<ul>
<li>
<p><strong>不能：</strong></p>
<ul>
<li>
<p>现在的 <code v-pre>Java 版  Minecraft 光影</code> 使用的 <strong>图形编程语言</strong> 为 <code v-pre>GLSL</code>，</p>
</li>
<li>
<p>它并 <strong>不能</strong> 通过 <code v-pre>调用光追核心</code> 来 <strong>提高光追效率</strong>。</p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="我喜欢-a-光影中的水-又喜欢-b-光影中的云。我可以把这两个包结合起来吗" tabindex="-1"><a class="header-anchor" href="#我喜欢-a-光影中的水-又喜欢-b-光影中的云。我可以把这两个包结合起来吗" aria-hidden="true">#</a> 我喜欢 <code v-pre>A</code> 光影中的水，又喜欢 <code v-pre>B</code> 光影中的云。我可以把这两个包结合起来吗？</h2>
<ul>
<li>
<p><strong>通常情况下，不能：</strong></p>
<ul>
<li>
<p>在 <code v-pre>Minecraft Java 版光影包</code> 中没有 <strong>标准</strong> 的做事方式，</p>
</li>
<li>
<p>所以 <strong>不同</strong> 的光影包 <strong>可以（而且经常会）</strong> 以不同的方式实现相同的效果，或者使用相同的缓冲区来保存不同的信息。</p>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<ul>
<li>因此，通过 <strong>简单的添加删除文件</strong> 去结合效果是 <strong>几乎不可能</strong> 的。</li>
<li>但如果你擅长 <code v-pre>GLSL</code>，你当然可以试一试。</li>
<li>你也可以询问你想 <code v-pre>组合光影包</code> 的开发者，他们的效果是 <strong>如何/在哪里</strong> 实现的，以及在这些地方有 <strong>哪些信息</strong>，这些问题对于结合光影效果 <strong>有必要的</strong>。</li>
<li>但是，不要指望 开发者 <strong>无条件免费</strong> 帮你办事，或者 <strong>教你</strong> <code v-pre>GLSL</code>，<strong>这不是他们的工作！</strong></li>
<li>如果你对学习 <code v-pre>GLSL</code> 不感兴趣，你也可以 <strong>提出付费</strong> 让他人为你制作 <code v-pre>组合光影包</code>。</li>
</ul>
</div>
</li>
</ul>
<hr>
<h2 id="optifine-能与-iris、sodium-一起开吗" tabindex="-1"><a class="header-anchor" href="#optifine-能与-iris、sodium-一起开吗" aria-hidden="true">#</a> <code v-pre>OptiFine</code> 能与 <code v-pre>Iris</code>、<code v-pre>Sodium</code> 一起开吗？</h2>
<ul>
<li>
<p><strong>不能：</strong></p>
<ul>
<li>OptiFine 与 Iris 在功能上是重复的，两者互不兼容。而钠属于优化模组，只能兼容开源的 Iris，无法兼容 OptiFine。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="java-版-光影能不能搭配-dlss-fsr" tabindex="-1"><a class="header-anchor" href="#java-版-光影能不能搭配-dlss-fsr" aria-hidden="true">#</a> <code v-pre>Java 版</code> 光影能不能搭配 <code v-pre>DLSS / FSR</code>？</h2>
<ul>
<li>
<p><strong>理论上：</strong></p>
<ul>
<li>
<p>FSR 可以，</p>
</li>
<li>
<p>DLSS 技术未开放，无法搭配。</p>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意！</p>
<ul>
<li><code v-pre>PTGI HRR 版本</code>也使用了与此类似的技术，<code v-pre>HRR</code> 的功能也是 <strong>降低分辨率提升帧数</strong>，</li>
<li>这也是很多人为什么说 <code v-pre>HRR系列</code> 看起来比 <code v-pre>E12</code> <strong>糊</strong> 的原因。</li>
</ul>
</div>
</li>
</ul>
<hr>
<h2 id="光线追踪光影-与-传统光影-的区别是什么" tabindex="-1"><a class="header-anchor" href="#光线追踪光影-与-传统光影-的区别是什么" aria-hidden="true">#</a> <code v-pre>光线追踪光影</code> 与 <code v-pre>传统光影</code> 的区别是什么？</h2>
<ul>
<li>
<p><strong>是否使用了光追算法:</strong></p>
<ul>
<li>
<p>也就是说，无论你使用的 <code v-pre>GPU</code> 是谁家的，只要光影文件里存在光追算法，</p>
</li>
<li>
<p>那就属于 <code v-pre>光线追踪光影</code>，而 <strong>不取决于是否采</strong> 用 <code v-pre>RTX</code> 或 <code v-pre>RX6000</code> 系列显卡。</p>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="iris-能否替代-optifine-xx-光影-什么时候兼容-iris" tabindex="-1"><a class="header-anchor" href="#iris-能否替代-optifine-xx-光影-什么时候兼容-iris" aria-hidden="true">#</a> <code v-pre>Iris</code> 能否替代 <code v-pre>OptiFine</code>？/ <code v-pre>XX 光影</code> 什么时候兼容 <code v-pre>Iris</code> ？</h2>
<ul>
<li>
<p><strong>从玩家的角度看，可能可以，但不是现在:</strong></p>
<ul>
<li>现在的情况是 <code v-pre>Iris</code> 支持的东西远少于 <code v-pre>OptiFine</code>（这意味着 <code v-pre>Iris</code> 支持的光影是 <strong>少数的</strong>），且在 <strong>最新版本</strong> 上的 <code v-pre>帧率表现</code> 很糟糕。</li>
</ul>
</li>
<li>
<p><strong>从开发者的角度看：</strong></p>
<ul>
<li>
<p><code v-pre>OptiFine</code> 作为 <code v-pre>光影开发者</code> 的开发环境，具有 <strong>不可替代性</strong>。</p>
</li>
<li>
<p>而 <code v-pre>Iris</code> <strong>只是</strong> 对 <code v-pre>OptiFine</code> 环境开发的光影 <strong>进行适配</strong>。</p>
</li>
<li>
<p>因此，<code v-pre>Iris</code> 是否兼容光影 <strong>取决于它自己</strong>，而 <strong>非光影主动</strong> 去适配它！</p>
</li>
</ul>
</li>
</ul>
</div></template>

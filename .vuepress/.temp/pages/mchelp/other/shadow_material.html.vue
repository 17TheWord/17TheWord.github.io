<template><div><h1 id="光影与材质基础概念" tabindex="-1"><a class="header-anchor" href="#光影与材质基础概念" aria-hidden="true">#</a> 光影与材质基础概念</h1>
<hr>
<div class="custom-container tip"><p class="custom-container-title">光影与材质</p>
<p>鉴于光影与材质在改善 <code v-pre>MC 画质</code> 上 <strong>相辅相成</strong>，故在此将两者放在一起讲述。</p>
<p>在这之前，很多人估计都会好奇，为什么 <strong>一个几兆的光影压缩文件包</strong> 就能带来翻天覆地的变化?</p>
<p>亦或是总觉得 <strong>自己玩的画质</strong> 跟 <strong>视频看的画质</strong> 天差地别?</p>
<p>在这里我们先普及一下光影与材质 <strong>对于硬件</strong> 的要求</p>
</div>
<hr>
<ul>
<li>
<p><strong>很多人都应该知道光影与材质文件往往都附带着“高配”“中配”这些字眼，那么高配是什么概念呢？</strong></p>
<ul>
<li><strong>配</strong> 即配置要求。光影最需要的是显卡性能，在此以 <code v-pre>SEUS 系列</code> 为例来讲述。</li>
<li><code v-pre>SEUS</code> 给 <code v-pre>MC</code> 带来了一个全新的画质，也几乎可以说是光影界最经典著名的光影，</li>
<li>同时各种衍生的版本如 <code v-pre>SMUS</code>、<code v-pre>JMSEUS</code> <code v-pre>FCM</code>、<code v-pre>iterationT Next</code>、<code v-pre>Lrbs</code>、<code v-pre>AE-Shader</code> 等等……都带来了各有特色的 <strong>效果</strong> 与 <strong>画质</strong>（同时占用的性能也更多）。</li>
<li><code v-pre>SEUS V10</code> ~ <code v-pre>SEUS V11</code> 都属于一个系列的光影，用显卡来衡量的话，<strong>台式</strong> 大概 <code v-pre>GTX1050Ti-GTX1060 5G</code> 可以达到流畅的 <code v-pre>60 帧</code>，而 <strong>笔记本</strong>
则是 <code v-pre>GTX1060 6G</code> 才有同样的帧数，</li>
<li><code v-pre>SEUS Renewed 系列</code> 属于 <code v-pre>V10</code> 与 <code v-pre>V11</code> 取长补短的结合体，画质 <strong>超过二者</strong> 的同时对 <strong>性能要求没有上升很多</strong>，目前 <strong>笔记本</strong> 大概 <code v-pre>GTX1650</code> 可以达到 <code v-pre>60 帧</code>，**
台式** 则是 <code v-pre>GTX1060 6G</code>。</li>
<li>剩下的光影在 <a href="https://shaoxiu.net/files/" target="_blank" rel="noopener noreferrer">资源收录区<ExternalLinkIcon/></a> 都有标注，可以自行按照这个标准上下调整，</li>
<li>低配的（如 <code v-pre>Chocapic13 V3 系列</code>、<code v-pre>SVS 系列</code>）即使是 <code v-pre>GTX750 Ti</code> 也 <strong>足够</strong> 了，</li>
<li>而高配（如：<code v-pre>iterationT Next</code>）台式机需要 <code v-pre>GTX1660 Super</code> 才可能达到 <code v-pre>60 帧</code>（<strong>对着天空帧数会暴降</strong>）。</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p><strong>很多人都说材质吃 <code v-pre>电脑 CPU</code>，<code v-pre>吃显卡</code>，但实际上它主要 <code v-pre>吃运行内存</code>：</strong></p>
<ul>
<li><code v-pre>CPU</code> 和 <code v-pre>显卡</code> 只要不是 <strong>接近报废的</strong> 或 <strong>早已淘汰的</strong>，都 <strong>不会影响</strong> 帧数。</li>
<li>要想知道一个材质包具体吃多少内存，是 <strong>不可能</strong> 根据分辨率 <strong>简简单单</strong> 就判定的，</li>
<li>影响到运行内存的因素有很多，除了 <code v-pre>分辨率</code> 外还有 <code v-pre>贴图覆盖率</code>，还有 <code v-pre>在覆盖率</code> 之外的 <code v-pre>法线贴图</code>、<code v-pre>CTM</code> 等，甚至还有 <code v-pre>运行内存</code>（同样的材质 <code v-pre>8G</code> 与 <code v-pre>16G</code>
都能运行，但占用的内存根据各自的空余内存也不同），</li>
<li>这些因素叠加在一起 <strong>共同影响</strong> 着运行内存。因此多少分辨率吃多少内存 <strong>永远不可能</strong> 有确定的答案，<strong>实践是检验真理的唯一标准！</strong></li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p><strong>很多人也觉得 <code v-pre>MC</code> 吃 <code v-pre>电脑 CPU</code>：</strong></p>
<ul>
<li>然而实际上<strong>添加</strong> 了 <code v-pre>光影</code>、<code v-pre>材质</code>、<code v-pre>Mod</code> 的 <strong>MC</strong> <strong>吃</strong> <code v-pre>显卡</code>、<code v-pre>内存</code>、<code v-pre>硬盘</code>，就是<strong>不吃</strong> <code v-pre>高端 CPU</code>。</li>
<li>因为 <code v-pre>CPU</code> 占用拉满的时候 <strong>只有两次</strong>：
<ol>
<li><code v-pre>MC</code> 启动后加载游戏；</li>
<li>进入游戏后加载地图。</li>
</ol>
</li>
<li>同时由于 <code v-pre>MC</code> <strong>没有</strong> <code v-pre>多线程优化</code>（<code v-pre>Forge</code> 已经添加了<code v-pre>多线程优化</code>，但仍然还是吃 <strong>主频</strong>，优化只是顺带的），导致最终需要的 <code v-pre>CPU</code> <strong>一定是</strong> <code v-pre>主频高</code> 的，<strong>而不是</strong> <code v-pre>核多线程多</code>
的。</li>
<li>像服务器主机经常使用的 <code v-pre>Intel 至强处理器</code> 就 <strong>不适合</strong> 玩 <code v-pre>MC</code> 这种游戏。</li>
</ul>
</li>
</ul>
</div></template>

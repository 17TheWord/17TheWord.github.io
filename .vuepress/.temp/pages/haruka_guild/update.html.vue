<template><div><h1 id="更新-问题记录" tabindex="-1"><a class="header-anchor" href="#更新-问题记录" aria-hidden="true">#</a> 更新 &amp; 问题记录</h1>
<h2 id="_2022-11-27" tabindex="-1"><a class="header-anchor" href="#_2022-11-27" aria-hidden="true">#</a> <em>2022 / 11 / 27</em></h2>
<ul>
<li>补丁已合并至主分支并正式发布</li>
<li>不出意外本文档不会再进行更新</li>
<li>需要在频道使用请前往 <a href="https://haruka-bot.sk415.icu/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></li>
</ul>
<p>此处不再记录，请前往 <a href="https://github.com/17TheWord/HarukaBot_Guild_Patch/releases" target="_blank" rel="noopener noreferrer">Releases<ExternalLinkIcon/></a> 查看</p>
<h2 id="_2022-8-22" tabindex="-1"><a class="header-anchor" href="#_2022-8-22" aria-hidden="true">#</a> <em>2022 / 8 / 22</em></h2>
<ul>
<li>
<p><strong>新添加：</strong></p>
<ul>
<li>子频道被删除时，删除该子频道的订阅列表</li>
<li>清空 <code v-pre>群 / 子频道</code> 订阅列表</li>
<li>一次 <code v-pre>添加 / 取消</code> 多个管理</li>
<li>频道中的 <code v-pre>permission_check</code></li>
</ul>
</li>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>权限判定并入到 <code v-pre>utils</code> 的 <code v-pre>permission_check</code></li>
</ul>
</li>
<li>
<p><strong>移除：</strong></p>
<ul>
<li>脚手架安装方法的 <code v-pre>启用频道适配补丁</code></li>
</ul>
</li>
<li>
<p><strong>注意：</strong></p>
<ul>
<li>FASTAPI_RELOAD
<ul>
<li><code v-pre>Windows</code> 必须设置 <code v-pre>FASTAPI_RELOAD=false</code> 才能正常运行 <code v-pre>HarukaBot</code></li>
<li>在配置文件，如 <code v-pre>.env.dev</code></li>
<li>将 <code v-pre>FASTAPI_RELOAD=true</code></li>
<li>改为 <code v-pre>FASTAPI_RELOAD=false</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-8-20" tabindex="-1"><a class="header-anchor" href="#_2022-8-20" aria-hidden="true">#</a> <em>2022 / 8 / 20</em></h2>
<ul>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>安装方法改动
<ul>
<li><code v-pre>v1.4.1a60 测试版</code> 不再锁 <code v-pre>nonebot</code> 版本</li>
<li>无需因pip安装修改 <code v-pre>utils</code> -&gt; <code v-pre>__init__.py</code> 如下内容
<ul>
<li><code v-pre>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li>
<li>改为</li>
<li><code v-pre>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>注意：</strong></p>
<ul>
<li>FASTAPI_RELOAD
<ul>
<li><code v-pre>Windows</code> 必须设置 <code v-pre>FASTAPI_RELOAD=false</code> 才能正常运行 <code v-pre>HarukaBot</code></li>
<li>在配置文件，如 <code v-pre>.env.dev</code></li>
<li>将 <code v-pre>FASTAPI_RELOAD=true</code></li>
<li>改为 <code v-pre>FASTAPI_RELOAD=false</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-8-18" tabindex="-1"><a class="header-anchor" href="#_2022-8-18" aria-hidden="true">#</a> <em>2022 / 8 / 18</em></h2>
<ul>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>安装方法改动
<ul>
<li>原版 <code v-pre>haruka_bot</code>、<code v-pre>频道适配补丁</code> 均用 <code v-pre>脚手架</code> 或 <code v-pre>NoneBot2 插件商店</code> 安装</li>
<li>在虚拟环境 <code v-pre>venv</code> -&gt; <code v-pre>Lib</code> -&gt; <code v-pre>site-packages</code> -&gt; <code v-pre>haruka_bot</code> 依次替换文件</li>
<li><code v-pre>utils</code> -&gt; <code v-pre>__init__.py</code>
<ul>
<li>pip 安装
<ul>
<li><code v-pre>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li>
<li>改为</li>
<li><code v-pre>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>注意：</strong></p>
<ul>
<li>FASTAPI_RELOAD
<ul>
<li><code v-pre>Windows</code> 必须设置 <code v-pre>FASTAPI_RELOAD=false</code> 才能正常运行 <code v-pre>HarukaBot</code></li>
<li>在配置文件，如 <code v-pre>.env.dev</code></li>
<li>将 <code v-pre>FASTAPI_RELOAD=true</code></li>
<li>改为 <code v-pre>FASTAPI_RELOAD=false</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-8-9" tabindex="-1"><a class="header-anchor" href="#_2022-8-9" aria-hidden="true">#</a> <em>2022 / 8 / 9</em></h2>
<ul>
<li>
<p><strong>新增：</strong></p>
<ul>
<li>将 <code v-pre>频道ID + 子频道ID</code> 字段分割成两个字段</li>
<li>配置文件设置 <code v-pre>超级用户ID</code> 与 <code v-pre>管理员身份组</code></li>
</ul>
</li>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>
<p>安装方法改动</p>
<ul>
<li>原版 <code v-pre>haruka_bot</code>、<code v-pre>频道适配补丁</code> 均用 <code v-pre>脚手架</code> 或 <code v-pre>NoneBot2 插件商店</code> 安装</li>
<li>在虚拟环境 <code v-pre>venv</code> -&gt; <code v-pre>Lib</code> -&gt; <code v-pre>site-packages</code> -&gt; <code v-pre>haruka_bot</code> 依次替换文件</li>
<li><code v-pre>utils</code> -&gt; <code v-pre>__init__.py</code>
<ul>
<li>pip 安装
<ul>
<li><code v-pre>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li>
<li>改为</li>
<li><code v-pre>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>推送方法修改，重写频道推送逻辑</p>
</li>
<li>
<p>权限判断重写，一并挪至 <code v-pre>utils</code> -&gt; <code v-pre>__init__.py</code></p>
</li>
<li>
<p>管理员操作调整</p>
</li>
<li>
<p>频道超级用户ID</p>
<ul>
<li>安装方法改动，为方便管理，将插件目录下 <code v-pre>GuildSuperUsers.py</code> 删除</li>
<li>在配置文件中通过 <code v-pre>Haruka_Guild_Super_User_List = [&quot;xxx&quot;]</code> 设置频道超级用户ID</li>
</ul>
</li>
<li>
<p>FASTAPI_RELOAD</p>
<ul>
<li><code v-pre>Windows</code> 必须设置 <code v-pre>FASTAPI_RELOAD=false</code> 才能正常运行 <code v-pre>HarukaBot</code></li>
<li>在配置文件，如 <code v-pre>.env.dev</code></li>
<li>将 <code v-pre>FASTAPI_RELOAD=true</code> 改为 <code v-pre>FASTAPI_RELOAD=false</code></li>
</ul>
</li>
<li>
<p><code v-pre>utils</code> 目录中 <code v-pre>__init__.py</code></p>
<ul>
<li><code v-pre>from nonebot.adapters.onebot.v11.exception</code></li>
<li>改为</li>
<li><code v-pre>from nonebot.adapters.onebot.V11</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-7-2" tabindex="-1"><a class="header-anchor" href="#_2022-7-2" aria-hidden="true">#</a> <em>2022 / 7 / 2</em></h2>
<ul>
<li>
<p><strong>新增：</strong></p>
<ul>
<li>支持<code v-pre>通过频道身份组</code> 设置 <code v-pre>Bot 管理员</code></li>
<li>支持<code v-pre>自定义身份组名称</code></li>
<li>支持<code v-pre>自定义多个身份组</code></li>
<li><code v-pre>身份组权限 Bug</code> 修复，现已支持</li>
</ul>
</li>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>现已可以开启 <code v-pre>@ 机器人命令</code>，在最新版频道补丁中已实现 <code v-pre>@消息</code>
<ul>
<li><code v-pre>Haruka_TO_ME=True</code> 或 <code v-pre>删除</code> 这一行代码</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>无改动：</strong></p>
<ul>
<li>频道超级用户列表：
<ul>
<li>在频道命令中添加判定 <code v-pre>用户频道 ID</code> 是否在列表中，以暂时解决权限问题。</li>
<li>该组用于管理对数据库中的管理员，将继续保留。</li>
</ul>
</li>
<li>指令添加频道管理员功能：
<ul>
<li>频道超级用户可在频道中使用 <code v-pre>添加 / 取消 @ 频道用户</code> 来设置频道 <code v-pre>Bot 管理员</code>。</li>
<li>管理员只能使用机器人的 <code v-pre>关注 / 取关</code> 功能，没有其他权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>建议推送频道设为只读：</strong></p>
<ul>
<li>虽然暂时解决了权限问题，但频道主/频道管理员，你也不想让你的推送子频道充斥各种聊天信息吧。</li>
<li><s>由于频道用户ID不同于QQ号，猜测超级用户不会生效</s> 已通过设置频道超级用户暂时解决。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-6-9-2" tabindex="-1"><a class="header-anchor" href="#_2022-6-9-2" aria-hidden="true">#</a> <em>2022 / 6 / 9_2</em></h2>
<ul>
<li>
<p><strong>新增：</strong></p>
<ul>
<li><s>支持通过频道身份组设置 <code v-pre>Bot 管理员</code></s></li>
<li><s>支持<code v-pre>自定义身份组名称</code></s></li>
<li><s>支持<code v-pre>自定义多个身份组</code></s></li>
<li>因为某些问题，发现 <code v-pre>Bug</code>，已取消</li>
</ul>
</li>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>指令添加频道管理员功能：
<ul>
<li>在超级用户使用 <code v-pre>管理员增减</code>、<code v-pre>管理列表</code> 操作时候，会将该用户的 <code v-pre>频道 ID</code> <s>展示出来</s>替换为频道昵称，保护隐私。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>无改动：</strong></p>
<ul>
<li>频道超级用户列表：
<ul>
<li>在频道命令中添加判定 <code v-pre>用户频道 ID</code> 是否在列表中，以暂时解决权限问题。</li>
<li>该组用于管理对数据库中的管理员，将继续保留。</li>
</ul>
</li>
<li>指令添加频道管理员功能：
<ul>
<li>频道超级用户可在频道中使用 <code v-pre>添加 / 取消 @ 频道用户</code> 来设置频道 <code v-pre>Bot 管理员</code>。</li>
<li>管理员只能使用机器人的 <code v-pre>关注 / 取关</code> 功能，没有其他权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>仍旧建议：</strong></p>
<ul>
<li>关闭@机器人命令，因为不清楚频道与群的@方式是否相同 <code v-pre>Haruka_TO_ME=False</code></li>
</ul>
</li>
<li>
<p><strong>建议推送频道设为只读：</strong></p>
<ul>
<li>虽然暂时解决了权限问题，但频道主/频道管理员，你也不想让你的推送子频道充斥各种聊天信息吧。</li>
<li><s>由于频道用户ID不同于QQ号，猜测超级用户不会生效</s> 已通过设置频道超级用户暂时解决。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-6-9-1" tabindex="-1"><a class="header-anchor" href="#_2022-6-9-1" aria-hidden="true">#</a> <em>2022 / 6 / 9_1</em></h2>
<ul>
<li>
<p><strong>改动：</strong></p>
<ul>
<li>指令添加频道管理员功能：
<ul>
<li>频道超级用户可在频道中使用 <code v-pre>添加 / 取消 @ 频道用户</code> 来设置频道Bot管理员。(非常方便)</li>
<li>在超级用户使用 <code v-pre>管理员增减</code>、<code v-pre>管理列表</code> 操作时候，会将该用户的 <code v-pre>频道 ID</code> 展示出来。</li>
<li>管理员只能使用机器人的 <code v-pre>关注 / 取关</code> 功能，没有其他权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>无改动：</strong></p>
<ul>
<li>频道超级用户列表，在频道命令中添加判定 <code v-pre>用户频道 ID</code> 是否在列表中，以暂时解决权限问题。</li>
</ul>
</li>
<li>
<p><strong>仍旧建议：</strong></p>
<ul>
<li>关闭@机器人命令，因为不清楚频道与群的@方式是否相同 <code v-pre>Haruka_TO_ME=False</code></li>
</ul>
</li>
<li>
<p><strong>建议推送频道设为只读：</strong></p>
<ul>
<li>虽然暂时解决了权限问题，但频道主/频道管理员，你也不想让你的推送子频道充斥各种聊天信息吧。</li>
<li><s>由于频道用户ID不同于QQ号，猜测超级用户不会生效</s> 已通过设置频道超级用户暂时解决。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-6-8" tabindex="-1"><a class="header-anchor" href="#_2022-6-8" aria-hidden="true">#</a> <em>2022 / 6 / 8</em></h2>
<ul>
<li>
<p><strong>新增：</strong></p>
<ul>
<li>频道超级用户列表，在频道命令中添加判定 <code v-pre>用户频道 ID</code> 是否在列表中，以暂时解决权限问题。</li>
<li>指令添加频道管理员功能：
<ul>
<li>频道超级用户可在频道中使用 <code v-pre>添加 / 取消 用户频道ID</code> 来设置频道Bot管理员。</li>
<li>管理员只能使用机器人的 <code v-pre>关注 / 取关</code> 功能，没有其他权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>仍旧建议：</strong></p>
<ul>
<li>关闭@机器人命令，因为不清楚频道与群的@方式是否相同 <code v-pre>Haruka_TO_ME=False</code></li>
</ul>
</li>
<li>
<p><strong>建议推送频道设为只读：</strong></p>
<ul>
<li>虽然暂时解决了权限问题，但频道主/频道管理员，你也不想让你的推送子频道充斥各种聊天信息吧。</li>
<li><s>由于频道用户ID不同于QQ号，猜测超级用户不会生效</s> 已通过设置频道超级用户暂时解决。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-5-28" tabindex="-1"><a class="header-anchor" href="#_2022-5-28" aria-hidden="true">#</a> <em>2022 / 5 / 28</em></h2>
<ul>
<li>
<p><strong>新增：</strong></p>
<ul>
<li>频道超级用户列表，在频道命令中添加判定 <code v-pre>频道用户 ID</code> 是否在列表中，以暂时解决权限问题</li>
</ul>
</li>
<li>
<p><strong>仍旧建议：</strong></p>
<ul>
<li>关闭 <code v-pre>@ 机器人</code> 命令，因为不清楚频道与群的 <code v-pre>@ 方式</code> 是否相同 <code v-pre>Haruka_TO_ME=False</code></li>
</ul>
</li>
<li>
<p><strong>建议推送频道设为只读：</strong></p>
<ul>
<li>虽然暂时解决了权限问题，但 <code v-pre>频道主 / 频道管理员</code>，你也不想让你的推送子频道充斥各种聊天信息吧。</li>
<li>由于 <code v-pre>频道用户 ID</code> 不同于 <code v-pre>QQ 号</code>，猜测超级用户不会生效</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-5-26-2" tabindex="-1"><a class="header-anchor" href="#_2022-5-26-2" aria-hidden="true">#</a> <em>2022 / 5 / 26-2</em></h2>
<ul>
<li>
<p><strong>建议：</strong></p>
<ul>
<li><strong>关闭</strong> <code v-pre>@ 机器人</code> 命令，因为不清楚频道与群的 <code v-pre>@ 方式</code> 是否相同 <code v-pre>Haruka_TO_ME=False</code></li>
</ul>
</li>
<li>
<p><s>建议</s> <strong>强烈建议</strong>推送频道设为只读：</p>
<ul>
<li>由于 <code v-pre>频道用户 ID</code> 不同于 <code v-pre>QQ 号</code>，<strong>猜测</strong> 超级用户不会生效</li>
<li>经测试，频道内不存在权限系统，任何人都可以使用命令，在使用时请慎重检查频道人员成分</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_2022-5-26-1" tabindex="-1"><a class="header-anchor" href="#_2022-5-26-1" aria-hidden="true">#</a> <em>2022 / 5 / 26-1</em></h2>
<ul>
<li>
<p>因为不清楚频道与群的 <code v-pre>@ 方式</code> 是否相同，建议 <strong>关闭</strong> <code v-pre>@ 机器人</code> 命令 <code v-pre>Haruka_TO_ME=False</code></p>
</li>
<li>
<p>因数据库中数据类型改动，需要删除数据库重新订阅！！！！！！</p>
</li>
<li>
<p>建议推送频道设为只读，频道内权限与群内权限不一定相同（应该是不同的，在频道内输入开启权限并没有什么反应）</p>
</li>
</ul>
</div></template>

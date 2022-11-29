<template><div><h1 id="更新-问题记录" tabindex="-1"><a class="header-anchor" href="#更新-问题记录" aria-hidden="true">#</a> 更新 &amp; 问题记录</h1>
<h2 id="_2022-7-2" tabindex="-1"><a class="header-anchor" href="#_2022-7-2" aria-hidden="true">#</a> <em>2022 / 7 / 2：</em></h2>
<ul>
<li>
<p><strong>新添加：</strong></p>
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
<h2 id="_2022-6-9-2" tabindex="-1"><a class="header-anchor" href="#_2022-6-9-2" aria-hidden="true">#</a> <em>2022 / 6 / 9_2</em></h2>
<ul>
<li>
<p><strong>新添加：</strong></p>
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
<h2 id="_2022-6-8" tabindex="-1"><a class="header-anchor" href="#_2022-6-8" aria-hidden="true">#</a> <em>2022 / 6 / 8</em></h2>
<ul>
<li>
<p><strong>新添加：</strong></p>
<ul>
<li>频道超级用户列表，在频道命令中添加判定 <code v-pre>用户频道 ID</code> 是否在列表中，以暂时解决权限问题。</li>
</ul>
</li>
<li>
<p><strong>新添加：</strong></p>
<ul>
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
<h2 id="_2022-5-28" tabindex="-1"><a class="header-anchor" href="#_2022-5-28" aria-hidden="true">#</a> <em>2022 / 5 / 28</em></h2>
<ul>
<li>
<p><strong>新添加：</strong></p>
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

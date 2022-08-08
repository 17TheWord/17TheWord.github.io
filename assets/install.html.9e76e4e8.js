import{_ as d,o as l,c,a as e,b as n,d as o,e as a,r as t}from"./app.4358a351.js";const s={},r=e("h1",{id:"\u4F7F\u7528\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F7F\u7528\u65B9\u6CD5","aria-hidden":"true"},"#"),o(" \u4F7F\u7528\u65B9\u6CD5")],-1),u=e("h3",{id:"\u524D\u7F6E\u9700\u6C42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u7F6E\u9700\u6C42","aria-hidden":"true"},"#"),o(" \u524D\u7F6E\u9700\u6C42")],-1),p={href:"https://github.com/mnixry/nonebot-plugin-guild-patch",target:"_blank",rel:"noopener noreferrer"},x=o("nonebot-plugin-guild-patch"),_=o("\uFF1A\u9891\u9053\u9002\u914D\u8865\u4E01\u3002"),h=e("li",null,[e("p",null,"\u76EE\u5F55\u7ED3\u6784\u53C2\u8003\uFF1A")],-1),v=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F4E6} HarukaBot-master
\u251C\u2500\u2500 \u{1F4C2} plugins
\u2502   \u251C\u2500\u2500 \u{1F4C2} haruka_bot      # haruka_bot \u7684\u63D2\u4EF6\uFF01\u4E0D\u662F HarukaBot\u672C\u8EAB 
\u2502   \u2514\u2500\u2500 \u{1F4C2} nonebot_plugin_guild_patch        # \u9891\u9053\u9002\u914D\u63D2\u4EF6
\u251C\u2500\u2500 \u{1F4C2} src                 # \u6216\u662F HarukaBot-master
\u251C\u2500\u2500 \u{1F4DC} .env                # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .env.dev            # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .env.prod           # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .gitignore
\u251C\u2500\u2500 \u{1F4DC} bot.py
\u251C\u2500\u2500 \u{1F4DC} docker-compose.yml
\u251C\u2500\u2500 \u{1F4DC} Dockerfile
\u251C\u2500\u2500 \u{1F4DC} pyproject.toml
\u2514\u2500\u2500 \u{1F4DC} README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h3><ul><li><p>\u8BF7\u5728 <code>utils</code> \u4E2D\u7684 <code>__init__.py</code> \u4E2D\u4FEE\u6539 \u7B2C20\u884C\uFF1A</p></li><li><p><code>from plugins.nonebot_plugin_guild_patch import GuildMessageEvent</code></p></li><li><p>\u4E2D\u7684 <code>plugins.nonebot_plugin_guild_patch</code> \u90E8\u5206\uFF0C</p></li><li><p>\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u9891\u9053\u9002\u914D\u8865\u4E01\u7684\u4F4D\u7F6E\u3002</p></li><li><p>\u5728NoneBot\u4E2D\uFF0C<code>bot.py</code> \u6240\u5728\u7684\u76EE\u5F55\u4E3A <code>\u6839\u76EE\u5F55</code></p></li><li><p>\u53EF\u6839\u636E\u6B64 <code>\u6839\u76EE\u5F55</code> \u66F4\u6539\u76F8\u5BF9\u4F4D\u7F6E</p></li></ul><hr><h3 id="\u73AF\u5883\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u8BBE\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u8BBE\u7F6E</h3><ul><li><p>\u9891\u9053\u7684 <code>@\u65B9\u5F0F</code> \u5728\u6700\u65B0\u9891\u9053\u8865\u4E01\u5DF2\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u9009\u62E9 <code>\u5F00\u542F</code> \u6216 <code>\u5173\u95ED</code>\u3002</p><ul><li>\u5728\u4F60\u7684\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E \uFF08\u5982\uFF1A<code>.env.dev</code> \u4E2D\uFF09\uFF0C</li><li>\u65B0\u5EFA\u4E00\u884C\uFF0C\u5199\u5165\uFF1A<code>Haruka_TO_ME=False</code>\u3002</li><li><code>Haruka_TO_ME=False</code> \u5173\u95ED @</li><li><code>Haruka_TO_ME=True</code> \u5F00\u542F @</li></ul></li><li><p>\u8BBE\u7F6E\u9891\u9053\u7BA1\u7406\u5458\u8EAB\u4EFD\u7EC4\uFF1A</p><ul><li>\u65B0\u5EFA\u4E00\u884C\uFF0C\u5199\u5165\uFF1A<code>HARUKA_GUILD_ADMIN_GROUPS=[&quot;xxx&quot;,&quot;Haruka&quot;]</code></li><li>\u5C06 <code>xxx</code> \u66FF\u6362\u4E3A\u4F60\u7684\u8EAB\u4EFD\u7EC4\u7684\u540D\u79F0</li><li>\u8BE6\u60C5\u89C1 <code>\u5B89\u88C5</code> --&gt; <code>\u8BBE\u7F6E\u9891\u9053\u7BA1\u7406\u5458\u8EAB\u4EFD\u7EC4</code></li></ul></li></ul><hr><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ul><li><p><strong>\u5047\u8BBE <code>haruka_bot</code> \u76EE\u5F55\u4E3A <code>\u6839\u76EE\u5F55</code>\uFF1A</strong></p><ul><li><p>\u66FF\u6362 <code>database</code> \u76EE\u5F55\u4E0B\u7684 <code>models.py</code></p></li><li><p>\u66FF\u6362 <code>database</code> \u76EE\u5F55\u4E0B\u7684 <code>db.py</code></p></li><li><p>\u66FF\u6362 <code>utils</code> \u76EE\u5F55\u4E0B\u7684 <code>__init__.py</code></p></li><li><p>\u66FF\u6362 <code>plugins</code> \u76EE\u5F55\u4E0B\u7684 <code>__init__.py</code></p></li><li><p>\u66FF\u6362 <code>plugins</code> --&gt; <code>sub</code> \u76EE\u5F55\u4E0B\u7684 <code>add_sub.py</code> \u548C <code>delete_sub.py</code></p></li><li><p>\u590D\u5236 <code>plugins</code> \u76EE\u5F55\u4E0B\u7684 <code>guildadmin</code> \u5230\u4F60\u7684 <code>plugins</code> \u76EE\u5F55</p></li></ul></li><li><p><strong>\u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237\uFF0C\u4EE5\u4E0B\u6B65\u9AA4\u4E8C\u9009\u4E00 \uFF01\uFF01\uFF01</strong></p><ol><li>\u5C06 <code>GuildSuperUsers.py</code> \u653E\u5230 <code>\u6839\u76EE\u5F55 haruka_bot</code> \u4E2D\uFF1A <ul><li>\u4FEE\u6539 <code>GuildSuperUserList = [&quot;xxxxxx&quot;,&quot;xxxxxx&quot;]</code></li><li>\u5C06 <code>xxxxxx</code> \u66FF\u6362\u4E3A\u4F60\u8981\u8BBE\u7F6E\u7684\u8D85\u7EA7\u7528\u6237\u7684 <code>\u9891\u9053\u7528\u6237ID</code></li></ul></li><li>\u5728 <code>\u6839\u76EE\u5F55haruka_bot</code> \u76EE\u5F55\u65B0\u5EFA <code>GuildSuperUsers.py</code><ul><li>\u8F93\u5165 <code>GuildSuperUserList = [&quot;xxxxxx&quot;,&quot;xxxxxx&quot;]</code>\uFF1A</li><li>\u5C06 <code>xxxxxx</code> \u66FF\u6362\u4E3A\u4F60\u8981\u8BBE\u7F6E\u7684\u8D85\u7EA7\u7528\u6237\u7684 <code>\u9891\u9053\u7528\u6237ID</code></li></ul></li></ol></li><li><p><strong>\u8BBE\u7F6E\u9891\u9053\u7BA1\u7406\u5458\uFF1A</strong></p><ul><li>\u5728\u9891\u9053\u4E2D\u4F7F\u7528\u547D\u4EE4 <code>\u6DFB\u52A0 / \u53D6\u6D88 @xxx</code> \u5373\u53EF\u8FDB\u884C\u7BA1\u7406\u5458\u7684\u589E\u51CF\u64CD\u4F5C</li><li>\u7BA1\u7406\u5458\u53EF\u4EE5\u4F7F\u7528 <code>\u5173\u6CE8 / \u53D6\u5173</code> \u529F\u80FD</li><li>\u53EA\u6709 <strong>\u8D85\u7EA7\u7528\u6237</strong> \u624D\u53EF\u4EE5\u589E\u51CF\u7BA1\u7406\u5458</li><li>\u901A\u8FC7 <code>@</code> \u5BF9\u7BA1\u7406\u5458\u8FDB\u884C\u589E\u51CF\u64CD\u4F5C</li></ul></li><li><p><strong>\u8BBE\u7F6E\u9891\u9053\u7BA1\u7406\u5458\u8EAB\u4EFD\u7EC4\uFF1A</strong></p><ul><li>\u65B0\u5EFA\u4E00\u884C\uFF0C\u5199\u5165 <code>Haruka_GUILD_ADMIN_NAME = [&quot;xxx&quot;, &quot;xxxx&quot;]</code>\uFF0C</li><li>\u5C06 <code>xxx</code> \u66FF\u6362\u4E3A\u4F60\u7684\u9891\u9053\u7BA1\u7406\u5458\u7684\u8EAB\u4EFD\u7EC4\u7684\u540D\u79F0\uFF0C</li><li>\u652F\u6301\u591A\u4E2A\u8EAB\u4EFD\u7EC4\uFF08\u5176\u5B9E\u662F\u76EE\u524D\u6CA1\u6709\u4E00\u952E\u632A\u4EBA\u7684\u529F\u80FD\uFF0C\u5E72\u8106\u76F4\u63A5\u591A\u4E2A\u7EC4\u89E3\u51B3\uFF09\u3002</li></ul></li></ul>`,9);function b(g,m){const i=t("ExternalLinkIcon");return l(),c("div",null,[r,u,e("ul",null,[e("li",null,[e("p",null,[e("a",p,[x,n(i)]),_])]),h]),v])}var f=d(s,[["render",b],["__file","install.html.vue"]]);export{f as default};

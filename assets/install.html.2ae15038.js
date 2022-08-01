import{_ as n,o as s,c as e,e as a}from"./app.45e7cf03.js";const i={},l=a(`<h1 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u4F7F\u7528\u8BF4\u660E</h1><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><ul><li><p><code>Python 3.10.5</code></p><ul><li><code>websockets 10.3</code></li></ul></li><li><p><code>nb-cli 0.6.7</code></p><ul><li><code>nonebot-adapter-onebot 2.1.1</code></li><li><code>nonebot2 2.0.0b4</code></li><li><code>nonebot-plugin-guild-patch</code></li></ul></li><li><p><code>OpenJDK 17</code></p></li><li><p><code>Minecraft 1.18.1</code></p></li><li><p><code>Spigot 1.18.1</code></p></li></ul><hr><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="nonebot" tabindex="-1"><a class="header-anchor" href="#nonebot" aria-hidden="true">#</a> NoneBot</h3><ul><li>\u4E0B\u8F7D <code>nonebot-plugin-guild-patch</code>\u3001<code>nonebot_plugin_msgqq</code> \u5230 <code>plugins</code> \u6587\u4EF6\u5939</li><li>\u4E0B\u8F7D <strong>/</strong> \u65B0\u5EFA <code>msg_qq_config.py</code> \u914D\u7F6E\u6587\u4EF6\u5230 <code>src</code> \u76EE\u5F55\u4E0B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5728\u6B64\u586B\u5165 WebSocket \u5730\u5740</span>
<span class="token comment"># \u4E00\u822C\u4FEE\u6539\u53EA\u4FEE\u6539\u7AEF\u53E3\u53F7</span>
ws_url <span class="token operator">=</span> <span class="token string">&quot;ws://localhost:8765&quot;</span>

<span class="token comment"># \u5F00\u542F\u529F\u80FD\u7684\u7FA4\u548C\u9891\u9053\u5217\u8868</span>
group_list <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u7FA4\u5217\u8868</span>
    <span class="token string">&quot;group_list&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># \u7FA4\u53F7</span>
        <span class="token number">123456789</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment"># \u9891\u9053\u5217\u8868</span>
    <span class="token string">&quot;guild_list&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment"># \u9891\u9053 ID</span>
            <span class="token string">&quot;guild_id&quot;</span><span class="token punctuation">:</span> <span class="token number">12345678909876543</span><span class="token punctuation">,</span>
            <span class="token comment"># \u5B50\u9891\u9053 ID</span>
            <span class="token string">&quot;channel_id&quot;</span><span class="token punctuation">:</span> <span class="token number">1234567</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u76EE\u5F55\u7ED3\u6784\u53C2\u8003\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F4E6} test_bot
\u251C\u2500\u2500 \u{1F4C2} plugins
\u2502   \u251C\u2500\u2500 \u{1F4C2} nonebot_plugin_msgqq      # msgqq \u63D2\u4EF6
\u2502   \u2514\u2500\u2500 \u{1F4C2} nonebot_plugin_guild_patch        # \u9891\u9053\u9002\u914D\u63D2\u4EF6
\u251C\u2500\u2500 \u{1F4C2} src                 # \u6216\u662F test_bot
\u2502   \u2514\u2500\u2500 \u{1F4DC} msg_qq_config.py
\u251C\u2500\u2500 \u{1F4DC} .env                # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .env.dev            # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .env.prod           # \u53EF\u9009\u7684
\u251C\u2500\u2500 \u{1F4DC} .gitignore
\u251C\u2500\u2500 \u{1F4DC} bot.py
\u251C\u2500\u2500 \u{1F4DC} docker-compose.yml
\u251C\u2500\u2500 \u{1F4DC} Dockerfile
\u251C\u2500\u2500 \u{1F4DC} pyproject.toml
\u2514\u2500\u2500 \u{1F4DC} README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minecraft-server" tabindex="-1"><a class="header-anchor" href="#minecraft-server" aria-hidden="true">#</a> Minecraft Server</h3><ul><li>\u5C06 <code>Msg_QQ.jar</code> \u653E\u5165 <code>Minecraft</code> \u670D\u52A1\u5668 <code>plugins</code> \u6587\u4EF6\u5939</li><li>\u542F\u52A8\u670D\u52A1\u5668\u540E\u63D2\u4EF6\u5C06\u81EA\u52A8\u751F\u6210\u914D\u7F6E\u6587\u4EF6\u5E76\u5199\u5165\u9ED8\u8BA4\u4FE1\u606F</li><li>\u9ED8\u8BA4\u4FE1\u606F\u53C2\u8003\u5982\u4E0B\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u662F\u5426\u542F\u7528\u63D2\u4EF6</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3A true</span>
<span class="token key atrule">enable_msg_qq</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u8BF7\u5728\u5192\u53F7\u540E\u586B\u5199 WebSocket \u670D\u52A1\u7684\u5730\u5740\u7AEF\u53E3\u53F7\u3002</span>
<span class="token comment"># \u53EA\u586B\u5199\u6570\u5B57\u5373\u53EF\u3002</span>
<span class="token comment"># \u5192\u53F7\u540E\u9700\u8981\u7A7A\u4E00\u683C\uFF01</span>
<span class="token comment"># \u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u5730\u5740\u9ED8\u8BA4\u4E3A 0.0.0.0 \uFF0C\u7AEF\u53E3\u9ED8\u8BA4\u4E3A 8765</span>
<span class="token key atrule">websocket_server</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&quot;8765&quot;</span>

<span class="token comment"># \u53D1\u9001\u5230\u7FA4\u6D88\u606F\u4E2D\uFF0C\u73A9\u5BB6\u6635\u79F0\u4E0E\u6D88\u606F\u4E4B\u95F4\u7684\u7B26\u53F7</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3A\u4E2D\u6587\u5192\u53F7 \u201C\uFF1A\u201D</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord \uFF1A \u4F60\u597D</span>
<span class="token key atrule">say_way</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8BF4\uFF1A&quot;</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u76D1\u542C</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u73A9\u5BB6 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u65F6\uFF0CBot\u4F1A\u968F\u63A8\u9001\u4FE1\u606F</span>
<span class="token comment"># \u9ED8\u8BA4\u6253\u5F00</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord \u52A0\u5165\u4E86\u670D\u52A1\u5668</span>
<span class="token comment">#   17TheWord \u79BB\u5F00\u4E86\u670D\u52A1\u5668</span>
<span class="token key atrule">join_quit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210" aria-hidden="true">#</a> \u5B8C\u6210</h2><p>\u5982\u679C\u4E00\u5207\u987A\u5229\u7684\u8BDD\uFF0C\u5230\u8FD9\u91CC\u4F60\u7684\u6D88\u606F\u4E92\u901A\u5DF2\u7ECF\u642D\u5EFA\u5B8C\u6210\u4E86\u3002</p>`,15),c=[l];function t(o,d){return s(),e("div",null,c)}var u=n(i,[["render",t],["__file","install.html.vue"]]);export{u as default};

import{_ as l,r as t,o as i,c as o,a as n,b as c,w as m,d as s,e}from"./app.32b76693.js";const d={},p=n("h1",{id:"minecraft-server",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#minecraft-server","aria-hidden":"true"},"#"),s(" Minecraft Server")],-1),r={class:"custom-container warning"},v=n("p",{class:"custom-container-title"},"\u6CE8\u610F\uFF01",-1),u=s("\u82E5\u5B89\u88C5\u65B9\u5F0F\u4E3A\uFF1A"),k=s("MCRcon + \u65E5\u5FD7\u8BFB\u53D6\u7A0B\u5E8F\u5B89\u88C5"),b=n("br",null,null,-1),_=s(" \u5219\u9700\u8981\u5728\u670D\u52A1\u7AEF\u6839\u76EE\u5F55\u624B\u52A8\u521B\u5EFA\u5185\u5BB9\u5982\u4E0B\u3001\u540D\u4E3A "),h=n("code",null,"config.yml",-1),q=s(" \u7684\u914D\u7F6E\u6587\u4EF6"),g=n("br",null,null,-1),y=n("strong",null,"\u5426\u5219",-1),f=s("\u7A0B\u5E8F\u5C06\u4F1A\u4F7F\u7528\u5982\u4E0B\u9ED8\u8BA4\u914D\u7F6E"),w=e("<li><p>\u5982\u6709\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u8BF7\u52A1\u5FC5\u5BF9\u6BCF\u4E2A\u670D\u52A1\u5668\u8BBE\u7F6E<strong>\u4E0D\u540C</strong>\u7684\u670D\u52A1\u5668\u540D\u79F0\uFF0C\u586B\u5199\u5728\u4E0B\u5217\u914D\u7F6E\u4E2D</p></li><li><p>\u82E5\u51FA\u73B0\u4E71\u7801\u95EE\u9898</p><ul><li><code>Windows</code> \u7528\u6237\u8BF7\u4F7F\u7528 <code>GBK</code> \u7F16\u7801</li><li><code>Linux</code> \u7528\u6237\u8BF7\u4F7F\u7528 <code>UTF-8</code> \u7F16\u7801</li></ul></li>",2),B=e(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u662F\u5426\u542F\u7528\u63D2\u4EF6</span>
<span class="token comment"># \u9ED8\u8BA4\u542F\u7528</span>
<span class="token key atrule">enable_mc_qq</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u8BF7\u5728\u5192\u53F7\u540E\u586B\u5199 WebSocket \u5730\u5740\u3002</span>
<span class="token comment"># \u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u5730\u5740 ws://127.0.0.1:8080/onebot/v11/mcqq</span>
<span class="token comment">#</span>
<span class="token comment"># \u82E5\u4F7F\u7528\u63D2\u4EF6\uFF0C\u8BF7\u586B\u5199\uFF1Aws://127.0.0.1:8080/onebot/v11/mcqq</span>
<span class="token comment">#</span>
<span class="token comment"># \u82E5\u4F7F\u7528\u9002\u914D\u5668\uFF0C\u8BF7\u586B\u5199\uFF1Aws://127.0.0.1:8080/spigot/ws</span>
<span class="token comment">#</span>
<span class="token key atrule">websocket_url</span><span class="token punctuation">:</span> <span class="token string">&quot;ws://127.0.0.1:8080/onebot/v11/mcqq&quot;</span>

<span class="token comment"># \u53D1\u9001\u5230\u7FA4\u6D88\u606F\u4E2D\uFF0C\u73A9\u5BB6\u6635\u79F0\u4E0E\u6D88\u606F\u4E4B\u95F4\u7684\u7B26\u53F7</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3A \u201C\u8BF4\uFF1A\u201D</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord\u8BF4\uFF1A \u4F60\u597D</span>
<span class="token key atrule">say_way</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8BF4\uFF1A&quot;</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u73A9\u5BB6\u6B7B\u4EA1\u4E8B\u4EF6\u76D1\u542C</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u73A9\u5BB6\u6B7B\u4EA1\u65F6\uFF0CBot \u4F1A\u63A8\u9001\u4FE1\u606F</span>
<span class="token comment"># \u9ED8\u8BA4\u542F\u7528</span>
<span class="token key atrule">death_message</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u76D1\u542C</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u73A9\u5BB6 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u65F6\uFF0CBot \u4F1A\u63A8\u9001\u4FE1\u606F</span>
<span class="token comment"># \u9ED8\u8BA4\u6253\u5F00</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord \u52A0\u5165\u4E86\u670D\u52A1\u5668</span>
<span class="token comment">#   17TheWord \u79BB\u5F00\u4E86\u670D\u52A1\u5668</span>
<span class="token key atrule">join_quit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u670D\u52A1\u5668\u540D\u79F0</span>
<span class="token comment"># \u5F53\u6709\u591A\u4E2A\u670D\u52A1\u5668\u8FDE\u63A5\u5230 Bot \u65F6\uFF0C\u7528\u4E8E\u533A\u5206\u3002</span>
<span class="token comment"># \u5982\u679C\u662F\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u8BF7\u52A1\u5FC5\u5BF9\u5404\u4E2A\u670D\u52A1\u5668\u8BBE\u7F6E\u4E0D\u540C\u7684\u670D\u52A1\u5668\u540D\u79F0\u3002</span>
<span class="token comment"># \u9ED8\u8BA4\u503C\u4E3A\uFF1AServer</span>
<span class="token key atrule">server_name</span><span class="token punctuation">:</span> <span class="token string">&quot;Server&quot;</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u7FA4\u540D/\u9891\u9053\u540D \u524D\u7F00</span>
<span class="token comment"># Rcon \u7248\u4E0D\u9002\u7528\uFF1A</span>
<span class="token comment">#   \u56E0\u4E3ARcon\u7248\u672C\u53D1\u9001\u81F3\u670D\u52A1\u7AEF\u7684\u6D88\u606F\u5E76\u4E0D\u53D7\u8BE5\u914D\u7F6E\u6587\u4EF6\u63A7\u5236\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u6D88\u606F\u63A8\u9001\u5230\u6E38\u620F\u4E2D\u4F1A\u643A\u5E26 \u7FA4\u540D/\u9891\u9053\u540D\u3002</span>
<span class="token comment"># \u6B64\u5F00\u5173\u5728 NoneBot \u7AEF\u4E5F\u6709\uFF0C\u4F46 NoneBot \u7AEF\u51B3\u5B9A\u662F\u5426\u53D1\u9001\u8FC7\u6765\u540D\u79F0\u3002</span>
<span class="token comment"># \u53D1\u9001\u540D\u79F0\u9700\u8981 Bot \u8BF7\u6C42 API\uFF0C\u53EF\u80FD\u4F1A\u5BF9\u670D\u52A1\u5668\u6027\u80FD\u6709\u5F71\u54CD\u3002</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   \u6D4B\u8BD5\u7FA4 17TheWord \u8BF4\uFF1A\u4F60\u597D</span>
<span class="token comment">#   \u6D4B\u8BD5\u9891\u9053/\u6D4B\u8BD5\u5B50\u9891\u9053 17TheWord \u8BF4\uFF1A\u4F60\u597D</span>
<span class="token key atrule">display_groupname</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment"># \u65E5\u5FD7\u8DEF\u5F84</span>
<span class="token comment"># \u4EC5\u65E5\u5FD7\u8BFB\u53D6\u7A0B\u5E8F\u53EF\u7528</span>
<span class="token comment"># Windows \u8BF7\u7528 &quot;.\\\\logs\\\\&quot;</span>
<span class="token comment"># Linux \u8BF7\u7528 &quot;./logs/&quot;</span>
<span class="token key atrule">log_local</span><span class="token punctuation">:</span> <span class="token string">&quot;./logs/&quot;</span>

<span class="token comment"># \u65E5\u5FD7\u540D\u79F0</span>
<span class="token comment"># \u4EC5\u65E5\u5FD7\u8BFB\u53D6\u7A0B\u5E8F\u53EF\u7528</span>
<span class="token comment"># \u82E5\u65E5\u5FD7\u540D\u79F0\u4E0D\u540C\uFF0C\u8BF7\u624B\u52A8\u4FEE\u6539\uFF0C\u4E00\u822C\u4E3A\uFF1Alatest.log</span>
<span class="token key atrule">log_name</span><span class="token punctuation">:</span> <span class="token string">&quot;latest.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(W,T){const a=t("RouterLink");return i(),o("div",null,[p,n("div",r,[v,n("ul",null,[n("li",null,[n("p",null,[u,c(a,{to:"/mc_qq/install/mcrcon.html"},{default:m(()=>[k]),_:1}),b,_,h,q,g,y,f])]),w])]),B])}var R=l(d,[["render",x],["__file","mcserver.html.vue"]]);export{R as default};

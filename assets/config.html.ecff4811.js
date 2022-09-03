import{_ as c,r as e,o as l,c as d,a as n,b as a,w as p,d as s,e as t}from"./app.ff24d25f.js";const r={},m=n("h1",{id:"\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u914D\u7F6E")],-1),u=n("h2",{id:"nonebot2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nonebot2","aria-hidden":"true"},"#"),s(" NoneBot2")],-1),v={class:"custom-container warning"},k=n("p",{class:"custom-container-title"},"\u6CE8\u610F\uFF01",-1),_=s("\u5B89\u88C5\u5B8C\u63D2\u4EF6\u540E\uFF0C\u8BF7\u5728\u673A\u5668\u4EBA\u7684 "),b=n("code",null,"src",-1),h=s(" \u76EE\u5F55\u4E0B\u521B\u5EFA\u540D\u4E3A "),g=n("code",null,"mc_qq_config.py",-1),q=s("\u3001\u5185\u5BB9\u5982\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6"),f=n("br",null,null,-1),y=s(" \u6216 "),x={href:"https://github.com/17TheWord/nonebot-plugin-mcqq/releases/download/V0.0.5/mc_qq_config.py",target:"_blank",rel:"noopener noreferrer"},w=s("\u4ECE GitHub \u4E0B\u8F7D"),B=s("\uFF0C\u5C06\u6587\u4EF6\u590D\u5236\u5230\u5BF9\u5E94\u76EE\u5F55\u5E76\u4FEE\u6539"),R=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5728\u6B64\u586B\u5165\u670D\u52A1\u5668\u8FDE\u63A5\u4FE1\u606F</span>

<span class="token comment"># \u670D\u52A1\u5668IP</span>
mc_ip <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
<span class="token comment"># \u670D\u52A1\u5668 WebSocket \u7AEF\u53E3</span>
ws_port <span class="token operator">=</span> <span class="token string">&quot;8765&quot;</span>
<span class="token comment"># \u670D\u52A1\u5668 MCRcon \u5BC6\u7801\uFF0C\u63D2\u4EF6\u5B89\u88C5\u7684\u7528\u6237\u53EF\u4EE5\u5220\u9664\u6B64\u884C</span>
mcrcon_password <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u7684Rcon\u5BC6\u7801&quot;</span>
<span class="token comment"># \u670D\u52A1\u5668 MCRcon \u7AEF\u53E3\uFF0C\u63D2\u4EF6\u5B89\u88C5\u7684\u7528\u6237\u53EF\u4EE5\u5220\u9664\u6B64\u884C</span>
mcrcon_port <span class="token operator">=</span> <span class="token number">25575</span>


<span class="token comment"># \u5F00\u542F\u529F\u80FD\u7684\u7FA4\u548C\u9891\u9053\u5217\u8868</span>
group_list <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u7FA4\u5217\u8868</span>
    <span class="token string">&quot;group_list&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># \u7FA4\u53F7</span>
        <span class="token comment"># 123456789,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment"># \u9891\u9053\u5217\u8868</span>
    <span class="token string">&quot;guild_list&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># {</span>
            <span class="token comment"># # \u9891\u9053 ID</span>
            <span class="token comment"># &quot;guild_id&quot;: 12345678909876543,</span>
            <span class="token comment"># # \u5B50\u9891\u9053 ID</span>
            <span class="token comment"># &quot;channel_id&quot;: 1234567,</span>
        <span class="token comment"># },</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minecraft-server" tabindex="-1"><a class="header-anchor" href="#minecraft-server" aria-hidden="true">#</a> Minecraft Server</h2>`,2),W={class:"custom-container warning"},C=n("p",{class:"custom-container-title"},"\u6CE8\u610F\uFF01",-1),I=s("\u82E5\u5B89\u88C5\u65B9\u5F0F\u4E3A\uFF1A"),N=s("MCRcon + \u65E5\u5FD7\u8BFB\u53D6\u7A0B\u5E8F\u5B89\u88C5"),T=n("br",null,null,-1),V=s(" \u5219\u9700\u8981\u5728\u670D\u52A1\u7AEF\u6839\u76EE\u5F55\u624B\u52A8\u521B\u5EFA\u5185\u5BB9\u5982\u4E0B\u3001\u540D\u4E3A "),L=n("code",null,"config.yml",-1),M=s(" \u7684\u914D\u7F6E\u6587\u4EF6"),S=t(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u662F\u5426\u542F\u7528\u63D2\u4EF6</span>
<span class="token comment"># \u9ED8\u8BA4\u542F\u7528</span>
<span class="token key atrule">enable_mc_qq</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u8BF7\u5728\u5192\u53F7\u540E\u586B\u5199 WebSocket \u670D\u52A1\u7684\u5730\u5740\u7AEF\u53E3\u53F7\u3002</span>
<span class="token comment"># \u53EA\u586B\u5199\u6570\u5B57\u5373\u53EF\u3002</span>
<span class="token comment"># \u5192\u53F7\u540E\u9700\u8981\u7A7A\u4E00\u683C\uFF01</span>
<span class="token comment"># \u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u5730\u5740\u9ED8\u8BA4\u4E3A 127.0.0.1 \uFF0C\u7AEF\u53E3\u9ED8\u8BA4\u4E3A 8765</span>
<span class="token key atrule">websocket_hostname</span><span class="token punctuation">:</span> 127.0.0.1
<span class="token key atrule">websocket_port</span><span class="token punctuation">:</span> <span class="token number">8765</span>

<span class="token comment"># \u53D1\u9001\u5230\u7FA4\u6D88\u606F\u4E2D\uFF0C\u73A9\u5BB6\u6635\u79F0\u4E0E\u6D88\u606F\u4E4B\u95F4\u7684\u7B26\u53F7</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3A \u201C\u8BF4\uFF1A\u201D</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord \uFF1A \u4F60\u597D</span>
<span class="token key atrule">say_way</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8BF4\uFF1A&quot;</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u73A9\u5BB6\u6B7B\u4EA1\u4E8B\u4EF6\u76D1\u542C</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u73A9\u5BB6\u6B7B\u4EA1\u65F6\uFF0CBot\u4F1A\u63A8\u9001\u4FE1\u606F</span>
<span class="token comment"># \u9ED8\u8BA4\u542F\u7528</span>
<span class="token key atrule">death_message</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u662F\u5426\u542F\u7528 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u76D1\u542C</span>
<span class="token comment"># \u5F00\u542F\u540E\uFF0C\u5F53\u73A9\u5BB6 \u52A0\u5165/\u79BB\u5F00 \u670D\u52A1\u5668\u65F6\uFF0CBot\u4F1A\u968F\u63A8\u9001\u4FE1\u606F</span>
<span class="token comment"># \u9ED8\u8BA4\u6253\u5F00</span>
<span class="token comment"># \u4F8B\u5982\uFF1A</span>
<span class="token comment">#   17TheWord \u52A0\u5165\u4E86\u670D\u52A1\u5668</span>
<span class="token comment">#   17TheWord \u79BB\u5F00\u4E86\u670D\u52A1\u5668</span>
<span class="token key atrule">join_quit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(D,j){const o=e("ExternalLinkIcon"),i=e("RouterLink");return l(),d("div",null,[m,u,n("div",v,[k,n("p",null,[_,b,h,g,q,f,y,n("a",x,[w,a(o)]),B])]),R,n("div",W,[C,n("p",null,[I,a(i,{to:"/mc_qq/install/mcrcon.html"},{default:p(()=>[N]),_:1}),T,V,L,M])]),S])}var H=c(r,[["render",E],["__file","config.html.vue"]]);export{H as default};

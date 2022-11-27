import{_ as i,r as d,o as c,c as r,a as e,b as t,d as l,e as a}from"./app.5e510462.js";const n={},s=e("h1",{id:"\u66F4\u65B0-\u95EE\u9898\u8BB0\u5F55",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u66F4\u65B0-\u95EE\u9898\u8BB0\u5F55","aria-hidden":"true"},"#"),l(" \u66F4\u65B0 & \u95EE\u9898\u8BB0\u5F55")],-1),u=l("\u6B64\u5904\u4E0D\u518D\u8BB0\u5F55\uFF0C\u8BF7\u524D\u5F80 "),p={href:"https://github.com/17TheWord/HarukaBot_Guild_Patch/releases",target:"_blank",rel:"noopener noreferrer"},_=l("Releases"),h=l(" \u67E5\u770B"),g=a('<h2 id="_2022-8-22" tabindex="-1"><a class="header-anchor" href="#_2022-8-22" aria-hidden="true">#</a> <em>2022 / 8 / 22</em></h2><ul><li><p><strong>\u65B0\u6DFB\u52A0\uFF1A</strong></p><ul><li>\u5B50\u9891\u9053\u88AB\u5220\u9664\u65F6\uFF0C\u5220\u9664\u8BE5\u5B50\u9891\u9053\u7684\u8BA2\u9605\u5217\u8868</li><li>\u6E05\u7A7A <code>\u7FA4 / \u5B50\u9891\u9053</code> \u8BA2\u9605\u5217\u8868</li><li>\u4E00\u6B21 <code>\u6DFB\u52A0 / \u53D6\u6D88</code> \u591A\u4E2A\u7BA1\u7406</li><li>\u9891\u9053\u4E2D\u7684 <code>permission_check</code></li></ul></li><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u6743\u9650\u5224\u5B9A\u5E76\u5165\u5230 <code>utils</code> \u7684 <code>permission_check</code></li></ul></li><li><p><strong>\u79FB\u9664\uFF1A</strong></p><ul><li>\u811A\u624B\u67B6\u5B89\u88C5\u65B9\u6CD5\u7684 <code>\u542F\u7528\u9891\u9053\u9002\u914D\u8865\u4E01</code></li></ul></li><li><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>FASTAPI_RELOAD <ul><li><code>Windows</code> \u5FC5\u987B\u8BBE\u7F6E <code>FASTAPI_RELOAD=false</code> \u624D\u80FD\u6B63\u5E38\u8FD0\u884C <code>HarukaBot</code></li><li>\u5728\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982 <code>.env.dev</code></li><li>\u5C06 <code>FASTAPI_RELOAD=true</code></li><li>\u6539\u4E3A <code>FASTAPI_RELOAD=false</code></li></ul></li></ul></li></ul><hr><h2 id="_2022-8-20" tabindex="-1"><a class="header-anchor" href="#_2022-8-20" aria-hidden="true">#</a> <em>2022 / 8 / 20</em></h2><ul><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u5B89\u88C5\u65B9\u6CD5\u6539\u52A8 <ul><li><code>v1.4.1a60 \u6D4B\u8BD5\u7248</code> \u4E0D\u518D\u9501 <code>nonebot</code> \u7248\u672C</li><li>\u65E0\u9700\u56E0pip\u5B89\u88C5\u4FEE\u6539 <code>utils</code> -&gt; <code>__init__.py</code> \u5982\u4E0B\u5185\u5BB9 <ul><li><code>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li><li>\u6539\u4E3A</li><li><code>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li></ul></li></ul></li></ul></li><li><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>FASTAPI_RELOAD <ul><li><code>Windows</code> \u5FC5\u987B\u8BBE\u7F6E <code>FASTAPI_RELOAD=false</code> \u624D\u80FD\u6B63\u5E38\u8FD0\u884C <code>HarukaBot</code></li><li>\u5728\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982 <code>.env.dev</code></li><li>\u5C06 <code>FASTAPI_RELOAD=true</code></li><li>\u6539\u4E3A <code>FASTAPI_RELOAD=false</code></li></ul></li></ul></li></ul><hr><h2 id="_2022-8-18" tabindex="-1"><a class="header-anchor" href="#_2022-8-18" aria-hidden="true">#</a> <em>2022 / 8 / 18</em></h2><ul><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u5B89\u88C5\u65B9\u6CD5\u6539\u52A8 <ul><li>\u539F\u7248 <code>haruka_bot</code>\u3001<code>\u9891\u9053\u9002\u914D\u8865\u4E01</code> \u5747\u7528 <code>\u811A\u624B\u67B6</code> \u6216 <code>NoneBot2 \u63D2\u4EF6\u5546\u5E97</code> \u5B89\u88C5</li><li>\u5728\u865A\u62DF\u73AF\u5883 <code>venv</code> -&gt; <code>Lib</code> -&gt; <code>site-packages</code> -&gt; <code>haruka_bot</code> \u4F9D\u6B21\u66FF\u6362\u6587\u4EF6</li><li><code>utils</code> -&gt; <code>__init__.py</code><ul><li>pip \u5B89\u88C5 <ul><li><code>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li><li>\u6539\u4E3A</li><li><code>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li></ul></li></ul></li></ul></li></ul></li><li><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>FASTAPI_RELOAD <ul><li><code>Windows</code> \u5FC5\u987B\u8BBE\u7F6E <code>FASTAPI_RELOAD=false</code> \u624D\u80FD\u6B63\u5E38\u8FD0\u884C <code>HarukaBot</code></li><li>\u5728\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982 <code>.env.dev</code></li><li>\u5C06 <code>FASTAPI_RELOAD=true</code></li><li>\u6539\u4E3A <code>FASTAPI_RELOAD=false</code></li></ul></li></ul></li></ul><hr><h2 id="_2022-8-9" tabindex="-1"><a class="header-anchor" href="#_2022-8-9" aria-hidden="true">#</a> <em>2022 / 8 / 9</em></h2><ul><li><p><strong>\u65B0\u589E\uFF1A</strong></p><ul><li>\u5C06 <code>\u9891\u9053ID + \u5B50\u9891\u9053ID</code> \u5B57\u6BB5\u5206\u5272\u6210\u4E24\u4E2A\u5B57\u6BB5</li><li>\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E <code>\u8D85\u7EA7\u7528\u6237ID</code> \u4E0E <code>\u7BA1\u7406\u5458\u8EAB\u4EFD\u7EC4</code></li></ul></li><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li><p>\u5B89\u88C5\u65B9\u6CD5\u6539\u52A8</p><ul><li>\u539F\u7248 <code>haruka_bot</code>\u3001<code>\u9891\u9053\u9002\u914D\u8865\u4E01</code> \u5747\u7528 <code>\u811A\u624B\u67B6</code> \u6216 <code>NoneBot2 \u63D2\u4EF6\u5546\u5E97</code> \u5B89\u88C5</li><li>\u5728\u865A\u62DF\u73AF\u5883 <code>venv</code> -&gt; <code>Lib</code> -&gt; <code>site-packages</code> -&gt; <code>haruka_bot</code> \u4F9D\u6B21\u66FF\u6362\u6587\u4EF6</li><li><code>utils</code> -&gt; <code>__init__.py</code><ul><li>pip \u5B89\u88C5 <ul><li><code>from nonebot.adapters.onebot.v11.exception import ActionFailed, NetworkError</code></li><li>\u6539\u4E3A</li><li><code>from nonebot.adapters.onebot.v11 import ActionFailed, NetworkError</code></li></ul></li></ul></li></ul></li><li><p>\u63A8\u9001\u65B9\u6CD5\u4FEE\u6539\uFF0C\u91CD\u5199\u9891\u9053\u63A8\u9001\u903B\u8F91</p></li><li><p>\u6743\u9650\u5224\u65AD\u91CD\u5199\uFF0C\u4E00\u5E76\u632A\u81F3 <code>utils</code> -&gt; <code>__init__.py</code></p></li><li><p>\u7BA1\u7406\u5458\u64CD\u4F5C\u8C03\u6574</p></li><li><p>\u9891\u9053\u8D85\u7EA7\u7528\u6237ID</p><ul><li>\u5B89\u88C5\u65B9\u6CD5\u6539\u52A8\uFF0C\u4E3A\u65B9\u4FBF\u7BA1\u7406\uFF0C\u5C06\u63D2\u4EF6\u76EE\u5F55\u4E0B <code>GuildSuperUsers.py</code> \u5220\u9664</li><li>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u901A\u8FC7 <code>Haruka_Guild_Super_User_List = [&quot;xxx&quot;]</code> \u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237ID</li></ul></li><li><p>FASTAPI_RELOAD</p><ul><li><code>Windows</code> \u5FC5\u987B\u8BBE\u7F6E <code>FASTAPI_RELOAD=false</code> \u624D\u80FD\u6B63\u5E38\u8FD0\u884C <code>HarukaBot</code></li><li>\u5728\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982 <code>.env.dev</code></li><li>\u5C06 <code>FASTAPI_RELOAD=true</code> \u6539\u4E3A <code>FASTAPI_RELOAD=false</code></li></ul></li><li><p><code>utils</code> \u76EE\u5F55\u4E2D <code>__init__.py</code></p><ul><li><code>from nonebot.adapters.onebot.v11.exception</code></li><li>\u6539\u4E3A</li><li><code>from nonebot.adapters.onebot.V11</code></li></ul></li></ul></li></ul><hr><h2 id="_2022-7-2" tabindex="-1"><a class="header-anchor" href="#_2022-7-2" aria-hidden="true">#</a> <em>2022 / 7 / 2</em></h2><ul><li><p><strong>\u65B0\u589E\uFF1A</strong></p><ul><li>\u652F\u6301<code>\u901A\u8FC7\u9891\u9053\u8EAB\u4EFD\u7EC4</code> \u8BBE\u7F6E <code>Bot \u7BA1\u7406\u5458</code></li><li>\u652F\u6301<code>\u81EA\u5B9A\u4E49\u8EAB\u4EFD\u7EC4\u540D\u79F0</code></li><li>\u652F\u6301<code>\u81EA\u5B9A\u4E49\u591A\u4E2A\u8EAB\u4EFD\u7EC4</code></li><li><code>\u8EAB\u4EFD\u7EC4\u6743\u9650 Bug</code> \u4FEE\u590D\uFF0C\u73B0\u5DF2\u652F\u6301</li></ul></li><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u73B0\u5DF2\u53EF\u4EE5\u5F00\u542F <code>@ \u673A\u5668\u4EBA\u547D\u4EE4</code>\uFF0C\u5728\u6700\u65B0\u7248\u9891\u9053\u8865\u4E01\u4E2D\u5DF2\u5B9E\u73B0 <code>@\u6D88\u606F</code><ul><li><code>Haruka_TO_ME=True</code> \u6216 <code>\u5220\u9664</code> \u8FD9\u4E00\u884C\u4EE3\u7801</li></ul></li></ul></li><li><p><strong>\u65E0\u6539\u52A8\uFF1A</strong></p><ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u5217\u8868\uFF1A <ul><li>\u5728\u9891\u9053\u547D\u4EE4\u4E2D\u6DFB\u52A0\u5224\u5B9A <code>\u7528\u6237\u9891\u9053 ID</code> \u662F\u5426\u5728\u5217\u8868\u4E2D\uFF0C\u4EE5\u6682\u65F6\u89E3\u51B3\u6743\u9650\u95EE\u9898\u3002</li><li>\u8BE5\u7EC4\u7528\u4E8E\u7BA1\u7406\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u7BA1\u7406\u5458\uFF0C\u5C06\u7EE7\u7EED\u4FDD\u7559\u3002</li></ul></li><li>\u6307\u4EE4\u6DFB\u52A0\u9891\u9053\u7BA1\u7406\u5458\u529F\u80FD\uFF1A <ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u53EF\u5728\u9891\u9053\u4E2D\u4F7F\u7528 <code>\u6DFB\u52A0 / \u53D6\u6D88 @ \u9891\u9053\u7528\u6237</code> \u6765\u8BBE\u7F6E\u9891\u9053 <code>Bot \u7BA1\u7406\u5458</code>\u3002</li><li>\u7BA1\u7406\u5458\u53EA\u80FD\u4F7F\u7528\u673A\u5668\u4EBA\u7684 <code>\u5173\u6CE8 / \u53D6\u5173</code> \u529F\u80FD\uFF0C\u6CA1\u6709\u5176\u4ED6\u6743\u9650\u3002</li></ul></li></ul></li><li><p><strong>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</strong></p><ul><li>\u867D\u7136\u6682\u65F6\u89E3\u51B3\u4E86\u6743\u9650\u95EE\u9898\uFF0C\u4F46\u9891\u9053\u4E3B/\u9891\u9053\u7BA1\u7406\u5458\uFF0C\u4F60\u4E5F\u4E0D\u60F3\u8BA9\u4F60\u7684\u63A8\u9001\u5B50\u9891\u9053\u5145\u65A5\u5404\u79CD\u804A\u5929\u4FE1\u606F\u5427\u3002</li><li><s>\u7531\u4E8E\u9891\u9053\u7528\u6237ID\u4E0D\u540C\u4E8EQQ\u53F7\uFF0C\u731C\u6D4B\u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</s> \u5DF2\u901A\u8FC7\u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237\u6682\u65F6\u89E3\u51B3\u3002</li></ul></li></ul><hr><h2 id="_2022-6-9-2" tabindex="-1"><a class="header-anchor" href="#_2022-6-9-2" aria-hidden="true">#</a> <em>2022 / 6 / 9_2</em></h2><ul><li><p><strong>\u65B0\u589E\uFF1A</strong></p><ul><li><s>\u652F\u6301\u901A\u8FC7\u9891\u9053\u8EAB\u4EFD\u7EC4\u8BBE\u7F6E <code>Bot \u7BA1\u7406\u5458</code></s></li><li><s>\u652F\u6301<code>\u81EA\u5B9A\u4E49\u8EAB\u4EFD\u7EC4\u540D\u79F0</code></s></li><li><s>\u652F\u6301<code>\u81EA\u5B9A\u4E49\u591A\u4E2A\u8EAB\u4EFD\u7EC4</code></s></li><li>\u56E0\u4E3A\u67D0\u4E9B\u95EE\u9898\uFF0C\u53D1\u73B0 <code>Bug</code>\uFF0C\u5DF2\u53D6\u6D88</li></ul></li><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u6307\u4EE4\u6DFB\u52A0\u9891\u9053\u7BA1\u7406\u5458\u529F\u80FD\uFF1A <ul><li>\u5728\u8D85\u7EA7\u7528\u6237\u4F7F\u7528 <code>\u7BA1\u7406\u5458\u589E\u51CF</code>\u3001<code>\u7BA1\u7406\u5217\u8868</code> \u64CD\u4F5C\u65F6\u5019\uFF0C\u4F1A\u5C06\u8BE5\u7528\u6237\u7684 <code>\u9891\u9053 ID</code> <s>\u5C55\u793A\u51FA\u6765</s>\u66FF\u6362\u4E3A\u9891\u9053\u6635\u79F0\uFF0C\u4FDD\u62A4\u9690\u79C1\u3002</li></ul></li></ul></li><li><p><strong>\u65E0\u6539\u52A8\uFF1A</strong></p><ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u5217\u8868\uFF1A <ul><li>\u5728\u9891\u9053\u547D\u4EE4\u4E2D\u6DFB\u52A0\u5224\u5B9A <code>\u7528\u6237\u9891\u9053 ID</code> \u662F\u5426\u5728\u5217\u8868\u4E2D\uFF0C\u4EE5\u6682\u65F6\u89E3\u51B3\u6743\u9650\u95EE\u9898\u3002</li><li>\u8BE5\u7EC4\u7528\u4E8E\u7BA1\u7406\u5BF9\u6570\u636E\u5E93\u4E2D\u7684\u7BA1\u7406\u5458\uFF0C\u5C06\u7EE7\u7EED\u4FDD\u7559\u3002</li></ul></li><li>\u6307\u4EE4\u6DFB\u52A0\u9891\u9053\u7BA1\u7406\u5458\u529F\u80FD\uFF1A <ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u53EF\u5728\u9891\u9053\u4E2D\u4F7F\u7528 <code>\u6DFB\u52A0 / \u53D6\u6D88 @ \u9891\u9053\u7528\u6237</code> \u6765\u8BBE\u7F6E\u9891\u9053 <code>Bot \u7BA1\u7406\u5458</code>\u3002</li><li>\u7BA1\u7406\u5458\u53EA\u80FD\u4F7F\u7528\u673A\u5668\u4EBA\u7684 <code>\u5173\u6CE8 / \u53D6\u5173</code> \u529F\u80FD\uFF0C\u6CA1\u6709\u5176\u4ED6\u6743\u9650\u3002</li></ul></li></ul></li><li><p><strong>\u4ECD\u65E7\u5EFA\u8BAE\uFF1A</strong></p><ul><li>\u5173\u95ED@\u673A\u5668\u4EBA\u547D\u4EE4\uFF0C\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684@\u65B9\u5F0F\u662F\u5426\u76F8\u540C <code>Haruka_TO_ME=False</code></li></ul></li><li><p><strong>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</strong></p><ul><li>\u867D\u7136\u6682\u65F6\u89E3\u51B3\u4E86\u6743\u9650\u95EE\u9898\uFF0C\u4F46\u9891\u9053\u4E3B/\u9891\u9053\u7BA1\u7406\u5458\uFF0C\u4F60\u4E5F\u4E0D\u60F3\u8BA9\u4F60\u7684\u63A8\u9001\u5B50\u9891\u9053\u5145\u65A5\u5404\u79CD\u804A\u5929\u4FE1\u606F\u5427\u3002</li><li><s>\u7531\u4E8E\u9891\u9053\u7528\u6237ID\u4E0D\u540C\u4E8EQQ\u53F7\uFF0C\u731C\u6D4B\u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</s> \u5DF2\u901A\u8FC7\u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237\u6682\u65F6\u89E3\u51B3\u3002</li></ul></li></ul><hr><h2 id="_2022-6-9-1" tabindex="-1"><a class="header-anchor" href="#_2022-6-9-1" aria-hidden="true">#</a> <em>2022 / 6 / 9_1</em></h2><ul><li><p><strong>\u6539\u52A8\uFF1A</strong></p><ul><li>\u6307\u4EE4\u6DFB\u52A0\u9891\u9053\u7BA1\u7406\u5458\u529F\u80FD\uFF1A <ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u53EF\u5728\u9891\u9053\u4E2D\u4F7F\u7528 <code>\u6DFB\u52A0 / \u53D6\u6D88 @ \u9891\u9053\u7528\u6237</code> \u6765\u8BBE\u7F6E\u9891\u9053Bot\u7BA1\u7406\u5458\u3002(\u975E\u5E38\u65B9\u4FBF)</li><li>\u5728\u8D85\u7EA7\u7528\u6237\u4F7F\u7528 <code>\u7BA1\u7406\u5458\u589E\u51CF</code>\u3001<code>\u7BA1\u7406\u5217\u8868</code> \u64CD\u4F5C\u65F6\u5019\uFF0C\u4F1A\u5C06\u8BE5\u7528\u6237\u7684 <code>\u9891\u9053 ID</code> \u5C55\u793A\u51FA\u6765\u3002</li><li>\u7BA1\u7406\u5458\u53EA\u80FD\u4F7F\u7528\u673A\u5668\u4EBA\u7684 <code>\u5173\u6CE8 / \u53D6\u5173</code> \u529F\u80FD\uFF0C\u6CA1\u6709\u5176\u4ED6\u6743\u9650\u3002</li></ul></li></ul></li><li><p><strong>\u65E0\u6539\u52A8\uFF1A</strong></p><ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u5217\u8868\uFF0C\u5728\u9891\u9053\u547D\u4EE4\u4E2D\u6DFB\u52A0\u5224\u5B9A <code>\u7528\u6237\u9891\u9053 ID</code> \u662F\u5426\u5728\u5217\u8868\u4E2D\uFF0C\u4EE5\u6682\u65F6\u89E3\u51B3\u6743\u9650\u95EE\u9898\u3002</li></ul></li><li><p><strong>\u4ECD\u65E7\u5EFA\u8BAE\uFF1A</strong></p><ul><li>\u5173\u95ED@\u673A\u5668\u4EBA\u547D\u4EE4\uFF0C\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684@\u65B9\u5F0F\u662F\u5426\u76F8\u540C <code>Haruka_TO_ME=False</code></li></ul></li><li><p><strong>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</strong></p><ul><li>\u867D\u7136\u6682\u65F6\u89E3\u51B3\u4E86\u6743\u9650\u95EE\u9898\uFF0C\u4F46\u9891\u9053\u4E3B/\u9891\u9053\u7BA1\u7406\u5458\uFF0C\u4F60\u4E5F\u4E0D\u60F3\u8BA9\u4F60\u7684\u63A8\u9001\u5B50\u9891\u9053\u5145\u65A5\u5404\u79CD\u804A\u5929\u4FE1\u606F\u5427\u3002</li><li><s>\u7531\u4E8E\u9891\u9053\u7528\u6237ID\u4E0D\u540C\u4E8EQQ\u53F7\uFF0C\u731C\u6D4B\u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</s> \u5DF2\u901A\u8FC7\u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237\u6682\u65F6\u89E3\u51B3\u3002</li></ul></li></ul><hr><h2 id="_2022-6-8" tabindex="-1"><a class="header-anchor" href="#_2022-6-8" aria-hidden="true">#</a> <em>2022 / 6 / 8</em></h2><ul><li><p><strong>\u65B0\u589E\uFF1A</strong></p><ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u5217\u8868\uFF0C\u5728\u9891\u9053\u547D\u4EE4\u4E2D\u6DFB\u52A0\u5224\u5B9A <code>\u7528\u6237\u9891\u9053 ID</code> \u662F\u5426\u5728\u5217\u8868\u4E2D\uFF0C\u4EE5\u6682\u65F6\u89E3\u51B3\u6743\u9650\u95EE\u9898\u3002</li><li>\u6307\u4EE4\u6DFB\u52A0\u9891\u9053\u7BA1\u7406\u5458\u529F\u80FD\uFF1A <ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u53EF\u5728\u9891\u9053\u4E2D\u4F7F\u7528 <code>\u6DFB\u52A0 / \u53D6\u6D88 \u7528\u6237\u9891\u9053ID</code> \u6765\u8BBE\u7F6E\u9891\u9053Bot\u7BA1\u7406\u5458\u3002</li><li>\u7BA1\u7406\u5458\u53EA\u80FD\u4F7F\u7528\u673A\u5668\u4EBA\u7684 <code>\u5173\u6CE8 / \u53D6\u5173</code> \u529F\u80FD\uFF0C\u6CA1\u6709\u5176\u4ED6\u6743\u9650\u3002</li></ul></li></ul></li><li><p><strong>\u4ECD\u65E7\u5EFA\u8BAE\uFF1A</strong></p><ul><li>\u5173\u95ED@\u673A\u5668\u4EBA\u547D\u4EE4\uFF0C\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684@\u65B9\u5F0F\u662F\u5426\u76F8\u540C <code>Haruka_TO_ME=False</code></li></ul></li><li><p><strong>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</strong></p><ul><li>\u867D\u7136\u6682\u65F6\u89E3\u51B3\u4E86\u6743\u9650\u95EE\u9898\uFF0C\u4F46\u9891\u9053\u4E3B/\u9891\u9053\u7BA1\u7406\u5458\uFF0C\u4F60\u4E5F\u4E0D\u60F3\u8BA9\u4F60\u7684\u63A8\u9001\u5B50\u9891\u9053\u5145\u65A5\u5404\u79CD\u804A\u5929\u4FE1\u606F\u5427\u3002</li><li><s>\u7531\u4E8E\u9891\u9053\u7528\u6237ID\u4E0D\u540C\u4E8EQQ\u53F7\uFF0C\u731C\u6D4B\u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</s> \u5DF2\u901A\u8FC7\u8BBE\u7F6E\u9891\u9053\u8D85\u7EA7\u7528\u6237\u6682\u65F6\u89E3\u51B3\u3002</li></ul></li></ul><hr><h2 id="_2022-5-28" tabindex="-1"><a class="header-anchor" href="#_2022-5-28" aria-hidden="true">#</a> <em>2022 / 5 / 28</em></h2><ul><li><p><strong>\u65B0\u589E\uFF1A</strong></p><ul><li>\u9891\u9053\u8D85\u7EA7\u7528\u6237\u5217\u8868\uFF0C\u5728\u9891\u9053\u547D\u4EE4\u4E2D\u6DFB\u52A0\u5224\u5B9A <code>\u9891\u9053\u7528\u6237 ID</code> \u662F\u5426\u5728\u5217\u8868\u4E2D\uFF0C\u4EE5\u6682\u65F6\u89E3\u51B3\u6743\u9650\u95EE\u9898</li></ul></li><li><p><strong>\u4ECD\u65E7\u5EFA\u8BAE\uFF1A</strong></p><ul><li>\u5173\u95ED <code>@ \u673A\u5668\u4EBA</code> \u547D\u4EE4\uFF0C\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684 <code>@ \u65B9\u5F0F</code> \u662F\u5426\u76F8\u540C <code>Haruka_TO_ME=False</code></li></ul></li><li><p><strong>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</strong></p><ul><li>\u867D\u7136\u6682\u65F6\u89E3\u51B3\u4E86\u6743\u9650\u95EE\u9898\uFF0C\u4F46 <code>\u9891\u9053\u4E3B / \u9891\u9053\u7BA1\u7406\u5458</code>\uFF0C\u4F60\u4E5F\u4E0D\u60F3\u8BA9\u4F60\u7684\u63A8\u9001\u5B50\u9891\u9053\u5145\u65A5\u5404\u79CD\u804A\u5929\u4FE1\u606F\u5427\u3002</li><li>\u7531\u4E8E <code>\u9891\u9053\u7528\u6237 ID</code> \u4E0D\u540C\u4E8E <code>QQ \u53F7</code>\uFF0C\u731C\u6D4B\u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</li></ul></li></ul><hr><h2 id="_2022-5-26-2" tabindex="-1"><a class="header-anchor" href="#_2022-5-26-2" aria-hidden="true">#</a> <em>2022 / 5 / 26-2</em></h2><ul><li><p><strong>\u5EFA\u8BAE\uFF1A</strong></p><ul><li><strong>\u5173\u95ED</strong> <code>@ \u673A\u5668\u4EBA</code> \u547D\u4EE4\uFF0C\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684 <code>@ \u65B9\u5F0F</code> \u662F\u5426\u76F8\u540C <code>Haruka_TO_ME=False</code></li></ul></li><li><p><s>\u5EFA\u8BAE</s> <strong>\u5F3A\u70C8\u5EFA\u8BAE</strong>\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF1A</p><ul><li>\u7531\u4E8E <code>\u9891\u9053\u7528\u6237 ID</code> \u4E0D\u540C\u4E8E <code>QQ \u53F7</code>\uFF0C<strong>\u731C\u6D4B</strong> \u8D85\u7EA7\u7528\u6237\u4E0D\u4F1A\u751F\u6548</li><li>\u7ECF\u6D4B\u8BD5\uFF0C\u9891\u9053\u5185\u4E0D\u5B58\u5728\u6743\u9650\u7CFB\u7EDF\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\uFF0C\u5728\u4F7F\u7528\u65F6\u8BF7\u614E\u91CD\u68C0\u67E5\u9891\u9053\u4EBA\u5458\u6210\u5206</li></ul></li></ul><hr><h2 id="_2022-5-26-1" tabindex="-1"><a class="header-anchor" href="#_2022-5-26-1" aria-hidden="true">#</a> <em>2022 / 5 / 26-1</em></h2><ul><li><p>\u56E0\u4E3A\u4E0D\u6E05\u695A\u9891\u9053\u4E0E\u7FA4\u7684 <code>@ \u65B9\u5F0F</code> \u662F\u5426\u76F8\u540C\uFF0C\u5EFA\u8BAE <strong>\u5173\u95ED</strong> <code>@ \u673A\u5668\u4EBA</code> \u547D\u4EE4 <code>Haruka_TO_ME=False</code></p></li><li><p>\u56E0\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7C7B\u578B\u6539\u52A8\uFF0C\u9700\u8981\u5220\u9664\u6570\u636E\u5E93\u91CD\u65B0\u8BA2\u9605\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p></li><li><p>\u5EFA\u8BAE\u63A8\u9001\u9891\u9053\u8BBE\u4E3A\u53EA\u8BFB\uFF0C\u9891\u9053\u5185\u6743\u9650\u4E0E\u7FA4\u5185\u6743\u9650\u4E0D\u4E00\u5B9A\u76F8\u540C\uFF08\u5E94\u8BE5\u662F\u4E0D\u540C\u7684\uFF0C\u5728\u9891\u9053\u5185\u8F93\u5165\u5F00\u542F\u6743\u9650\u5E76\u6CA1\u6709\u4EC0\u4E48\u53CD\u5E94\uFF09</p></li></ul>',32);function A(m,b){const o=d("ExternalLinkIcon");return c(),r("div",null,[s,e("p",null,[u,e("a",p,[_,t(o)]),h]),g])}var I=i(n,[["render",A],["__file","update.html.vue"]]);export{I as default};

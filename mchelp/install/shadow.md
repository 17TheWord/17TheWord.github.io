# 安装光影与材质

---

::: tip 什么是光影？

- 光影的专业名称为 着色器。

- 它基于 MC 的接口（在 Java 版 上也叫 OptiFine 或 高清修复）修改了许多MC的光照效果。

- 原理上你仍然可以理解为前面提到的 Mod，只不过 API 由 Forge 变为了 OptiFine（高清修复）。

要点如下：
:::

---

- 自动安装：

    - 打开 `PCL2.exe`（ [资源收录区](https://shaoxiu.net/files/) 有），点击`下载`，点击`自动安装`，选择自己需要的游戏版本后，在下面的 `OptiFine`
      点击选择最上面的就能自动下载安装，然后在启动器切换对应版本打开游戏：
      ![](https://help.skiesworld.com/images/%E5%AE%89%E8%A3%85optifine-1.png)
      ![](https://help.skiesworld.com/images/%E5%AE%89%E8%A3%85optifine-2.png)

---

- 手动安装：

    1. 点击进入 [OptiFine 官网](https://www.optifine.net/home)，打开后点击上面的 `Download` ，随后下载对应版本的 `最新 OptiFine`，
    ---
    2. 可能会遇到与 `Forge` 类似的广告页面，点旁边的 `mirror` 或用同样的方法即可绕过，
    ---
    3. 随后双击打开下载到的文件，像 `Forge` 一样安装：
       ![](https://help.skiesworld.com/images/%E5%AE%89%E8%A3%85optifine-3.png)
    ---
    4. 也可以作为 `Mod` 直接放进 `mods` 文件夹用 `Forge` 加载，但可能会有部分新版本的最新 `Forge` 与未及时更新的 `OptiFine` 不兼容。遇到这种情况最好前往 `OptiFine`
       官网的更新日志检查支持的 `最终
       Forge 版本` 并回退：
       ![](https://help.skiesworld.com/images/ofchangelog.png)
    ---
    5. `Fabric + OptiFine` 需要再加一个名称为 `OptiFabric` 的 前置 `Mod` 才能正常使用，
    ---
    6. 随后在启动器里找到安装好的 `OptiFine 版本`（直接安装的新版本）或打开 `Forge` 版本（放进了 `mods` 文件夹），进入主界面打开 `设置 -> 视频设置 -> 光影`，光影界面就出来了，
    ---
    7. 点击打开光影包文件夹，将下载好的光影文件放进去（一般为 `.zip` 格式，不需要解压），直接在光影界面打开对应名字的光影即可。

---

::: warning 注意！
- `OptiFine 官网` 下载界面的 `Preview Versions` 一般提供了 `OptiFine` 最新的预览版本，没有找到最新版本的正式版时可以看看有没有预览版。

- 光影文件在资源区集锦后的光影下载区提供了一部分，可以去 [资源收录区](https://shaoxiu.net/files/) 或去 `Curseforge` 下载。

- 如果安装光影后发现帧数非常低或很容易崩溃，应去光影切换界面检查一下底部是否为自己电脑的独立显卡。如果不是，应在显卡控制面板上设置全局启用独立显卡。

- 材质包的安装过程简单很多，直接将压缩包添加至根目录的 `resourcepack` 文件夹里，再在 `设置 -> 资源包` 中 **添加材质** 即可。

- 光影的兼容性取决于 `OptiFine`，一般来说大部分光影都能够兼容 `1.8.9->最新的版本`，而 `1.7.10` 则被作为版本弃子处理，不建议用于加载光影。

- 没有看明白的可以通过下面的视频了解：
:::
  <iframe src="//player.bilibili.com/player.html?bvid=BV1C7411F7hu&cid=154945240&page=1" scrolling="no" border="0" frameborder="no" framespacing="0"></iframe>

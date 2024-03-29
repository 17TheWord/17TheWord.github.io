# 纹理包篇

## （`XX 显卡 / CPU / 内存 / 电脑型号`）推荐用什么纹理包？

- **不会有绝对确定的答案：**

    - 不同纹理包的 **具体配置需求** 一般 **不可能完全一致**。
  
    - 一般建议自己试。

---

## 纹理包是吃 `CPU` 还是吃 `GPU`？

- **一般来说：**

    - 加载纹理包可能遇到的 `瓶颈顺序` 是：`运行内存（RAM）` > `显卡（GPU）` > `处理器（CPU）`。
  
    - 当游戏帧数 **明显低于** 你的预期时，可使用 `任务管理器` 等工具判断 `独显` **是否工作**，随后再按照 `瓶颈顺序` 依次检查可能出现瓶颈的部件。

---

## `XX 分辨率` 的纹理包需要多少内存？

- **并非单一变量，无法解答：**

    - 纹理包除了 `分辨率`，还有很多 **其他参数**，
  
    - 如 `原版贴图覆盖率`、`法线贴图`、`视差贴图`等。
  
    - 它们作为 **不同参数** 参与到纹理包的加载过程中，你可以理解为 **每一个纹理包** 的 **要求** 都是 **唯一** 的。

---

## 哪有光追纹理包？

- **光追是 `着色器（光影）`所使用的技术，与 `纹理包` 无关：**

    - 现在市面上的所谓 **光追纹理包** 大概率是指 `PBR纹理包`，其 **包含** 更多 `其它纹理包信息`，
  
    - 而不是 **传统反射纹理包** 仅有的 `粗糙度` 和 `反射率`。
  
    - 借由该技术可使物体 **表现出** 该纹理包表面应有的 `物理效果`（如 `金属` 和 `玻璃` 的 **反射区别**，`塑料` 和 `泥土` 的 **反射区别**），有效降低了光滑面反射的“油腻感”，使反射更真实（但不是光追效果）。

---

- 少部分人将 `光追纹理包` 当作贴图 **事先离线渲染好** 再 **一张张贴** 上去看着像光追效果的纹理包，其原因有可能有两点：

    1. **道听途说的错误说法**；
  
    2. `1.17` 之后的 `纹理包` 能够添加 `水反` 等效果，看起来有 **光追效果**：
  
        - 然而这些反射只是因为 `1.17` **开始添加** 了`纹理包形式的着色器`，**没有着色器支持** 我们 **不可能** 添加任何反射。
       
        - `Minecraft` 不存在 `纯纹理包` 达到 `光追效果` 的技术，也请不要再用这个 **道听途说** 的错误说法去误导别人！

---

## 为什么 `XX 纹理包` 有些贴图还是原版的？

- **很多纹理包都属于个人作品，制作速度很慢，而 `Minecraft 的纹理包贴图` 可以达到上万张：**、

    - 如果你发现纹理包 **有此类问题**，需要 **自行检查** 作者发布的 `纹理包` 是 `叠加包的形式` 还是 `只需要使用最新版本号的包`。
  
    - 如果是 `叠加包`，开发者一定会在 **公告** 等地方 **标明**；
  
    - 如果没有，那就是 **没做完**。
  
    - 请不要再拿这个问题去 **困扰** 纹理包作者，更不要 **盲目要求** 作者制作你想要的贴图！

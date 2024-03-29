# 其他观点纠正

## Java 与 基岩

- `Java版` 的着色器叫 `光影`，`基岩版` 的着色器就只能叫 `着色器`

  - **从图形学上讲，光影的专业名称就是着色器：**
  
  - 光影只是 **国内的另一种好听的说法** ，就像你可以把 `引力波` 称作 `时空涟漪`。
  
  - 基岩版由于 `接口` **先天的缺乏** 以及 **移动设备性能不足**，无法像 `Java 版`一样做出效果相对完整的着色器，但它仍然叫做光影。
  
  - 有一种说法是，`基岩版 PE 端` 光影没有实时阴影，不配叫光影。
  
  - 然而 `光影` 二字，**从来都不是** 指代实时阴影，也 **不会有任何** 一位光影作者会提出 `没有实时阴影就不是光影` 这种观点！

## 基岩的贴图

- 基岩版的光影是贴图直接糊上去的

  - 上文提到基岩版无法做出与 `Java 版` 一样的光影，缺陷相对多很多，但也并 **没有简单到使用** `图片粘贴` 等技术的地步。
  
  - 着色器的 **渲染** 由 **算法** 完成，可以是 **简单粗暴** 的 `镜面反射场景`，但 **不可能用贴图做到**。
  
  - 提出该观点的人大可拆开他们所谓的 `贴图光影 文件`，通过找到所有 **疑似使用** 该技术的图片来 **佐证** 他们的观点，否则只能是以下两种情况：
  
    - **道听途说的错误说法；**
    
    - **将同样加载形式的 `纹理包` 与 `光影包` 混淆了。**

---
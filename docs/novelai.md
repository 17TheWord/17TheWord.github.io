# Novel AI 安装教程

## 安装CUDA

1. 前往Nvidia [`CUDA-1171`](https://developer.nvidia.com/cuda-11-7-1-download-archive)

2. 依次选择参数 `Windows` =》 `x86_64` =》 `11` =》 `exe(local)`（根据自身需求选择），下载并安装  
   版本说明：cu117这个版本可以使用，torch不支持更高版本

## 安装WEBUI

前置：`良好的网络环境`、`Python3.10.6+`、`Git操作`

可选操作：`set http_proxy=http://127.0.0.1:1080` 在CMD中使用代理
可选操作：`git config --global --unset http.proxy http://127.0.0.1:1080` 在Git中使用代理

1. 克隆仓库
    ```shell
   git clone git@github.com:AUTOMATIC1111/stable-diffusion-webui.git
    ```

2. 添加模型
   - 将模型文件放入仓库的 `/models/Stable-diffusion` 文件夹中

3. 运行
   - 此过程需要良好的网络环境
   - 启动 `webui-user.bat`
   - 如果出现 `Launching WEB UI with arguments:`  
   并在一段时间后出现 `To create a public link, set 'share=True' in 'Launch'`  
   则证明 WEB-UI 已经开始运行了

4. 咒语
   - 前往 [元素同典](https://docs.qq.com/doc/DWFdSTHJtQWRzYk9k) 查看咒语的使用方法

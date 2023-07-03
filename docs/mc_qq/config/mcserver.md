# Minecraft Server

::: warning 注意！
- 若安装方式为：[MCRcon + 日志读取程序安装](/mc_qq/install/mcrcon.html)  
则需要在服务端根目录手动创建内容如下、名为 `config.yml` 的配置文件  
**否则**程序将会使用如下默认配置

- 如有多个服务器，请务必对每个服务器设置**不同**的服务器名称，填写在下列配置中

- 若出现乱码问题
  - `Windows` 用户请使用 `GBK` 编码
  - `Linux` 用户请使用 `UTF-8` 编码
:::

```yaml
# 是否启用插件
# 默认启用
enable_mc_qq: true

# 请在冒号后填写 WebSocket 地址。
# 若不填写，则地址 ws://127.0.0.1:8080/onebot/v11/mcqq
#
# 若使用插件，请填写：ws://127.0.0.1:8080/onebot/v11/mcqq
#
# 若使用适配器，请填写：ws://127.0.0.1:8080/spigot/ws
#
websocket_url: "ws://127.0.0.1:8080/onebot/v11/mcqq"

# 发送到群消息中，玩家昵称与消息之间的符号
# 默认为 “说：”
# 例如：
#   17TheWord说： 你好
say_way: "说："

# 是否启用 玩家死亡事件监听
# 开启后，当玩家死亡时，Bot 会推送信息
# 默认启用
death_message: true

# 是否启用 加入/离开 服务器监听
# 开启后，当玩家 加入/离开 服务器时，Bot 会推送信息
# 默认打开
# 例如：
#   17TheWord 加入了服务器
#   17TheWord 离开了服务器
join_quit: true

# 服务器名称
# 当有多个服务器连接到 Bot 时，用于区分。
# 如果是多个服务器，请务必对各个服务器设置不同的服务器名称。
# 默认值为：Server
server_name: "Server"

# 是否启用 群名/频道名 前缀
# Rcon 版不适用：
#   因为Rcon版本发送至服务端的消息并不受该配置文件控制。
#
# 开启后，当消息推送到游戏中会携带 群名/频道名。
# 此开关在 NoneBot 端也有，但 NoneBot 端决定是否发送过来名称。
# 发送名称需要 Bot 请求 API，可能会对服务器性能有影响。
# 例如：
#   测试群 17TheWord 说：你好
#   测试频道/测试子频道 17TheWord 说：你好
display_groupname: false
```
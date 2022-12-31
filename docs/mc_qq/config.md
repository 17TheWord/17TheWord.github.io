# 配置

## NoneBot2

::: warning 注意！
安装完插件后，请在机器人的配置文件，如：`.env.dev` 中写入相关配置信息  
添加配置项只需在 .env.* 文件最底下另起一行直接添加即可。

::: details nonebot-plugin-mcqq 示例（点我展开）

```json
MC_QQ_IP="127.0.0.1"
MC_QQ_WS_PORT=8765
MC_QQ_DISPLAY_SERVER_NAME=True
MC_QQ_SEND_GROUP_NAME=True
MC_QQ_SERVERS_LIST=[["server1", [123456789, 987654321], [[123456789098765432, 123456], [98765432101234567, 654321]]], ["server2", [123456789], [[123456789098765432, 123456]]]]
```
:::

::: details nonebot-plugin-mcqq-mcrcon 示例（点我展开）

```json
MC_QQ_GROUP_LIST=[123456789]
MC_QQ_GUILD_LIST=[[12345678987654321,12345678]]
MC_QQ_IP="127.0.0.1"
MC_QQ_WS_PORT=8765
MC_QQ_MCRCON_PASSWORD="123456"
MC_QQ_MCRCON_PORT=25575
MC_QQ_MCRCON_GUILD_ADMIN_ROLES=["管理员", "OP"]
```
:::

### MC_QQ_GROUP_LIST

默认值：[]

- 填写需要开启互通的群号

```json
MC_QQ_GROUP_LIST=[123456789]
```

---

### MC_QQ_GUILD_LIST

默认值：[[]]

- 填写需要开启互通的子频道


```json
MC_QQ_GUILD_LIST=[[12345678987654321,12345678]]
// 如果不需要使用频道通信功能，将此配置项删除
// 或改为 MC_QQ_GUILD_LIST=[]
```

---

### MC_QQ_IP

默认值："127.0.0.1"

- MC 服务器 IP

```json
MC_QQ_IP="127.0.0.1"
```

---

### MC_QQ_WS_PORT

默认值：8765

- MC 服务器 WebSocket 端口

```json
MC_QQ_WS_PORT=8765
```

---

### MC_QQ_MCRCON_PASSWORD

默认值：Null

- MC 服务器 Rcon 密码

```json
MC_QQ_MCRCON_PASSWORD=""
```

---

### MC_QQ_MCRCON_PORT

默认值：25575

- MC 服务器 Rcon 端口

```json
MC_QQ_MCRCON_PORT=25575
```

---

### MC_QQ_MCRCON_GUILD_ADMIN_ROLES

默认值：["频道主", "管理员"]

- 频道中可以使用发送有效命令的身份组

```json
MC_QQ_MCRCON_GUILD_ADMIN_ROLES=["管理员", "OP"]
```

### MC_QQ_DISPLAY_SERVER_NAME

默认值：False

- 是否在Bot发送到群聊的消息中加入服务器前缀  
  - `[server1] 17TheWord 说：Test1`
  - `[server2] 17TheWord 说：Test2`

```json
MC_QQ_DISPLAY_SERVER_NAME=False
```

### MC_QQ_SEND_GROUP_NAME

默认值：False

- 是否在Bot发送到MC服务器的消息中加入群聊名称
  - `[MC_QQ] 测试群 17TheWord 说：Test1`
  - `[MC_QQ] 测试频道/测试子频道 17TheWord 说：Test2`

```json
MC_QQ_SEND_GROUP_NAME=False
```

---

## Minecraft Server

::: warning 注意！
若安装方式为：[MCRcon + 日志读取程序安装](/mc_qq/install/mcrcon.html)  
则需要在服务端根目录手动创建内容如下、名为 `config.yml` 的配置文件
:::

```yaml
# 是否启用插件
# 默认启用
enable_mc_qq: true

# 请在冒号后填写 WebSocket 服务的地址端口号。
# 只填写数字即可。
# 冒号后需要空一格！
# 若不填写，则地址默认为 127.0.0.1 ，端口默认为 8765
websocket_hostname: 127.0.0.1
websocket_port: 8765

# 发送到群消息中，玩家昵称与消息之间的符号
# 默认为 “说：”
# 例如：
#   17TheWord ： 你好
say_way: "说："

# 是否启用 玩家死亡事件监听
# 开启后，当玩家死亡时，Bot会推送信息
# 默认启用
death_message: true

# 是否启用 加入/离开 服务器监听
# 开启后，当玩家 加入/离开 服务器时，Bot会随推送信息
# 默认打开
# 例如：
#   17TheWord 加入了服务器
#   17TheWord 离开了服务器
join_quit: true

# 服务器名称 丨 v1.0.0 新增
# 当有多个服务器连接到 Bot 时，用于区分
# 如果是单个服务器，请留空为：""，不然每条消息都会增加服务器名称前缀
# 如果是多个服务器，请对各个服务器设置不同的服务器名称
# 同时请将下方选项设为：true，使发送到 Bot 的消息携带服务器名称
server_name: ""

# 是否启用 群名/频道名 前缀 丨 v1.0.0 新增
# 开启后，当消息推送到游戏中会携带群名/频道名
# 此开关在 NoneBot 端也有，但 NoneBot 端决定是否发送过来名称
# 发送名称需要 Bot 请求 API，可能会对服务器性能有影响
# 例如：
#   测试群 17TheWord 说：你好
#   测试频道/测试子频道 17TheWord 说：你好
display_servername: false
```

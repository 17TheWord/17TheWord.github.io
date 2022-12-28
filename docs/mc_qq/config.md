# 配置

## NoneBot2

::: warning 注意！
安装完插件后，请在机器人的配置文件，如：`.env.dev` 中写入相关配置信息  
添加配置项只需在 .env.* 文件最底下另起一行直接添加即可。

::: details 示例（点我展开）

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

填写需要开启互通的群号

```json
MC_QQ_GROUP_LIST=[123456789]
```

---

### MC_QQ_GUILD_LIST

默认值：[[]]

填写需要开启互通的子频道


```json
MC_QQ_GUILD_LIST=[[12345678987654321,12345678]]
// 如果不需要使用频道通信功能，将此配置项删除
// 或改为 MC_QQ_GUILD_LIST=[]
```

---

### MC_QQ_IP

默认值："127.0.0.1"

MC 服务器 IP

```json
MC_QQ_IP="127.0.0.1"
```

---

### MC_QQ_WS_PORT

默认值：8765

MC 服务器 WebSocket 端口（MC_QQ插件的端口）

```json
MC_QQ_WS_PORT=8765
```

---

### MC_QQ_MCRCON_PASSWORD

默认值：Null

MC 服务器 Rcon 密码

```json
MC_QQ_MCRCON_PASSWORD=""
```

---

### MC_QQ_MCRCON_PORT

默认值：25575

MC 服务器 Rcon 端口

```json
MC_QQ_MCRCON_PORT=25575
```

---

### MC_QQ_MCRCON_GUILD_ADMIN_ROLES

默认值：["频道主", "管理员"]

MC 服务器 Rcon 端口

```json
MC_QQ_MCRCON_GUILD_ADMIN_ROLES=["管理员", "OP"]
```

---

## Minecraft Server

::: warning 注意！
若安装方式为：[MCRcon + 日志读取程序安装](/mc_qq/install/mcrcon.html)  
则需要在服务端根目录手动创建内容如下、名为 `config.yml` 的配置文件
:::

```yaml
# 是否启用插件
# 默认为 true
enable_mc_qq: true

# 请在冒号后填写 WebSocket 服务的地址端口号。
# 只填写数字即可。
# 冒号后需要空一格！
# 若不填写，则地址默认为 127.0.0.1 ，端口默认为 8765
websocket_server:
  address: "127.0.0.1"
  port: "8765"

# 发送到群消息中，玩家昵称与消息之间的符号
# 默认为中文冒号 “：”
# 例如：
#   17TheWord ： 你好
say_way: "说："

# 是否启用 加入/离开 服务器监听
# 开启后，当玩家 加入/离开 服务器时，Bot会推送信息
# 默认打开
# 例如：
#   17TheWord 加入了服务器
#   17TheWord 离开了服务器
join_quit: true

# 日志路径
# 仅限日志读取程序使用
# Windows 请用 ".\\logs\\"
# Linux 请用 "./logs/"
log_local: "./logs/"

```

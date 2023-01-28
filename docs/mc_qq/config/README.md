# NoneBot2

::: warning 注意！
- 安装完插件后，请在机器人的配置文件，如：`.env.dev` 中写入相关配置信息  
添加配置项只需在 `.env.*` 文件最底下另起一行直接添加即可。

- 如有多个服务器，请务必对每个服务器设置**不同**的服务器名称，填写在下列配置中
:::

::: details nonebot-plugin-mcqq 示例（点我展开）

```json
MC_QQ_WS_IP="127.0.0.1"

MC_QQ_WS_PORT=8765

MC_QQ_SEND_GROUP_NAME=True

MC_QQ_DISPLAY_SERVER_NAME=True

MC_QQ_SERVERS_LIST=[{"server_name": "服务器1", "group_list": [群号1, 群号2], "guild_list": [{"guild_id": 频道1的ID, "channel_id": 子频道a的ID}]}]
```

:::

---

::: details nonebot-plugin-mcqq-mcrcon 示例（点我展开）

```json
MC_QQ_WS_IP="127.0.0.1"

MC_QQ_WS_PORT=8765

MC_QQ_SEND_GROUP_NAME=True

MC_QQ_DISPLAY_SERVER_NAME=True

MC_QQ_SERVERS_LIST = [{"server_name": "服务器1", "group_list": [群号1,群号2], "guild_list": [{"guild_id": 频道1的ID, "channel_id": 子频道a的ID}]}]

MC_QQ_MCRCON_PASSWORD="mima"

MC_QQ_MCRCON_RCON_LIST={"服务器1": 25575, "服务器2": 25576}

MC_QQ_MCRCON_GUILD_ADMIN_ROLES=["频道管理员", "服务器OP"]
```

:::


---

### WebSocket 地址

默认值：`"127.0.0.1"`

- WebSocket服务器 IP

  ```json
  MC_QQ_IP="127.0.0.1"
  ```

---

### WebSocket 端口

默认值：`8765`

- WebSocket服务器 端口

  ```json
  MC_QQ_WS_PORT=8765
  ```

### 是否发送群聊名称

默认值：`False`

- 是否在Bot发送到MC服务器的消息中加入群聊名称
    - `[MC_QQ] 测试群 17TheWord 说：Test1`
    - `[MC_QQ] 测试频道丨测试子频道 17TheWord 说：Test2`

  ```json
  MC_QQ_SEND_GROUP_NAME=False
  ```

---

### 是否在群消息中展示服务器名称

默认值：`False`

- 是否在Bot发送到群聊的消息中加入服务器前缀
    - `[server1] 17TheWord 说：Test1`
    - `[server2] 17TheWord 说：Test2`

  ```json
  MC_QQ_DISPLAY_SERVER_NAME=False
  ```

---

### MCRcon 密码

默认值：`""`

- MC 服务器 Rcon 密码
  - 如果有多个服务器，请一定要给所有服务器设置相同的 `Rcon` 密码

  ```json
  MC_QQ_MCRCON_PASSWORD="mima123"
  ```

---

### MCRcon 端口

默认值：`25575`

- MC 服务器 Rcon 端口
  - NoneBot 读取配置文件为按行读取，填写后请将他们缩减为一行，如上方示例一样
  - 如果有多个服务器，请一定要给服务器设置不同的名称、不同的 `Rcon` 端口号
  - 服务器名称请与MC端设置的一致

  ```json
  MC_QQ_MCRCON_RCON_LIST={
    "服务器1": 25575,
    "服务器2": 25576
  }
  ```

---

### 频道管理员身份组

默认值：`["频道主", "管理员"]`

- 频道中可以使用发送有效命令的身份组
    - NoneBot 读取配置文件为按行读取，填写后请将他们缩减为一行，如上方示例一样

  ```json
  MC_QQ_MCRCON_GUILD_ADMIN_ROLES=[
    "管理员",
    "服务器OP"
  ]
  ```

---

### 服务器列表

默认值：`[]`

- 服务器列表
    - 如果有多个服务器，请一定要给服务器设置不同的名称
    - 服务器名称请与MC端设置的一致
    - NoneBot 读取配置文件为按行读取，填写后请将他们缩减为一行，如上方示例一样

  ```json
  MC_QQ_SERVERS_LIST=[
    {
      "server_name": "服务器1",
      "group_list": [
        群号1
      ],
      "guild_list": [
        {
          "guild_id": 频道1的ID,
          "channel_id": 子频道a的ID
        }
      ]
    },
    {
      "server_name": "服务器1",
      "group_list": [
        群号1,
        群号2
      ],
      "guild_list": [
        {
          "guild_id": 频道1的ID,
          "channel_id": 子频道a的ID
        },
        {
          "guild_id": 频道1的ID,
          "channel_id": 子频道b的ID
        },
        {
          "guild_id": 频道2的ID,
          "channel_id": 子频道b的ID
        }
      ]
    }
  ]
  ```

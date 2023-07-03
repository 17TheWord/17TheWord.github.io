# NoneBot2

::: warning 注意！

- 安装完插件后，请在机器人的配置文件，如：`.env.dev` 中写入相关配置信息  
  添加配置项只需在 `.env.*` 文件最底下另起一行直接添加即可。

- 有些配置可以不填写，如：WebSocket的IP、端口等，插件会直接使用默认值

- 如有多个服务器，请务必对每个服务器设置**不同**的服务器名称，填写在下列配置中
  :::

::: details nonebot-plugin-mcqq 示例（点我展开）

```json 
mc_qq_ws_url = "/onebot/v11/mcqq"

mc_qq_send_group_name = true

mc_qq_display_server_name = true

mc_qq_server_list = '[
  {
    "server_name": "Server",
    "enable_rcon": false,
    "group_list": [
      123456789
    ],
    "guild_list": [
      {
        "guild_id": 123123123,
        "channel_id": 1231231241241
      }
    ],
    "bot_self_id": 123654987
   }
]'

mc_qq_rcon_password = "123456789"

mc_qq_rcon_dict = '{
  "服务器1": 25575
}'

mc_qq_guild_admin_roles = ["频道管理员", "服务器OP"]
```

:::

---

### WebSocket 路由地址

默认值：`"/onebot/v11/mcqq"`

- WebSocket 服务器路由地址，如在MC端配置文件填写： "ws://127.0.0.1:8080:onebot/v11/mcqq"

  ```json 
  mc_qq_ws_url = "/onebot/v11/mcqq"
  ```

---

### 是否发送群聊名称

默认值：`false`

- 是否在Bot发送到MC服务器的消息中加入群聊名称
    - `[MC_QQ] 测试群 17TheWord 说：Test1`
    - `[MC_QQ] 测试频道丨测试子频道 17TheWord 说：Test2`

  ```json 
  mc_qq_send_group_name = false
  ```

---

### 是否在群消息中展示服务器名称

默认值：`false`

- 是否在Bot发送到群聊的消息中加入服务器前缀
    - `[server1] 17TheWord 说：Test1`
    - `[server2] 17TheWord 说：Test2`

  ```json 
  mc_qq_display_server_name = false
  ```

---

### Rcon 密码

默认值：`"password"`

- MC 服务器 Rcon 密码
    - 如果有多个服务器，请一定要给所有服务器设置相同的 `Rcon` 密码

  ```json 
  mc_qq_rcon_password = "123456789"
  ```

---

### MCRcon 端口

默认值：`25575`

- MC 服务器 Rcon 端口
    - 如果有多个服务器，请一定要给服务器设置不同的名称、不同的 `Rcon` 端口号
    - 服务器名称请与 `MC` 端设置的一致

  ```json 
  mc_qq_rcon_dict = '{
    "服务器1": 25575,
    "服务器2": 25576
  }'
  ```

---

### 频道管理员身份组

默认值：`["频道主", "管理员"]`

- 频道中可以使用发送有效命令的身份组
    - NoneBot 读取配置文件为按行读取，填写后请将他们缩减为一行，如上方示例一样

  ```json 
  mc_qq_guild_admin_roles = ["管理员", "服务器OP"]
  ```

---

### 服务器列表

默认值：`[]`

- 服务器列表
    - 服务器名称请与MC端设置的一致

  ```json 
  MC_QQ_SERVERS_LIST='[
    {
      "server_name": "服务器1",
      "enable_rcon": false,
      "group_list": [
        群号1
      ],
      "guild_list": [
        {
          "guild_id": 频道1的ID,
          "channel_id": 子频道a的ID
        }
      ],
      "bot_self_id": 机器人QQ号（只有一个机器人可删除本行）
    },
    {
      "server_name": "服务器2",
      "enable_rcon": false,
      "group_list": [
        群号3,
        群号4
      ],
      "guild_list": [
        {
          "guild_id": 频道2的ID,
          "channel_id": 子频道c的ID
        },
        {
          "guild_id": 频道2的ID,
          "channel_id": 子频道b的ID
        },
        {
          "guild_id": 频道2的ID,
          "channel_id": 子频道b的ID
        }
      ],
      "bot_self_id": 机器人QQ号（只有一个机器人可删除本行）
    }
  ]'
  ```

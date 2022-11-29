# 使用方法

### 前置

- [nonebot-plugin-guild-patch](https://github.com/mnixry/nonebot-plugin-guild-patch)：频道适配补丁。

- Python 3.10.5 （本人环境）

- 当前适配HarukaBot版本：`v1.4.1post5`

---

### 下载

- 前往 [Releases](https://github.com/17TheWord/HarukaBot_Guild_Patch/releases) 下载补丁文件

---

### 安装

#### 脚手架安装

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
# 安装 Haruka
pip install haruka_bot

# 安装频道适配补丁
pip install nonebot-plugin-guild-patch
```

  </CodeGroupItem>
</CodeGroup>

---

#### NoneBot2 插件商店安装

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
# 安装 nb-cli
pip install nb-cli

# 安装 Haruka、频道补丁
nb plugin install haruka_bot
nb plugin install nonebot-plugin-guild-patch
```

  </CodeGroupItem>
</CodeGroup>

---

- 在虚拟环境找到 `haruka_bot`
- 将下载的文件替换虚拟环境中的 `haruka_bot`

---

### 使用

- **其他命令与 `Haruka` 无异**


::: tip 新版已支持
- **设置频道管理员身份组**
    - 新建一行，写入 `HARUKA_GUILD_ADMIN_ROLES = ["Haruka", "频道主", "xxx"]`，
    - 将 `xxx` 替换为你的频道管理员的身份组的名称，
    - 支持多个身份组（其实是目前没有一键挪人的功能，干脆直接多个组解决）。


- **设置频道超级用户**
    - 与普通的超级用户设置方法一致
    - 不同之处为 `频道ID` 不同于 `QQ号`
    - `SUPERUSERS = [xxxxxxxxxx]`
    - 将 `xxxxxxxxxx` 替换为超级用户的ID
:::

::: warning 新版暂未支持（后续考虑更新）
- **设置频道管理员**
    - 在频道中使用命令 `添加 / 取消 @xxx` 即可进行管理员的增减操作
    - 可在一次命令中对多个用户进行操作
    - 管理员可以使用 `关注 / 取关` 功能
    - 只有 **超级用户** 才可以增减管理员
    - 通过 `@` 对管理员进行增减操作

- **清空订阅列表**
  - 命令：`清空列表`
  - 一键清除 `群 / 频道` 中的订阅列表
:::

---

### 配置

```json5
# 配置文件参考

HOST=127.0.0.1

PORT=8080

LOG_LEVEL=DEBUG

# Windows 用户请将此项设置为false
FASTAPI_RELOAD=false    
      
# 超级用户
SUPERUSERS=["xxxxxx"]  
       
# Bot 昵称
NICKNAME=["Haruka_Bot"]        
           
# 命令头
COMMAND_START=["","/"]  
          
# 关闭 @ 前置
Haruka_TO_ME=False

# 开启下播通知
HARUKA_LIVE_OFF_NOTIFY=True
     
# 频道管理员身份组（仅Haruka）
HARUKA_GUILD_ADMIN_ROLES=["Haruka"]
```

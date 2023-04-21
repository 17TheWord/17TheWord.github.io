# MCRcon + 插件安装

::: tip MCRcon + 插件
推荐程度：**推荐**

- 服务器需要开启 `Rcon`

- `MC 服务器` 与 `NoneBot2` 安装对应的插件，填写更多配置文件

- 可以在 `群丨频道` 使用指令
  :::

## NoneBot2 端

#### 脚手架安装

- 安装插件

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
pip install nonebot-plugin-mcqq-mcrcon
```

  </CodeGroupItem>
</CodeGroup>

- 在 `nonebot2` 项目的 `bot.py` 中设置 `load_plugin()`

```python
# driver.register_adapter(xxx)

# 写在这里
nonebot.load_plugin("nonebot_plugin_mcqq_mcrcon")

# nonebot.load_from_toml("pyproject.toml")
```

---

#### NoneBot2 插件商店安装

- 安装插件

<CodeGroup>
  <CodeGroupItem title="nb">

```shell
nb plugin install nonebot-plugin-mcqq-mcrcon
```

  </CodeGroupItem>
</CodeGroup>

---

#### 手动安装

1. 安装频道适配补丁

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
pip install nonebot-plugin-guild-patch
```

  </CodeGroupItem>
</CodeGroup>

2. 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载 `nonebot_plugin_mcqq_mcrcon` 到 `plugins`
   文件夹

#### 配置文件

- 参考 [NoneBot2 配置文件](/mc_qq/config/#nonebot2) 填写连接信息

---

#### 命令

- 命令头为 `/`，在 `.env.dev` 中自行设置

- ```
  # 示例
  /mcc give 17TheWord apple 1
  ```

---

## Minecraft Server 端

1. 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载适合自己服务端版本的 `MC_QQ_Spigot_x.x.x.jar`
   到 `plugins` 文件夹
2. 在配置文件 `server.properties` 中开启 `Rcon`

```properties
# 开启Rcon：
enable-rcon=true
# Rcon端口：如有多个服务器，Rcon端口请勿重复
rcon.port=25575
# Rcon密码：如有多个服务器，密码请统一 
rcon.password=mima
```

- 参考 [Minecraft Server 配置文件](/mc_qq/config/mcserver#minecraft-server) 填写配置文件

# 插件安装

::: tip 详细

- 适用于支持插件的 `Spigot` 等服务端

- `MC 服务器` 与 `NoneBot2` 安装对应的插件，填写配置文件

- 不支持群聊中使用命令
  :::

## NoneBot2 端

#### 脚手架安装

- 安装插件

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
pip install nonebot-plugin-mcqq
```

  </CodeGroupItem>
</CodeGroup>

- 在 `nonebot2` 项目的 `bot.py` 中设置 `load_plugin()`

```python
# driver.register_adapter(xxx)

# 写在这里
nonebot.load_plugin("nonebot_plugin_mcqq")

# nonebot.load_from_toml("pyproject.toml")
```

---

#### NoneBot2 插件商店安装

- 安装插件

<CodeGroup>
  <CodeGroupItem title="nb">

```shell
nb plugin install nonebot-plugin-mcqq
```

  </CodeGroupItem>
</CodeGroup>

---

#### 手动安装

- 下载频道适配补丁

<CodeGroup>
  <CodeGroupItem title="pip">

```shell
pip install nonebot-plugin-guild-patch
```

  </CodeGroupItem>
</CodeGroup>

- 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载 `nonebot_plugin_mcqq` 到 `plugins` 文件夹

---

#### 配置文件

- 参考 [NoneBot2 配置文件](/mc_qq/config/#nonebot2) 填写连接信息

## Minecraft Server 端

- 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载适合自己服务端版本的 `MC_QQ_Spigot_x.x.x.jar`
  到 `plugins` 文件夹
- 参考 [Minecraft Server 配置文件](/mc_qq/config/mcserver#minecraft-server) 填写配置文件

# MCRcon + 插件安装

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

- 在 `nonebot2` 项目中设置 `load_plugin()`

```python
nonebot.load_plugin("nonebot_plugin_mcqq")
```

---

#### NoneBot2 插件商店安装

- 安装插件

<CodeGroup>
  <CodeGroupItem title="pip">

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

- 参考 [NoneBot2 配置文件](/mc_qq/config.html#nonebot2) 填写连接信息

---

## Minecraft Server 端

1. 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载适合自己服务端版本的 `MC_QQ_x.x.x-1.0-SNAPSHOT.jar`
   到 `plugins` 文件夹
2. 若没有找到所需版本，可到 [分支](https://github.com/17TheWord/nonebot-plugin-mcqq/tree/minecraft_plugin) 下载并自行编译
3. 在配置文件 `server.properties` 中开启 `Rcon`

```properties
enable-rcon=true
rcon.port=25575
rcon.password=设置rcon密码
```

- 参考 [Minecraft Server 配置文件](/mc_qq/config.html#minecraft-server) 填写配置文件

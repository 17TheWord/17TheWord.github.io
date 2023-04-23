# 插件服务端安装

::: tip 详细

- 适用于支持插件的 `Spigot` 等服务端

- `MC 服务器` 与 `NoneBot2` 安装对应的插件，填写配置文件

- 使用命令需要服务端开启 `Rcon`
  :::

## NoneBot2 端

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

#### 配置文件

- 参考 [NoneBot2 配置文件](/mc_qq/config/#nonebot2) 填写连接信息

## Minecraft Server 端

- 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载适合自己服务端版本的 `MC_QQ_Spigot_x.x.x.jar`
  到 `plugins` 文件夹
- 参考 [Minecraft Server 配置文件](/mc_qq/config/mcserver#minecraft-server) 填写配置文件

- 在配置文件 `server.properties` 中开启 `Rcon`

  ```properties
  # 开启Rcon：
  enable-rcon=true
  # Rcon端口：如有多个服务器，Rcon端口请勿重复
  rcon.port=25575
  # Rcon密码：如有多个服务器，密码请统一 
  rcon.password=mima
  ```
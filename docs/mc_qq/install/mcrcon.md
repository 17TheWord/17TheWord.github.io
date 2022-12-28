# MCRcon + 日志读取安装

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
nonebot.load_plugin("nonebot_plugin_mcqq_mcrcon")
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

#### 命令

- 命令头为 `/`，在 `.env.dev` 中自行设置

- ```
  /mcc give 17TheWord apple 1
  ```

---

## Minecraft Server 端

::: warning 已知问题
程序读取日志的在连接到 Bot 时一并发出  
导致从开服到第一次消息（玩家聊天信息、玩家加入/离开信息）会混合成一次信息  
已在程序中限制传输字符长度，所以第一批并不会发送成功，后续消息可成功发送
:::

1. 从 [Releases](https://github.com/17TheWord/nonebot-plugin-mcqq/releases) 下载 `MC_QQ_MinecraftServer.jar` 到服务端所在目录

2. 在配置文件 `server.properties` 中开启 `Rcon`

```properties
enable-rcon=true
rcon.port=25575
rcon.password=设置rcon密码
```

3. 参考 [Minecraft Server 配置文件](/mc_qq/config.html#minecraft-server) 在服务器目录创建配置文件

4. 启动 `MC_QQ_MinecraftServer.jar`

<CodeGroup>
  <CodeGroupItem title="Windows">

```bash
# 新建一个 `xxx.bat` 文件，写入如下代码

@echo off
java -Xms512g -Xmx512g -jar MC_QQ_MinecraftServer.jar
pause

# 双击 xxx.bat 启动
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux" active>

```bash
touch xxx.sh    # 新建一个 xxx.sh 文件

nano xxx.sh     # 打开并写入如下内容：

java -jar MC_QQ_MinecraftServer.jar

# 写完之后按 Ctrl + x 退出，按Y二次确认，直接回车保存为原名称文件

chmod -R 775 MC_QQ_MinecraftServer.jar      # 更改文件权限，使其可以执行

./xxx.sh    # 运行程序
```

  </CodeGroupItem>
</CodeGroup>

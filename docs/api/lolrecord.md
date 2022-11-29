# 随机LOL英雄语音

## 随机语音

请求方法：`GET`

```
https://api.scareye.com/lolrecord
```

## 随机语音JSON

请求方法：`GET`

文件格式：`OGG`

```
https://api.scareye.com/lolrecord?type=json
```

返回值：

```
# 提取 pic 的值
{"pic": "https://api.scareye.com/lolrecords/Ahri/File0402.ogg"}
```

## 随机英雄语音

请求方法：`GET`

英雄名：`Yone`

```
https://api.scareye.com/lolrecord?hero=Yone
```

## 随机分类语音JSON

请求方法：`GET`

英雄名：`Yone`

文件格式：`OGG`

```
https://api.scareye.com/lolrecord?hero=Yone&type=json
```

返回值：

```
# 提取 pic 的值
{"pic": "https://api.scareye.com/lolrecords/Ahri/File0402.ogg"}
```

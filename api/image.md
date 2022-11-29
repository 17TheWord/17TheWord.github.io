# 随机图片

## 随机图片

请求方法：`GET`

```
https://api.scareye.com/image
```

## 随机图片JSON

请求方法：`GET`

```
https://api.scareye.com/image?type=json
```

返回值：


```
# 提取 pic 的值
{"pic": "https://api.scareye.com/images/wallpaper/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"}
```

## 随机分类图片

请求方法：`GET`

分类名：`wallpaper`

```
https://api.scareye.com/image?sort=wallpaper
```

## 随机分类图片JSON

请求方法：`GET`

分类名：`wallpaper`

```
https://api.scareye.com/image?sort=wallpaper&type=json
```
返回值：


```
# 提取 pic 的值
{"pic": "https://api.scareye.com/images/wallpaper/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"}
```
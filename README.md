# vue-weather
一款基于vuejs+webpack构建的单页面简易天气查询webapp，适合新入坑vuejs的小伙伴们学习参考. :blush:

Demo地址：[请戳这里~](http://m.caidianqu.com/weather/#/ "请戳这里~")

或

手机扫码：

![](https://raw.githubusercontent.com/yuuk/vue-weather/master/screenshoot/qrcode.png)


### 主要功能点如下：

**1. 城市列表：**

能自动获取当前城市，但是发现H5的地理位置API居然不支持非HTTPS环境，在本地调试使用127.0.0.1可以正常获取。

![](https://raw.githubusercontent.com/yuuk/vue-weather/master/screenshoot/城市列表.jpg)

**2. 删除城市：**

![](https://raw.githubusercontent.com/yuuk/vue-weather/master/screenshoot/删除城市.jpg)

**3. 搜索城市：**

![](https://raw.githubusercontent.com/yuuk/vue-weather/master/screenshoot/搜索城市.jpg)

**4. 天气详情：**

![](https://raw.githubusercontent.com/yuuk/vue-weather/master/screenshoot/天气详情.jpg)

### API来自心知天气  https://www.seniverse.com/doc

需要注册账号申请自己的key，再根据api提供的签名验证方式生成签名，本项目中使用了 `crypto-js` 生成签名。
```javascript
import crypto from 'crypto-js'
let ts = Math.round(new Date().getTime()/1000);
let ttl = 1800;
let uid = 'U8D906E800';
let key = 'bx2uy83sdyvvysg7';
function createSig () {
	let str = `ts=${ts}&ttl=${ttl}&uid=${uid}`;
	return crypto.enc.Base64.stringify(crypto.HmacSHA1(str, key));
}
export default {
	getLocationUrl: 'https://api.seniverse.com/v3/location/search.json',
	getWeatherUrl: 'https://api.seniverse.com/v3/weather/daily.json',
	getNowWeather: 'https://api.seniverse.com/v3/weather/now.json',
	wallpaperUrl: 'https://bing.ioliu.cn/v1/rand',
	key: key,
	uid: uid,
	sig: createSig(),
	ts: ts,
	ttl: ttl
}
```

### 图片API
最初的想法是想找一个支持关键词查询的图片API，比如查看“深圳天气”就搜索深圳相关的图片。

但是没有找到 :unamused: 才使用了 bing随机壁纸API https://github.com/xCss/bing/tree/v1.0.0

### 技术栈
- webpack
- crypto-js
- vuejs
- vue-router
- vue-jsonp
- vue-awesome
- sass
- flexible.js

### 灵感来源
Framework7 天气案例 http://apps.framework7.cn/Weather7-Material/

Framework7使用的是雅虎天气的API，个人觉得雅虎天气API使用太麻烦，所以选择了国内的心知天气……

### License
MIT

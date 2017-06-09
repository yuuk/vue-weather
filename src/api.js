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
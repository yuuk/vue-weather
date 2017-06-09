<template>
    <section class="weather-page pr" v-if="weatherData!==null" :style="[wallPaperObj]">
        <header class="weather-page-header pr">
            <p class="city">{{weatherData.location.name}}</p>
            <p class="time">{{updateTime}} 发布</p>
            <span class="close pa">
                <router-link :to="{name: 'list'}"><img src="../assets/images/close.svg"></router-link>
            </span>
        </header>

        <div class="weather-page-info">
            <p class="icon"><img :src="getIcon(weatherData.daily[0].text_day)"></p>
            <p class="temperature"><span class="number">{{weatherData.daily[0].high}}</span> <sup class="degree-icon pr">°</sup></p>
            <p class="status">{{weatherData.daily[0].text_day}}</p>
        </div>

        <footer class="weather-page-footer pa">
            <ul class="other-info clearfix" v-if="nowWeatherData!==null">
                <li>
                    <p class="key">{{getWind}}</p>
                    <p class="value">{{nowWeatherData.wind_scale}}级</p>
                </li>
                <li>
                    <p class="key">能见度</p>
                    <p class="value">{{nowWeatherData.visibility ? nowWeatherData.visibility : '--'}}</p>
                </li>
                <li>
                    <p class="key">相对湿度</p>
                    <p class="value">{{nowWeatherData.humidity}}%</p>
                </li>
            </ul>
            <ul class="future-weather clearfix">
                <li v-for="weather in weatherData.daily">
                    <p class="date">{{weather.date}}</p>
                    <p class="icon"><img :src="getIcon(weather.text_day)"></p>
                    <p class="text">{{weather.text_day}}</p>
                    <p class="temperature">{{weather.low}}° / {{weather.high}}°</p>
                </li>
            </ul>
        </footer>
    </section>
    <div class="loading-page" v-else>
        <p>
            <img src="../assets/images/oval.svg">
            <span>Loading</span>
        </p>
    </div>
</template>

<script>
import icon from '../assets/js/weatherIcon'
export default {
    name: 'detail',
    data () {
        return {
            location: this.$route.params.location,
            wallPaper: null,
            wallPaperObj: null,
            weatherData: null,
            nowWeatherData: null
        }
    },
    mounted () {
        this.getData();
    },
    computed: {
        // 计算天气更新时间
        updateTime () {
            let time = new Date(this.weatherData.last_update);
            let fix = function (num) {
                return num-0 <= 0 ? '0'+num : num;
            }
            return `${fix(time.getHours())}:${fix(time.getMinutes())}`;
        },
        // 计算风向
        getWind () {
            let weather = this.nowWeatherData;
            if (weather !== null) {
                return weather.wind_direction !== '无持续风向' ? `${weather.wind_direction}风` : `${weather.wind_direction}`;
            }
        }
    },
    watch: {
        // 处理背景图片, 加载完成才显示到页面
        wallPaper (val, oldval) {
            if (val) {
                let img = new Image();
                let imgUrl = this.wallPaper.original_pic;
                img.onload = () =>{
                    this.wallPaperObj = {
                        'background-image': `url(${imgUrl})`
                    }
                };
                img.src = imgUrl;
            }
        }
    },
    methods: {
        getData () {
            // 获取天气数据
            this.$jsonp(this.$api.getWeatherUrl, {
                uid: this.$api.uid,
                sig: this.$api.sig,
                ts: this.$api.ts,
                ttl: this.$api.ttl,
                location: this.location,
                language: 'zh-Hans',
                unit: 'c',
                start: 1,
                days: 6
            }).then(json => {
                this.weatherData = json.results[0];
            }).catch(err => {
                console.error(err.statusText);
            });

            //获取壁纸
            this.$jsonp(this.$api.wallpaperUrl, {
                type: 'json',
                w: '720',
                h: '1080'
            }).then(json => {
                this.wallPaper = json.data;
            }).catch(err => {
                console.error(err.statusText);
            });

            // 天气实况
            this.$jsonp(this.$api.getNowWeather, {
                uid: this.$api.uid,
                sig: this.$api.sig,
                ts: this.$api.ts,
                ttl: this.$api.ttl,
                location: this.location,
                language: 'zh-Hans',
                unit: 'c'
            }).then(json => {
                this.nowWeatherData = json.results[0].now;
            }).catch(err => {
                console.error(err.statusText);
            });
        },
        // 匹配天气图标
        getIcon (text) {
            let src = icon[icon.length-1].src
            icon.every((o, i, arr) => {
                if(o.cn === text) {
                    src = o.src;
                    return false;
                }
                return true;
            });
            return src;
        }
    }
}
</script>

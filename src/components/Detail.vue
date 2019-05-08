<template>
  <section
    class="weather-page pr"
    v-if="weatherData!==null && nowWeatherData!==null"
    :style="[getBackground]"
  >
    <header class="weather-page-header pr">
      <p class="city">{{nowWeatherData.location.name}}</p>
      <p class="time">{{updateTime}} 发布</p>
      <span class="close pa">
        <router-link :to="{name: 'list'}">
          <img src="../assets/images/close.svg">
        </router-link>
      </span>
    </header>

    <div class="weather-page-info">
      <p class="icon">
        <img :data-code="nowWeatherData.now.code" :src="getIcon(nowWeatherData.now.code)">
      </p>
      <p class="temperature">
        <span class="number">{{nowWeatherData.now.temperature}}</span>
        <sup class="degree-icon pr">°</sup>
      </p>
      <p class="status">{{nowWeatherData.now.text}}</p>
    </div>

    <footer class="weather-page-footer pa">
      <ul class="other-info clearfix">
        <li>
          <p class="key">{{getWind}}</p>
          <p class="value">{{weatherData.daily[0].wind_scale}}级</p>
        </li>
        <li>
          <p class="key">能见度</p>
          <p class="value">{{nowWeatherData.now.visibility ? nowWeatherData.now.visibility : '--'}}</p>
        </li>
        <li>
          <p class="key">相对湿度</p>
          <p class="value">{{nowWeatherData.now.humidity}}%</p>
        </li>
      </ul>
      <ul class="future-weather clearfix">
        <li v-for="(weather, index) in weatherData.daily" :key="index">
          <p class="date">{{weather.date}}</p>
          <p class="icon">
            <img :src="getIcon(weather.code_day)">
          </p>
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
import { genWeatherIcons, genRandomNum } from "../utils";
export default {
  name: "detail",
  data() {
    return {
      location: this.$route.params.location,
      wallPaper: [
        'https://up.enterdesk.com/edpic/40/b0/78/40b078ab3d6d9cc46fb65ee5c6317417.jpg',
        'https://up.enterdesk.com/edpic/6d/15/dd/6d15dd87df0965951dca86641008ae56.jpg',
        'https://up.enterdesk.com/edpic/a2/64/40/a26440bab20a000fb58a27d9b501343a.jpg',
      ],
      weatherData: null,
      nowWeatherData: null
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    // 计算天气更新时间
    updateTime() {
      let time = new Date(this.nowWeatherData.last_update);
      let fix = function(num) {
        return num - 0 <= 0 ? "0" + num : num;
      };
      return `${fix(time.getHours())}:${fix(time.getMinutes())}`;
    },
    // 计算风向
    getWind() {
      let weather = this.weatherData.daily[0];
      if (weather !== null) {
        return weather.wind_direction !== "无持续风向"
          ? `${weather.wind_direction}风`
          : `${weather.wind_direction}`;
      }
    },
    getBackground() {
      let result = {};
      const backgrounds = this.wallPaper;
      if (backgrounds) {
        let index = genRandomNum(0, backgrounds.length);
        let img = new Image();
        let imgUrl = this.wallPaper[index];
        return  {
          "background-image": `url(${imgUrl})`
        };
      }
    }
  },
  methods: {
    getData() {
      // 获取天气数据
      this.$jsonp(this.$api.getWeatherUrl, {
        uid: this.$api.uid,
        sig: this.$api.sig,
        ts: this.$api.ts,
        ttl: this.$api.ttl,
        location: this.location,
        language: "zh-Hans",
        unit: "c",
        start: 0,
        days: 3
      })
        .then(json => {
          this.weatherData = json.results[0];
        })
        .catch(err => {
          console.error(err.statusText);
        });

      // 天气实况
      this.$jsonp(this.$api.getNowWeather, {
        uid: this.$api.uid,
        sig: this.$api.sig,
        ts: this.$api.ts,
        ttl: this.$api.ttl,
        location: this.location,
        language: "zh-Hans",
        unit: "c"
      })
        .then(json => {
          this.nowWeatherData = json.results[0];
        })
        .catch(err => {
          console.error(err.statusText);
        });
    },
    // 拼接天气图标
    getIcon(code) {
      return genWeatherIcons(code);
    }
  }
};
</script>

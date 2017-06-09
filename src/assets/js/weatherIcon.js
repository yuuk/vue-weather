const icons = [{
	code: 0,
    cn: '晴',
    en: 'Sunny',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/0.png'
}/*,{
	code: 1,
    cn: '晴',
    en: 'Clear',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/1.png'
},{
	code: 2,
    cn: '晴',
    en: 'Clear',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/2.png'
},{
	code: 3,
    cn: '晴',
    en: 'Clear',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/3.png'
}*/,{
	code: 4,
    cn: '多云',
    en: 'Cloudy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/4.png'
},{
	code: 5,
    cn: '晴间多云',
    en: 'Partly Cloudy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/5.png'
}/*,{
	code: 6,
    cn: '晴间多云',
    en: 'Partly Cloudy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/6.png'
}*/,{
	code: 7,
    cn: '大部多云',
    en: 'Mostly Cloudy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/7.png'
}/*,{
	code: 8,
    cn: '大部多云',
    en: 'Mostly Cloudy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/8.png'
}*/,{
	code: 9,
    cn: '阴',
    en: 'Overcast',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/9.png'
},{
	code: 10,
    cn: '阵雨',
    en: 'Shower',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/10.png'
},{
	code: 11,
    cn: '雷阵雨',
    en: 'Thundershower',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/11.png'
},{
	code: 12,
    cn: '雷阵雨伴有冰雹',
    en: 'Thundershower with Hail',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/12.png'
},{
	code: 13,
    cn: '小雨',
    en: 'Light Rain',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/13.png'
},{
	code: 14,
    cn: '中雨',
    en: 'Moderate Rain',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/14.png'
},{
	code: 15,
    cn: '大雨',
    en: 'Heavy Rain',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/15.png'
},{
	code: 16,
    cn: '暴雨',
    en: 'Storm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/16.png'
},{
	code: 17,
    cn: '大暴雨',
    en: 'Heavy Storm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/17.png'
},{
	code: 18,
    cn: '特大暴雨',
    en: 'Severe Storm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/18.png'
},{
	code: 19,
    cn: '冻雨',
    en: 'Ice Rain',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/19.png'
},{
	code: 20,
    cn: '雨夹雪',
    en: 'Sleet',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/20.png'
},{
	code: 21,
    cn: '阵雪',
    en: 'Snow Flurry',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/21.png'
},{
	code: 22,
    cn: '小雪',
    en: 'Light Snow',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/22.png'
},{
	code: 23,
    cn: '中雪',
    en: 'Moderate Snow',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/23.png'
},{
	code: 24,
    cn: '大雪',
    en: 'Heavy Snow',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/24.png'
},{
	code: 25,
    cn: '暴雪',
    en: 'Snowstorm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/25.png'
},{
	code: 26,
    cn: '浮尘',
    en: 'Dust',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/26.png'
},{
	code: 27,
    cn: '扬沙',
    en: 'Sand',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/27.png'
},{
	code: 28,
    cn: '沙尘暴',
    en: 'Duststorm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/28.png'
},{
	code: 29,
    cn: '强沙尘暴',
    en: 'Sandstorm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/29.png'
},{
	code: 30,
    cn: '雾',
    en: 'Foggy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/30.png'
},{
	code: 31,
    cn: '霾',
    en: 'Haze',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/31.png'
},{
	code: 32,
    cn: '风',
    en: 'Windy',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/32.png'
},{
	code: 33,
    cn: '大风',
    en: 'Blustery',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/33.png'
},{
	code: 34,
    cn: '飓风',
    en: 'Hurricane',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/34.png'
},{
	code: 35,
    cn: '热带风暴',
    en: 'Tropical Storm',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/35.png'
},{
	code: 36,
    cn: '龙卷风',
    en: 'Tornado',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/36.png'
},{
	code: 37,
    cn: '冷',
    en: 'Cold',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/37.png'
},{
	code: 38,
    cn: '热',
    en: 'Hot',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/38.png'
},{
	code: 99,
    cn: '未知',
    en: 'Unknown',
    src: 'https://www.seniverse.com/weather/images/icons/paper_200/99.png'
}]

export default icons;
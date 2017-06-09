<style lang="scss" scoped>
    // 搜索动画
    .fade-enter-active, .fade-leave-active {
        transition: all .4s
    }
    .fade-enter, .fade-leave-active {
        transform: translateY(100%);
        opacity: 0;
    }
    // 删除动画
    .remove-enter-active, .remove-leave-active {
        transition: all .3s
    }
    .remove-enter, .remove-leave-active {
        transform: scale(0);
        opacity: 0;
    }
</style>
<template>
    <div class="main-page pr">
        <header class="navbar text-center">{{title}}</header>
        <ul class="list" v-if="places.length > 0">
            <transition-group name="remove">
            <li class="item clearfix pr" v-for="place in places" :key="place.id">
                <router-link class="pull-left pr" :to="{name: 'detail', params: { location: place.name }}">
                <div class="item-title pull-left">
                    <p class="city">{{ place.isCurrent===true ? `${place.name} (当前城市)` : place.name}}</p>
                    <p class="country">{{place.path}}</p>
                </div>
                <div class="temperature pull-right">{{place.country}}</div>
                </router-link>
                <button class="item-delete pull-right" @click="del($event, place)">删除</button>
            </li>
            </transition-group>
        </ul>
        <div class="empty" v-else>请点击添加按钮添加城市！</div>
        <button class="float-button" @click="toggleSearch(true)"><icon name="plus"></icon></button>
        <transition name="fade">
        <Search v-show="showSearch" @savePlace="savePlace"></Search>
        </transition>
    </div>
</template>

<script>
import Search from './Search.vue'
const STORAGE_KEY = 'WEATHER_PLACE';
const Storage = {
    read(){
        var place = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        return place;
    },
    save(places){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(places));
    }
}

function initSwipeDelete () {
    return Swiped.init({
        query: '.list li a',
        list: true,
        right: 20,
        unit: '%'
    });
}

export default {
    name: 'list',
    data () {
        return {
            title: '城市天气预报 - 移动版',
            showSearch: false,
            swipeObj: null,
            currentPlace: null,
            places: Storage.read()
        }
    },
    components: {
        Search
    },
    mounted () {
        this.getLocation();
        initSwipeDelete();
    },
    methods: {
        toggleSearch (flag) {
            this.showSearch = flag
        },
        savePlace (place) {
            if (place) {
                let flag = this.places.map( (o, i) => {
                    return o.id === place.id;
                });
                if (flag.indexOf(true) == -1) {
                    this.places.push(place);
                    Storage.save(this.places);
                } else {
                    // 带有当前城市标记则不弹出
                    if (!place.isCurrent) {
                        alert('城市已存在，请勿重复选择！');
                    }
                }
            }
            this.toggleSearch(false);
            this.$nextTick(() => {
                initSwipeDelete();
            })
        },
        //删除城市
        del (e, place) {
            let id = place.id;
            let places = this.places;
            let index = 0;
            places.filter((o, i) => {
                if (o.id === id) {
                    index = i;
                    return;
                }
            })
            places.splice(index, 1);
            Storage.save(places);
        },
        // 获取当前位置
        getLocation () {
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position) => {
                    this.locationToCity (position.coords);
                });
            } else {
                alert('获取不到您的位置~');
            }
        },
        // 位置转换为城市
        locationToCity (data) {
            this.$jsonp(this.$api.getLocationUrl, {
                uid: this.$api.uid,
                sig: this.$api.sig,
                ts: this.$api.ts,
                ttl: this.$api.ttl,
                q: `${data.latitude}:${data.longitude}`
            }).then(json => {
                this.currentPlace = json.results[0];
                this.currentPlace.isCurrent = true;
                this.savePlace(this.currentPlace);
            }).catch(err => {
                console.error(err.statusText);
            })
        }
    }
}
</script>
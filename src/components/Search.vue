<template>
    <section class="search-page pa">
        <div class="navbar">
            <div class="searchbar pr">
                <span class="search-icon pa"><icon name="search"></icon></span>
                <input type="text" placeholder="输入城市名或城市简码搜索" class="search-input" v-model.trim="searchText" @keyup="search($event)">
                <span class="search-clear pa" @click="clearInput()"><icon name="remove"></icon></span>
            </div>
        </div>
        <ul class="list" v-if="placeData.length">
            <li class="item" v-for="place in placeData" @click="selectPlace(place)">
                <span class="city">{{ place.name }}</span>
                <span class="path">{{ place.path }}</span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            searchText: '',
            placeData: [],
            timer: null
        }
    },
    methods: {
        clearData () {
            this.placeData = [];
        },
        clearInput () {
            if (this.searchText) {
                this.searchText = '';
            } else {
                this.$emit('savePlace');
            }
            this.clearData();
        },
        search (e) {
            this.timer = e.timeStamp;
            if (this.searchText){
                setTimeout(()=>{
                    if(this.timer - e.timeStamp === 0) {
                        this.$jsonp(this.$api.getLocationUrl, {
                            uid: this.$api.uid,
                            sig: this.$api.sig,
                            ts: this.$api.ts,
                            ttl: this.$api.ttl,
                            q: this.searchText
                        }).then(json => {
                            this.placeData = json.results;
                        }).catch(err => {
                            console.error(err.statusText);
                        })
                    }
                }, 300);
            } else {
                this.clearData();
            }
        },
        selectPlace (place) {
            this.$emit('savePlace', place);
            this.clearInput();
        }
    }
}
</script>
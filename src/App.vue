<style lang="scss">
	.slide-left-enter, .slide-right-leave-active {
	  opacity: 0;
	  transform: translate(100%, 0);
	}
	.slide-left-leave-active, .slide-right-enter {
	  opacity: 0;
	  transform: translate(-100%, 0);
	}
</style>

<template>
    <div id="app">
    	<transition :name="transitionName">
        <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
    	return {
    		transitionName: 'slide-left'
    	}
    },
    watch: {
    	'$route' (to, from) {
    		if(to.path == '/'){
		        this.transitionName = 'slide-right';
		    } else {
		        this.transitionName = 'slide-left';
		    }
    	}
    }
}
</script>
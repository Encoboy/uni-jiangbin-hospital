<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="content-box">
			<scrol-xy-box :listTitle="list1Title"></scrol-xy-box>
			<scrol-xy-box :listTitle="list2Title"></scrol-xy-box>
			<scrol-xy-box :listTitle="list3Title" :titleBgColor="bgColor"></scrol-xy-box>
			<scrol-xy-box :listTitle="list4Title" :titleBgColor="bgColor"></scrol-xy-box>
		</view>
	</view>
</template>

<script>
	import ScrolXyBox from '../components/scroll-xy-box.vue';
	export default {
		components:{
			ScrolXyBox,
		},
		data() {
			return {
				windowHeight:0,
				list1Title:'今日需要随访病人统计',
				list2Title:'今日需随访病人列表',
				list3Title:'至今日超时未随访病人统计',
				list4Title:'至今日超时未随访病人列表',
				bgColor:"#e5b095"
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.content-box{
			flex: 7.5;
			flex-basis: 0;
			margin-bottom: 20rpx;
			overflow-y: scroll;
		}
	}
</style>

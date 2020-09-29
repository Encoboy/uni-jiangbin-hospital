<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image  src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="header-big-title">
			健康数据信息
		</view>
		<line-chart-list></line-chart-list>
	</view>
</template>

<script>
	import LineChartList from '../components/lineChartList.vue'
	export default {
		components: {
			'line-chart-list':LineChartList,
		},
		data() {
			return {
				windowHeight:0,
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
		}
	}
</script>

<style lang="scss">
.header-big-title{
	margin-bottom: 20rpx;
}
</style>

<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="header-big-title header-title">
			工作台
		</view>
		<view class="active-box">
			<view class="item-box" @click="goCompositeSeach">
				<image src="@/static/img/composite-seach.png" mode="aspectFit"></image>
				<text>综合查询</text>
			</view>
			<view class="item-box" @click="goPlan">
				<image src="@/static/img/plan.png" mode="aspectFit"></image>
				<text>随访计划</text>
			</view>
			<view class="item-box" @click="goStatistics">
				<image src="@/static/img/statistics.png" mode="aspectFit"></image>
				<text>随访统计</text>
			</view>
			<view class="item-box" @click="goWorkCase">
				<image src="@/static/img/work-case.png" mode="aspectFit"></image>
				<text>今日工作概况</text>
			</view>
			<view class="item-box" @click="goWorkSearch">
				<image src="@/static/img/work-search.png" mode="aspectFit"></image>
				<text>工作情况查询</text>
			</view>
			<view class="item-box" @click="goUsercenter">
				<image src="@/static/img/user-center.png" mode="aspectFit"></image>
				<text>个人中心</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
			goCompositeSeach(){
				uni.navigateTo({
					url:'/pages/workdesk/compositeSeach/compositeSeach'
				})
			},
			goPlan(){
				uni.navigateTo({
					url:'/pages/workdesk/plan/plan'
				})
			},
			goStatistics(){
				uni.navigateTo({
					url:'/pages/workdesk/statistics/statistics'
				})
			},
			goWorkCase(){
				uni.navigateTo({
					url:'/pages/workdesk/workcase/workcase'
				})
			},
			goWorkSearch(){
				uni.navigateTo({
					url:'/pages/workdesk/workSearch/workSearch'
				})
			},
			goUsercenter(){
				uni.navigateTo({
					url:'/pages/workdesk/usercenter/usercenter'
				})
			}
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.header-title{
			background-color: #b6e2c5;
			padding: 20rpx 0;
		}
		.active-box{
			flex: 7.5;
			flex-basis: 0;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			.item-box {
				flex: 1;
				flex-basis: 0;
				width: 33.3%;
				border: 1px solid $uni-border-color;
				height: 300rpx;
				min-width: 33.3%;
				max-width: 33.3%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				image{
					width: 100rpx;
					height: 100rpx;
					margin-bottom: 10rpx;
				}
				
			}
		}
	}
</style>

<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="active-box">
			<view class="item-box" @click="goCompositeSeach">
				<view class="container">
					<image src="@/static/img/composite-seach.png" mode="aspectFit"></image>
					<text>综合查询</text>
				</view>
			</view>
			<view class="item-box" @click="goPlan">
				<view class="container">
					<image src="@/static/img/plan.png" mode="aspectFit"></image>
					<text>随访计划</text>
				</view>
			</view>
			<view class="item-box" @click="goStatistics">
				<view class="container">
					<image src="@/static/img/statistics.png" mode="aspectFit"></image>
					<text>随访统计</text>
				</view>
			</view>
			<view class="item-box" @click="goWorkCase">
				<view class="container">
					<image src="@/static/img/work-case.png" mode="aspectFit"></image>
					<text>今日工作</text>
					<text>概况</text>
				</view>
			</view>
			<view class="item-box" @click="goWorkSearch">
				<view class="container">
					<image src="@/static/img/work-search.png" mode="aspectFit"></image>
					<text>工作情况</text>
					<text>查询</text>
				</view>
			</view>
			<view class="item-box" @click="goUsercenter">
				<view class="container">
					<image src="@/static/img/user-center.png" mode="aspectFit"></image>
					<text>个人中心</text>
				</view>
			</view>
		</view>
		<doc-tabbar :tabbarType="tabbarType"></doc-tabbar>
	</view>
</template>

<script>
	import DocTabbar from '@/components/docTabbar/docTabbar.vue';
	export default {
		components:{
			'doc-tabbar':DocTabbar,
		},
		data() {
			return {
				windowHeight:0,
				tabbarType:{
					home:false,
					work:true,
					chat:false,
				}
			}
		},
		onLoad(options) {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
			goCompositeSeach(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/compositeSeach/compositeSeach'
				})
			},
			goPlan(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/plan/plan'
				})
			},
			goStatistics(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/statistics/statistics'
				})
			},
			goWorkCase(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/workcase/workcase'
				})
			},
			goWorkSearch(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/workSearch/workSearch'
				})
			},
			goUsercenter(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/usercenter/usercenter'
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
			margin-top: 100rpx;
			display: flex;
			flex-wrap: wrap;
			align-content: flex-start;
			.item-box {
				flex: 1;
				flex-basis: 0;
				width: 33.3%;
				height: 300rpx;
				min-width: 33.3%;
				max-width: 33.3%;
				.container{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 85%;
					height: 90%;
					border: 1px solid $uni-border-color;
					margin: auto;
					border-radius: 5px;
					box-shadow: 3px 3px 5px #888888;
					image{
						width: 70rpx;
						height: 70rpx;
						margin-bottom: 30rpx;
					}
				}
			}
		}
	}
</style>

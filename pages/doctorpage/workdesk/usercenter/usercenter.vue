<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="userInfo-box">
			<view class="username">
				胡 克
			</view>
			<view class="userimg">
				<image src="@/static/img/head-photo.png" mode="aspectFit"></image>
			</view>
			<view class="workname">
				职称：慢性疾病专家
			</view>
			<view class="long-btn editInfo" @click="goChangeDoctorInfo">
				修改信息
			</view>
			<view class="long-btn changeAccount">
				切换账号
			</view>
			<view class="long-btn exit" @click="logout">
				退出登录
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
		methods:{
			goChangeDoctorInfo(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/usercenter/changedoctorInfo/changedoctorInfo'
				})
			},
			logout(){
				uni.showModal({
						title: '提示',
						content: '确定退出吗?',
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url:'/pages/login/login'
								})
								// getApp().globalData.imService.disconnect().then(res => {
								//     uni.navigateTo({
								//     	url:'/pages/login/login'
								//     })
								// })
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
				    });
			}
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.userInfo-box{
			flex: 7.5;
			flex-basis: 0;
			background-color: #d7f7f7;
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.username{
				color: blue;
				font-size: 40rpx;
				margin: 20rpx 0;
			}
			.userimg{
				margin: 20rpx 0;
				image{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.workname {
				font-size: 30rpx;
				margin: 20rpx 0;
			}
			.editInfo,.changeAccount,.exit{
				margin:20rpx 0;
			}
		}
	}
</style>

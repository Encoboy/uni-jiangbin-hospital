<template>
	<view class="home" :style="{ height: windowHeight + 'px' }">
		<view class="img-box">
			<image class="header-img" src="@/static/patientImg/u10.png" mode="aspectFit"></image>
		</view>
		<view class="scroll-box">
			<view class="voice-btn">
				<text class="title">医生反馈</text>
				<image src="@/static/patientImg/voice.png" mode="aspectFit"></image>
				<text class="hint">(点击语音播放)</text>
			</view>
			<view class="doctor-feedback">
				<textarea  auto-height name="" id=""
				 value="王克医生于2020-07-21  09:35向您反馈：今日血糖变高，需服用丹参，日服一次，一次服务1粒。">
				</textarea>
			</view>
			<view class="voice-btn">
				<text class="title">检测数据</text>
				<image src="@/static/patientImg/voice.png" mode="aspectFit"></image>
				<text class="hint">(点击语音播放)</text>
			</view>
			<view class="line"></view>
			<view class="data-box">
				<view class="container">
					<view class="left">
						<view class="title">
							<image src="@/static/patientImg/sphygmomanometer.png" mode="aspectFit"></image>
							<text>血压</text>
						</view>
						<view class="time">
							<text>下次测量：</text>
							<text>08:00</text>
						</view>
					</view>
					<view class="right">
						<view class="data">
							<text style="color: #0099FF;">137/58</text>
							<text>mmhg</text>
						</view>
						<view class="time">
							07-20 08:00
						</view>
					</view>
				</view>
				<view class="container">
					<view class="left">
						<view class="title">
							<image src="@/static/patientImg/blood-glucose.png" mode="aspectFit"></image>
							<text>血糖</text>
						</view>
						<view class="time">
							<text>下次测量：</text>
							<text>08:00</text>
						</view>
					</view>
					<view class="right">
						<view class="data">
							<text style="color: red;">137/58</text>
							<text>mmhg</text>
						</view>
						<view class="time">
							07-20 08:00
						</view>
					</view>
				</view>
				<view class="container">
					<view class="left">
						<view class="title">
							<image src="@/static/patientImg/heart-rate.png" mode="aspectFit"></image>
							<text>心率</text>
						</view>
						<view class="time">
							<text>下次测量：</text>
							<text>08:00</text>
						</view>
					</view>
					<view class="right">
						<view class="data">
							<text>暂无数据</text>
						</view>
						<view class="time">
							07-20 08:00
						</view>
					</view>
				</view>
			</view>
			<view class="comment clearfix">
				<view class="text">
					备注：
				</view>
				<textarea value="" placeholder="若有不适症状可在此填报......" />
				<view class="more" @click="moreBtn">
					更多
				</view>
			</view>
		</view>
		<pat-tabbar :tabbarType="tabbarType"></pat-tabbar>
	</view>
</template>

<script>
	import PatTabbar from '@/components/patTabbar/patTabbar.vue';
	export default {
		components:{
			'pat-tabbar':PatTabbar,
		},
		data(){
			return {
				windowHeight:0,
				tabbarType:{
					home:true,
					dataWrite:false,
					userCenter:false,
					chat:false,
				},
			}
		},
		methods:{
			moreBtn:function(){
				uni.navigateTo({
					url:'/pages/patientpage/home/component/historyData'
				})
			},
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		onBackPress(e) {
			console.log(e);
			var pages = getCurrentPages(); // 当前页面
			var beforePage = pages[pages.length - 2]; // 前一个页面
			console.log('beforePage',beforePage)
			console.log('beforePage.route:',beforePage.route)
			if (e.from == 'backbutton') {
				// uni.showModal({
				// 	title: '提示',
				// 	content: '是否退出登录？',
				// 	success: function (res) {
				// 		if (res.confirm) {
				// 			uni.navigateTo({
				// 				url:'/pages/login/login'
				// 			})
				// 		} else if (res.cancel) {
				// 			// uni.showToast({
				// 			// 	title: '用户点击取消',
				// 			// 	duration: 1000
				// 			// })
				// 		}
				// 	}
				// });
				// return true; //阻止默认返回行为
				if(beforePage.route == 'pages/login/login'){
					uni.showModal({
						title: '提示',
						content: '是否退出登录？',
						success: function (res) {
							if (res.confirm) {
								uni.navigateBack({
									delta: 1
								});
							} else if (res.cancel) {
								// uni.showToast({
								// 	title: '用户点击取消',
								// 	duration: 1000
								// })
							}
						}
					});
					return true; //阻止默认返回行为
				}
			}
		},
	}
	
</script>

<style lang="scss">
	.home {
		font-size: 60rpx;
		padding: 0 20PX;
		display: flex;
		flex-direction: column;
		.img-box{
			flex: 1.5;
			flex-basis: 0;
			.header-img {
				width: 100%;
				height: 150rpx;
				margin-top: 20rpx;
			}
		}
		.scroll-box {
			height: 850rpx;
			margin-bottom: 15PX;
			flex: 8;
			flex-basis: 0;
			overflow-y: scroll;
			.header-title {
				font-size: 60rpx;
				font-weight: 500;
				color: black;
				text-align: center;
				height: 70rpx;
				flex: 1;
				flex-basis: 0;
			}
			.voice-btn {
				margin-bottom: 5PX;
				.title{
					color: #0099FF;
					font-size: 40rpx;
				}
				image {
					height: 40rpx;
					width: 40rpx;
					margin: 0PX 15PX 0 8PX;
				}
				.hint{
					font-size: 30rpx;
				}
			}
			
			.doctor-feedback {
				textarea {
					border: 1px solid lightgray;
					border-radius: 5px;
					width: 95%;
					padding: 5PX 5PX 15PX 5PX;
					color: red;
				}
			}
			
			.line {
				border-top: 1px solid black;
			}
			
			.data-box {
				display: flex;
				flex-direction: column;
				.container {
					border-bottom: 2px solid #0099FF;
					display: flex;
					flex-direction: row;
					padding: 10PX 0 15PX 0;
					.left {
						flex: 5;
						flex-basis: 1;
						display: flex;
						flex-direction: column;
						.title {
							flex: 5;
							flex-basis: 1;
							image {
								height: 100rpx;
								width: 100rpx;
							}
							text {
								font-size: 50rpx;
								font-weight: 600;
							}
						}
						.time{
							flex: 5;
							flex-basis: 1;
							font-size: 38rpx;
						}
					}
					.right{
						flex: 5;
						flex-basis: 1;
						display: flex;
						flex-direction: column;
						.data {
							flex: 5;
							flex-basis: 1;
							font-size: 38rpx;
							text-align: end;
							padding-top: 50rpx;
						}
						.time{
							flex: 5;
							flex-basis: 1;
							font-size: 38rpx;
							text-align: end;
							padding-top: 15rpx;
						}
					}
				}
			}
			.comment {
				margin-top: 15PX;
				.text {
					font-size: 35rpx;
					font-weight: 600;
					margin-bottom: 5PX;
				}
				textarea {
					border: 1px solid gray;
					border-radius: 5px;
					width: 95%;
					padding: 0 5PX;
				}
				.more{
					font-size: 30rpx;
					margin-top: 15PX;
					text-align: center;
					padding: 5px 0;
					width: 150rpx;
					border-radius: 150rpx;
					background-color: #6ce155;
					color: white;
					float: right;
				}
			}
			.clearfix:after{
				content: '';
				display: block;
				height: 0;
				clear: both;
				visibility: hidden;
			}
			.clearfix{
				*zoom:1;
			}
		}
	}
</style>

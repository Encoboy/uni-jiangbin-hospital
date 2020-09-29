<template>
	<view class="fill-statement" :style="{ height: windowHeight + 'px' }">
		<view class="img-box">
			<image class="header-img" src="@/static/patientImg/u10.png" mode="aspectFit"></image>
		</view>
			<view class="scroll-box">
				<form @submit="formSubmit">
					<view class="header-title">
						今日检测数据
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
									<input type="text" value="" name="sphygmomanometer" />
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
									<input type="text" value="" name="blood-glucose" />
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
									<input type="text" value="" name="heart-rate" />
									<text>mmhg</text>
								</view>
								<view class="time">
									07-20 08:00
								</view>
							</view>
						</view>
					</view>
					<view class="comment">
						<view class="text">
							备注：
						</view>
						<textarea value="" placeholder="若有不适症状可在此填报......" name="comment" />
						
						<button class="submit" form-type="submit">上 报</button>
						
					</view>
				</form>
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
		data() {
			return {
				windowHeight:0,
				tabbarType:{
					home:false,
					dataWrite:true,
					userCenter:false,
					chat:false,
				},
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		}
	}
</script>

<style lang="scss">
	.fill-statement {
		font-size: 60rpx;
		padding: 0 20PX;
		display: flex;
		flex-direction: column;
		
		.img-box {
			flex: 1.5;
			flex-basis: 0;
			.header-img {
				width: 100%;
				height: 150rpx;
				margin-top: 20rpx;
			}
		}
		.scroll-box {
			flex: 8;
			flex-basis: 0;
			margin-bottom: 15PX;
			overflow-y: scroll;
			.header-title {
				color: #0099FF;
				text-align: center;
				font-size: 60rpx;
				font-weight: 500;
				color: black;
				text-align: center;
				margin-top: 20PX;
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
					border: 1px solid gray;
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
							display: flex;
							flex-direction: row;
							justify-content: flex-end;
							font-size: 38rpx;
							text-align: end;
							padding-top: 33rpx;
							input {
								border: 1px solid lightgray;
								border-radius: 5px;
								display: inline-block;
								width: 150rpx;
								
							}
						}
						.time{
							flex: 5;
							flex-basis: 1;
							font-size: 38rpx;
							text-align: end;
							padding-top: 28rpx;
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
				.submit{
					width: 130PX;
					height: 35PX;
					background-color: #6ce155;
					border: none;
					border-radius: 50PX;
					font-size: 40rpx;
					color: white;
					text-align: center;
					line-height: 35PX;
					margin: 20PX auto;
				}
			}
		}
	}
</style>

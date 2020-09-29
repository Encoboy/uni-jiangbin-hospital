<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="content-box">
			<view class="header-big-title add-plan-title">
				新增随访计划
			</view>
			<view class="select-date">
				<text class="date-title">选择日期:</text>
				<view class="date-box"  @click="show = true">
					<text>{{date}}</text>
					<image src="@/static/img/datebtn.png" mode="aspectFit"></image>
				</view>
				<u-calendar v-model="show" max-date="2100"  :mode="mode" @change="change"></u-calendar>
			</view>
			<view class="textarea-box">
				<text>随访说明：</text>
				<textarea class="text-area"/>
			</view>
			<view class="doctor">
				<text>随访医生：</text>
				<input type="text" value="" v-model="doctor"/>
				<view class="mini-btn" @click="goSelectDoctorList">
					选择
				</view>
			</view>
			<view class="btn-box">
				<view class="pri-btn">
					提交
				</view>
				<view class="pri-btn exit" @click="cancle">
					关闭
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:0,
				show: false,
				mode: 'date',
				date:'',
				doctor:'',
			}
		},
		onLoad(options) {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
			uni.$on('selectFollowDoctor',(data)=>{
				this.doctor = data
			})
		},
		onUnload(){
			uni.$off('selectFollowDoctor',()=>{
				console.log('关闭selectFollowDoctor监听函数')
			})
		},
		methods:{
			change(e) {
				console.log(e);
				this.date = e.result;
			},
			goSelectDoctorList(){
				uni.navigateTo({
					url:'/pages/doctorpage/workdesk/compositeSeach/selectdoctorlist/selectdoctorlist'
				})
			},
			cancle(){
				uni.navigateBack({
				    delta: 1
				});
			},
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.content-box{
			flex: 8.5;
			flex-basis: 0;
			margin-bottom: 20rpx;
			overflow-y: scroll;
			background-color: #bdf2e5;
			border: 1px solid $uni-border-color;
			
			.add-plan-title {
				color: #756666;
				margin-top: 20rpx;
			}
			.select-date{
				display: flex;
				flex-direction: row;
				margin: 50rpx 0 30rpx 30rpx;
				.date-title {
					text-align: center;
					height: 60rpx;
					line-height: 60rpx;
					margin-right: 40rpx;
				}
				.date-box {
					border: 1px solid $uni-border-color;
					width: 300rpx;
					height: 60rpx;
					align-items: center;
					border-radius: 10rpx;
					background-color: white;
					line-height: 60rpx;
					text{
						float: left;
						margin-left: 10rpx;
					}
					image {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						float: right;
					}
				}
				
			}
			.textarea-box {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 50rpx 0 30rpx 30rpx;
				text{
					text-align: center;
					height: 60rpx;
					line-height: 60rpx;
					margin-right: 20rpx;
				}
				.text-area{
					width: 450rpx;
					height: 200rpx;
					border: 1px solid $uni-border-color;
					background-color: white;
					border-radius: 5px;
				}
			}
			.doctor{
				display: flex;
				flex-direction: row;
				margin: 50rpx 0 30rpx 30rpx;
				align-items: center;
				input{
					border: 1px solid $uni-border-color;
					background-color: white;
					margin-right: 20rpx;
					margin-left: 20rpx;
					border-radius: 5px;
					height: 60rpx;
				}
			}
			.btn-box{
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin-top: 100rpx;
				.exit {
					background-color: #cccccc;
					margin-left: 50rpx;
				}
			}
		}
	}
</style>

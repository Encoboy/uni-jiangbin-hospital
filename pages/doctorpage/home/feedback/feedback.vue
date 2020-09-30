<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="content-box">
			<view class="header-big-title header-title">
				<!-- 医生反馈 -->
			</view>
			<view class="text-area">
				<u-input 
					style="background-color: white;" 
					placeholder="最多输入200字符"
					v-model="value" :type="type" 
					maxlength="200"
					:border="border" 
					:height="height" 
					:auto-height="autoHeight" 
				/>
			</view>
			<view class="btn-box">
				<view class="save-btn">
					保存
				</view>
				<view class="save-btn cancel" @click="cancel">
					取消
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import LineChart from '@/components/stan-ucharts/LineChart.vue';
	export default {
		components: {
			LineChart,
		},
		data() {
			return {
				windowHeight:0,
				value: '',
				type: 'textarea',
				border: true,
				height: 500,
				autoHeight: true,
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
			cancel(){
				uni.navigateTo({
					url:'/pages/doctorpage/home/home'
				})
			}
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.content-box{
			flex: 8.5;
			flex-basis: 0;
			margin-bottom: 30rpx;
			padding-top: 30rpx;
			background-color: #bdf2e5;
			.header-title {
				color: #666666;
			}
			.text-area {
				padding: 20rpx;
			}
			.btn-box {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				margin-top: 50rpx;
				.save-btn{
					width: 250rpx;
					height: 80rpx;
					color: white;
					border-radius: 10px;
					background-color: #169bd5;
					text-align: center;
					line-height: 80rpx;
				}
				.cancel {
					background-color: #cccccc;
				}
			}
		}


	}
</style>

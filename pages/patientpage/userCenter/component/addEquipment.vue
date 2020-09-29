<template>
	<view class="add-box">
		<view class="action-box">
			<view class="btn handle-add">
				手动添加
			</view>
			<view class="btn scan-code">
				扫一扫
			</view>
		</view>
		<view class="form-box">
			<form @submit="addEquipment">
				<view class="hint">
					<view>
						温馨提示：
					</view>
					<view>
						请手动输入设备SN号！ 设备SN号在血压计的背后！
					</view>
				</view>
				<view class="snNumber">
					<text class="name">
						设备SN号
					</text>
					<input type="text" value="" placeholder="请输入设备SN" name="snNumber" />
				</view>
				<button class="btn" form-type="submit">绑 定</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			addEquipment:function(e) {
				const value = e.detail.value;
				console.log(value);
			}
		}
	}
</script>

<style lang="scss">
	.add-box {
		.action-box {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: 1px solid black;
			height: 100rpx;
			align-items: center;
			margin: 0 10rpx;
			.btn{
				border-radius: 5px;
				width: 150rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				background-color: $uni-color-primary;
				color: white;
			}
			.scan-code{
				background-color: $uni-color-success;
			}
		}
		.form-box{
			padding: 0 50rpx;
			.hint{
				border: 1px solid lightgray;
				margin: 20rpx 0;
				font-size: 30rpx;
				padding: 20rpx;
				color: red;
				border-radius: 5px;
			}
			.snNumber{
				border: 1px solid lightgray;
				border-radius: 5px;
				height: 70rpx;
				margin: 50rpx 0;
				padding: 6px;
				.name{
					font-size: 30rpx;
					float: left;
					margin-right: 20rpx;
				}
				input {
					font-size: 30rpx;
				}
			}
			.btn{
				width: 400rpx;
				height: 80rpx;
				color: white;
				line-height: 80rpx;
				background-color: green;
			}
		}
	}
</style>

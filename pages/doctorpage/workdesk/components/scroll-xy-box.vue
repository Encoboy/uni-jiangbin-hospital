<template>
	<view class="list-box">
		<view class="list-title" :style="{'background-color':titleBgColor}">
			{{listTitle}}
		</view>
		<scroll-view scroll-x="true" scroll-y="true">
			<view class="table-box">
				<view class="table-title">
					<view class="name">
						用户
					</view>
					<view class="action th-action">
						操作
					</view>
				</view>
				<view class="table-td">
					<view class="name">
						王五
					</view>
					<view class="action th-action">
						各种操作
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:[
			"listTitle",
			"titleBgColor"
		],
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.list-box{
		.list-title {
			width: 100%;
			height: 80rpx;
			color: white;
			font-size: 40rpx;
			line-height: 80rpx;
			background-color: #95cae5;
		}
		.table-box{
			width: 200%;
			height: 300rpx;
			.table-title,.table-td{
				display: flex;
				flex-direction: row;
				width: 100%;
				text-align: center;
				.name,.action {
					width: 30%;
					height: 50rpx;
					line-height: 50rpx;
					border:1px solid $uni-border-color;
				}
				.th-action {
					width: 70%;
				}
			}
		}
	}
</style>

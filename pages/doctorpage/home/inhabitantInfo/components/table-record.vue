<template>
	<view class="table-record-box">
		<view class="inhabit-info-title">
			<text>{{data.title}}</text>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="table-box">
			<view class="content-box">
				<view class="header-row">
					<view class="header-row-title">
						{{data.title}}
					</view>
					<view class="action th-action" >
						操作
					</view>
				</view>
				<view class="th-row">
					<block v-for="(item,index) in data.data" key="index">
						<view class="th-row-title">
							{{item.date}}  {{item.ill}}
						</view>
						<view class="action th-action">
							<block v-for="(action,id) in data.action" :key="id">
								<view>{{action}}</view>
							</block>
						</view>
					</block>
				</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:[
			"data",
		],
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	// 门诊记录 住院記錄
	.table-record-box {
		.content-box{
			width: 100%;
			height: 300rpx;
			overflow-y: scroll;
			.header-row,.th-row {
				display: flex;
				flex-direction: row;
				width: 250%;
				.header-row-title,.th-row-title,.action {
					width: 30%;
					height: 70rpx;
					border: 1px solid $uni-border-color;
					text-align: center;
					line-height: 70rpx;
				}
				.th-action{
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					width: 70%;
					view{
						height: 50rpx;
						width: 120rpx;
						background-color: #66ccff;
						text-align: center;
						line-height: 50rpx;
						font-size: 20rpx;
						border-radius: 10rpx;
					}
				}
			}
		}
	}
</style>

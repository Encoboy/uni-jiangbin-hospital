<template>
	<view class="select-date">
		<text class="date-title">选择日期 </text>
		<view class="date-box"  @click="show = true">
			<text style="margin-left: 20rpx;">{{startDate}}</text>
			<text>{{startDate?'~':''}}</text>
			<text>{{endDate}}</text>
			<image src="@/static/img/datebtn.png" mode="aspectFit"></image>
		</view>
		<u-calendar v-model="show" max-date="2100" :mode="mode" @change="change"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'range',
				startDate:'',
				endDate:'',
			}
		},

		methods: {
			change(e) {
				console.log(e);
				this.startDate = e.startDate;
				this.endDate = e.endDate;
			},
		}
	}
</script>

<style lang="scss">
	.select-date{
		flex: 1;
		flex-basis: 0;
		display: flex;
		flex-direction: row;
		.date-title {
			flex: 2;
			flex-basis: 0;
			text-align: center;
			height: 72rpx;
			line-height: 72rpx;
		}
		.date-box {
			flex: 8;
			flex-basis: 0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			border: 1px solid $uni-border-color;
			height: 72rpx;
			align-items: center;
			border-radius: 10rpx;
			padding: 0 10rpx;
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
		
	}
</style>

<template>
	<view class="">
		<view class="select-date">
			<text class="date-title">开始日期 : </text>
			<view class="date-box"  @click="show1 = true">
				<text>{{startDate}}</text>
				<image src="@/static/img/datebtn.png" mode="aspectFit"></image>
			</view>
			<u-calendar v-model="show1" :max-date="endDate" :mode="mode1" @change="change1"></u-calendar>
		</view>
		<view class="select-date">
			<text class="date-title">结束日期 : </text>
			<view class="date-box"  @click="show2 = true">
				<text>{{endDate}}</text>
				<image src="@/static/img/datebtn.png" mode="aspectFit"></image>
			</view>
			<u-calendar v-model="show2"  :min-date="startDate" max-date="2100" :mode="mode2" @change="change2"></u-calendar>
		</view>
	</view>

</template>

<script>
	import { timeFilter } from '@/util/util.js';
	export default {
		data() {
			return {
				show1: false,
				mode1: 'date',
				show2:false,
				mode2:'date',
				startDate:'',
				endDate:'',
			}
		},
		created() {
			const time = timeFilter(new Date())
			this.startDate = time;
			this.endDate = time;
		},
		methods: {
			change1(e) {
				this.startDate = e.result;
			},
			change2(e) {
				this.endDate = e.result;
			}
		},

	}
</script>

<style lang="scss">
	.select-date{
		flex: 1;
		flex-basis: 0;
		display: flex;
		flex-direction: row;
		margin-bottom: 20rpx;
		justify-content: flex-start;
		.date-title {
			text-align: left;
			height: 72rpx;
			line-height: 72rpx;
			margin-right: 20rpx;
		}
		.date-box {
			width: 300rpx;
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

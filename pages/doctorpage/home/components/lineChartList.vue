<template>
	<view>
<!-- 		<select-date></select-date> -->
		<single-data></single-data>
		<view class="table-box">
			<view class="unit">
				<view class="name">
					血糖
				</view>
				<view class="mmhg">
					单位mmhg
				</view>
			</view>
			<view class="line">
				<line-chart canvasId="index_line_2" :dataAs="lineData2" />
			</view>
			<view class="unit">
				<view class="name">
					血压
				</view>
				<view class="mmhg">
					单位mmhg
				</view>
			</view>
			<view class="line">
				<line-chart canvasId="index_line_2" :dataAs="lineData2" />
			</view>
			<view class="unit">
				<view class="name">
					心率
				</view>
				<view class="mmhg">
					单位mmhg
				</view>
			</view>
			<view class="line">
				<line-chart canvasId="index_line_2" :dataAs="lineData2" />
			</view>
		</view>
	</view>
</template>

<script>
	import LineChart from '@/components/stan-ucharts/LineChart.vue';
	import SingleDate from '@/components/selectDate/singleDate.vue';
	export default {
		components: {
			LineChart,
			'single-data':SingleDate,
		},
		data() {
			return {
				lineData2: {
					//数字的图--折线图数据
					categories: ['1', '2', '3', '4', '5', '6'],
					series: [
						{ name: '实时', data: [35000, 80000, 25000, 37000, 40000, 20000] },
					]
				},
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	/* 数据展示 */
	.table-box {
		flex: 6.5;
		flex-basis: 0;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		.unit{
			margin-left: 25rpx;
			.name{
				font-size: 40rpx;
				font-weight: 600;
				margin-top: 50rpx;
				color: red;
			}
			.mmhg{
				font-size: 30rpx;
				color: lightgray;
			}
		}
	}
</style>

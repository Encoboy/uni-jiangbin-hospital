<template>
	<view class="historyData-box">
		<view class="tabbar-box">
			<block v-for="(item,index) in tabbarData" :key='index'>
				<view class="notSelect" :class="{select:num == index}" @click="selectBtn(index)">
					{{item}}
				</view>
			</block>
		</view>
		<select-date></select-date>
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
	</view>
</template>

<script>
import LineChart from '@/components/stan-ucharts/LineChart.vue';
import uniIcons from "@/components/uni-icons/uni-icons.vue";
import SelectDate from '@/components/selectDate/selectDate.vue';
export default {
	name: 'Index',
	components: {
		LineChart,
		uniIcons,
		'select-date':SelectDate,
	},
	data() {
		return {
			lineData2: {
				//数字的图--折线图数据
				categories: ['1', '2', '3', '4', '5', '6'],
				series: [
					{ name: '收缩压', data: [35000, 80000, 25000, 37000, 40000, 20000] },
					{ name: '舒张压', data: [70000, 40000, 65000, 20000, 44000, 68000] },
				]
			},
			tabbarData:['本周','本月','本年'],
			num:0

		};
	},
	methods: {
		selectBtn:function(index){
			this.num = index;
		},
		leftTime:function(){
			console.log('向左')
		},
		rightTime:function(){
			console.log('向右')
		}
	},
	created() {},
	mounted() {
		
	}
};
</script>

<style lang="scss">
	.historyData-box {
		padding: 10rpx 40rpx;
		.tabbar-box{
			display: flex;
			flex-direction: row;
			font-size: 30rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			padding: 0 100rpx;
			margin: 50rpx 0 50rpx 0;
			.select{
				flex: 3;
				flex-basis: 0;
				background-color: lightblue;
				border: 1px solid blue;
				color: white !important;
			}
			.notSelect{
				flex: 3;
				flex-basis: 0;
				border: 1px solid lightgray;
				color: black;
			}
		}

		.unit{
			margin-left: 30rpx;
			margin-top: 50rpx;
			.name{
				font-size: 40rpx;
				font-weight: 600;
			}
			.mmhg{
				font-size: 30rpx;
				color: lightgray;
			}
		}
	}
</style>

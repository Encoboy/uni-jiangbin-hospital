<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<!-- 选择日期 -->
		<single-date></single-date>
		<view class="radio-box">
			<u-radio-group v-model="radioValue">
				<u-radio 
					@change="radioChange" 
					v-for="(item, index) in list" :key="index" 
					:name="item.name"
					:disabled="item.disabled"
				>
					{{item.name}}
				</u-radio>
			</u-radio-group>
		</view>
		<view class="chart-box">
			<view class="chart-his" v-if="radioValue=='柱状图'">
				<histogram-chart :dataAs="histogramData" canvasId="ht0" />
			</view>
			<view class="table-box" v-if="radioValue=='表格'">
					<u-table>
						<u-tr>
							<u-th>是否到期</u-th>
							<u-th>是否处理</u-th>
							<u-th>数量</u-th>
						</u-tr>
						<u-tr>
							<u-td>已到期</u-td>
							<u-td>未处理</u-td>
							<u-td>22</u-td>
						</u-tr>
						<u-tr>
							<u-td>已到期</u-td>
							<u-td>已处理</u-td>
							<u-td>39</u-td>
						</u-tr>
						<u-tr>
							<u-td>未到期</u-td>
							<u-td>未处理</u-td>
							<u-td>0</u-td>
						</u-tr>
						<u-tr>
							<u-td>未到期</u-td>
							<u-td>已处理</u-td>
							<u-td>0</u-td>
						</u-tr>
					</u-table>
			</view>
		</view>
	</view>
</template>

<script>
	import SingleDate from '@/components/selectDate/singleDate.vue';
	import HistogramCharts from '@/components/stan-ucharts/HistogramChart.vue'
	export default {
		components:{
			'single-date':SingleDate,
			'histogram-chart':HistogramCharts,
		},
		data() {
			return {
				windowHeight:0,
				list: [
					{
						name: '柱状图',
						disabled: false
					},
					{
						name: '表格',
						disabled: false
					}
				],
				radioValue: '柱状图',
				histogramData: {
					//总模板
					categories: ['已到期未处理', '已到期已处理','未到期未处理','未到期已处理'],
					series: [
						{
							name: '数量', //数据名称
							data: [
								{
									value:35,
									color:'#ff5252'
								},
								{
									
									value: 71, 
									color: '#52ffa9' 
								},
								{
									value:97,
									color:'#a9a9a9'
								},
								{
									value:42,
									color:'#a9a9a9'
								},
							],
							show: true, 
							color: '#FFFFFF', 
							textSize: 12 
							//如涉及混合图表请看 http://doc.ucharts.cn/1172126
						}
					]
				},
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e);
				this.radioValue = e;
			},
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		// padding: 0 10px 0 0;
		.radio-box{
			flex: 1;
			flex-basis: 0;
			text-align: end;
		}
		.chart-box {
			flex: 6.5;
			flex-basis: 0;
		}
	}
</style>


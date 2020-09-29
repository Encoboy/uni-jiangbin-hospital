<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="header-big-title" >
			总体情况
		</view>
		<select-date></select-date>
		<view class="table-box">
			<u-table class="table-title">
				<u-tr>
					<block v-for="(item,index) in tabelThArr" :key="index">
						<u-th>{{item}}</u-th>
					</block>
				</u-tr>
			</u-table>
			<u-table class="table-content">
				<block v-for="(item,index) in tableUtdContentArr" :key="index">
					<u-tr>
						<u-td><text class="name" @click="goInhabitantInfo(item.name)">{{item.name}}</text></u-td>
						<u-td><text @click="goDataVisualization">{{item.xuetang}}</text></u-td>
						<u-td><text @click="goDataVisualization">{{item.xueya}}</text></u-td>
						<u-td><text @click="goDataVisualization">{{item.xinlv}}</text></u-td>
						<u-td>
							<view class="mini-btn" @click="goFeedback">
								反馈
							</view>
						</u-td>
					</u-tr>
				</block>
			</u-table>
		</view>
	</view>
</template>

<script>
	import SelectDate from '@/components/selectDate/selectDate.vue';
	export default {
		components:{
			'select-date':SelectDate,
		},
		data() {
			return {
				windowHeight:0,
				tabelThArr:[
					'姓名',
					'血糖',
					'血压',
					'心率',
					'操作',
				],
				tableUtdContentArr:[
					{
						name:'王五',
						xuetang:'50',
						xueya:'40',
						xinlv:'30'
					},
					{
						name:'张三',
						xuetang:'60',
						xueya:'40',
						xinlv:'30'
					},
					
				]
				
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
			goDataVisualization(){
				uni.navigateTo({
					url:'/pages/home/dataVisualization/dataVisualization'
				})
			},
			goInhabitantInfo(name){
				uni.navigateTo({
					url:`/pages/home/inhabitantInfo/inhabitantInfo?name=${name}`
				})
			},
			goFeedback(){
				uni.navigateTo({
					url:'/pages/home/feedback/feedback'
				})
			},
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.table-box {
			flex: 6.5;
			flex-basis: 0;
			.table-content{
				overflow-y: scroll;
				.name{
					color:blue;
				}
			}
		}
	}
</style>

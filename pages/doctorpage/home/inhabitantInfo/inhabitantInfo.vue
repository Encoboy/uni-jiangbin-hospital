<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="header-big-title" >
			王五
		</view>
		<view class="scroll-box" >
			<!-- 用戶信息 -->
			<user-info :reUserInfo="userInfoData"></user-info>
			<!-- 门诊记录 -->
			<table-record :data="outpatientData" ></table-record>
			<!-- 住院记录 -->
			<table-record :data="inHospitalData" ></table-record>
			<!-- 用药记录 -->
			<view class="pharmacy">
				<view class="inhabit-info-title">
					<text>用药记录</text>
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="table-box">
						<view class="content-box">
							<view class="pharmacy-type">
								处方类型：西药处方日期：2016-05-31 15:37:08 诊断:急性冠周炎医疗机构：广西壮族自治区江滨医院
							</view>
								<u-table>
									<u-tr>
										<u-th width="25%">{{pharmacyHeadList.name}}</u-th>
										<u-th>{{pharmacyHeadList.num}}</u-th>
										<u-th>{{pharmacyHeadList.numUnit}}</u-th>
										<u-th>{{pharmacyHeadList.oneAmount}}</u-th>
										<u-th>{{pharmacyHeadList.amountUnit}}</u-th>
										<u-th>{{pharmacyHeadList.way}}</u-th>
										<u-th>{{pharmacyHeadList.use}}</u-th>
										<u-th>{{pharmacyHeadList.day}}</u-th>
										<u-th>{{pharmacyHeadList.oneDayNum}}</u-th>
									</u-tr>
									<block v-for="(item,index) in pharmacyContentArr" :key="index">
										<u-tr>
											<u-th width="25%">{{item.name}}</u-th>
											<u-th>{{item.num}}</u-th>
											<u-th>{{item.numUnit}}</u-th>
											<u-th>{{item.oneAmount}}</u-th>
											<u-th>{{item.amountUnit}}</u-th>
											<u-th>{{item.way}}</u-th>
											<u-th>{{item.use}}</u-th>
											<u-th>{{item.day}}</u-th>
											<u-th>{{item.oneDayNum}}</u-th>
										</u-tr>
									</block>
								</u-table>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="guardianship">
				<view class="inhabit-info-title">
					<text>监护记录</text>
				</view>
				<line-chart-list></line-chart-list>
			</view>
		</view>
		
	</view>
</template>

<script>
	import UserInfo from '@/components/userinfo/userinfo.vue';
	import LineChartList from '../components/lineChartList.vue';
	import TableRecord from './components/table-record.vue';
	import {post} from '@/api/docApi/request.js';
	import {singlePatientInfoUrl} from '@/api/docApi/api.js'
	export default {
		components: {
			'user-info':UserInfo,
			'line-chart-list':LineChartList,
			TableRecord,
		},
		data(){
			return {
				windowHeight:0,
				// 用药记录数据
				pharmacyHeadList:{
					name:'药品名称',
					num:'药品数量',
					numUnit:'数量单位',
					oneAmount:'一次剂量',
					amountUnit:'剂量单位',
					way:'给药途径',
					use:'药品用法',
					day:'用药天数',
					oneDayNum:'每日次数'
				},
				pharmacyContentArr:[
					{
						name:'替硝唑氯化钠注射液',
						num:'1',
						numUnit:'瓶',
						oneAmount:'4',
						amountUnit:'g',
						way:'静滴',
						use:'qd',
						day:'2',
						oneDayNum:'1',
					},
					{
						name:'乳酸左氧氟沙星氯化钠注射液',
						num:'1',
						numUnit:'瓶',
						oneAmount:'4',
						amountUnit:'g',
						way:'静滴',
						use:'qd',
						day:'2',
						oneDayNum:'1',
					},
				],
				userInfoData:{
					'name':'王五',
					'idCard':'45636856397848',
					'sex':'男',
					'marryStatus':'已婚',
					'nation':'民族',
					'work':'自由職業',
					'boold':'A',
					'rhBoold':'未知',
					'drugAllergy':'無',
					"phone":'13664644444',
					"location":'广西南宁市青秀区东葛路'
				},
				// 门诊记录数据
				outpatientData:{
					title:'门诊记录',
					data:[
						{
							date:'2019-02-20',
							ill:'肺部感染',
						},
					],
					action:[
						'病历',
						'处方',
						'化验',
						'PACS',
					],
				},
				// 住院记录
				inHospitalData:{
					title:'住院记录',
					data:[
						{
							date:'2019-02-20',
							ill:'住院 呼吸病'
						},
					],
					action:[
						'入院记录',
						'长期医嘱',
						'临时医嘱',
						'检查结果',
						'PACS',
						'出院小结'
					],
				},
			}
		},
		methods:{
			addEquipment(){
				uni.navigateTo({
					url:'/pages/doctorpage/userCenter/component/addEquipment',
				})
			},
			editUserInfo(){
				uni.navigateTo({
					url:'/pages/doctorpage/userCenter/component/editUserInfo'
				})
			},
			getSinglePatientInfo(id){
				let params = {
					id:id
				}
				post(singlePatientInfoUrl,params).then(res => {
					console.log('患者数据：',res);
					this.userInfoData = res.data.result;
				}).catch(err => {
					console.log('err:',err);
				})
			}
			
		},
		onLoad(options) {
			console.log('url传过来的参数：',options);
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
			this.getSinglePatientInfo(options.id);
		}
	}
</script>

<style lang="scss">
	.hospital-box {
		.scroll-box {
			margin-bottom: 15PX;
			flex: 8;
			flex-basis: 0;
			overflow-y: scroll;
			padding: 0 10rpx;
			// 用药纪律
			.pharmacy {
				.content-box{
					width: 220%;
					height: 300rpx;
					overflow-y: scroll;
					.pharmacy-type{
						font-size: 30rpx;
						font-weight: 600;
						margin: 20rpx 0;
					}
				}
			}
			// 监护记录
			.guardianship {
				.inhabit-info-title{
					margin-bottom: 20rpx;
				}
			}
		}
	}
</style>

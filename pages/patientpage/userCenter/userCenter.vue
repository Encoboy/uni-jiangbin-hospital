<template>
	<view class="user-center" :style="{ height: windowHeight + 'px' }">
		<view class="header">
			<view class="header-img">
				<image src="@/static/patientImg/header-photo.png" mode="aspectFit"></image>
				<text>王五</text>
			</view>
		</view>
		<view class="scroll-box" >
			<view>
				<view class="userinfo">
					<view class="title">
						<text>基本信息</text>
						<view class="btn" @click="editUserInfo">修改</view>
					</view>
					<view class="info">
						<view class="left">
							姓名：{{userinfo.user}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							身份证号：<text>{{userinfo.idcard}}</text>
						</view>
					</view>
					<view class="info">
						<view class="left">
							性别：{{userinfo.selectSex}}
						</view>
						<view class="right">
							婚姻状况：{{userinfo.selectMarri}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							民族：{{userinfo.nation}}
						</view>
						<view class="right">
							职业：{{userinfo.work}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							血型：{{userinfo.selectSanguis}}
						</view>
						<view class="right">
							RH血型：{{userinfo.selectRhBlood}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							药物过敏：{{userinfo.allergy}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							联系电话：{{userinfo.phone}}
						</view>
					</view>
					<view class="info">
						<view class="left">
							家庭地址：{{userinfo.location}}
						</view>
					</view>
				</view>
				<view class="configuration">
					<view class="title">
						<text>配置管理</text>
					</view>
					<view class="equipment-manage">
						<view class="equipment-title">
							设备管理
						</view>
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
										<u-td><text class="name">{{item.id}}</text></u-td>
										<u-td><text>{{item.type}}</text></u-td>
										<u-td><text>{{item.status}}</text></u-td>
										<u-td>
											<view class="action">
												<view class="btn edit">
													修改
												</view>
												<view class="btn del">
													删除
												</view>
											</view>
										</u-td>
									</u-tr>
								</block>
							</u-table>
						</view>
						
						<view class="equipment-add">
							<u-icon @click="addEquipment" name="plus-circle-fill" color="#2aa88d" size="100"></u-icon>
						</view>
						<image class="line-img" src="@/static/patientImg/line.png" mode="aspectFit"></image>
					</view>
					<view class="bluetooth-manager">
						<view class="bluetooth-title">
							<text>蓝牙管理</text>
						</view>
						<view class="paired-equipment">
							已经配对的设备
						</view>
						<view class="equipment-list">
							<image src="@/static/patientImg/bluetooth.png" mode="aspectFit"></image>
							<text class="number">
								lp 145825655525
							</text>
							<view class="action">
								取消配对
							</view>
						</view>
					</view>
				</view>
				<view class="research-info">
					<view class="title">
						<text>调查信息</text>
					</view>
					<view class="questionnaire-name">
						问卷名称
					</view>
					<view class="questionnaire-content">
						<view class="row">
							<view class="name">
								长寿乡老人问卷调查
							</view>
							<view class="action">
								<view class="btn edit">
									修改
								</view>
								<view class="btn look">
									查看
								</view>
							</view>
						</view>
						<view class="row">
							<view class="name">
								老人问卷调查
							</view>
							<view class="action">
								<view class="write-form">
									填 报
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="logout" @click="logout">
					退出当前账号
				</view>
			</view>
		</view>
		<pat-tabbar :tabbarType="tabbarType"></pat-tabbar>
	</view>
</template>

<script>
	import PatTabbar from '@/components/patTabbar/patTabbar.vue';
	export default {
		components:{
			'pat-tabbar':PatTabbar,
		},
		data(){
			return {
				windowHeight:0,
				tabbarType:{
					home:false,
					dataWrite:false,
					userCenter:true,
					chat:false,
				},
				userinfo:{
					user:'王五',
					idcard:'452225199610255642',
					selectSex:'男',
					selectMarri:'已婚',
					nation:'汉',
					work:'自由职业',
					selectSanguis:'A型',
					selectRhBlood:'RH阳性',
					allergy:'无',
					phone:'13299584162',
					location:'南宁市东葛路108号'
				},
				tabelThArr:[
					'设备编号',
					'设备类型',
					'设备状态',
					'操作',
				],
				tableUtdContentArr:[
					{
						id:'2188588',
						type:'智能手表',
						status:'使用中',
					},
				]
			}
		},
		methods:{
			addEquipment:function(){
				uni.navigateTo({
					url:'/pages/patientpage/userCenter/component/addEquipment',
				})
			},
			editUserInfo:function(){
				let userinfo = JSON.stringify(this.userinfo)
				uni.navigateTo({
					url:`/pages/patientpage/userCenter/component/editUserInfo?userinfo=${userinfo}`
				})
			},
			logout(){
				uni.showModal({
					title: '提示',
					content: '确定退出吗?',
					success: function (res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'/pages/login/login'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		}
	}
</script>

<style lang="scss">
	.title{
		width: 100%;
		height: 68rpx;
		background-color: #95cae5;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text {
			color: white;
			font-size: 35rpx;
			margin-left: 5PX;
		}
	}
	.logout {
		border-radius: 60rpx;
		background-color:$uni-color-error;
		margin: 30rpx auto;
		width: 500rpx;
		height: 60rpx;
		font-size: 30rpx;
		text-align: center;
		line-height: 60rpx;
		color: white;
	}
	.user-center {
		font-size: 60rpx;
		display: flex;
		flex-direction: column;
		padding: 0 20PX;
		.header {
			width: 100%;
			flex: 1.5;
			flex-basis: 0;
			display: flex;
			flex-direction: row;
			justify-content: center;
			background: #7fa5e6;
			background: -moz-linear-gradient(top,  #7fa5e6 0%, #ffffff 100%);
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#7fa5e6), color-stop(100%,#ffffff));
			background: -webkit-linear-gradient(top,  #7fa5e6 0%,#ffffff 100%);
			background: -o-linear-gradient(top, #7fa5e6 0%,#ffffff 100%);
			background: -ms-linear-gradient(top,  #7fa5e6 0%,#ffffff 100%);
			background: linear-gradient(to bottom,  #7fa5e6 0%,#ffffff 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7fa5e6', endColorstr='#ffffff',GradientType=0 );
			.header-img {
				display: flex;
				flex-direction: row;
				align-items: center;
				image{
					width: 100rpx;
					height: 100rpx;
					margin-right: 10PX;
				}
				text{
					font-size: 45rpx;
				}
			}
		}
		.scroll-box {
			margin-bottom: 15PX;
			flex: 8;
			flex-basis: 0;
			overflow-y: scroll;
			padding: 0 10rpx;
			.userinfo {
				margin-bottom: 20rpx;
				.title {
					.btn {
						width: 153rpx;
						height: 50rpx;
						background-color: $uni-btn-bg-action;
						border-radius: 40rpx;
						line-height: 50rpx;
						font-size: 25rpx;
						color: white;
						text-align: center;
						margin-right: 5PX;
					}
				}
				.info {
					width: 100%;
					height: 75rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					color: #0099FF;
					font-size: 35rpx;
					line-height: 75rpx;
					.left {
						flex: 3;
						flex-basis: 1;
						margin-left: 5PX;
						margin-right: 12PX;
					}
					.right {
						flex: 4;
						flex-basis: 1;
						margin-right: 5PX;
						text-align: left;
						text {
							font-size: 30rpx;
						}
					}
				}
			}
			.configuration {
				margin-bottom: 20rpx;
				.equipment-manage {
					margin-top: 10PX;
					.equipment-title {
						color: #0099FF;
						font-size: 35rpx;
						padding-left: 5PX;
						margin-bottom: 10rpx;
					}
					.action {
						display: flex;
						flex-direction: row;
						.btn{
							height: 20PX;
							width: 38PX;
							color: white;
							background-color: #169bd5;
							border-radius: 38PX;
							text-align: center;
							margin-right: 5PX;
							font-size: 12rpx;
							line-height: 20PX;
						}
						.del {
							background-color: red;
							margin-right: 0;
						}
					}
					.equipment-add{
						text-align: center;
						height: 70rpx;
						margin-top: 20rpx;
					}
					.line-img {
						width: 100%;
						height: 10rpx;
					}
				}
				.bluetooth-manager {
					.bluetooth-title {
						color: #0099FF;
						font-size: 35rpx;
						padding-left: 5PX;
						margin-bottom: 10rpx;
					}
					.paired-equipment {
						font-size: 35rpx;
						color: lightgray;
						padding-left: 5PX;
						margin: 5PX 0;
					}
					.equipment-list {
						width: 100%;
						height: 68rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						border:1px solid lightgray;
						padding: 10rpx;
						border-radius: 5px;
						image {
							width: 50rpx;
							height: 50rpx;
						}
						.number {
							font-size: 40rpx;
						}
						.action {
							width: 160rpx;
							height: 50rpx;
							background-color: red;
							font-size: 25rpx;
							color: white;
							border-radius: 160rpx;
							text-align: center;
							line-height: 50rpx;
						}
					}
				}
			}
			.research-info {
				.questionnaire-name {
					margin: 10PX;
					font-size: 40rpx;
					font-weight: 600;
				}
				.questionnaire-content {
					 display: flex;
					 flex-direction: column;
					 .row {
						 flex: 2;
						 flex-basis: 1;
						 display: flex;
						 flex-direction: row;
						 justify-content: space-between;
						 margin-bottom: 10PX;
						 .name {
							 font-size: 35rpx;
							 margin-left: 10PX;
						 }
						 .action {
							 display: flex;
							 flex-direction: row;
							 .btn{
								 width: 100rpx;
								 height: 60rpx;
								 font-size: 30rpx;
								 background-color: #169bd5;
								 text-align: center;
								 line-height: 60rpx;
								 color: white;
								 border-radius: 100rpx;
							 }
							 .look {
								 background-color: #cc6699;
								 margin: 0 10PX;
							 }
							 .write-form {
								 width: 220rpx;
								 height: 60rpx;
								 font-size: 35rpx;
								 background-color: #009933;
								 border-radius: 10rpx;
								 margin-right: 10PX;
								 color: white;
								 text-align: center;
								 line-height: 60rpx;
							 }
						 }
					 }
				}
			}
		}
	}
</style>

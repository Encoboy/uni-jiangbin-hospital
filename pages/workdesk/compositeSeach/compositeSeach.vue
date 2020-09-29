<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="header-big-title">
			综合查询
		</view>
		<view class="search-box">
			<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
			<view class="select-sex" @click="selectShow" :style="{borderColor:show?selectColor:''}">
				<text>{{selectSex}}</text>
				<u-icon name="arrow-down-fill" color="black" size="20"></u-icon>
			</view>
			<input type="text" value="" placeholder="请输入姓名和身份证" placeholder-style="font-size:20rpx"/>
			<view class="mini-btn">
				查询
			</view>
		</view>
		<view class="table-box">
			<scroll-view scroll-x="true" scroll-y="true" >
				<view class="scroll-box">
					<u-table>
						<u-tr>
							<u-th>序号</u-th>
							<u-th>姓名</u-th>
							<u-th>性别</u-th>
							<u-th width="25%">证件号码</u-th>
							<u-th>民族</u-th>
							<u-th width="15%">联系电话</u-th>
							<u-th width="10%">主治医生</u-th>
							<u-th width="25%">操作</u-th>
						</u-tr>
						<block v-for="(item,index) in datalist" :key="index">
							<u-tr>
								<u-td>{{item.id}}</u-td>
								<u-td>
									<text style="color: #007AFF;">{{item.name}}</text>
								</u-td>
								<u-td>{{item.sex}}</u-td>
								<u-td width="25%">{{item.idcard}}</u-td>
								<u-td>{{item.nation}}</u-td>
								<u-td width="15%">{{item.phone}}</u-td>
								<u-td width="10%">
									<text style="color: #007AFF;">{{item.doctor}}</text>
								</u-td>
								<u-td width="25%">
									<view class="action">
										<view class="action-btn look-info">
											调查信息
										</view>
										<view class="action-btn add-plan" @click="goAddPlan">
											新增随访计划
										</view>
									</view>
								</u-td>
							</u-tr>
						</block>
					</u-table>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:0,
				show: false,
				selectColor:'#007AFF',
				list: [
					{
						value: '0',
						label: '性别'
					},
					{
						value: '1',
						label: '男'
					},
					{
						value: '2',
						label: '女'
					}
				],
				selectSex:'性别',
				datalist:[
					{
						id:'1',
						name:'王五',
						sex:'男',
						idcard:'452226199840125402',
						nation:'壮',
						phone:'18877495623',
						doctor:'李科',
					}
				]
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {	
			confirm(e) {
				let sex = e[0].label;
				this.selectSex = sex;
			},
			selectShow(){
				this.show = true;
			},
			goAddPlan(){
				uni.navigateTo({
					url:'/pages/workdesk/compositeSeach/addplan/addplan'
				})
			}
		}
	}
</script>

<style lang="scss">
.hospital-box{
	.search-box {
		flex: 1;
		flex-basis: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.select-sex{
			border: 1px solid $uni-border-color;
			padding: 5rpx 3rpx;
			width: 140rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			height:60rpx;
			border-radius: 5px;
			align-items: center;
		}
		input{
			border: 1px solid $uni-border-color;
			height: 60rpx;
			border-radius: 5px;
			padding: 0 3px;
		}
	}
	.table-box{
		flex:6.5;
		flex-basis: 0;
		padding-top: 100rpx;
		.scroll-box {
			width: 220%;
			height: 425rpx ;
			.action{
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				.action-btn{
					color: white;
					height: 60rpx;
					text-align: center;
					line-height: 60rpx;
					font-size: 12px;
				}
				.look-info{
					background-color: #00cc66;
					width: 150rpx;
					border-radius: 150rpx;
				}
				.add-plan {
					background-color: #9966cc;
					width: 190rpx;
					border-radius: 190rpx;
				}
			}
		}
	}
}
</style>

<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="search-box">
			<input type="text" value="" placeholder="请输入医生姓名" placeholder-style="font-size:20rpx"/>
			<view class="search-pri-btn">
				查 询
			</view>
		</view>
		<view class="table-box">
			<scroll-view scroll-x="true" scroll-y="true" >
				<view class="scroll-box">
					<u-table>
						<u-tr>
							<u-th>编号</u-th>
							<u-th>姓名</u-th>
							<u-th>性别</u-th>
							<u-th>职称</u-th>
							<u-th>单位</u-th>
							<u-th width="15%">联系电话</u-th>
							<u-th>上级</u-th>
							<u-th width="25%">操作</u-th>
						</u-tr>
						<block v-for="(item,index) in datalist" :key="index">
							<u-tr>
								<u-td>{{item.id}}</u-td>
								<u-td>
									<text style="color: #007AFF;">{{item.name}}</text>
								</u-td>
								<u-td>{{item.sex}}</u-td>
								<u-td>{{item.post}}</u-td>
								<u-td>{{item.unit}}</u-td>
								<u-td width="15%">{{item.phone}}</u-td>
								<u-td>{{item.leader}}</u-td>
								<u-td width="25%">
									<view class="action" @click="selectDoctor(item.name)">
										<view class="mini-btn">
											设为随访医生
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
				datalist:[
					{
						id:'1',
						name:'李科',
						sex:'女',
						post:'主治医生',
						unit:'江滨医院',
						phone:'18877495623',
						leader:'王珂',
					},
					{
						id:'2',
						name:'李科2',
						sex:'女',
						post:'主治医生',
						unit:'江滨医院',
						phone:'18877495623',
						leader:'王珂',
					}
				]
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {	
			selectDoctor(name){
				uni.$emit('selectFollowDoctor',name);
				uni.navigateBack({
				    delta: 1
				});
			},
		},

	}
</script>

<style lang="scss">
.hospital-box{
	.search-box {
		flex: 1;
		flex-basis: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		input{
			border: 1px solid $uni-border-color;
			margin-right: 20rpx;
			height: 60rpx;
			border-radius: 5px;
			padding: 0 5px;
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

<template>
	<view class="userinfo">
		<view class="inhabit-info-title">
			<text>基本信息</text>
		</view>
		<view class="info">
			<view class="left">
				姓名：{{reUserInfo.name}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				身份证号：<text>{{reUserInfo.idCard}}</text>
			</view>
		</view>
		<view class="info">
			<view class="left">
				性别：{{reUserInfo.sex}}
			</view>
			<view class="right">
				婚姻状况：{{reUserInfo.marryStatus}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				民族：{{reUserInfo.nation}}
			</view>
			<view class="right">
				职业：{{reUserInfo.work}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				血型：{{reUserInfo.boold}}
			</view>
			<view class="right">
				RH血型：{{reUserInfo.rhBoold}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				药物过敏：{{reUserInfo.drugAllergy}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				联系电话：{{reUserInfo.phone}}
			</view>
		</view>
		<view class="info">
			<view class="left">
				家庭地址：{{reUserInfo.location}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["reUserInfo"],
	}
</script>

<style lang="scss">
/*用戶信息 */
.userinfo {
	.info {
		width: 100%;
		height: 75rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #0099FF;
		font-size: 30rpx;
		line-height: 75rpx;
		.left {
			flex: 3;
			flex-basis: 1;
			margin-left: 5PX;
			margin-right: 12PX;
		}
		.right {
			flex: 7;
			flex-basis: 1;
			margin-right: 5PX;
			text-align: center;
		}
	}
}
</style>

<template>
	<view class="tabbar">
		<image :src="tabbarType.home?selectHome:notSelectHome" @click="cutHome" mode="aspectFit"></image>
		<image :src="tabbarType.dataWrite?selectDataWrite:notSelectDataWrite" @click="cutDataWrite" mode="aspectFit"></image>
		<image :src="tabbarType.userCenter?selectUserCenter:notSelectUserCenter" @click="cutUserCenter" mode="aspectFit"></image>
		<image :src="tabbarType.chat?selectChat:notSelectChat" @click="cutChat" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		props:{
			tabbarType:{
				default:{
					home:true,
					dataWrite:false,
					userCenter:false,
					chat:false,
				}
			},
		},
		data(){
			return {
				selectHome:'../../../static/patientImg/home-select.png',
				selectDataWrite:'../../../static/patientImg/data-select.png',
				selectUserCenter:'../../../static/patientImg/usercenter-select.png',
				selectChat:'../../../static/patientImg/chat-select.png',
				notSelectHome:'../../../static/patientImg/home-notselect.png',
				notSelectDataWrite:'../../../static/patientImg/data-notselect.png',
				notSelectUserCenter:'../../../static/patientImg/usercenter-notselect.png',
				notSelectChat:'../../../static/patientImg/chat-notselect.png'
			}
		},
		onLoad(options) {
			
		},
		onShow(){
	
		},
		methods:{
			cutHome(){
				uni.navigateTo({
					url:`/pages/patientpage/home/home`
				})
			},
			cutDataWrite(){
				uni.navigateTo({
					url:`/pages/patientpage/dataWrite/dataWrite`
				});
			},
			cutUserCenter(){
				uni.navigateTo({
					url:'/pages/patientpage/userCenter/userCenter'
				});
			},
			cutChat(){
				uni.navigateTo({
					url:'/pages/chatpage/conversations/conversations'
				});
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10rpx 10rpx 40rpx 10rpx;
		image {
			width: 80rpx;
			height: 80rpx;
		}
	}
</style>
<template>
	<view class="tabbar">
		<image :src="tabbarType.home?selectHome:notSelectHome" @click="cutHome" mode="aspectFit"></image>
		<image :src="tabbarType.work?selectWork:notSelectWork" @click="cutWork" mode="aspectFit"></image>
		<image :src="tabbarType.chat?selectChat:notSelectChat" @click="cutChat" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		props:{
			tabbarType:{
				default:{
					home:true,
					work:false,
					chat:false,
				}
			},
			unreadTotal:{
				type:Number,
				default:0
			},
		},
		data(){
			return {
				selectHome:'../../../static/img/home-select.png',
				selectWork:'../../../static/img/work-select.png',
				selectChat:'../../../static/img/chat-select.png',
				notSelectHome:'../../../static/img/home-notselect.png',
				notSelectWork:'../../../static/img/work-notselect.png',
				notSelectChat:'../../../static/img/chat-notselect.png'
			}
		},
		onLoad(options) {
			
		},
		onShow() {

		},
		methods:{
			cutHome(){
				uni.navigateTo({
					url:`/pages/doctorpage/home/home`
				})
			},
			cutWork(){
				uni.navigateTo({
					url:`/pages/doctorpage/workdesk/workdesk`
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

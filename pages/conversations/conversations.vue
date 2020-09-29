<template>
	<view class="">
		<scroll-view class="conversations" scroll-y="true">
			<view v-if="conversations && conversations.conversations && conversations.conversations.length !=0">
				<view class="scroll-item" v-for="(conversation, key) in conversations.conversations" :key="key">
					<view class="item-head">
						<image :src="friends[conversation.userId] && friends[conversation.userId].avatar" v-if="conversation.type == 'private'" class="head-icon"></image>
						<image src="/static/images/group.png" v-else  class="head-icon"></image>
						<view class="item-head_unread" v-if="conversation.unread">{{conversation.unread}}</view>
					</view>
					<view class="scroll-item_info">
						<view class="item-info-top">
							<text class="item-info-top_name"  v-if="conversation.type == 'private'">{{friends[conversation.userId] && friends[conversation.userId].name}}</text>
							<text class="item-info-top_name" v-else>{{groups[conversation.groupId] && groups[conversation.groupId].name}}</text>
							<view class="item-info-top_time">{{formatDate(conversation.lastMessage.timestamp)}}</view>
						</view>
						<view class="item-info-bottom">
							<view class="item-info-bottom-item" @click="navigateToChat(conversation)">
								<view class="item-info-top_content" v-if="conversation.lastMessage.type == 'text'">{{conversation.lastMessage.payload.text}}</view>
								<view class="item-info-top_content" v-else-if="conversation.lastMessage.type == 'video'">[视频消息]</view>
								<view class="item-info-top_content" v-else-if="conversation.lastMessage.type == 'audio'">[语音消息]</view>
								<view class="item-info-top_content" v-else-if="conversation.lastMessage.type == 'image'">[图片消息]</view>
								<view class="item-info-top_content" v-else-if="conversation.lastMessage.type == 'file'">[文件消息]</view>
								<view class="item-info-top_content" v-else-if="conversation.lastMessage.type == 'order'">[自定义消息:订单]</view>
								<view class="item-info-top_content" v-else>[[未识别内容]]</view>
								<view class="item-info-bottom_action" @click.stop="showAction(conversation)"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="no-conversation" v-else>
				当前没有会话为空
			</view>
			<view class="action-container" v-if="action.show">
				<view class="layer" @click="action.show = false"></view>
				<view class="action-box">
					<view class="action-item" @click="topConversation">{{action.conversation.top ? '取消置顶' : '置顶聊天'}}</view>
					<view class="action-item" @click="removeConversation">删除聊天</view>
				</view>
			</view>
			<view class="action-toast" v-if="action.showToast">
				{{action.toastMessage}}
			</view>
		</scroll-view>
		<view class="chat_footer">
	<!-- 		<view class="conversations" @click="goConversations">
				信息
			</view> -->
			<view class="contacts" @click="goContacts">
				通讯录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "contacts",
		data () {
			return {
				conversations : {
					unreadTotal : 0,
					conversations : []
				},
				action : {
					conversation : null,
					show : false,
					toastMessage : '',
					showToast : false
				},
				friends : null,
				groups : null,
				imService : null
			}
		},
		onShow () {
			this.imService = getApp().globalData.imService;
			if(!this.imService || !this.imService.currentUser){
				uni.navigateTo({
					url : '../login/login'
				});
				return
			}
			uni.showLoading({
				mask : true
			});

			//为什么onshow里面赋值！ uni的tabbar 的onLoad只会执行一次
			this.friends = this.imService.friends;
			this.groups = this.imService.groups;
			this.imService.onConversationsUpdate = (conversations) => {
				this.conversations = conversations;
				this.setUnreadAmount();
			};
			var promise = this.imService.latestConversations();
			promise.then(res => {
					this.conversations = res.content;
					console.log("conversations load successfully")
					this.setUnreadAmount();
					uni.hideLoading();
				}).catch(e => {
					console.log(e)
				});
		},
		methods : {
			navigateToChat (conversion) {
				if (conversion.type == 'private') {
					uni.navigateTo({
						url : '../chat/privateChat/privateChat?friend=' + JSON.stringify(this.friends[conversion.userId])
					})
				}else{
					uni.navigateTo({
						url : '../chat/groupChat/groupChat?group=' + JSON.stringify(this.groups[conversion.groupId])
					})
				}
			},
			setUnreadAmount () {
				if(this.conversations.unreadTotal >0){
					uni.setTabBarBadge({
						index: 0,
						text: this.conversations.unreadTotal.toString()
					})
				}else{
					uni.hideTabBarRedDot({
						index :0
					})
				}
			},
			showAction (conversation) {
				this.action.conversation = conversation;
				this.action.show = true
			},
			topConversation() {
				let conversation = this.action.conversation;
				let title = conversation.top ? '取消置顶失败' : '置顶失败';
				let promise;
				uni.showLoading({
					mask:true
				});
				if(conversation.type == 'private'){
					promise = this.imService.topPrivateConversation(conversation.userId, !conversation.top)
				}else{
					promise = this.imService.topGroupConversation(conversation.groupId, !conversation.top)
				}
				this.afterDoAction(promise, title)
			},
			removeConversation() {
				let conversation = this.action.conversation;
				let promise;
				uni.showLoading();
				if(conversation.type == 'private'){
					promise = this.imService.removePrivateConversation(conversation.userId)

				}else{
					promise = this.imService.removeGroupConversation(conversation.groupId)
				}
				this.afterDoAction(promise, '删除中')
			},
			afterDoAction (promise, title) {
				promise.then(() => {
					uni.hideLoading()
				}).catch(() => {
					uni.hideLoading();
					this.action.toastMessage = title;
					this.action.showToast = true;
					setTimeout(() => {
						this.action.showToast = false
					},2000)
				});
				this.action.show = false
			},
			goConversations(){
				uni.navigateTo({
					url:'/pages/conversations/conversations'
				})
			},
			goContacts(){
				uni.navigateTo({
					url:'/pages/contacts/contacts'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{ height: 100%; }
	.conversations{
		width: 750rpx;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
	}
	.conversations .scroll-item{
		height: 152rpx;
		display: flex;
		align-items: center;
		padding-left: 32rpx;
	}
	.conversations .scroll-item .head-icon{
		width:100rpx;
		height: 100rpx;
		margin-right: 28rpx;
	}
	.conversations .scroll-item_info{
		height: 151rpx;
		width: 590rpx;
		padding-right: 32rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #EFEFEF;
	}
	.conversations .scroll-item_info .item-info-top{
		padding-top: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.conversations .item-info-top_name{
		font-size: 34rpx;
		color: #262628;
	}
	.conversations .item-info-top_time{
		font-size: 26rpx;
		color: rgba(179, 179, 179, 0.8);
		font-family: Source Han Sans CN;
	}
	.conversations .item-info-bottom{
		height: 40rpx;
		line-height: 40rpx;
		overflow: hidden;
	}
	.conversations .item-info-bottom-item{
		display: flex;
		justify-content: space-between;
	}
	.item-info-bottom .item-info-top_content{
		font-size: 30rpx;
		color: #b3b3b3;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		
	}

	.item-info-bottom .item-info-bottom_action{
		width:50rpx;
		height: 50rpx;
		font-size: 20rpx;
		background: url("../../static/images/action.png") no-repeat center;
		background-size: 28rpx 30rpx;
	}
	.no-conversation{
		width: 100%;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #9D9D9D;
	}
	.item-head{
		position: relative;
	}
	.item-head .item-head_unread{
		padding: 6rpx;
		background-color: #EE593C;
		color: #FFFFFF;
		font-size: 24rpx;
		line-height: 28rpx;
		border-radius: 24rpx;
		min-width: 24rpx;
		min-height: 24rpx;
		text-align: center;
		position: absolute;
		top:0;
		right: 15rpx;
	}
	.action-container{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.action-container .layer{
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(51, 51, 51, 0.5);
		width: 100%;
		height: 100%;
		z-index: 99;
	}
	.action-box{
		width: 400rpx;
		height: 240rpx;
		background: #ffffff;
		position: relative;
		z-index: 100;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.action-item{
		text-align: center;
		line-height: 120rpx;
		font-size: 34rpx;
		color: #262628;
		border-bottom: 1px solid #EFEFEF;

	}
	.action-toast{
		position: absolute;
		width: 400rpx;
		height: 100rpx;
		font-size: 30rpx;
		line-height: 100rpx;
		background: #9D9D9D;
		border-radius: 20rpx;
		top:50%;
		left: 50%;
		margin: -50rpx -200rpx;
		text-align: center;
		color: #262628;
	}
	.chat_footer{
		.conversations,.contacts{
			width: 200rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			background-color: $uni-color-success;
			color: white;
			border-radius: 5px;
			margin: 50rpx auto;
		}
	}
</style>

<template>
    <div class="mine">
        <div class="top">
            <image :src="currentUser.avatar"></image>
            <view class="name">{{currentUser.name}}</view>
        </div>
        <div class="bottom">
            <text>欢迎体验GoEasyIM</text>
            <view class="logout" @click="logout">注销</view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentUser : null
            }
        },
        onShow () {
            let imService = getApp().globalData.imService;
			if(!imService || !imService.currentUser) {
                uni.navigateTo({
					url : '../login/login'
				})
            }
            this.currentUser = imService.currentUser;
        },
        methods : {
            logout () {
                getApp().globalData.imService.disconnect().then(res => {
                    uni.navigateTo({
                        url : '../login/login'
                    })
                })

            }
        }
    }
</script>

<style>
    .mine{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .top{
        height: 400rpx;
        background: #F3F4F7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .top image{
        width:156rpx;
        height: 156rpx;
        border-radius: 156rpx;
    }
    .top .name{
        line-height: 80rpx;
    }
    .bottom{
        text-align: center;
        line-height: 200rpx;
    }
	.logout{
		width: 266rpx;
		height: 76rpx;
		line-height: 76rpx;
		margin: 0 auto;
		background-color: #618DFF;
		border-radius: 10rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		
	}
</style>

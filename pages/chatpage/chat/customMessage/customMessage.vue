<template>
    <div class="custom-message">
        <view class="title">发送订单</view>
        <view class="order-item">
            <text>编号：</text>
            <input type="text" v-model="number" maxlength="20" />
        </view>
        <view class="order-item">
            <text>商品：</text>
            <input type="text" v-model="goods" maxlength="20"/>
        </view>
        <view class="order-item">
            <text>金额：</text>
            <input type="text" v-model="price" maxlength="10" />
        </view>
        <view class="action-btn">
            <view class="cancel-btn" @click="cancel">取消</view>
            <view class="send-btn" @click="sendRedPacket">发送</view>
        </view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                number : '',
                goods : '',
                price : '',
                messageTarget : null
            }
        },
        onLoad (options) {
            let imService = getApp().globalData.imService;
            if(!imService || !imService.currentUser){
                uni.navigateTo({
                    url : '../../login/login'
                });
                return
            }
            this.messageTarget = JSON.parse(options.messageTarget);
        },
        methods : {
            sendRedPacket () {
                let params = {
                    type : 'order',
                    payload : {
                        number : this.number,
                        goods : this.goods,
                        price : this.price
                    }
                };
                let imService = getApp().globalData.imService;
                imService.sendCustomMessage(this.messageTarget.id,this.messageTarget.type, params).then(() => {
                    uni.navigateBack()
                })
            },
            cancel () {
                uni.navigateBack()
            }
        }
    }
</script>
<style>
    .custom-message{
        padding: 0 40rpx;
    }

    .title{
        text-align: center;
        font-weight: 600;
        font-size: 40rpx;
        color: #000000;
        text-align: center;
        line-height: 200rpx;
    }
    .order-item{
        height: 80rpx;
        display: flex;
        justify-content: center;
        margin-top: 40rpx;
    }
    .order-item text{
        width: 130rpx;
        text-align: right;
        line-height: 80rpx;
    }
    .order-item input{
        width: 500rpx;
        background: #EFEFEF;
        box-sizing: border-box;
        padding: 10rpx;
        font-size: 28rpx;
        height: 80rpx;
        border-radius: 10rpx;
    }
    .action-btn{
        height: 80rpx;
        display: flex;
        justify-content: space-around;
        margin-top: 80rpx;
    }
    .send-btn{
        width:240rpx;
        height: 80rpx;
        background: #618DFF;
        line-height:80rpx;
        text-align: center;
        border-radius: 10rpx;
        color: #FFFFFF;
        font-size: 32rpx;
    }
    .cancel-btn{
        width:240rpx;
        height: 80rpx;
        background: #FFFFFF;
        line-height:80rpx;
        text-align: center;
        border-radius: 10rpx;
        color: #666666;
        font-size: 32rpx;
        border: 1px solid rgba(0, 0, 0, 0.1)
    }
</style>

<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="../../static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="motto-box">
			<image src="../../static/img/motto-img.png" mode="aspectFit"></image>
		</view>
		<view class="form-box">
			<view class="login-text">
				登  录
			</view>
			 <form class="form" @submit="formSubmit" @reset="formRegister">
					<view class="login-user">
						 <view class="iconfont icon-user"></view>
						 <input name="user" v-model="username" placeholder="用户名" placeholder-style="color:lightgray" />
					 </view>
					 <view class="login-psw">
					 	<view class="iconfont icon-lock"></view>
						<input password  name="psw" v-model="password" placeholder="密码" placeholder-style="color:lightgray"/>
					 </view>
					 <view class="login-new">
					 	<view class="new-user" @click="reset">
					 		注册新用户
					 	</view>
						<view class="forget-psw">
							忘记密码
						</view>
					 </view>
					 <view class="form-btn">
						 <button class="submit" @click="submit">
							 <text>登</text><text>录</text>
						 </button>
					 </view>
			 </form>
		</view>
	</view>
</template>

<script>
	import IMService from "../../lib/imservice";
	export default {
		data() {
			return {
				windowHeight:0,
				username:'',
				password:'',
				rules:{
					username:{
						rule:/\S/,
						msg:"用户名不能为空"
					},
					password:{
						rule:/^[0-9a-zA-Z]{6,16}$/,
						msg:"密码应该为6-16位",
					},
				}
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
			submit(){
				if(!this.validate('username')) return;
				if(!this.validate('password')) return;
				uni.showLoading({
					title:"登录中..."
				});
				setTimeout(()=>{
					// 隐藏登录状态
					uni.hideLoading();
					getApp().globalData.imService = new IMService();
					let loginResult = getApp().globalData.imService.login(this.username, this.password);
					if (loginResult) {
						//连接IM
						getApp().globalData.imService.connectIM();
						uni.switchTab({
							url:'/pages/home/home',
							success() {
								
							}
						})
					} else {
						uni.showToast({
							title:'登录失败',
							icon:'none',
						})
					}
				},2000)
			},
			// 判断验证是否符合要求
			validate(key){
				let bool = true;
				if(!this.rules[key].rule.test(this[key])){
					// 提示信息
					uni.showToast({
						title:this.rules[key].msg,
						icon:'none',
					})
					// 取反
					bool = false;
					return false;
				}
				return bool;
			},
			
            reset() {
				uni.navigateTo({
					url:'/pages/register/register',
					success() {
						console.log('跳转到注册页面')
					}
				})
            }
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		.motto-box {
			flex: 0.5;
			flex-basis: 0;
			image {
				width: 100%;
				height: 84rpx;
			}
		}
		// 登录
		.form-box{
			flex: 8;
			flex-basis: 0;
			width: 100%;
			background-color: #22a77a;
			padding: 50rpx 40rpx 0;
			.login-text {
				font-size: 60rpx;
				font-weight: 500;
				color: white;
				text-align: center;
			}
			.form {
				display: flex;
				flex-direction: column;
				margin-top: 100rpx;
				// input输入框
				.login-user, .login-psw {
					flex: 2;
					flex-basis: 1;
					margin: 10PX 0PX 0PX 0PX;
					padding: 5PX 10PX 2PX 10PX;
					background-color: white;
					border-radius: 30px;
					display: flex;
					flex-direction: row;
					
					.icon-user,.icon-lock{
						font-size: 50rpx;
						align-self: center;
						margin-right: 10px;
						color: lightgray;
					}
					input {
						height: 80rpx;
						font-size: 30rpx;
					}
				}
				.login-new {
					margin: 10PX 0PX 20PX 0PX;
					color: white;
					.new-user {
						float: left;
					}
					.forget-psw {
						float: right;
					}
				}

				// 登录按钮
				.form-btn {
					margin: 70PX 0;
					.submit {
						width: 100%;
						height: 60rpx;
						font-size: 30rpx;
						background-color: #6ce155;
						border: none;
						border-radius: 480rpx;
						color: white;
						line-height: 60rpx;
					}
					text{
						margin-right: 30rpx;
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>

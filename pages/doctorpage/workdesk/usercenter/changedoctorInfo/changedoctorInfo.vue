<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="header-img-box">
			<image src="@/static/img/title-img.png" mode="aspectFit"></image>
		</view>
		<view class="motto-box">
			<image src="@/static/img/motto-img.png" mode="aspectFit"></image>
		</view>
		<view class="form-box">
			 <form class="form" @submit="formSubmit" @reset="formReset">
					 <view class="head-photo">
						<image src="@/static/img/head-photo.png" mode="aspectFit"></image>
					 </view>
					 <input class="user" name="user" v-model="username"  placeholder="姓名(实名)" placeholder-style="color:#d9d9d9"/>
					 <input  class="psw" name="psw" password v-model="password"  placeholder="6-16位密码,区分大小写" placeholder-style="color:#d9d9d9"/>
					 <input class="anain-psw" name="again-pws" password v-model="againPsw"  placeholder="确认密码" placeholder-style="color:#d9d9d9"/>
					 <view class="phone">
					 	<view class="code">
					 		+ 86
					 	</view>
						<input name="phone" placeholder="11位手机号" v-model="phone" placeholder-style="color:#d9d9d9"/>
					 </view>
					 <view class="verification-code">
					 	<input name='verificationCode' placeholder="输入验证码" v-model="code" placeholder-style="color:#d9d9d9" />
						<view class="get-verificationCode" @click="getCode">
							{{showTime?codeTime + "(s)":'获取验证码'}}
						</view>
					 </view>
					 <!-- <view class="accounted">
					 	使用已有账户登录
					 </view> -->
					 <view class="form-btn">
						 <button class="submit sub" @click="submit">确 认</button>
						 <button class="register reg" @click="cancel">取 消</button>
					 </view>
			 </form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:0,
				username:'',
				password:'',
				againPsw:'',
				phone:'',
				code:'',
				showTime:false,
				codeTime:'60',
				rules:{
					username:{
						rule:/\S/,
						msg:"用户名不能为空"
					},
					password:{
						rule:/^[0-9a-zA-Z]{6,16}$/,
						msg:"密码应该为6-16位",
					},
					phone:{
						rule:/^[0-9]{11}$/,
						msg:"手机号码不正确"
					}
				},
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
				if(this.password !== this.againPsw){
					uni.showToast({
						title:'密码不一致',
						icon:'none',
					})
					return;
				}
				if(!this.validate('phone')) return;
				uni.navigateTo({
					url:'/pages/login/login',
					success() {}
				})
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
            cancel() {
				uni.navigateTo({
					url:'/pages/login/login',
					success() {}
				})
            },
			getCode(){
				this.showTime = true;
				this.countDown();
			},
			countDown(){
				let timeClock = setInterval(()=>{
					this.codeTime --;
					if(this.codeTime == 0){
						clearInterval(timeClock);
						this.codeTime = 60;
						this.showTime = false;
					}
				},1000)
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
			.text {
				font-size: 80rpx;
				font-weight: 500;
				color: #ff3300;
				text-align: center;
			}
			.form {
				display: flex;
				flex-direction: column;
				.head-photo {
					text-align: center;
					image{
						width: 130rpx;
						height: 130rpx;
					}
				}
				// input输入框
				.user,.psw,.anain-psw {
					width: 96%;
					height: 70rpx;
					border: 1px solid #d9d9d9;
					border-radius: 15rpx;
					padding-left: 20rpx;
					margin-bottom: 30rpx;
				}
				.phone {
					display: flex;
					flex-direction: row;
					border: 1px solid #d9d9d9;
					width: 100%;
					height: 70rpx;
					border-radius: 15rpx;
					margin-bottom: 30rpx;
					.code {
						flex: 2;
						flex-basis: 0;
						height: 66rpx;
						border-right: 1px solid #d9d9d9 ;
						text-align: center;
						line-height: 70rpx;
					}
					input{
						flex: 8;
						flex-basis: 0;
						height: 70rpx;
						padding-left: 20rpx;
					}
				}
				.verification-code {
					display: flex;
					flex-direction: row;
					width: 100%;
					height: 70rpx;
					margin-bottom: 30rpx;
					input {
						flex: 6;
						flex-basis: 0;
						height: 70rpx;
						padding-left: 20rpx;
						border: 1px solid #d9d9d9 ;
						border-radius: 15rpx;
						margin-right: 15rpx;
					}
					.get-verificationCode {
						flex: 4;
						flex-basis: 0;
						height: 74rpx;
						border: 1px solid #d9d9d9 ;
						text-align: center;
						line-height: 70rpx;
						border-radius: 15rpx;
					}
					
				}
				.accounted {
					color: blue;
					margin-top: 40rpx;
					margin-bottom: 15rpx;
					text-align: end;
				}
				// 注册按钮
				.form-btn {
					margin-top: 100rpx;
					.submit,.register {
						width: 300rpx;
						height: 80rpx;
						font-size: 34rpx;
						background-color: #66ff66;
						border: none;
						border-radius: 480rpx;
						color: white;
						line-height: 80rpx;
						
					}
					.sub{
						float: left;
					}
					.reg{
						float: right;
						background-color: #cccccc;
						border: none;
						color: white;
					}
				}
			}
		}
	}
</style>


<template>
	<view class="hospital-box" :style="{ height: windowHeight + 'px' }">
		<view class="img-box">
			<image class="header-img" src="@/static/patientImg/u10.png" mode="aspectFit"></image>
		</view>
		<view class="form-box">
			 <form class="form-container" @submit="formSubmit" @reset="formReset">
					 <view class="scroll-box" >
						<input class="name" v-model="user" placeholder="姓名(实名)"  name="user"  placeholder-style="color:#d9d9d9"/>
						<input class="idcard" v-model="idcard" placeholder="身份证号码"  name="idcard" placeholder-style="color:#d9d9d9"/>
						<view class="row">
							<input class="nation" v-model="nation" style="margin-right: 10px;" placeholder="民族"  name="nation"  placeholder-style="color:#d9d9d9"/>
							<input class="work" v-model="work" placeholder="职业"  name="work"  placeholder-style="color:#d9d9d9"/>
						</view>
						<view class="row">
							<u-select v-model="sexShow" :list="sexList" @confirm="sexConfirm"></u-select>
							<view class="select-sex" @click="selectTypeShow('sex')">
								<text>{{selectSex}}</text>
								<view class="iconfont arrow-down" style="font-size: 20px;"></view>
							</view>
							<u-select v-model="marriShow" :list="marriList" @confirm="marriConfirm"></u-select>
							<view class="select-marri" @click="selectTypeShow('marri')">
								<text>{{selectMarri}}</text>
								<view class="iconfont arrow-down" style="font-size: 20px;"></view>
							</view>
						</view>
						<view class="row">
							<u-select v-model="sanguisShow" :list="sanguisList" @confirm="sanguisConfirm"></u-select>
							<view class="select-blood" @click="selectTypeShow('sanguis')">
								<text>{{selectSanguis}}</text>
								<view class="iconfont arrow-down" style="font-size: 20px;"></view>
							</view>
							<u-select v-model="rhBloodShow" :list="rhBloodList" @confirm="rhBloodConfirm"></u-select>
							<view class="select-rhBlood" @click="selectTypeShow('rhBlood')">
								<text>{{selectRhBlood}}</text>
								<view class="iconfont arrow-down" style="font-size: 20px;"></view>
							</view>
						</view>
						<input class="allergy" v-model="allergy" placeholder="过敏药物"  name="allergy" placeholder-style="color:#d9d9d9" />
						<input class="phone" v-model="phone" placeholder="联系电话"  name="phone" placeholder-style="color:#d9d9d9" />
						<input class="location" v-model="location" placeholder="家庭地址"  name="location" placeholder-style="color:#d9d9d9" />
					 </view>
					 <view class="btn">
						 <button class="submit" @click="submit">提交</button>
						 <button class="cancel" @click="cancel">取消</button>
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
				user:'',
				idcard:'',
				nation:'',
				work:'',
				allergy:'',
				phone:'',
				location:'',
				sexShow: false,
				selectSex:'性别',
				sexValue:'',
				sexList: [
					{
						value: '',
						label: '性别',
					},
					{
						value: '1',
						label: '男',
					},
					{
						value: '2',
						label: '女'
					}
				],
				marriShow: false,
				selectMarri:'婚姻状况',
				marriList: [
					{
						value: '0',
						label: '婚姻状况'
					},
					{
						value: '1',
						label: '未婚'
					},
					{
						value: '2',
						label: '已婚'
					}
				],
				sanguisShow: false,
				selectSanguis:'血型',
				sanguisList: [
					{
						value: '0',
						label: '血型'
					},
					{
						value: '1',
						label: 'A型血'
					},
					{
						value: '2',
						label: 'B型血'
					},
					{
						value: '3',
						label: 'AB型血'
					},
					{
						value: '4',
						label: 'O型血'
					}
				],
				rhBloodShow: false,
				selectRhBlood:'RH血型',
				rhBloodList: [
					{
						value: '0',
						label: 'RH血型'
					},
					{
						value: '1',
						label: 'RH阳性'
					},
					{
						value: '2',
						label: 'RH阴性'
					}
				],
				rules:{
					user:{
						rule:/\S/,
						msg:"用户名不能为空"
					},
					idcard:{
						rule:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
						msg:"身份证号码格式错误"
					},
					sexValue:{
						rule:/\S/,
						msg:"性别不能为空"
					},
				}
			}
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
		},
		methods: {
            sexConfirm(e) {
            	let value = e[0].label;
				this.sexValue = e[0].value;
            	this.selectSex = value;
            },
			marriConfirm(e) {
				let value = e[0].label;
				this.selectMarri = value;
			},
			sanguisConfirm(e) {
				let value = e[0].label;
				this.selectSanguis = value;
			},
			rhBloodConfirm(e) {
				let value = e[0].label;
				this.selectRhBlood = value;
			},
			selectTypeShow(type){
				switch(type){
					case 'sex':
						this.sexShow = true;
						break;
					case 'marri':
						this.marriShow = true;
						break;
					case 'sanguis':
						this.sanguisShow = true;
						break;
					case 'rhBlood':
						this.rhBloodShow = true;
						break;
					default:
				}
			},
			submit(){
				if(!this.validate('user')) return;
				if(!this.validate('idcard')) return;
				if(!this.validate('sexValue')) return;
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
			cancel(){
				uni.navigateTo({
					url:'/pages/login/login',
					success(){}
				})
			},
		}
	}
</script>

<style lang="scss">
	.hospital-box{
		padding: 0 20PX;
		display: flex;
		flex-direction: column;
		.img-box {
			flex: 1.5;
			flex-basis: 0;
			.header-img {
				width: 100%;
				height: 150rpx;
				margin-top: 20rpx;
			}
		}
		.form-box{
			flex: 8;
			flex-basis: 0;
			width: 100%;
			margin: 5PX 0;
			display: flex;
			flex-direction: column;
			
			.form-container {
				display: flex;
				flex-direction: column;
				flex: 8;
				flex-basis: 0;
				.scroll-box {
					width: 100%;
					height: 824rpx;
					overflow-y: scroll;
					input {
						width: 96%;
						height: 70rpx;
						border: 1px solid #d9d9d9;
						border-radius: 15rpx;
						padding-left: 20rpx;
						margin-bottom: 30rpx;
					}
					text {
						color: #0099FF ;
					}
					.row {
						display: flex;
						flex-direction: row;
						justify-content: left;
						.select-sex,.select-marri,.select-blood,.select-rhBlood{
							border: 1px solid $uni-border-color;
							padding: 5rpx 3rpx;
							width: 200rpx;
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							height:70rpx;
							border-radius: 5px;
							align-items: center;
							margin-bottom: 30rpx;
							margin-right: 100rpx;
							position: relative;
							view{
								position: absolute;
								top: 10rpx;
								right: 10rpx;
							}
							text{
								position: absolute;
								top: 13rpx;
								left: 20rpx;
							}
						}
					}
				}
				
				.btn {
					margin: 10PX 0;
					display: flex;
					flex-direction: row;
					.submit {
						width: 200rpx;
						height: 90rpx;
						background-color: #6ce155;
						border: none;
						border-radius: 8px;
						color:white;
						font-size: 40rpx;
						line-height: 90rpx;
					}
					
					.cancel {
						width: 200rpx;
						height: 90rpx;
						background-color: white;
						border: 1px solid rgba(153, 153, 153, 1);
						border-radius: 8px;
						color:rgba(153, 153, 153, 1);
						font-size: 40rpx;
						line-height: 90rpx;
					}
				}
			}
		}
	}
</style>


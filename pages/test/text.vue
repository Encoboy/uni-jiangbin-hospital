<template>
		<view>
			<view class="header-big-title">
				测试页面
			</view>
			<u-calendar v-model="show" :mode="mode"></u-calendar>
			<u-button @click="show = true">打开</u-button>
		</view>
</template>

<script>
	export default {
		data() {
			return {
					show: false,
					mode: 'date'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

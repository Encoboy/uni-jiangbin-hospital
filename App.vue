<script>
	export default {
		onLaunch: function() {
			console.log('打算这里用全局globalData获取屏幕高度,但是得出来的比单个页面的高一点点')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData : {
			imService : null,
			isDocutorAppLogin:true
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uni.scss";
	@import "uview-ui/index.scss";
	@import "common/common.scss";
	@import "./static/style/chatInterface.css";
	@import "./static/style/iconfont/iconfont.css";
</style>

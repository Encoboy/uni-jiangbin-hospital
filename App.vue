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
		globalData : {  // 全局定义数据
			imService : null, 
			isDocutorAppLogin:true // true 为医生端 ；false 为患者端
		}
	}
</script>

<style lang="scss">
	/*全局css */
	@import "uni.scss"; // 公共样式 
	@import "uview-ui/index.scss"; // uview UI 框架样式
	@import "common/common.scss"; // 自定义公共样式
	@import "./static/style/chatInterface.css"; // goeasy 聊天页面样式
	@import "./static/style/iconfont/iconfont.css"; // 阿里图标库样式
</style>

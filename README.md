uni-app
江滨医院app 

一、目录结构：
api目录 处理api请求
	docApi 医生端api处理目录
		api.js 统一url管理
		errHandel.js 错误处理
		request.js 对uni.request封装
	patApi 患者端api处理目录
	
common目录 自定义公共css样式

components 公共组件
	docTabbar 医生端的底部tabbar组件
	GoEasyAudioPlayer goeasyIM 处理音频组件 详情参考:[](https://gitee.com/goeasy-io/GoEasyDemo-Uniapp-IM-Chat)
	GoEasyVideoPlayer goeasyIM 处理视频组件 详情参考:[](https://gitee.com/goeasy-io/GoEasyDemo-Uniapp-IM-Chat)
	patTabbar 患者端的底部tabbar组件
	selectDate 自定义封装选择日期组件
	stan-ucharts ucharts图形(柱状图，条形图)组件 详情参考：[](https://ext.dcloud.net.cn/plugin?id=1246)
		HistogramChart.vue 柱状图组件
		LineChart.vue 条形图组件
	uni-icons uniapp的字体图标
	userinfo 自定义封装用户信息组件
	
lib goeasyIM(聊天功能的第三方集成sdk)所需要的插件，api，服务等 详情参考:[](https://gitee.com/goeasy-io/GoEasyDemo-Uniapp-IM-Chat)

pages 应用页面
	chatpage 聊天目录 详情参考: [](https://gitee.com/goeasy-io/GoEasyDemo-Uniapp-IM-Chat)
		chat 聊天页面
		contacts 联系人页面
		conversations 会话页面
		mine 我的信息页面
	doctorpage 医生端目录
		home 首页
			components 首页公共组件
				lineChartList.vue 对echarts条形图组件和selectDate组件的二次封装
			dataVisualization 健康数据信息
			feedback 反馈页面
			inhabitantInfo 居民信息列表
				components 居民信息列表公共组件
					table-record.vue 对门诊记录，住院记录的封装
		register 注册页
		workdesk 工作台
			componests 工作台公共组件
				scroll-xy-box.vue table滚动组件
			compositeSearch 综合信息查询
				addplan 新增随访计划
				selectdoctorlist 选择随访医生列表
			plan 随访计划
			statistics 随访统计
			usercenter 个人中心
				changedoctorInfo 医生信息更改
			workcase 今日工作状况
			workSearch 工作情况查询
	login 登录页面
	patientapge 患者端目录
		dataWrite 数据填报
		home 首页
			historyData.vue 历史数据页面
		register 注册
		userCenter 用户中心
			addEquipment.vue 添加设备页面
			editUserInfo.vue 更改个人信息页面
	
plugins 插件
	u-charts.min.js ucharts插件 详情参考：[](https://ext.dcloud.net.cn/plugin?id=1246)
static 静态资源目录
	images goeasyIM 聊天页面需要的图片
	img 医生端需要的图片
	patientImg 患者端需要的图片
	style 全局样式
		iconfont 阿里图标库样式
		chantInterface.css goeasyIM聊天页面的全局样式

unpackage 打包目录

util 工具目录

uview-ui uview UI框架

二、使用到的第三方插件/库：
1、IM聊天通信 goeasy 	[](https://www.goeasy.io/cn/im/index.html) 
   1.1、goeasy 聊天项目demo地址: [](https://gitee.com/goeasy-io/GoEasyDemo-Uniapp-IM-Chat)
2、ucharts 图表插件 [](https://ext.dcloud.net.cn/plugin?id=271)
3、uview UI框架 [](http://uviewui.com)
4、Iconfont 阿里图表库  [](https://www.iconfont.cn)

三、布局方式：主要使用flex布局
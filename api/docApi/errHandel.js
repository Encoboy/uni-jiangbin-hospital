// 全局错误提示
const errdata = {
	errTest(err){
		uni.showToast({
			icon:'none',
			title:err,
			duration:3000
		})
	}
}

export{
	errdata
}
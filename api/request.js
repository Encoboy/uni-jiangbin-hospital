// 封装request请求文件

import {errData} from 'errHandel.js';
// GET
let listing = function(listUrl){
	return new Promise((resolve,reject) => {
		uni.request({
			url:listUrl,
			method:'GET',
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			let errs = '服务器错误,请稍候再试';
			errData.errlist(errs);
			reject(err)
		})
	})
}

export {
	listing
}


// 在请求的页面这样使用。
// 页面的methods钩子函数中：
// import {listUrl} from './api/api.js';
// import {listing} from './api/request.js'
// methods:{
// 	preference(){
// 		listing(listUrl)
// 		.then((res)=>{
// 			console.log(res)
// 			this.data = res.data
// 		})
// 		.catch((err)=>{
// 			console.log(err)
// 		})
// 	}
// },
// 请求数据所用的生命周期函数
// mounted(){
// 	this.preference()
// }
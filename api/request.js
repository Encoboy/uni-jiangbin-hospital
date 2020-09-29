// 封装request请求文件

import {errData} from './errHandel.js';
import {testUrl} from './api.js';

// test POST
export const testReq = function(data={}){
	return new Promise((resolve,reject) => {
		uni.request({
			url:testUrl,
			method:'POST',
			data,
		}).then((res) => {
			console.log('res:',res);
			const data = res[1]; // mock数据
			resolve(data)
		}).catch(err => {
			let errs = '服务器错误,请稍候再试';
			errData.errTest(errs);
			reject(err)
		})
	})
}



// 在请求的页面这样使用。
// 页面的methods钩子函数中：
// import {testReq} from './api/request.js'
// methods:{
// 	getData(){
// 		testReq()
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
// onLoad(){
// 	this.getData()
// }
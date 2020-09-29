// 封装request请求文件

import {errData} from './errHandel.js';

// POST 请求
export const post = function(url,params={}){
	return new Promise((resolve,reject) => {
		uni.request({
			url:url,
			method:'POST',
			data:params,
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




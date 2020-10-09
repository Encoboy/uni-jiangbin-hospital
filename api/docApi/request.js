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
			console.log('res-mock:',res);
			const data = res[1]; // mock数据
			if(data.statusCode == '200'){
				resolve(data);	
			}else{
				// errData.errTest(res[0].errMsg)
			}
		}).catch(err => {
			let errs = '服务器错误,请稍候再试';
			// errData.errTest(errs);
			reject(err)
		})
	})
}


// GET 请求





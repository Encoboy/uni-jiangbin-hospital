// 日期格式化 ，value 时间戳
const  timeFilter = (value) => {
		var date = new Date();
		//date.setTime(value);
		var month = date.getMonth() + 1;
		var hours = date.getHours();
		if (hours < 10)
			hours = "0" + hours;
		var minutes = date.getMinutes();
		if (minutes < 10)
			minutes = "0" + minutes;
		var time = date.getFullYear() + "-" + month + "-" + date.getDate()
		return time;
    }

export {
	timeFilter
}
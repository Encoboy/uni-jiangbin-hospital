import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// main.js
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.formatDate = function (t) {
    t = t || Date.now();
    let time = new Date(t);
    let str = time.getMonth() < 9 ? ('0' + (time.getMonth() + 1)) : (time.getMonth() + 1);
    str += '-';
    str += time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
    str += ' ';
    str += time.getHours();
    str += ':';
    str += time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
    return str;
}
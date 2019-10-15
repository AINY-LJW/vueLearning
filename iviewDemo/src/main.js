import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
// 引入路由配置文件(可以是多个)
import Routers from './router/pageRouter';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable, VPagination} from 'vue-easytable'
//引入axios  相当于ajax
import axios from 'axios'
//引入ECharts
import echarts from 'echarts'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.prototype.$echarts = echarts

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
const RouterConfig = {
    mode: 'history',//去掉url中的#
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

/* 每个 Vue 应用都需要通过实例化 Vue 来实现。
* 语法：var vm = new Vue({
      // 选项
    })
*  */
var vm=new Vue({
    //el就是 DOM 元素中的 id  <div id = "app"></div>
    el: '#app',
    router: router,
    store: store,
    data: {
        counter: 1
    },
    render: h => h(App)

     /*当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data
  对象中能找到的所有的属性。当这些属性的值发生改变时，html
  视图将也会产生相应的变化。相当于Spring的ModelAndView*/
//   data 用于定义属性，实例中有三个属性分别为：site、url、alexa
  // data: {
  //   site: "你好VUE",
  //   url: "www.baidu.com",
  //   alexa: "10000"
  // },
  // methods: {
  //   details: function() {
  //     return  this.site + " - vue！";
  //   }
  // }
});
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
// new Vue({
//     el: '#test',
//     data: {
//       message: 'Runoob',
//       message2: '菜鸟教程\r\nhttp://www.runoob.com'
//     }
//   })
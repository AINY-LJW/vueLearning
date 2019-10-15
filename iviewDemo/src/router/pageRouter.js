import LJW from '../views/ljw.vue';
const routers = [{
    // 主页
    path: '/',
    // 直接带到主页的数据  相当于Spring的ModelAndView.addObject
    meta: {
        // 网址标题
        title: '主页'
    },
    // 指定访问页面 注意路径问题
    component: (resolve) => require(['../views/tableShow.vue'], resolve)
},
{
    /* 路由配置文件 子页面*/
    path: '/ljw',
    // 直接带到主页的数据  相当于Spring的ModelAndView.addObject
    meta: {
        title: 'ljw'
    },
    // 指定访问页面 注意路径问题
    // component: (resolve) => require(['../views/ljw.vue'], resolve)
    component: LJW
}];

export default routers;
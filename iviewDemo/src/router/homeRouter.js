/* 路由配置文件 */
const routers = [{
    // 主页
    path: '/',
    // 直接带到主页的数据  相当于Spring的ModelAndView.addObject
    meta: {
        title: ''
    },
    // 指定访问页面 注意路径问题
    component: (resolve) => require(['../views/tableShow.vue'], resolve)
}];
export default homeRouters;
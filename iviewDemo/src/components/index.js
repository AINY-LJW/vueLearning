import DateComp from './dateComponent';

const Datecomp = {
    install: function (Vue) {
        // 注册一个全局组件 Vue.component(tagName, options) 注册后，我们可以使用以下方式来调用组件
        Vue.component('DateComp', DateComp);
    }
};

export default Datecomp;
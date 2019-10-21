import Vue from 'vue';
import Vuex from 'vuex';

import Test1 from './test1';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: 'Hi,这是一个全局状态变量'
    },
    getters: {
        changeName(state) {
            return state.name + ', 我是主，我改变了一点。';
        }
    },
    mutations: {
        //仅同步
        mchangeName(state, val) {
            state.name = val;
        }
    },
    actions: {
        //可异步
        achangeName({commit}, val) {
            setTimeout(() => {
                commit('mchangeName', val);
            }, 2000);
        }
    },
    modules: {
        test1: Test1
    }
});

export default store;
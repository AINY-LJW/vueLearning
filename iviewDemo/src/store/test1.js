const module1 = {
    state: {
        name: 'Hi,这是一个全局模块module1状态变量'
    },
    getters: {

    },
    mutations: {
        mchangeName1(state, val) {
            state.name = val;
        }
    },
    actions: {
        achangeName1({ commit }, val) {
            commit('mchangeName1', val);
        }
    }
};

export default module1;
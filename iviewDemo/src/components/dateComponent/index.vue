<style scoped>

</style>

<template>
<div>
    <h3>自定义组件-日期组件</h3>
    <Date-picker type="datetime" format="yyyy/MM/dd" placeholder="选择日期和时间" v-model="currDate" @on-change="changeDate"></Date-picker>
    &nbsp;
    <Checkbox v-model="currCheckState">{{checkMsg}}</Checkbox>
</div>
</template>

<script>
export default {
    name: 'DateComp',
    props: ['checkMsg', 'checkState'],
    data() {
        return {
            currDate: ''
        };
    },
    methods: {
        changeDate(val) {
            this.$emit('changeDt', val); 
        }
    },
    computed: {
        currCheckState: {
            get() {
                return this.checkState;
            },
            set(val) {
                this.$emit('changeCb', val);
            }
        }
    }
};
</script>
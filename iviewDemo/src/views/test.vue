<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}

.ivu-menu {
    z-index: 899
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
}

.layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
<template>
<div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
        </div>
    </Menu>
    <Menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
            <MenuItem name="1">Option 1</MenuItem>
            <MenuItem name="2">Option 2</MenuItem>
            <MenuItem name="3">Option 3</MenuItem>
        </div>
    </Menu>
    <div class="layout-breadcrumb">
        <Breadcrumb>
            <BreadcrumbItem href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Projects</BreadcrumbItem>
            <BreadcrumbItem>iView</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="layout-content">
        <div class="layout-content-main">
            {{ this.$store.state.name }}
            <br></br>
            {{ this.$store.state.test1.name }}
            <br></br>
            {{ this.rs1 }}
            <br></br>
            <Button type="primary" @click="click1">做点改变</Button>
            <Button type="primary" @click="click2">主模块做点改变</Button>
            <Button type="primary" @click="click3">子模块做点改变</Button>
        </div>
    </div>
    <div class="layout-copy">
        1987-2018 &copy; SELEY6
    </div>
</div>
</template>
<script>
export default {
    name: 'test',
    data() {
        return {
        };
    },
    methods: {
        click1() {
            this.$store.commit('mchangeName', 'Hi, 0');
            this.$store.commit('mchangeName1', 'Hi, 1');
        },
        click2() {
            this.$store.dispatch('achangeName','Hi,01');
        },
        click3() {
            this.$store.dispatch('achangeName1','Hi,11  子改变了。');
        }
    },
    computed: {
        rs1() {
            // return this.$store.getters.changeName;
            return 'ssss';
        }
    }
};
</script>
<template>
<div id="ljw">
    <!-- <h2>heihei : {{heihei}}</h2> -->
    <h2>数据绑定最常见的形式就是使用 /{/{.../}/}（双大括号）的文本插值：</h2>
    <p>ljw : {{msg_one}}</p>
    <p>site : {{site}}</p>
    <h2>v-html标签绑定值：</h2>
    <div v-html="site" style="color:#fff;"></div>
    <p>url : {{url}}</p>
    <p>{{details()}}</p>
    <br>
    <!-- HTML 属性中的值应使用 v-bind 指令。以下实例判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类： -->
    <h2>v-bind 指令</h2>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br>
    <div v-bind:class="{'class1': use}">
        v-bind:class 指令
    </div>

    <!-- 表单  v-model 指令在表单控件元素上创建双向数据绑定。-->
    <!-- v-model 指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。 -->
    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>
    <br>
    <!-- v-on 它用于监听 DOM 事件： -->
    <!-- 完整形式 -->
    <h2>v-on指令</h2>
    <a v-on:click="onclickFunc">v-on点击事件</a>
    <br>
    <!-- 缩写形式 -->
    <a @click="onclickFunc">v-on点击事件（缩写形式）</a>
    <!-- 指令是带有 v- 前缀的特殊属性 -->
    <!-- 参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性： -->
    <!-- v_bind完整语法 -->
    <pre><a v-bind:href="url">超链接</a></pre>
    <pre><a :href="url">超链接(v-bind缩写形式)</a></pre>
    <br>
    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>

    <!-- 过滤器 -->
    <p>{{ message | capitalize }}</p>


    <h2> v-if v-else判断</h2>
    <!-- v-if v-else判断 -->
    <div v-if="seen==1">
        你可以看见1
    </div>
    <div v-else-if="seen==2">
        你可以看见2
    </div>
    <div v-else>
        你看不见
    </div>
    <br>
    <!--  v-show 指令来根据条件展示元素-->
    <h2>v-show 指令来根据条件展示元素</h2>
    <p v-show="ifShow">Hello!</p>
    <br>
    <!-- 循环使用 v-for 指令 -->
    <h2>循环使用 v-for 指令</h2>
    <ol>
        <li v-for="si in sites">
            {{si.name}}
        </li>
    </ol>

    <!-- v-for 可以传递参数   第二个参数为键名   第三个参数为索引 -->
    <h2>v-for 可以传递参数 第二个参数为键名 第三个参数为索引</h2>
    <ul>
        <li v-for="(value, key, index) in object">
            {{ index }}. {{ key }} : {{ value }}
        </li>
    </ul>
    <!-- vue计算属性 -->
    <h2>反转字符串,计算属性的关键词：<u>computed</u></h2>
    <p style="color:#fff;">可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。</p>
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <br>
    <h2>Vue.js 监听属性 watch,通过 watch 来响应数据的变化。</h2>
    <!--  <p style="font-size:25px;">计数器: {{ counter }}</p>
    <button @click="counter++" style="font-size:25px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点我</button> -->
    <br>
    <h2> v-bind:style 直接设置样式：</h2>
    <h2>vue事件处理器<a href="https://www.runoob.com/vue2/vue-events.html">学习链接</a></h2>
    <br>
    <h2>v-model:根据控件类型自动选取正确的方法来更新元素</h2>


    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>

    <br>
    <br>
    <select v-model="selected" name="test">
        <option value="">选择一个网站</option>
        <option value="www.runoob.com">Baidu</option>
        <option value="www.google.com">Google</option>
        <option value="www.mi.com">XiaoMi</option>
    </select>
    <div id="output">
        选择的网站是: {{selected}}
    </div>



    <h2>自定义全局组件</h2>
    <Switch v-model="check1"></Switch> &nbsp;&nbsp;{{date1}}
    <br></br>
    <DateComp checkMsg="传递" :checkState="check1" @changeCb="(val)=>{check1=val}" @changeDt="(val)=>{date1=val}"></DateComp>
    <h2>局部组件</h2>
    <br></br>
    <!-- <CC v-if="check1"></CC> -->
    <test v-if="check1"></test>

</div>
</template>

<script>
// 局部组件
import test from './test.vue';

export default {
    name: 'ljw',
    data() {
        return {
            msg_one: '欢迎来学习vue！',
            site: "学习vue",
            url: "http://www.baidu.com",
            alexa: "10000",
            use: false,
            seen: 1,
            message: 'testMessage',
            message2: 'http://www.baidu.com',
            ifShow: true,
            sites: [{
                    name: 'Baidu'
                },
                {
                    name: 'Google'
                },
                {
                    name: 'Taobao'
                }
            ],
            object: {
                name: '名字',
                url: 'http://www.baidu.com',
                slogan: '谷歌！'
            },
            checked: false,
            checkedNames: [],
            selected: '',
            check1: true,
            date1: '',

        }
    },
    // 函数
    methods: {
        details: function() {
            return this.site + " - 测试class以及！";
        },
        onclickFunc: function() {
            alert('你好，你点击了我')
        }
    },
    // 过滤器
    filters: {
        capitalize: function(value) {
            // {{ message | filterA('arg1', arg2) }}   这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数************
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    // 计算属性
    /* 可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。 */
    computed: {
        // 计算属性的 getter
        reversedMessage: function() {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    },
    components: {
        'test': test
    }
}
</script>
<style scoped>
.class1 {
    background: #444;
    color: #eee;
}
</style>
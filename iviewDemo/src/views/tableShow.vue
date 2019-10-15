<template>
<!-- 数据展示页面 -->
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">IVIEW布局</div>
          <div class="layout-nav">
              <!-- 页签 设置点击跳转页面函数-->
            <MenuItem name="1" @click="testHref">
              <Icon type="ios-navigate"></Icon>
              <!-- Item 1 -->
               <router-link to="/ljw" style="color:white">页面跳转</router-link>
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
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card title="后台获取数据">
          <div style="min-height: 200px;">
            <v-table
              is-horizontal-resize
              style="width:100%"
              :columns="tableColumn1"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
        </Card>
        <Card title="Render函数之Table加入IVIEW组件与表格修改">
          <Table
            :columns="tableColumn2"
            :data="tableData"
            stripe border
            ref="table"
          ></Table>
        </Card>
        <Card title="Render函数之Table单元格加入EChart图表">
          <Table
            :columns="pictureColumn"
            :data="pictureData"
            stripe border
            ref="table"
          ></Table>
        </Card>
      </Content>
      <Footer class="layout-footer-center"> </Footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "table-main",
    data() {
      return {
        //用来接收后台传输的数据
        tableData: [],
        //easy-table表格 设置样式
        tableColumn1: [
          {field: 'userName', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'phone', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'sex', title: '性别', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'email', title: '电子邮箱', width: 280, titleAlign: 'center', columnAlign: 'left', isResize: true},
          {field: 'createTime', title: '时间', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
          {field: 'zone', title: 'zone', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true},
        ],
        //iview的列命名规范
        tableColumn2: [
          {
            title: '姓名',
            key: 'userName',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h("Input", {
                  props: {
                    value: params.row.userName
                  },
                  on: {
                    input: function (event) {
                      params.row.userName = event;
                    }
                  }
                });
              } else {
                return h("div", params.row.userName);
              }
            }
          }, {
            title: '电话号码',
            key: 'phone',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h("Input", {
                  props: {
                    value: params.row.phone
                  },
                  on: {
                    input: function (event) {
                      params.row.phone = event;
                    }
                  }
                });
              } else {
                return h("div", params.row.phone);
              }
            }
          }, {
            title: '性别',
            key: 'sex',
            render: (h, params) => {
              //@h 是一个构造器，可以使用其创建新组建
              //@params 是表格的数据，params.row可以获取当前行的数据
              if (params.row.$isEdit) {
                return h("Select", {
                  props: {},
                  on: {
                    "on-change": (event) => {
                      params.row.sex = event
                    }
                  }
                }, this.sexList.map((item) => {
                  return h('Option', {
                    props: {
                      value: item.value,
                      label: item.value
                    }
                  })
                }))
              } else {
                if (params.row.sex === 'male') {
                  return h('Tag', {
                    props: {
                      color: '#207431'
                    }
                  }, params.row.sex)
                } else {
                  return h('Tag', {
                    props: {
                      color: '#ff3b81'
                    }
                  }, params.row.sex)
                }
              }
            }
          }, {
            title: '电子邮箱',
            key: 'email',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h("Input", {
                  props: {
                    value: params.row.email
                  },
                  on: {
                    input: function (event) {
                      params.row.email = event;
                    }
                  }
                });
              } else {
                return h("div", params.row.email);
              }
            }
          }, {
            title: '时间',
            key: 'createTime',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h("DatePicker", {
                  props: {
                    type: 'date',
                    showWeekNumbers: true,
                    value: params.row.createTime
                  },
                  on: {
                    input: function (event) {
                      console.log(event.toLocaleString())
                      params.row.createTime = event.toLocaleString();
                    }
                  }
                });
              } else {
                return h('div', [
                  h('Icon', {
                    props: {
                      type: 'ios-clock-outline ',
                      size: 14,
                    }
                  }),
                  h('span', {
                    style: {
                      'fontSize': '14px'
                    }
                  }, params.row.createTime)
                ]);
              }
            }
          }, {
            title: '住址',
            key: 'zone',
            render: (h, params) => {
              if (params.row.$isEdit) {
                return h("Input", {
                  props: {
                    value: params.row.zone
                  },
                  on: {
                    input: function (event) {
                      params.row.zone = event;
                    }
                  }
                });
              } else {
                return h('div', [
                  h('Icon', {
                    props: {
                      type: 'ios-home-outline',
                      size: 14,
                    }
                  }),
                  h('span', {
                    style: {
                      'fontSize': '14px'
                    }
                  }, params.row.zone)
                ]);
              }
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: params.row.$isEdit ? 'warning' : 'info',
                    size: 'small',
                    icon: ''
                  },
                  style: {
                    marginRight: '5px',
                  },
                  on: {
                    click: () => {
                      if (params.row.$isEdit) {
                        this.handleSave(params.row);
                      } else {
                        this.handleEdit(params.row);
                      }
                    }
                  }
                }, params.row.$isEdit ? '保存' : '修改'),
                h('Poptip', {
                  props: {
                    confirm: true,
                    title: '是否要删除此字段？',
                    transfer: true
                  },
                  on: {
                    'on-ok': () => {
                      //删除逻辑
                    }
                  },
                }, [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                  }, '删除')
                ]),
              ])
            }
          }],
        sexList: [
          {
            value: 'male',
          }, {
            value: 'female'
          }
        ],
        //EChart数据列
        pictureColumn: [
          {
            key: 'pictureType',
            title: '类型',
            width: 200,
            align: 'center'
          },
          {
            title: '比例图',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('canvas', {
                  style: {
                    height: '300px',
                    margin: '0',
                    padding: '0'
                  },
                  on: {},
                  attrs: {
                    //给单元格设置ID和类型
                    id: params.row.pictureType
                  }
                })
              ])
            }
          }
        ],
        pictureData: [
          {
            pictureType: '柱形图',
            data: {}
          },
          {
            pictureType: '饼图',
            data: {}
          },
          {
            pictureType: '散点图',
            data: {}
          }
        ]
      }
    },
    created() {
      //在created函数中使用axios的get请求向后台获取用户信息数据
      this.$ajax('http://localhost:8888/findAll').then(res => {
        //   获取相应数据
        this.tableData = res.data
        //为了能修改数据需要在此处给每行数据加一个是否修改状态
        this.tableData.forEach(value => {
          value.$isEdit = false;
        });
        // 捕获异常
      }).catch(function (error) {
        console.log(error);
      });
    },
    updated() {
      let self = this
      self.pictureData.forEach((value, index) => {
        self.paintChart(index, value)
      })
    },
    // 各种函数
    methods: {
        // 测试跳转页面
        testHref(){
            location.href='/ljw';
        },
      //点击了修改按钮
      handleEdit(row) {
        this.$set(row, "$isEdit", true);
      },
      //点击了保存按钮
      handleSave(row) {
        this.$set(row, "$isEdit", false);
      },
      //绘制图表
      paintChart(i, params) {
        if (params.pictureType === '柱形图') {
          let chart = this.$echarts.init(document.getElementById(params.pictureType));
          let option = {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              top: '4%',
              left: '1%',
              right: '1%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
              }
            ]
          };
          chart.setOption(option)
        } else if (params.pictureType === '饼图') {
          let chart = this.$echarts.init(document.getElementById(params.pictureType));
          let option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            grid: {
              top: '4%',
              left: '1%',
              right: '1%',
              bottom: '1%',
              containLabel: true
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          chart.setOption(option)
        } else if (params.pictureType === '散点图') {
          let chart = this.$echarts.init(document.getElementById(params.pictureType));
          let option = {
            xAxis: {},
            yAxis: {},
            series: [{
              symbolSize: 2,
              grid: {
                top: '4%',
                left: '1%',
                right: '1%',
                bottom: '1%',
                containLabel: true
              },
              data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
              ],
              type: 'scatter'
            }]
          }
          chart.setOption(option)
        }
      }
    }

  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-y: scroll;
    height: 100%;
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
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>

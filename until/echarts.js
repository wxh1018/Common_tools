const echarts = {
    bing(dom, data, tip, title) {
        dom.setOption({
            title: {
                text: title,
                // subtext: '纯属虚构',
                left: 'center',
                textStyle: {
                    color: "red",
                    fontSize: 18
                },
                //backgroundColor: "rgb(199,16,16)",
                top: "2%"
            },
            grid: {
                top: "50%",
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} 个(占比{d}%)"
            },
            series: [
                {
                    radius: "50%",
                    name: tip,
                    type: "pie",
                    data,
                    label: {
                        show: true,
                        formatter: "{b}{c}个",
                        // position: "inside",
                        verticalAlign: "middle",
                        textStyle: {
                            color: "white",
                            fontSize: 20
                        }
                    }
                }
            ]
        });
    },
    zhu(obj) {
        var option = {
            title: {
                text: obj.title,
                // subtext: "货邮数（吨）",
                left: "center",
                textStyle: {
                    color: "red"
                }
            },
            grid: {
                bottom: "15%",
                right: "10%"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ["地区数量"],
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: {
                type: "category",
                data: obj.datax.slice(0,10),
                name: obj.x_text,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    formatter: function (param) {
                        if (param.length > 10) {
                            param.slice(0, 10) + "...";
                        }
                        return param.split("").join("\n");
                    }
                },
                //线颜色
                axisLine: {
                    lineStyle: {
                        color: "#fff",
                        type: "solid",
                        width: "1"
                    }
                }
            },
            yAxis: {
                type: "value",
                name: obj.y_text.slice(0,10),
                max: 10,
                min: 0,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    }
                },
                //线颜色
                axisLine: {
                    lineStyle: {
                        color: "#fff",
                        type: "solid",
                        width: "1"
                    }
                },
                // 线样式
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "rgba(255,255,255)",
                        width: 1
                    }
                }
            },
            series: [
                {
                    data: obj.value,
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['rgb(255, 2, 2)', 'rgb(255, 2, 2,.9)', 'rgb(255, 2, .8)', 'rgb(255, 2, 2,.7)', 'rgb(255, 2, 2,.6)', 'rgb(255, 2, 2,.5)', 'rgb(255, 2, 2,.4)', 'rgb(255, 2, 2,.3)', 'rgb(255, 2, 2,.2)', 'rgb(255, 2, 2,.2)',];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    // color: ['green'],
                    //高亮时的设置
                    emphasis: {
                        itemStyle: {
                            color: "skyblue"
                        },
                        //文字显示
                        label: {
                            show: true,
                            color: "white"
                            // formatter:'123'
                        }
                    },
                    label: {
                        show: true,
                        formatter: "{c}",
                        position: "inside",
                        // verticalAlign: "middle",
                        textStyle: {
                            color: "white",
                            fontSize: 20
                        }
                    }
                }
            ]
        };
        obj.dom.setOption(option);
    }
}
export default echarts
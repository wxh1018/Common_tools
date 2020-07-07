//使用说明
// 饼状图调用：this.echar.bing(myChart, this.pro_type, "项目占比", "项目类型数量占比");
// 柱状图调用： let obj = {
//     dom: myChart,
//     datax: x,
//     value: y,
//     x_text: "项目类型",
//     y_text: "项目总金额",
//     title: "项目类型总金额占比",
//     max: 10000,
//     min: 0
//   };
//   this.echar.zhu(obj);

const echarts = {
    bing(dom, data, tip, title, radius) {
        radius = radius || '50%'
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
                formatter: "{a} <br/>{b}:{c}个(占比{d}%)"
            },
            series: [
                {
                    radius: radius,
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
        let max = obj.max || 10
        var option = {
            title: {
                text: obj.title,
                // subtext: "货邮数（吨）",
                left: "center",
                textStyle: {
                    color: "red"
                }
            },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            grid: {
                bottom: "20%",
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
                data: obj.datax.slice(0, 10),
                name: obj.x_text,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    formatter: function (param) {
                        if (param.length > 3) {
                            param = param.slice(0, 3) + "...";
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
                name: obj.y_text.slice(0, 10),
                // max,
                // min: 0,
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
                                // return colorList[params.dataIndex]
                                return 'skyblue'
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
        if (max == 10) {
            option.yAxis.max = 10
        }
        obj.dom.setOption(option);
    },
    getGeo(zoom, arr) {
        arr = arr || [120.55027, 30.67386]
        zoom = zoom || 8
        return {
            map: "china",
            zoom: zoom,
            center: arr,
            label: {
                normal: {
                    show: true,
                    color: "#fff"
                },
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    // color: "rgba(51, 69, 89, .5)", //地图背景色
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, .1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    color: "rgba(37, 43, 61, .5)" //悬浮背景
                }
            }
        }
    },
    getLegend(arr) {
        return {
            show: true,
            orient: "vertical",
            top: "bottom",
            left: "left",
            itemWidth: 90,
            itemHeight: 30,
            data: arr,
            textStyle: {
                color: "#fff",
                fontSize: 18
            }
        }
    },
    getColor() {
        return ["#f44336", "#fc9700", "#ffde00", "#ffde00", "#00eaff"]
    },
    getCenter(arr) {
        arr = arr || [{
            name: '宁波市',
            value: [121.624618, 29.860363]
        }]
        return {
            name: "地点",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 100,
            rippleEffect: {
                brushType: "stroke"
            },
            label: {
                normal: {
                    show: false,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                        //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 20,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    position: "right",
                    formatter: "{b}"
                }
            },
            symbolSize: 30,
            showEffectOn: "render",
            itemStyle: {
                normal: {
                    color: "#46bee9"
                }
            },
            data: arr
        }
    }
}
export default echarts
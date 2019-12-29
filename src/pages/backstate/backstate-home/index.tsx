import React,{useEffect,useRef} from 'react'
import './style.scss'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');

require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

const backstateHome :React.FC<{}>=function AnalysisTravel(){
    const contentRef = useRef<HTMLDivElement | null>(null)
    const pieRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        var myChart = echarts.init(contentRef.current);
        var myCharts = echarts.init(pieRef.current);

        var option = {
            title: {
                text: '线索管理'
            },
            tooltip: {},
            legend: {
                data:['数量']
            },
            xAxis: {
                data: ["我的线索","网络线索","社会报料","上级安排","其他线索"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [132, 32, 50, 20, 5]
            }]
        };

        
       var  options = {
            backgroundColor: '#2c343c',
        
            title: {
                text: '我的任务',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#fff'
                }
            },
        
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'其他'},
                        {value:310, name:'我的任务'},
                        {value:274, name:'已办任务'},
                        {value:235, name:'待办任务'},
                        {value:400, name:'今日新增'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function () {
                        return Math.random() * 200;
                    }
                }
            ]
        };

        myChart.setOption(option);
        myCharts.setOption(options);
    },[contentRef])

    




    return(
        <div className='all'>
            <div className='backstateHome'>
                <div className='clue'>
                    <div className='up'>
                        <span>线索管理</span>
                        <span>总计<em>  260  </em>  条</span>
                    </div>

                    <div className='down'>
                        <div>
                            <h1>我的线索</h1>
                            <span>132条</span>
                        </div>

                        <div>
                            <h1>网络线索</h1>
                            <span>32条</span>
                        </div>

                        <div>
                            <h1>社会报料</h1>
                            <span>50条</span>
                        </div>

                        <div>
                            <h1>上级安排</h1>
                            <span>20条</span>
                        </div>

                        <div>
                            <h1>其他线索</h1>
                            <span>5条</span>
                        </div>

                    </div>
                </div>

                <div className='clue'>
                    <div className='up'>
                        <span>我的任务</span>
                        <span>总计<em>  30  </em>  条</span>
                    </div>

                    <div className='down'>
                        <div>
                            <h1>今日新增</h1>
                            <span>2条</span>
                        </div>

                        <div>
                            <h1>待办任务</h1>
                            <span>3条</span>
                        </div>

                        <div>
                            <h1>已办任务</h1>
                            <span>10条</span>
                        </div>

                        <div>
                            <h1>我的任务</h1>
                            <span>5条</span>
                        </div>

                    </div>
                </div>
            
            </div>  
            <div className='tubiao'>
                <div className='echart1' ref={contentRef}></div>
            </div>
            <div className='tubiao2'>
                <div className='echart2' ref={pieRef} ></div>
            </div>

        </div>
    )
}
export default backstateHome
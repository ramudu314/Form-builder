import { useEffect } from 'react';
import * as echarts from 'echarts';

export default function useEcharts(chartRef) {
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: { text: 'Form Submissions', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{ data: [12, 19, 23, 18, 25, 10, 15], type: 'bar', color: '#4F46E5' }]
      };
      chart.setOption(option);
      
      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [chartRef]);
}
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';
import { Card } from 'react-native-paper';
import { View } from 'react-native';

interface BarChartProps {
  data: {
    month: string | number;
    kWh: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <View style={{ padding: 0 }}>
      <VictoryChart
        domainPadding={{ x: 20 }}
        height={300}
        padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryBar
          data={data}
          x="month"
          y="kWh"
          labels={({ datum }) => `${datum.kWh} kWh`}
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: '#00A5FF',
              width: 12,
              cursor: 'pointer',
            },
            labels: {
              fontSize: 12,
              fill: '#333',
            },
          }}
          cornerRadius={{ top: 4 }}
          animate={{
            duration: 500,
            onLoad: { duration: 1000 },
          }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fontSize: 12,
              fill: '#28282C',
              padding: 5,
            },
            grid: {
              stroke: '#E5E7EB',
              strokeDasharray: '2,4',
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x + ' kWh'}`} 
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fontSize: 10,
              fill: '#828284',
              padding: 0,
            },
            grid: {
              stroke: '#E5E7EB',
              strokeDasharray: '1,4',
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default BarChart;
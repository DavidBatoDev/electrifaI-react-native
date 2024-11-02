import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { Card } from 'react-native-paper';

interface BarChartProps {
  data: {
    month: string | number;
    kWh: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <Card style={{ borderRadius: 16, backgroundColor: '#f9f9f9' }}>
      <VictoryChart
        domainPadding={{ x: 20 }}
        height={300}
        padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
      >
        <VictoryBar
          data={data}
          x="month"
          y="kWh"
          style={{
            data: {
              fill: '#4050E7',
              width: 8,
            },
          }}
          cornerRadius={{ top: 0 }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fontSize: 12,
              fill: '#28282C',
              padding: 5,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}`}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fontSize: 12,
              fill: '#828284',
              padding: 5,
            },
          }}
        />
      </VictoryChart>
    </Card>
  );
};

export default BarChart;
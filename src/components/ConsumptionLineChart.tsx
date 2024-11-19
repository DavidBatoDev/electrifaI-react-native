import React from 'react';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryTheme, VictoryLegend, VictoryArea } from 'victory-native';
import { View, StyleSheet } from 'react-native';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

interface ConsumptionLineChartProps {
  data: {
    x: number | string;
    y: number;
  }[];
}

const ConsumptionLineChart: React.FC<ConsumptionLineChartProps> = ({ data }) => {
  return (
    <View style={styles.chartContainer}>
      <VictoryChart theme={VictoryTheme.material}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#4f46e5" stopOpacity={0.8} />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
          </LinearGradient>
        </Defs>
    
        {/* VictoryLegend */}
        <VictoryLegend
          x={90}
          y={10}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: 'Your Weight', symbol: { fill: '#4f46e5' } },
            { name: 'Ideal Weight', symbol: { fill: '#e5e7eb' } },
          ]}
        />

        {/* VictoryArea with Gradient */}
        <VictoryArea
          data={data}
          style={{
            data: {
              fill: 'url(#gradient)',
              stroke: 'none',
            },
          }}
        />

        {/* VictoryLine */}
        <VictoryLine
          data={data}
          style={{
            data: { stroke: '#4f46e5', strokeWidth: 2 },
          }}
        />

        {/* VictoryScatter (points) */}
        <VictoryScatter
          data={data}
          size={5}
          style={{ data: { fill: '#4f46e5' } }}
        />
      </VictoryChart>
    </View>
  );
};

export default ConsumptionLineChart;

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 0,
  },
});
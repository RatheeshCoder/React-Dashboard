import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { CountryChartData } from '../../Data/Data';
import worldMapData from './worldMapData';
import './CountryChart.css'

const CountryChart = () => {
  return (
    <div className="CountryChart" style={{ height: '50vh' }}>
        <h1>Country Data</h1>
      <ResponsiveChoropleth
         data={CountryChartData}
         features={worldMapData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.55, 0.5]}
        projectionRotation={[0, 0, 0]}
        graticuleLineWidth={0}
        graticuleLineColor="#dddddd"
        borderColor="#152538"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          },
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              {
                offset: 0,
                color: '#000'
              },
              {
                offset: 100,
                color: 'inherit'
              }
            ]
          }
        ]}
        fill={[
          {
            match: {
              id: 'CAN'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'CHN'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'ATA'
            },
            id: 'gradient'
          }
        ]}
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -14,
            itemsSpacing: 1,
            itemWidth: 92,
            itemHeight: 36,
            itemDirection: 'left-to-right',
            itemTextColor: '#444444',
            itemOpacity: 0.85,
            symbolSize: 22,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default CountryChart;

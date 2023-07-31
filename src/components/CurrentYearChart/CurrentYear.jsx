import React from 'react';
import { CurrentYearData } from '../../Data/Data';
import { ResponsiveCalendar } from '@nivo/calendar';
import './CurrentYear.css'

const CurrentYear = () => {
  return (
    <div className="CurrentYear" style={{ height: '50vh' }}>
        <h1>Current Year Data</h1>
      <ResponsiveCalendar
        data={CurrentYearData} // Use CurrentYearData as the data for the calendar
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        minValue={-28}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        yearLegendOffset={12}
        monthSpacing={10}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  );
};

export default CurrentYear;

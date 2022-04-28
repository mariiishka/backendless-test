import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line, Bar, Bubble } from 'react-chartjs-2';
import { RadioChartControl } from '../RadioChartControl';
import { ChartTypes } from '../../types/enums';
import { InputChartControl } from '../InputChartControl';
import { useCheckedChartContext } from '../../hooks/useCheckedChartContext';

Chart.register(...registerables);

const options = {
  responsive: true,
};

export const CustomChart: React.FC = React.memo(() => {
  const { checkedChart } = useCheckedChartContext();
  const [userLabels, setUserLabels] = useState(['January', 'February', 'March', 'April', 'May']);
  const [userData, setUserData] = useState(['1', '5', '10', '1', '2']);

  const data = {
    labels: userLabels,
    datasets: [
      {
        label: 'Dataset 1',
        data: userData,
        borderColor: 'rgb(2, 99, 132)',
        backgroundColor: 'rgba(2, 99, 132, 0.5)',
      },
    ],
  };

  const getVisibleChart = () => {
    switch (checkedChart) {
      case ChartTypes.Bar:
        return <Bar data={data} options={options} />
      case ChartTypes.Line:
        return <Line data={data} options={options} />
      case ChartTypes.Bubble:
        return <Bubble data={data} options={options} />
    }
  }

  const visibleChart = getVisibleChart();

  return (
    <div className="customChart">
      <div className="customChart__control">
        <InputChartControl
          axis='X'
          axisValues={userLabels}
          setAxisValues={setUserLabels}
        />

        <InputChartControl
          axis='Y'
          axisValues={userData}
          setAxisValues={setUserData}
        />
      </div>
      
      <div className="customChart__chart">
        {visibleChart}
      </div>

      <div className="customChart__types">
        <RadioChartControl value={ChartTypes.Bar} />
        <RadioChartControl value={ChartTypes.Line} />
        <RadioChartControl value={ChartTypes.Bubble} />
      </div>
    </div>
  )
})
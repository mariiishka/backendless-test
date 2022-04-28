import React from 'react';
import { useCheckedChartContext } from '../../hooks/useCheckedChartContext';
import { ChartTypes } from '../../types/enums';

type Props = {
  value: ChartTypes;
}

export const RadioChartControl: React.FC<Props> = React.memo(({ value }) => {
  const { checkedChart, setCheckedChart } = useCheckedChartContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedChart(event.target.value as ChartTypes);
  }

  return (
    <label>
      <input
        className="mr-1"
        type="radio"
        name="chart"
        value={value}
        checked={checkedChart === value}
        onChange={handleChange}
      />
      {`${value} Chart`}
    </label>
  )
})
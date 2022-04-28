import React from 'react';
import { ChartTypes } from '../types/enums';

type CheckedChart = {
  checkedChart: ChartTypes,
  setCheckedChart: (chart: ChartTypes) => void,
};

export const CheckedChartContext = React.createContext<CheckedChart>({
  checkedChart: ChartTypes.Bar,
  setCheckedChart: () => {},
});
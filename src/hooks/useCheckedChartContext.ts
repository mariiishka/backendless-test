import { useContext } from 'react';
import { CheckedChartContext } from '../contexsts/CheckedChartContext';


export const useCheckedChartContext = () => useContext(CheckedChartContext);
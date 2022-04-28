import React, { useState } from 'react';
import { CustomChart } from './components/CustomChart';
import { CheckedChartContext } from './contexsts/CheckedChartContext';

import { ChartTypes } from './types/enums';
import './styles/style.scss';

const App: React.FC = () => {
  const [checkedChart, setCheckedChart] = useState(ChartTypes.Bar);

  return (
    <CheckedChartContext.Provider value={{ checkedChart, setCheckedChart }}>
      <div className="app">
        <div className="app__container">
          <CustomChart />
        </div>
      </div>
    </CheckedChartContext.Provider>
  );
}

export default App;

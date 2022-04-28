import React from 'react';
import 'bulma/css/bulma.min.css';

type Props = {
  axis: 'X' | 'Y',
  axisValues: string[],
  setAxisValues: (axis: string[]) => void,
}

export const InputChartControl: React.FC<Props> = React.memo(({
  axis, axisValues, setAxisValues,
}) => {
  const handleKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (event.key === 'Enter') {
      value ? setAxisValues(value.split(',')) : setAxisValues([])
    }
  }

  const handleBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
          
    value ? setAxisValues(value.split(',')) : setAxisValues([])
  }

  return (
    <>
      <label>
        <h4>{`${axis} axis labels:`}</h4>
        <input
          className="input is-info"
          type="text"
          defaultValue={axisValues.join(', ')}
          onKeyPress={handleKeyEvent}
          onBlur={handleBlurEvent}
        />
      </label>
    </>
  )
})
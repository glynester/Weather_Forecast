import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data, units){
  return `${_.round(_.sum(data)/data.length,2)} ${units}`;
}

function Chart(props){
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.colour} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data, props.units)}</div>
    </div>
  )
}

export default Chart;
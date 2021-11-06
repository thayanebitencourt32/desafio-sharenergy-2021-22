import React from 'react'
import * as S from './styles'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { dadosUsina } from '../../data/dadosUsina'

let changedData = [...dadosUsina]

for (const i of changedData) {
  const hour = Math.floor(i.tempo_h)
  const decimalMinutes = i.tempo_h - hour
  const minutes = decimalMinutes * 0.6
  const time = hour + minutes
  i.tempo_h = time.toFixed(2)
}

function Graphic({ data }) {
  const renderLineChart = (
    <LineChart width={600} height={300} data={changedData}>
      <Line type='monotone' dataKey={data} stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' />
      <XAxis dataKey='tempo_h' />
      <YAxis />
      <Tooltip />
    </LineChart>
  )
  return (
    <S.Graphic>
      {renderLineChart}
      <span>t(h)</span>
    </S.Graphic>
  )
}

export default Graphic

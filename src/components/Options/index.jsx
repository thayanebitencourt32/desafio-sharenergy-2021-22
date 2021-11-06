import React from 'react'
import * as S from './styles'

function Options({ setData }) {
  return (
    <S.Options>
      <h3>Variável</h3>
      <label>
        <input type='radio' name='dado' onChange={() => setData('tensao_V')} />
        Tensao V
      </label>
      <label>
        <input
          type='radio'
          name='dado'
          onChange={() => setData('corrente_A')}
        />
        Corrente A
      </label>
      <label>
        <input
          type='radio'
          name='dado'
          onChange={() => setData('potencia_kW')}
        />
        Potência kW
      </label>
      <label>
        <input
          type='radio'
          name='dado'
          onChange={() => setData('temperatura_C')}
        />
        Temperatura Cº
      </label>
    </S.Options>
  )
}

export default Options

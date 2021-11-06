import React from 'react'
import * as S from './styles'
import { dadosClientes } from '../../data/dadosClientes'
import { receitaTotal } from '../../data/dadosUsina'

function Users() {
  const rows = dadosClientes.map((client) => (
    <S.Row
      key={client.numeroCliente}
      round={client.numeroCliente === dadosClientes.length && true}
      color={client.numeroCliente % 2 !== 0 ? '#f4f3ff' : '#ffffff'}
    >
      <span>{client.numeroCliente}</span>
      <span>{client.nomeCliente}</span>
      <span>{client.usinas[0].percentualDeParticipacao}%</span>
      <span>
        R$ {' '}
        {(receitaTotal * (client.usinas[0].percentualDeParticipacao / 100))
          .toFixed(2)
          .replace('.', ',')}
      </span>
    </S.Row>
  ))
  return (
    <>
      <S.Header>
        <span>Nº do Cliente</span>
        <span>Nome</span>
        <span>Participação</span>
        <span>Lucro</span>
      </S.Header>
      {rows}
    </>
  )
}

export default Users

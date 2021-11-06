import React from 'react'
import * as S from './styles'

function Header({ title }) {
  return (
    <S.Header>
      <h3>{title}</h3>
    </S.Header>
  )
}

export default Header

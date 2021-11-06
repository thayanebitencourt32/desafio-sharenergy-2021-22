import Header from './components/Header/index'
import React from 'react'
import Graphic from './components/Graphic/index'
import Options from './components/Options/index'
import Users from './components/Users/index'
import * as S from './styles/style'

function App() {
  const [data, setData] = React.useState('tensao_V')

  return (
    <>
      <Header title='Dashboard' />

      <main>
        <S.Section>
          <Graphic data={data} />
          <Options setData={setData} />
        </S.Section>

        <Header title='Users' />
        <Users/>
      </main>
    </>
  )
}

export default App

import styled from 'styled-components'

export const Header = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 20% 20%;
  justify-items: center;
  padding: 1rem 2rem;
  margin: 1rem auto 0;
  background-color: #8884d8;
  min-width: 500px;
  width: 50%;
  border-radius: 1rem 1rem 0 0;
  color: white;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 20% 20%;
  justify-items: center;
  padding: 1rem 2rem;
  margin: 0 auto;
  background-color: ${props => props.color};
  min-width: 500px;
  width: 50%;
  border-radius: ${props => {
    if (props.round) {
      return '0 0 1rem 1rem'
    }
  }};
`
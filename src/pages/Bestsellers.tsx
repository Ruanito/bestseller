import styled from 'styled-components';
import { Title } from '../atoms/Title';
import Books from '../templates/Books';

const Div = styled.div`
    padding-top: 60px;
    margin: auto;
    width: 909px;

    @media screen and (max-width: 767px) {
      margin: 0 36px 30px 0;
      width: 100vw;
    } 
`

export const Bestsellers = () => {
  return (
    <Div>
        <Title>Bestsellers</Title>
        <Books />
    </Div>
  )
}

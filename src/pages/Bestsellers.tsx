import styled from 'styled-components';
import { Title } from '../atoms/Title';

const Div = styled.div`
    padding-top: 60px;
    margin: auto;
    width: 909px;
`

export const Bestsellers = () => {
  return (
    <Div>
        <Title>Bestsellers</Title>
    </Div>
  )
}

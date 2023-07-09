import React from 'react';
import styled from 'styled-components';
import { BookText } from '../atoms/BookText';

type Props = {
    name: String,
    author: String,
}

const Div = styled.div`
    width: 261px;
    height: 165px;

    border: 1px solid #000;
    border-radius: 10px;

    margin-right: 29px;
`

const BookBox = (props: Props) => {
  return (
    <Div>
        <BookText>Name: {props.name}</BookText>
        <BookText>Author: {props.author}</BookText>
    </Div>
  )
}

export default BookBox

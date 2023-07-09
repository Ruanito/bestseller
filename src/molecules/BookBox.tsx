import React from 'react';
import styled from 'styled-components';
import { BookText } from '../atoms/BookText';

type Props = {
    title: String,
    author: String,
    description: String,
}

const Div = styled.div`
    width: 261px;
    height: 165px;

    border: 1px solid #000;
    border-radius: 10px;

    margin-right: 29px;
    margin-top: 31px;

    @media screen and (max-width: 767px) {
        margin: 36px 36px 0 0;
        width: auto;
    }
`

const BookBox = (props: Props) => {
  return (
    <Div>
        <BookText>Title: {props.title}</BookText>
        <BookText>Author: {props.author}</BookText>
        {props.description && <BookText>Description: {props.description}</BookText>}
    </Div>
  )
}

export default BookBox

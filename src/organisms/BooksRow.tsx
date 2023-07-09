import styled from 'styled-components';
import BookBox from '../molecules/BookBox';

const Div = styled.div`
    margin: 36px 0 0 36px;
    display: flex;

    @media screen and (max-width: 767px) {
        display: block;
    }
`

type Book = {
    name: String,
    author: String,
}

type Props = {
    books: Book[],
}

const BooksRow = (props: Props) => {
  return (
    <Div>
        {props.books.map(book => <BookBox name={book.name} author={book.author} />)}
    </Div>
  )
}

export default BooksRow

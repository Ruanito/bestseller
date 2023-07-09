import styled from 'styled-components';
import BookBox from '../molecules/BookBox';

const Div = styled.div`
    margin: 0 0 0 27px;
    display: flex;
    flex-flow: wrap;

    @media screen and (max-width: 767px) {
        display: block;
    }
`

type Book = {
    title: String,
    author: String,
    description: String,
}

type Props = {
    books: Book[],
}

const BooksRow = (props: Props) => {
  return (
    <Div>
        {props.books.map((book, idx) => <BookBox key={idx} title={book.title} author={book.author} description={book.description} />)}
    </Div>
  )
}

export default BooksRow

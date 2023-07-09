import styled from 'styled-components';
import BooksRow from '../organisms/BooksRow';

const Div = styled.div`
    border-radius: 10px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    margin-top: 52px;
    padding-bottom: 52px;

    @media screen and (max-width: 767px) {
      width: 90vw;
      margin: 10px auto;
    } 
`

const Books = () => {
  return (
    <Div>
        <BooksRow books={[{ name: "Harry Potter", author: "J. K. Rolling" }, { name: "Dexter", author: "Jeff Lindsay" }, { name: "Harry Potter", author: "J. K. Rolling" }]} />
        <BooksRow books={[{ name: "Harry Potter", author: "J. K. Rolling" }, { name: "Dexter", author: "Jeff Lindsay" }, { name: "Harry Potter", author: "J. K. Rolling" }]} />
        <BooksRow books={[{ name: "Harry Potter", author: "J. K. Rolling" }, { name: "Dexter", author: "Jeff Lindsay" }, { name: "Harry Potter", author: "J. K. Rolling" }]} />
    </Div>
  )
}

export default Books;

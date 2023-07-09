import styled from 'styled-components';
import BooksRow from '../organisms/BooksRow';
import { useEffect, useState } from 'react';

const Div = styled.div`
    border-radius: 10px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    
    padding-bottom: 52px;

    @media screen and (max-width: 767px) {
      width: 90vw;
      margin: 10px auto;
    } 
`

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const requestBestsellers = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_API_KEY}`);
      const responseJson = await response.json();

      setBooks(responseJson['results']);
    }

    requestBestsellers();
  }, []);

  return (
    <Div>
        {books.length > 0 && <BooksRow books={books} />}
    </Div>
  )
}

export default Books;

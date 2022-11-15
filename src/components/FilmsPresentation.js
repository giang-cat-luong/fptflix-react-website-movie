
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
export default function FilmsPresentation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [items, setItems] = useState([]);

  //fetch data from mockapi
  useEffect(() => {
    const getMovies = () => {
      fetch(`https://63609d88af66cc87dc172e0f.mockapi.io/movies?page=1&limit=6`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          setItems(data)
        })
        .catch(error => console.log(error.message));
    };
    getMovies();
  }, [])

  // fetch data for each page
  const fetchMovies = async (currentPage) => {
    const res = await fetch(`https://63609d88af66cc87dc172e0f.mockapi.io/movies?page=${currentPage}&limit=6`);
    const data = await res.json();
    return data;
  };

  // const fetchMovies = (currentPage) => {
  //   fetch(`https://63609d88af66cc87dc172e0f.mockapi.io/movies?page=${currentPage}&limit=6`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP Status: ${response.status}`)
  //       }
  //       return response.json()
  //     }).then((data) => {
  //       console.log('show data:', data);
  //     })
  // }

  //handle when click in current page
  const handlePageClick = async (data) => {

    console.log(data.selected);

    let currentPage = data.selected + 1;

    const moviesFromApi = await fetchMovies(currentPage);

    setItems(moviesFromApi);

  };


  return (
    <Section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
      <Container >
        <Row>
          <h3 className='top'>
            <span className='title-new'>New releases</span>
            <h3 className='title-more'>
              <Link to='/seeall' style={{ textDecoration: "none" }}>See all &raquo;</Link>
            </h3>
          </h3>
          {items.map((item) => (
            <Col key={item.id}
              m={4}
              s={12}
            >
              <Card style={{ color: 'black' }}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={item.image} reveal waves='light' />}
                reveal={<p>{item.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={item.title}
              >
                <Link to={`detail/${item.id}`}>Detail</Link>
              </Card></Col>))}
        </Row>

        <ReactPaginate
          className='pagination'
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={3}
          onPageChange={handlePageClick}
        />
      </Container>
    </Section>
  )
}
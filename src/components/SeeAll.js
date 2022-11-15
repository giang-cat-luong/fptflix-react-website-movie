
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
export default function FilmsPresentation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [APIData, setAPIData] = useState([])
  const baseURL = 'https://63609d88af66cc87dc172e0f.mockapi.io/movies';
  useEffect(() => {
    fetch((baseURL))
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => { setAPIData(data) })
      .catch(error => console.log(error.message));
  }, []);


  return (
    <Section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
      <Container >
        <Row>
          <h3 className='top'>
            <span className='title-new'>New releases</span>
            <h3 className='title-more'>
              <a href='#'>See all &raquo;</a>
            </h3>
          </h3>
          {APIData.map((data) => (
            <Col key={data.id}
              m={4}
              s={12}
            >
              <Card style={{ color: 'black' }}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={data.image} reveal waves='light' />}
                reveal={<p>{data.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={data.title}
              >
                <Link to={`detail/${data.id}`}>Detail</Link>
              </Card></Col>))}
        </Row>
        
      </Container>
    </Section>
  )
}
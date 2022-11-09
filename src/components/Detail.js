import React from 'react'
import { useParams } from 'react-router-dom'
import ModalCase from './ModelCase';
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext';
import { Icon, Section, Container } from 'react-materialize';
import './scss/detail.scss';
export default function Detail() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
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
  //set params 
  const news = useParams();
  const data = APIData.find(obj => {
    return obj.id == news.id;
  });
  console.log(news.id);
  console.log(data);

  return (
    <>
      <div class="movie-card">

        <div class="container1">

          <a href="#"><img src={
            APIData?.length > 0
              ? (
                data.image
              ) : (
                <div className="empty">

                </div>
              )
          } alt="cover" class="cover" /></a>

          <div class="hero" style={{
            backgroundImage: `url(${APIData?.length > 0
              ? (
                data.image
              ) : (
                <div className="empty">

                </div>
              )
              })`, height: '342px',
            margin: '0',
            position: 'relative',
            overflow: 'hidden',
            zIndex: '1',

          }}>

            <div class="details">

              <div class="title1">{
                APIData?.length > 0
                  ? (
                    data.title
                  ) : (
                    <div className="empty">

                    </div>
                  )
              }<span>PG-13</span></div>

              <div class="title2">{
                APIData?.length > 0
                  ? (
                    data.nation
                  ) : (
                    <div className="empty">

                    </div>
                  )
              }</div>

              <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" checked /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
              </fieldset>

              <span class="likes">109 likes</span>

            </div>

          </div>
          <a style={{ marginRight: '60px', bottom: '27px', width: '100px', height: '100px' }} onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon style={{ fontSize: '100px', marginTop: '30px' }}>play_circle</Icon>
          </a>
          <div class="description">

            <div class="column1">
              <span class="tag">{
                APIData?.length > 0
                  ? (
                    data.genres
                  ) : (
                    <div className="empty">

                    </div>
                  )
              }</span>

            </div>

            <div class="column2">

              <p>{
                APIData?.length > 0
                  ? (
                    data.info
                  ) : (
                    <div className="empty">

                    </div>
                  )
              }<a href="#"> Read more</a></p>

              <div class="avatars">
                <a href="#" data-tooltip="Person 1" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                </a>

                <a href="#" data-tooltip="Person 2" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                </a>


                <a href="#" data-tooltip="Person 3" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                </a>

              </div>



            </div>
          </div>


        </div>
        {isOpen && <ModalCase setIsOpen={setIsOpen} data={data} />}
      </div>


    </>
  )
}

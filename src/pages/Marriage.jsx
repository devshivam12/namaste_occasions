import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Mrig_1 from '../assets/main-images/img1.jpg'
import Mrig_2 from '../assets/main-images/img2.jpg'
import Mrig_3 from '../assets/main-images/img3.jpg'
import Mrig_4 from '../assets/main-images/img4.jpg'
import Mrig_5 from '../assets/main-images/img5.jpg'
import Mrig_6 from '../assets/main-images/marri pre1.jpg'
import Mrig_7 from '../assets/main-images/marri mehdi1.jpg'
import Marig_8 from '../assets/main-images/marri haldi1.jpg'
import Marig_9 from '../assets/main-images/marri chori1.jpg'
import Margi_10 from '../assets/main-images/marri recep.jpg'


const Marriage = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="container2">
          <div className="box" id="box1"><img src={Mrig_1} /></div>
          <div className="box" id="box2"><img src={Mrig_2} /></div>
          <div className="box" id="box3"><img src={Mrig_3} /></div>

        </div>
      </div>

      <div className="birthdaydescription">
        <h1>Marriage</h1>
      </div>


      <div className="section1">
        <div className="two-sections">
          <div className="section1sub1">
            <img className="birthdayimg1" src={Mrig_6} />
          </div>
          <div className="section1sub2">
            <h1>Prewedding</h1>
            <p>"Before we say 'I do,' let's rejoice in the journey that brought us together, cherish the love that binds us, and anticipate the beautiful future awaiting us."</p>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="two-sections2">
          <div className="section1sub22">
            <h1>Mehndi</h1>
            <p>"Embrace the elegance of Mehndi celebrations, where intricate henna designs intertwine with laughter and love, marking the beginning of a beautiful journey together."</p>
          </div>
          <div class="section1sub11">
            <img class="birthdayimg1" src={Mrig_7} />
          </div>
        </div>
      </div>


      <div className="section1">
        <div className="two-sections">
          <div className="section1sub2">
            <img className="birthdayimg1" src={Marig_8} />
          </div>
          <div className="section1sub1">
            <h1>Haldi</h1>
            <p>"Enter the world of Haldi festivities, where the golden hues of turmeric blend with joyous laughter, symbolizing the auspicious beginning of a lifetime of love and togetherness."</p>
          </div>

        </div>
      </div>


      <div className="section2">
        <div className="two-sections2">
          <div className="section1sub22">
            <h1>"Chori" Ritual</h1>
            <p>Experience the enchantment of the Indian 'Chori' ritual, as the groom's family arrives with blessings and gifts, uniting two families in a symphony of love and cultural richness."</p>
          </div>
          <div className="section1sub11">
            <img className="birthdayimg1" src={Marig_9} />
          </div>
        </div>
      </div>


      <div className="section1">
        <div className="two-sections">
          <div className="section1sub2">
            <img className="birthdayimg1" src={Margi_10} />
          </div>
          <div className="section1sub1">
            <h1>Reception</h1>
            <p>"Join us as we celebrate love, laughter, and happily ever after at our reception, where memories are made, friendships are honored, and joy fills the air."</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Marriage
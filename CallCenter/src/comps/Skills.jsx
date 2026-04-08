import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../img/meter1.svg'
import meter2 from '../img/meter2.svg'
import meter3 from '../img/meter3.svg'
import colorSharp from '../img/cyber1.png'
import { ContactUs } from './Contact'
import emailicon from '../img/emailicon6.png';


export function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return <>
    
    <section className="skill" id="contacts">
        <div className='skill-bx'>
            <div className='emails'>
            <img src={emailicon} alt="Not found" />
            <div><h4>info@bestcenter24.com</h4><h4>ceo@bestcenter24.com</h4></div>
            </div>
            <h1>Write us a Message</h1>
            {/* <h1>info@bestcenter24.com</h1>
            <h1>ceo@bestcenter24.com</h1> */}
            <ContactUs />
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        
        </div>
    </section>

        </>
}
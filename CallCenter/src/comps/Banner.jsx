import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "/src/img/headerImg.jpg";
import logo1 from "/src/img/BCI/Untitled2.png";

export function Banner(){
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Sofware Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {/* <video autoPlay muted playsInline className="back-video">
                            <source src="src/img/BCI/2023-10-23 20-34-00_2.mp4" type="video/mp4"/>
                        </video> */}
                        {/* <span className="tagline">Welcome</span> */}
                        {/* <h1>{` `}<span className="wrap">Best Services</span></h1> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p> */}
                        {/* <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>*/}
                    </Col> 
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={""} alt="Header Img" />
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
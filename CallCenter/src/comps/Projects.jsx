import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../img/BCI/Update database/47443481.jpg";
import projImg2 from "../img/BCI/First call/25019247.jpg";
import projImg3 from "../img/BCI/Hot line/21558744.jpg";
import projImg4 from "../img/BCI/Recipement of the orders/31872025.jpg";
import projImg5 from "../img/BCI/Work with complients/25882934.jpg";
import projImg6 from "../img/BCI/Telemarketing/24057754.jpg";
import projImg7 from "../img/BCI/Technical support/26080756.jpg";
import projImg8 from "../img/BCI/Presales/18532414.jpg";
import projImg9 from "../img/BCI/SURVEYS/24072999.jpg";
import projImg10 from "../img//BCI/CUSTOMER RETENTION2.jpg";
// import colorSharp2 from "../img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "DATABASE UPDATE",
      description: " Ensure your customer information is accurate and current. We meticulously update your databases, enabling you to engage with your clients effectively",
      imgUrl: projImg1,
    },
    {
      title: "WELCOME CALL",
      description: "Make a lasting first impression. Our friendly welcome calls introduce your brand to new customers, setting the stage for a positive customer relationship from the very beginning",
      imgUrl: projImg2,
    },
    {
      title: "HOT LINE",
      description: "Provide immediate assistance to your customers through our dedicated hotline support. We handle inquiries promptly, ensuring customer issues are resolved in real-time",
      imgUrl: projImg3,
    },
    {
      title: "RECEIPT OF ORDERS",
      description: "Streamline your sales process with our efficient order-taking services. We manage orders with precision, guaranteeing seamless transactions and satisfied customers.",
      imgUrl: projImg4,
    },
    {
      title: "DEALING WITH COMPLAINTS",
      description: "Address customer concerns with professionalism and care. Our team specializes in working with complaints, transforming negative experiences into opportunities for customer retention and loyalty",
      imgUrl: projImg5,
    },
    {
      title: "TELEMARKETING",
      description: "Boost your sales and market presence through our expert telemarketing services. We engage potential customers, generate leads, and promote your products or services effectively. ",
      imgUrl: projImg6,
    },
    {
      title: "TECHNICAL SUPPORT",
      description: " Provide reliable technical assistance to your customers. Our skilled technical support team resolves technical issues promptly, ensuring customer satisfaction and bolstering your brand's credibility. ",
      imgUrl: projImg7,
    },
    {
      title: "CROSS-SELLING",
      description: " Maximize your revenue streams through strategic cross-selling techniques. We encourage customers to explore complementary products or services, increasing your sales potential. ",
      imgUrl: projImg8,
    },
    {
      title: "TELEPHONE SURVEYS",
      description: " Gain valuable insights into customer preferences and feedback. Our in-depth phone surveys collect detailed data, providing you with actionable insights to inform your business strategies. ",
      imgUrl: projImg9,
    },
    {
      title: "CUSTOMER RETENTION",
      description: "Foster customer loyalty through personalized interactions and loyalty programs. Our retention strategies are designed to keep your customers engaged, ensuring they remain satisfied and loyal to your brand. ",
      imgUrl: projImg10,
    },
    {
      title: "AFTERSALES CARE",
      description: "Provide comprehensive support even after the sale is made. Our aftersales care services ensure customers receive ongoing assistance, enhancing their overall experience with your products or services. ",
      imgUrl: projImg10,
    }
  ];

  // const projects3 = [
  //   {
  //     title: "TECHNICAL SUPPORT",
  //     description: "Our contact center operators will provide your customers with professional support and all the necessary information in an operative manner and, if necessary, 24 hours a day.",
  //     imgUrl: projImg7,
  //   },
  //   {
  //     title: "PRE-Sales",
  //     description: "These methods allow you to achieve the set goal: to sell more and more products to the buyer.",
  //     imgUrl: projImg8,
  //   },

  //   {
  //     title: "COMMING SOON",
  //     description: "",
  //     imgUrl: projImg11,
  //   },
  //   {
  //     title: "COMMING SOON",
  //     description: "",
  //     imgUrl: projImg12,
  //   },
  // ];

  return (
    <section className="project" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <hr className="hr1"/>
                        {
                          
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                    <Row className="row2serv">
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
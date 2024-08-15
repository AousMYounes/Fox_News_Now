import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imag1 from '../assets/images/fox-news-icon-66.png';
import { useTranslation } from 'react-i18next';
const HomePage = () => {
  const { t } = useTranslation();
  return(
  <Container className="text-center my-5">
    <Row>
      <Col md={6}>
        <img src={imag1} alt="HomeImage" className="img-fluid" />
      </Col>
      <Col md={6}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h1><font size="7" color="#cb8624"><b>{t("homePageTitle")}</b></font></h1>
        <br></br>
        <p><em><b>{t("homePagePara")}</b></em></p>
        <br></br>
        <p><em><b>{t("homePagePara1")}</b></em></p>
      </Col>
    </Row>
    <br></br>
    <br></br>
  </Container>)
  
};

export default HomePage;

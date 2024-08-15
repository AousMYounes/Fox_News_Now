
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';






// import image from '../assets/images/image111.jpg';


import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


  const NewsPage = ({src}) => {
  
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector(state => state.news);
  
    useEffect(() => {
      dispatch((fetchNews()));
    }, [dispatch]);

  const handleReadMore = (id) => {
    navigate(`/news/${id}`);
  };
  const { t } = useTranslation();
  return (
    <Container>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <center><h1><span className='badge'>{t("Latest")}</span></h1></center>
      <br></br>
      <Row>
        {news.map(item => (
          <Col md={4} key={item.id}>
            <Card className='bg-dark text-light mb-3'>
              <Card.Img variant="top" src={item.urlToImage} style={{height:"200px",width:"415px"}} />
              <Card.Body>
                <Card.Title>{t(item.title)}</Card.Title>
                
                <Button variant="warning" onClick={() => handleReadMore(item.source.id)}>{t("btnNews")}</Button>
              </Card.Body>
              <br></br>
            </Card>
            
          </Col>
          
        ))}
      </Row>
    </Container>
  );
  
};



export default NewsPage;

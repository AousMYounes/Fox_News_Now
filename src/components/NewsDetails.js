import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Card, Container, Col, Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const NewsDetails = () => {
  // const { id } = useParams();
  const [articles, setArticles] = useState([]);
  console.log(articles)
    const {  loading, error } = useSelector(state => state.news);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=8cfd5fb20175405ea3950485a5ac4454`);
        setArticles(response.data.articles);
        console.log("huioi")
      } catch (error) {
        console.error('Error fetching news detail', error);
      }
    };
    fetchArticle();
  }, [articles]);

  if (!articles) return <p>Loading...</p>;
  
  return (
    <Container>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <center><h1><span className='badge'>{t("DETAILS")}</span></h1></center>
      <br></br>
    {articles.map((articles) => {
      return(
    <Col md={12} key={articles.id}>
      <Card className='bg-dark text-light mb-3'>
        <Card.Img variant="top" src={articles.urlToImage} />
        <Card.Body>
          <Card.Title><font size="6" color="#cb8624">{t(articles.title)}</font></Card.Title>
          <Card.Text>{t(articles.description)}</Card.Text>
          <Card.Text>{t(articles.author)}</Card.Text>
          <Card.Text>{t(articles.publishedAt)}</Card.Text>
          <Card.Text>{t(articles.content)}</Card.Text>
          <Card.Text>{articles.url}</Card.Text>
          <Button variant="secondary" onClick={() => window.history.back()}>{t("BACK")}</Button>
        </Card.Body>
      </Card>
      </Col>)}
    )}
    </Container>
  );
};



export default NewsDetails;

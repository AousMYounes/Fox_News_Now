import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { t } = useTranslation();
  return(
  <div className='w-100 h-100 m-auto' dir={t('DIR')}>
    <center>
    <h2><span className='badge'>{t("contactus")}</span></h2>
    </center>
    <br></br>
    <Form className='bg-dark text-light mt-2 mb-2'>
    <br></br>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='ml-3'>{t("NAME")}</Form.Label>
      <Form.Control type="text" placeholder={t("placeName")} />
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='ml-3'>{t("EMAIL")}</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='ml-3'>{t("PASSWORD")}</Form.Label>
      <Form.Control type="password" placeholder={t("placePassword")} />
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label className='ml-3'>{t("COMMENT")}</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <button type='submit' className='btn  mb-5'>{t("SEND")}</button> 
    <br></br>
  </Form>
  
    
  </div>
)};

export default Contact;
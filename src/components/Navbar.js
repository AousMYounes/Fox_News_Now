import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../assets/images/fox-news-icon-66.png';
const NavBar = () => {
  const { t, i18n } = useTranslation();
  // const {news , home , contactus} =t("navbar");

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar  expand="lg" className='navbar navbar-expand-lg navbar-dark bg-dark mb-3' dir={t('DIR')}>
      <Navbar.Brand as={Link} to="/"><img src={logo} alt="logoImg" width={50} height={50} />Fox News Now</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" >{t("home")}</Nav.Link>
        <Nav.Link as={Link} to="/news">{t("news")}</Nav.Link>
        <Nav.Link as={Link} to="/contact">{t("contactus")}</Nav.Link>
      </Nav>
      
      <Dropdown xs="auto" id='d1'>
        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="justify-content-end">
          {t('Language')}
        </Dropdown.Toggle>
        <Dropdown.Menu id='menu'>
          <Dropdown.Item onClick={() => handleLanguageChange('ar')}>{t('Arabic')}</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLanguageChange('en')}>{t('English')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
    </Navbar>
  );
};

export default NavBar;


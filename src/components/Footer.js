import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return(
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Navbar.Text className="text-center w-100">
       {t("design")} &copy; 2024 <span className='text'>{t("author")}</span>
    </Navbar.Text>
  </Navbar>
)};

export default Footer;
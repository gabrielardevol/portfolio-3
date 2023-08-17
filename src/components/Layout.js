import React, { useRef, useState, useEffect } from 'react';
import '../style/SecondLayout.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // no esborrar
import projects from '../projects';
import SecondLayout from './SecondLayout';

const Layout = React.forwardRef((props, ref) => {
   return (
      <div ref={ref} id="layout" className={props.layoutClass} style={{  transition: "all 0.7s ease"}}>
        {props.children}
      </div>

  );
});

export default Layout;

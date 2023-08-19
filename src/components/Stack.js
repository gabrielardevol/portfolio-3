import {useState, useRef, useEffect} from 'react';
import React from 'react';
import "../style/Stack.css"

import { useTranslation } from 'react-i18next';

import i18n from '../i18n.js'; // no esborrar

import getStackLayout from '../functions/getStackLayout';



const Stack = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const stackRef = useRef()

  const handleStackLayout = () => {
    const sLayout = getStackLayout(stackRef.current.getBoundingClientRect().width, stackRef.current.getBoundingClientRect().height)
    stackRef.current.style.flexFlow = sLayout.flexFlow

  }

  const handleLayout = () => {
    handleStackLayout()
    setTimeout(handleStackLayout, 400);
    setTimeout(handleStackLayout, 800);

  }


  useEffect(() => {
    window.addEventListener('click', handleLayout);
    window.addEventListener('resize', handleLayout)
  }, []);
  return (
    <>
      <div ref={stackRef} className={"stack"} >
        <div>
          <table>
            <thead>
              <tr>
                <th> {t('stack.frontEnd')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HTML, CSS, Javascript</td></tr>
              <tr><td>React</td></tr>
              <tr><td>Bootstrap</td></tr>
              <tr><td>Sass</td></tr>
              <tr><td>Figma</td></tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
              <th> {t('stack.backEnd')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ruby</td></tr>
              <tr><td>Ruby on Rails</td></tr>
              <tr><td>Firebase</td></tr>
              <tr><td>MySQL</td></tr>
              <tr><td>PostgreSQL</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <table>
            <thead>
              <tr>
              <th> {t('stack.workflow')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Github</td></tr>
              <tr><td>Ubuntu</td></tr>
              <tr><td>Heroku</td></tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
              <th> {t('stack.graphicDesign')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Photoshop</td></tr>
              <tr><td>Illustrator</td></tr>
              <tr><td>After Effects</td></tr>
              <tr><td>Blender</td></tr>
              <tr><td>Cinema4D</td></tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
              <th> {t('stack.currentlyLearning')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>PHP</td></tr>
              <tr><td>API</td></tr>
              <tr><td>{t('stack.solidPrinciples')}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});

export default Stack;

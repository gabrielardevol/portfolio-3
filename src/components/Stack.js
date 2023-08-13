import {useState, useRef} from 'react';
import React from 'react';
import "../style/Stack.css"

const Stack = React.forwardRef((props, ref) => {

  return (
    <>
      <div ref={ref} className={"stack"} >
        <div>
          <table>
            <thead>
              <tr>
                <th>Front-end</th>
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
                <th>Back-end</th>
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
                <th>Workflow</th>
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
                <th>Graphic design</th>
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
                <th>Currently learning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>PHP</td></tr>
              <tr><td>API</td></tr>
              <tr><td>SOLID principles</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});

export default Stack;

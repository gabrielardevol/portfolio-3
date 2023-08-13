import React from 'react';
import '../style/SecondLayout.css';

const Layout = React.forwardRef((props, ref) => {
   return (
    <div id="super-layout" className={props.superLayout } >
      <div ref={ref} id="layout" className={props.layoutClass} style={{  transition: "all 0.7s ease"}}>
        {props.children}
      </div>
      <SecondLayout hideSecondLayout={props.hideSecondLayout}/>
    </div>
  );
});

const SecondLayout = (props) => {
  return (
    <div id="second-layout">
      <div style={{position: "relative"}}>
        <button id="close-button" onClick={props.hideSecondLayout}>X</button>
        <button id="previmg-button"> &lt; </button>
        <button id="nextimg-button">&gt; </button>
      </div>
      <div style={{overflow: "auto", height: "50%"}}>
        <div>
          <h2>Title</h2>
          <div>
            <ul id="project-links">
              <li><a>GitHub</a></li>
              <li><a>Figma</a></li>
              <li><a>Codepen</a></li>
            </ul>
          </div>
        </div>
        <div >
          <p style={{textAlign: "end", color: "grey"}}>00/00/00</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Et malesuada fames ac turpis. Quis commodo odio aenean sed adipiscing diam. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Id neque aliquam vestibulum morbi blandit. Parturient montes nascetur ridiculus mus. Condimentum lacinia quis vel eros. Enim praesent elementum facilisis leo vel. Semper viverra nam libero justo. Massa sapien faucibus et molestie ac. Morbi tempus iaculis urna id volutpat.
            <br/>
            Mi quis hendrerit dolor magna eget est lorem ipsum. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Etiam tempor orci eu lobortis. Eget mi proin sed libero enim sed faucibus turpis. Volutpat consequat mauris nunc congue nisi vitae. Arcu non odio euismod lacinia at. Eget nulla facilisi etiam dignissim diam quis. Ac odio tempor orci dapibus ultrices in iaculis nunc. Odio morbi quis commodo odio aenean sed. Eget aliquet nibh praesent tristique magna sit. Sed augue lacus viverra vitae. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.
            <br/>
            Pellentesque elit eget gravida cum sociis natoque penatibus. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet cursus sit amet dictum sit amet justo donec. Diam maecenas ultricies mi eget mauris. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Enim praesent elementum facilisis leo vel. Placerat orci nulla pellentesque dignissim. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Gravida in fermentum et sollicitudin ac orci. Purus gravida quis blandit turpis cursus. Risus nec feugiat in fermentum posuere urna nec tincidunt. Posuere urna nec tincidunt praesent semper feugiat.
            <br/>
            Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Id interdum velit laoreet id donec. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Velit scelerisque in dictum non. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Leo urna molestie at elementum eu facilisis. Vel eros donec ac odio tempor orci dapibus. Consectetur adipiscing elit duis tristique. Mi quis hendrerit dolor magna eget. Egestas integer eget aliquet nibh praesent tristique magna sit amet.
            <br/>
            Faucibus interdum posuere lorem ipsum dolor. Vitae elementum curabitur vitae nunc. Nunc mi ipsum faucibus vitae aliquet nec. Risus at ultrices mi tempus. Eu augue ut lectus arcu bibendum at varius vel. Ultrices tincidunt arcu non sodales neque sodales ut. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Feugiat scelerisque varius morbi enim. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Amet aliquam id diam maecenas ultricies mi eget mauris. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Pretium fusce id velit ut. Auctor eu augue ut lectus arcu bibendum at varius. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Fames ac turpis egestas integer eget aliquet nibh praesent. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Enim eu turpis egestas pretium aenean.</p>
        </div>
      </div>
    </div>
  )
}

export default Layout;

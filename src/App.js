import React from 'react';
import Nav from './pages/Navigation';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Element } from 'react-scroll';
import { faHome, faTh, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import Intro from './pages/Intro';
import Contacto from './pages/Contacto';
import Portfolio from './pages/Portfolio';
import Tecnologias from './pages/Tecnologias';

function App() {
  library.add(faHome, faTh, faUser, faEnvelope, fab, faCode);
  return (
    <div className="h-100">
      <div className="d-flex flex-column flex-md-row">
        <div id="header" className="sticky-top">
          <Nav></Nav>
        </div>
        <div className="col">
          <Element name="intro">
            <Intro></Intro>
          </Element>
          <Element name="portfolio">
            <div className="bg-grad">
              <Portfolio></Portfolio>
            </div>
          </Element>
          <Element name="tecnologias">
            <div className="bg-grad">
              <Tecnologias></Tecnologias>
            </div>
          </Element>
          {/* <Element name="sobreMi">
            <h1>sobreMi</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo laudantium nam nostrum maiores, doloremque blanditiis accusantium dolor facere ipsam possimus aliquid quibusdam architecto deleniti, amet maxime? Quam, libero alias voluptas in enim id repellendus rerum at ipsam reiciendis? Est quis omnis fuga nesciunt quibusdam, id odio sint eum voluptatem laboriosam possimus, recusandae iste! Corporis doloremque quidem nisi quam porro quia tenetur dolorum, ullam at, voluptatem libero. Nemo, eligendi, porro aliquam laboriosam provident iure modi suscipit fugit vitae sequi numquam incidunt, obcaecati quasi. Adipisci voluptates voluptatem, iste deserunt rerum repudiandae quos. In impedit consectetur natus vitae eaque, ullam laborum! Optio distinctio culpa iusto velit ipsum quidem, impedit, fugit consectetur rerum quas aliquid minus nostrum dolores temporibus iste hic error quod doloribus unde fuga tenetur rem. Ipsam reiciendis velit libero sequi illo vitae rem totam voluptatum eos ducimus officia expedita tenetur adipisci aliquid, dicta corporis, quos, provident atque culpa! Nostrum tempora voluptate earum est rem, enim mollitia tenetur maxime cum! Quo culpa, molestias minus maiores facere quae accusamus aut et doloribus omnis provident ad. Consequuntur necessitatibus saepe pariatur quam? Commodi nemo animi sint porro laudantium dolor officia. Nam, corporis? Alias, dicta! Pariatur, a deserunt illum velit sint ducimus autem eveniet nam?</p>
          </Element> */}
          <Element name="contacto">
            <div className="bg-grad">
              <Contacto></Contacto>
            </div>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default App;

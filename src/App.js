import React from 'react';
import './App.css';
import Nav from './components/Navigation';
import { Element } from 'react-scroll'

function App() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row">
        <div id="header">
          <Nav></Nav>
        </div>
        <div className="col-9">
          <Element name="intro">
            <h1>Intro</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo laudantium nam nostrum maiores, doloremque blanditiis accusantium dolor facere ipsam possimus aliquid quibusdam architecto deleniti, amet maxime? Quam, libero alias voluptas in enim id repellendus rerum at ipsam reiciendis? Est quis omnis fuga nesciunt quibusdam, id odio sint eum voluptatem laboriosam possimus, recusandae iste! Corporis doloremque quidem nisi quam porro quia tenetur dolorum, ullam at, voluptatem libero. Nemo, eligendi, porro aliquam laboriosam provident iure modi suscipit fugit vitae sequi numquam incidunt, obcaecati quasi. Adipisci voluptates voluptatem, iste deserunt rerum repudiandae quos. In impedit consectetur natus vitae eaque, ullam laborum! Optio distinctio culpa iusto velit ipsum quidem, impedit, fugit consectetur rerum quas aliquid minus nostrum dolores temporibus iste hic error quod doloribus unde fuga tenetur rem. Ipsam reiciendis velit libero sequi illo vitae rem totam voluptatum eos ducimus officia expedita tenetur adipisci aliquid, dicta corporis, quos, provident atque culpa! Nostrum tempora voluptate earum est rem, enim mollitia tenetur maxime cum! Quo culpa, molestias minus maiores facere quae accusamus aut et doloribus omnis provident ad. Consequuntur necessitatibus saepe pariatur quam? Commodi nemo animi sint porro laudantium dolor officia. Nam, corporis? Alias, dicta! Pariatur, a deserunt illum velit sint ducimus autem eveniet nam?</p>
          </Element>
          <Element name="portfolio">
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo laudantium nam nostrum maiores, doloremque blanditiis accusantium dolor facere ipsam possimus aliquid quibusdam architecto deleniti, amet maxime? Quam, libero alias voluptas in enim id repellendus rerum at ipsam reiciendis? Est quis omnis fuga nesciunt quibusdam, id odio sint eum voluptatem laboriosam possimus, recusandae iste! Corporis doloremque quidem nisi quam porro quia tenetur dolorum, ullam at, voluptatem libero. Nemo, eligendi, porro aliquam laboriosam provident iure modi suscipit fugit vitae sequi numquam incidunt, obcaecati quasi. Adipisci voluptates voluptatem, iste deserunt rerum repudiandae quos. In impedit consectetur natus vitae eaque, ullam laborum! Optio distinctio culpa iusto velit ipsum quidem, impedit, fugit consectetur rerum quas aliquid minus nostrum dolores temporibus iste hic error quod doloribus unde fuga tenetur rem. Ipsam reiciendis velit libero sequi illo vitae rem totam voluptatum eos ducimus officia expedita tenetur adipisci aliquid, dicta corporis, quos, provident atque culpa! Nostrum tempora voluptate earum est rem, enim mollitia tenetur maxime cum! Quo culpa, molestias minus maiores facere quae accusamus aut et doloribus omnis provident ad. Consequuntur necessitatibus saepe pariatur quam? Commodi nemo animi sint porro laudantium dolor officia. Nam, corporis? Alias, dicta! Pariatur, a deserunt illum velit sint ducimus autem eveniet nam?</p>
          </Element>
          <Element name="sobreMi">
            <h1>sobreMi</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo laudantium nam nostrum maiores, doloremque blanditiis accusantium dolor facere ipsam possimus aliquid quibusdam architecto deleniti, amet maxime? Quam, libero alias voluptas in enim id repellendus rerum at ipsam reiciendis? Est quis omnis fuga nesciunt quibusdam, id odio sint eum voluptatem laboriosam possimus, recusandae iste! Corporis doloremque quidem nisi quam porro quia tenetur dolorum, ullam at, voluptatem libero. Nemo, eligendi, porro aliquam laboriosam provident iure modi suscipit fugit vitae sequi numquam incidunt, obcaecati quasi. Adipisci voluptates voluptatem, iste deserunt rerum repudiandae quos. In impedit consectetur natus vitae eaque, ullam laborum! Optio distinctio culpa iusto velit ipsum quidem, impedit, fugit consectetur rerum quas aliquid minus nostrum dolores temporibus iste hic error quod doloribus unde fuga tenetur rem. Ipsam reiciendis velit libero sequi illo vitae rem totam voluptatum eos ducimus officia expedita tenetur adipisci aliquid, dicta corporis, quos, provident atque culpa! Nostrum tempora voluptate earum est rem, enim mollitia tenetur maxime cum! Quo culpa, molestias minus maiores facere quae accusamus aut et doloribus omnis provident ad. Consequuntur necessitatibus saepe pariatur quam? Commodi nemo animi sint porro laudantium dolor officia. Nam, corporis? Alias, dicta! Pariatur, a deserunt illum velit sint ducimus autem eveniet nam?</p>
          </Element>
          <Element name="contacto">
            <h1>contacto</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro explicabo laudantium nam nostrum maiores, doloremque blanditiis accusantium dolor facere ipsam possimus aliquid quibusdam architecto deleniti, amet maxime? Quam, libero alias voluptas in enim id repellendus rerum at ipsam reiciendis? Est quis omnis fuga nesciunt quibusdam, id odio sint eum voluptatem laboriosam possimus, recusandae iste! Corporis doloremque quidem nisi quam porro quia tenetur dolorum, ullam at, voluptatem libero. Nemo, eligendi, porro aliquam laboriosam provident iure modi suscipit fugit vitae sequi numquam incidunt, obcaecati quasi. Adipisci voluptates voluptatem, iste deserunt rerum repudiandae quos. In impedit consectetur natus vitae eaque, ullam laborum! Optio distinctio culpa iusto velit ipsum quidem, impedit, fugit consectetur rerum quas aliquid minus nostrum dolores temporibus iste hic error quod doloribus unde fuga tenetur rem. Ipsam reiciendis velit libero sequi illo vitae rem totam voluptatum eos ducimus officia expedita tenetur adipisci aliquid, dicta corporis, quos, provident atque culpa! Nostrum tempora voluptate earum est rem, enim mollitia tenetur maxime cum! Quo culpa, molestias minus maiores facere quae accusamus aut et doloribus omnis provident ad. Consequuntur necessitatibus saepe pariatur quam? Commodi nemo animi sint porro laudantium dolor officia. Nam, corporis? Alias, dicta! Pariatur, a deserunt illum velit sint ducimus autem eveniet nam?</p>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;

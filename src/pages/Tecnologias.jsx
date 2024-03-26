import React from 'react'
import CardTecnologia from '../components/CardTecnologia'

export default function Tecnologias() {
    return (
        <div className="text-intro col-12 mx-auto text-center pt-5">
            <h2 className="mb-4">Tecnologias</h2>
            <div className="d-flex flex-wrap">
                <CardTecnologia title="JavaScript" img="js.png" color="#B39419" url="https://developer.mozilla.org/es/docs/Web/JavaScript"></CardTecnologia>
                <CardTecnologia title="CSS" img="css.png" color="#0C3DA6" url="https://developer.mozilla.org/es/docs/Web/CSS"></CardTecnologia>
                <CardTecnologia title="HTML" img="html.png" color="#A63A0F" url="https://developer.mozilla.org/es/docs/Web/HTML"></CardTecnologia>
                <CardTecnologia title="php" img="php.png" color="#393C66" url="https://www.php.net/manual/es/intro-whatis.php"></CardTecnologia>
                <CardTecnologia title="MongoDB" img="mongo.png" color="#216323" url="https://www.mongodb.com/es"></CardTecnologia>
                <CardTecnologia title="express" img="express.png" color="#4D4545" url="https://expressjs.com/es/"></CardTecnologia>
                <CardTecnologia title="React" img="react.png" color="#000" url="https://es.reactjs.org/"></CardTecnologia>
                <CardTecnologia title="NodeJS" img="node.png" color="#24242C" url="https://nodejs.org/es/"></CardTecnologia>
                <CardTecnologia title="MySQL" img="mysql.png" color="#F5F5F5" url="https://www.mysql.com/"></CardTecnologia>
                <CardTecnologia title="React Native" img="reactnative.png" color="#62DAFC" url="https://reactnative.dev/"></CardTecnologia>
                <CardTecnologia title="Redux" img="redux.png" color="#24242C" url="https://redux.js.org/"></CardTecnologia>
                <CardTecnologia title="NextJs" img="nextjs.png" color="#FFFFFF" url="https://nextjs.org/"></CardTecnologia>
            </div>

        </div>
    )
}

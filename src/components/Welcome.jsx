import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Welcome.css';
import Quiz from '../img/quiz_futebol.jpg';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  

  return (
    <div id='welcome'>
        <h1>Quiz de Futebol</h1>
        <p>Seja bem vindo ao nosso quiz, teste seus conhecimentos e aproveite para 
        aprender ainda mais sobre esse esporte que é uma paixão Mundial!</p>
        <h2>Clique no botão abaixo para começar</h2>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt="Imagem do Quiz" />
    </div>
  )
}

export default Welcome;
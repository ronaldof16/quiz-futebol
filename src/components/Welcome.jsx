import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  

  return (
    <div id='welcome'>
        <h1>Quiz de Futebol</h1>
        <h2>Seja bem vindo ao nosso quiz, teste seus conhecimentos e aproveite para 
        aprender ainda mais sobre esse esporte que é uma paixão nacional! </h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
    </div>
  )
}

export default Welcome;
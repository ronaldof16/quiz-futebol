import Quiz from '../img/quiz.svg';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Imagem com Interrogação" />
    </div>
  )
}

export default Welcome
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './PickCategory.css';

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: 'START_GAME', payload: category });

    dispatch({ type: 'REORDER_QUESTIONS' });
  }

  return (
    <div id='category'>
      <h1>Quiz de Futebol</h1>
      <div className='informacoes'>
        <h2>Informações</h2>
        <ul>
          <li className='informacoes-itens'><span>✔︎</span> Cada tópico é composto por cinco perguntas, e cada pergunta possui apenas uma alternativa verdadeira.</li>
          <li className='informacoes-itens'><span>✔︎</span> Em todas as perguntas você vai ter a opção de obter uma dica sobre a resposta correta.</li>
          <li className='informacoes-itens'><span>✔︎</span> Ao selecionar uma alternativa não será possível fazer uma mudança para outra, e no mesmo momento o usuário vai saber se 
          acertou ou não a questão através da cor de fundo da alternativa: VERDE - CORRETA  e VERMELHO - ERRADA.</li>
        </ul>
      </div>
      <h2>Escolha um tópico abaixo e comece a responder as perguntas</h2>
      <div className='topicos'>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
      </div>
    </div>
  )
}

export default PickCategory;
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './PickCategory.css';
import Category from '../img/category.svg';

const PickCategory = () => {
    

  return (
    <div id='category'>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>
        <div>
            <button>CSS</button>
        </div>
        <img src={Category} alt="Categorias do Quiz" />
    </div>
  )
}

export default PickCategory
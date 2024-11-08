import { useEffect, useState } from "react";
import Answer from "./Answer";
import { useParams } from "react-router-dom";

function Questoin() {
  const [questions, setQuestions] = useState([]);
  const [curQ, setCurQ] = useState(0);

  const { themeId } = useParams();
  console.log(themeId);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    const response = await fetch(`/api/questions/${themeId}`);
    const data = await response.json();
    setQuestions(data);
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Quizzz</div>
        <div className="card-body">
          <h5 className="card-title mb-3">Вопрос НЕКИЙ</h5>

          <a href="#" className="btn btn-primary">
            Следущий вопрос
          </a>
        </div>
        <div className="card-footer text-body-secondary">
          Выберите правильный ответ
        </div>
        {questions.length > 0 ? (
          questions.map((current) => (
            <Answer key={current.id} testProps={current} />
          ))
        ) : (
          <div>Ответы не загружены</div>
        )}
      </div>
    </>
  );
}

export default Questoin;

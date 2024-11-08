import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ans from "./Ans";

function Answer({ question_name, id, answer1, answer2, answer3, answer4 }) {
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false);

  function handleAnswer(id) {
    navigate(`/question/${id}`);
    // <Ans key={id} answer1={answer1} />;
  }

  return (
    <>
      <div className="card text-bg-secondary mt-2">
        <div className="card-header">Вопрос {id}/15</div>
        <div className="card-body">
          <h5 className="card-title">{question_name}</h5>
        </div>
        <button
          onClick={() => setIsCorrect((PREV) => !PREV)}
          type="button"
          className="btn btn-secondary"
        >
          <b>{isCorrect ? "Скрыть" : "Показать"}</b>
        </button>
        {isCorrect && (
          <Ans
            key={id}
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
            answer4={answer4}
          />
        )}
      </div>
    </>
  );
}

export default Answer;

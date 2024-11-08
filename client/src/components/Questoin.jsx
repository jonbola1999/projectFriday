import { useEffect, useState } from "react";
import Answer from "./Answer";
import { useNavigate, useParams } from "react-router-dom";

function Questoin() {
  const [questions, setQuestions] = useState([]);
  // const [curQ, setCurQ] = useState(0);
  const navigate = useNavigate();

  const { themeId } = useParams();

  useEffect(() => {
    handleQuestions();
  }, []);

  async function handleQuestions() {
    const response = await fetch(`/api/questions/${themeId}`);
    const data = await response.json();
    console.log(data);
    setQuestions(data);
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title mb-3">Вопросы:</h5>

          <button
            // key={topic.id}
            className="btn btn-primary"
            type="button"
            onClick={() => navigate("/")}
          >
            Выбрать другую тему
          </button>
        </div>

        {questions.length > 0 ? (
          questions.map((current) => (
            <Answer
              key={current.id}
              question_name={current.question_name}
              id={current.id}
              answer1={current.answer1}
              answer2={current.answer2}
              answer3={current.answer3}
              answer4={current.answer3}
            />
          ))
        ) : (
          <div>Ответы не загружены</div>
        )}
      </div>
    </>
  );
}

export default Questoin;

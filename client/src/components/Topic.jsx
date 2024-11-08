import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Topic() {
  const [topics, setTopics] = useState([]);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadTopics();
  }, [status]);

  async function loadTopics() {
    const response = await fetch("/api/topics"); // это клиентская часть котороая обращается к серверу и обновляет ее
    const data = await response.json();
    setTopics(data);
  }

  const onHandleGetTopic = (id) => {
    navigate(`/topic/${id}`);
  };

  return (
    <div>
      <h1>Выбирай тему 👇 </h1>
      <div className="d-grid gap-2">
        {topics.map((topic) => {
          return (
            <button
              key={topic.id}
              className="btn btn-primary"
              type="button"
              onClick={() => onHandleGetTopic(topic.id)}
            >
              Тема - {topic.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Topic;

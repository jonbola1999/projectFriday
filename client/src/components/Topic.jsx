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
    const response = await fetch("/api/topics"); //  клиентская часть, которая обращается к серверу и обновляет ее
    const data = await response.json();
    setTopics(data);
    console.log(1111111111, data);
  }

  const onHandleGetTopic = (id) => {
    navigate(`/topic/${id}`);
  };
  const brandStyle = {
    fontSize: '48px',
    color: '#6A5ACD',
    fontFamily: 'Roboto',
  };

  return (
    <div>
      <h1 style={brandStyle}>Выбирай тему 👇 </h1>
      <div className="d-grid gap-2">
        {topics.map((topic) => {
          return (
            <button
              key={topic.id}
              className="custom-button"
              type="button"
              onClick={() => onHandleGetTopic(topic.id)}
            >
              {topic.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Topic;

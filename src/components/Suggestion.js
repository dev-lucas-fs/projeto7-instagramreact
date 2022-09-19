import { useState } from "react";

const Suggestion = function (props) {
  const { name, image, text } = props.data;
  const [follow, setFollow] = useState(false);

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={image} />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">{text}</div>
        </div>
      </div>

      <div
        className={follow ? "seguir seguindo" : "seguir"}
        onClick={() => setFollow(!follow)}
      >
        {follow ? "Seguindo" : "Seguir"}
      </div>
    </div>
  );
};

export default Suggestion;

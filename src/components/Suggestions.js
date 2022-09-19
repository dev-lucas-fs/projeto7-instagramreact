import suggestions from "../data/suggestions";
import Suggestion from "./Suggestion";

const Suggestions = function () {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((suggestion) => (
        <Suggestion data={suggestion} />
      ))}
    </div>
  );
};

export default Suggestions;

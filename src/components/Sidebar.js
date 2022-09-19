import User from "./User";
import Suggestions from "./Suggestions";

const Links = function () {
  return (
    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
};

const Copyright = function () {
  return <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
};

const Sidebar = function () {
  return (
    <div className="sidebar">
      <User
        data={{
          username: "Catana",
          image: "./img/catanacomics.svg",
          name: "catanacomics",
        }}
      />
      <Suggestions />
      <Links />
      <Copyright />
    </div>
  );
};

export default Sidebar;

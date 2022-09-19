import { useState } from "react";

const User = function (props) {
  const [username, setUsername] = useState(props.data.username + "");
  const [userImage, setUserImage] = useState(props.data.image);

  function updateUserImage() {
    const url = prompt("Coloque um novo link para imagem");
    if (url !== "") setUserImage(url);
  }

  function updateUsername() {
    setUsername(prompt("Qual seu nome de usuario?"));
  }

  return (
    <div className="usuario">
      <img onClick={updateUserImage} src={userImage} />
      <div className="texto">
        <strong>{props.data.name}</strong>
        <span>
          {username}
          <ion-icon onClick={updateUsername} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default User;

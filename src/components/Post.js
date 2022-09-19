import { useState } from "react";

const Post = function (props) {
  const { username, userImage, postImage, likeImage, likeName, numberOfLikes } =
    props.data;

  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(numberOfLikes);
  const [bookmark, setBookmar] = useState(false);

  function updateBookmar() {
    setBookmar(!bookmark);
  }

  function updateLike() {
    setLike(!like);
    if (like) setLikes(likes - 1);
    else setLikes(likes + 1);
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImage} />
          {username}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo" onClick={updateLike}>
        <img src={postImage} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {like ? (
              <ion-icon
                onClick={updateLike}
                style={{ color: "red" }}
                name="heart"
              ></ion-icon>
            ) : (
              <ion-icon onClick={updateLike} name="heart-outline"></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {bookmark ? (
              <ion-icon onClick={updateBookmar} name="bookmark"></ion-icon>
            ) : (
              <ion-icon
                onClick={updateBookmar}
                name="bookmark-outline"
              ></ion-icon>
            )}
          </div>
        </div>

        <div className="curtidas">
          <img src={likeImage} />
          <div className="texto">
            Curtido por <strong>{likeName}</strong> e{" "}
            <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

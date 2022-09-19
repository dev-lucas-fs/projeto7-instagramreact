function Story(props) {
  const { image, name } = props.data;
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} />
      </div>
      <div className="usuario">{name}</div>
    </div>
  );
}

export default Story;

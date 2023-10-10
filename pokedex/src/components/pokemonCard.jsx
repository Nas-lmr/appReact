function PokemonCard(props) {
  console.log(props);
  return (
    <figure className="card">
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;

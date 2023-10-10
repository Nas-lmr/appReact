import PropTypes from "prop-types";
function PokemonCard(props) {
  console.log(props);
  return (
    <figure className="card">
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;

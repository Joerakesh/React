import PropTypes from "prop-types";

function TeamCard(props) {
  return (
    <div className="card">
      <h2 className="card-title">{props.name}</h2>
      <p className="card-text">{props.role}</p>
    </div>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
};

TeamCard.defaultProps = {
  name: "None",
  role: "None",
};
export default TeamCard;

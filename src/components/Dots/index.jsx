import PropTypes from "prop-types";
 const Dots = ({ slides, active, setActive }) => {
  return (
    <ul className="dots">
      {slides.map((child, index) => (
        <li className={index === active ? "active" : ""}>
          <button onClick={() => setActive(index)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
};

Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export {
  Dots
}
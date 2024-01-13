import PropTypes from "prop-types";
 const Dots = ({ slides, active, setActive }) => {
  return (
    <ul className="dots" data-testid="dots">
      {slides.map((child, index) => (
        <li className={index === active ? "active" : ""} key={index}>
          <button onClick={() => setActive(index)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
};

Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export {
  Dots
}
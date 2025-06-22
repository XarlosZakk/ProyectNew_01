import PropTypes from "prop-types";

export function Button({ text, name = "User" }) {
  console.log(text);
  if (!text) {
    console.error("El texto es obligatorio");
  }

  return (
    <button>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};


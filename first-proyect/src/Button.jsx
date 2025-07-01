import PropTypes from "prop-types";

export function Button({ text, name = " " }) {
  return (
    <button
      onClick={function () {
        console.log("Hola Mundo");
        alert("Me llamaste?")
      }}
    >
      {text} - {name}
    </button>
  );
}



Button.propTypes = {
  text: PropTypes.string.isRequired,
};

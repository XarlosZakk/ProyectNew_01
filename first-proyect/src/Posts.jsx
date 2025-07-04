import { DiLinux, DiWindows } from 'react-icons/di'

export const Posts = () => {
  return (
    <button
      onClick={() => {
        //! promesas de JavaScript
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())// convertimos a json los datos
          .then((data) => console.log(data))// los mostramos por consola
          //? en caso de haber un error/ muestro el error por consola
          .catch((error) => console.error(error));
      }}
    >
      <DiLinux/>
      traer datos
      <DiWindows/>
    </button>
  );
};

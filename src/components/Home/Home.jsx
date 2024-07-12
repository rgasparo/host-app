import { useNavigate } from "react-router-dom";

// src/components/Welcome.jsx
const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="text-center mt-8">
      <h1 className="font-bold text-2xl">Bienvenido a Autocheck</h1>
      <h3 className="mt-2">El gestor de valoraciones Autocom</h3>
      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/product/notion-parade.png"
        alt="Descripción de la imagen"
        className="mt-10 mx-auto w-1/2 filter invert"
      />
      <button 
        onClick={handleLoginRedirect} 
        style={{ minWidth:'300px'}}
        className="mt-16 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Crear cuenta
      </button>
    </div>
  );
}

export default Home;

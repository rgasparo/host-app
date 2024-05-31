// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Username:', username, 'Password:', password);
    navigate('/documentos');
  };

  return (

    <div className="text-center mt-8">
    <h1 className="font-bold">Puedes iniciar sesión</h1>
    <h3 className="mt-2">El gestor de valoraciones Autocom</h3>
    <img
        src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
        alt="Descripción de la imagen"
        className="mt-10 mx-auto w-1/2 filter invert"
        style={{marginBottom:'-55px'}}
      />

    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="bg-stone-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2 text-center">Ingresa tus datos</h2>
        <div className="mb-4">
          <label className="block text-gray-100">Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-100">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Iniciar sesión
        </button>
      </form>
    </div>

    </div>
  );
};

export default Login;

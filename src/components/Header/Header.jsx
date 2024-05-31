// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-gray-200 justify-between p-3 border-2 border-black rounded-full max-w-xs mx-auto mb-10">
          <div style={{paddingLeft:'12px'}}>
            <Link to="/" className="text-black hover:text-red-700">Inicio</Link>
          </div>
          <div>
            <Link to="/documentos" className="text-black hover:text-red-700">Documentos</Link>
          </div>
          <div style={{paddingRight:'12px'}}>
            <Link to="/login" className="text-black hover:text-red-700">Login</Link>
          </div>
    </div>
  );
}

export default Header;

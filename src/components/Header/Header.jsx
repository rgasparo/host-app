// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-stone-900 justify-between p-3 rounded-full mx-auto mb-10 w-100">
          <div style={{paddingLeft:'12px'}}>
            <Link to="/" className="text-white hover:text-red-700">AUTOCOM</Link>
          </div>
          {/* <div>
            <Link to="/documentos" className="text-black hover:text-red-700">Documentos</Link>
          </div> */}
          <div style={{paddingRight:'12px'}}>
            <Link to="/login" className="text-white hover:text-red-700">Login</Link>
          </div>
    </div>
  );
}

export default Header;

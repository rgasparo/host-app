import React from "react";
import Home  from "../components/Home/Home";
export {Home}

export const Login = React.lazy(() => import('../components/Login/Login'))
export const Documents = React.lazy(() => import('../components/Documents/Documents'))


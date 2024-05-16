
import {  useState  } from "react"
import {  UsuarioContext  } from './UsuarioContext'

//secrea un usuario

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})

  return (
    
    <UsuarioContext.Provider value = {{ usuario, setUsuario }}>
        { children }
    </UsuarioContext.Provider>

    )
}

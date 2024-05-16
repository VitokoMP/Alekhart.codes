import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const HomeScreen = () => {
const { usuario } = useContext( UsuarioContext ) //utilizar el contexto puntual.
console.log(usuario.nombre)
  return (
  <div>
    <section className="hero-section text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img className="img-codes" src="../../img/Codes/codes.png" alt="codes"></img>
                    <a href="#" className="btn btn-primary">Conoce más</a>
                </div>
            </div>
        </div>
    </section>

    <div className="background-image-container">
    <section className="collaboration-section">
        <div className="container">
            <h2>Estrategias de Colaboración con Influencers</h2>
        </div>
    </section>

    <section className="marketing-section">
    <div className="container">
        <h2>Pilares del Marketing</h2>
        <div className="row justify-content-md-center">
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>SEO</h1>
                <p className="ml-md-3">Nuestro equipo especializado en diseño web utiliza la tecnología React JS para crear sitios web modernos,
                interactivos y altamente funcionales. Con React JS, podemos ofrecer una experiencia de usuario excepcional
                y optimizar el rendimiento de tu sitio web.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>INBOUND Marketing</h1>
                <p className="ml-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem ut justo lobortis, id volutpat orci malesuada. Donec consequat bibendum tellus in luctus. Suspendisse et libero justo.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
                <h1>Outbound Marketing</h1>
                <p className="ml-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem ut justo lobortis, id volutpat orci malesuada. Donec consequat bibendum tellus in luctus. Suspendisse et libero justo.</p>
            </div>
        </div>
    </div>
</section>
 

  <footer>
  <section className="footer-section">
    <div className="container">
        <h2>Pilares del Marketing</h2>
        <div className="row justify-content-md-center">
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>SEO</h1>
                <p className="ml-md-3">Nuestro equipo especializado en diseño web utiliza la tecnología React JS para crear sitios web modernos,
                interactivos y altamente funcionales. Con React JS, podemos ofrecer una experiencia de usuario excepcional
                y optimizar el rendimiento de tu sitio web.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>INBOUND Marketing</h1>
                <p className="ml-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem ut justo lobortis, id volutpat orci malesuada. Donec consequat bibendum tellus in luctus. Suspendisse et libero justo.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
                <h1>Outbound Marketing</h1>
                <p className="ml-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem ut justo lobortis, id volutpat orci malesuada. Donec consequat bibendum tellus in luctus. Suspendisse et libero justo.</p>
            </div>
        </div>
    </div>
</section>
     </footer>
</div>
</div>
  )
}

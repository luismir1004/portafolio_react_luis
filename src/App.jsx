import AcercaDe from './componentes/layout/AcercaDe';
import Header from './componentes/Header'; 
import Hero  from './componentes/layout/Hero';
import Clientes from './componentes/layout/Clientes';
import Trabajos from './componentes/layout/Trabajos';
import Contacto from './componentes/layout/contacto';
import Footer from './componentes/layout/Footer';








function App() {

  return (
    <>
      <div className='contenedor'>
          <Header />
          <Hero />
          <Clientes/>
          <Trabajos/>
          <AcercaDe/>
          <Contacto/>
          <Footer/>
      </div>
    </>
  )
}

export default App

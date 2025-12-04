import './Trabajos.css';
import { useState } from 'react';
import Modal from '../Modal';


import trabajos from '../data/trabajos';

const Trabajos = () => {
     const [categoriaSeleccionada, setCategoriaSeleccionada] = useState ('todos');
     const [trabajosFiltrados, setTrabajosFiltrados] = useState (trabajos);
     const [estadoModal, setEstadoModal] = useState(false);
     const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);


     const handleChange = (e) => {
         const categoria = e.target.id;
         setCategoriaSeleccionada(categoria);

         if(categoria === 'todos'){
                setTrabajosFiltrados(trabajos);
             }else{
                const nuevosTrabajos = trabajos.filter((trabajo) => {
                    if(trabajo.categoria === categoria){
                        return true;
                    }
                 });

                 setTrabajosFiltrados(nuevosTrabajos);
             }

        

     }

     const openModal = (e, id) => {
          e.preventDefault();
          setEstadoModal(true);

          const trabajo = trabajos.find((trabajo) => {
               if(trabajo.id === id) {
                     return true;
               }
          });

          setTrabajoSeleccionado(trabajo);
     }

     const closeModal = () => {
         setEstadoModal(false);
     }

      return(
        <>
            <section className="trabajos" id="trabajos">
                <div className="encabezado">
                    <h3 className="titulo">Mis trabajos</h3>
                    <p className="subtitulo ">Estos son mis trabajos como freelance.</p>
                </div>
               <div className="filtros">
                   <label htmlFor="todos">
                      <input type="radio" name="categoria" id="todos" onChange={handleChange} checked={categoriaSeleccionada === 'todos'}/>
                       <span className="opcion">Todos</span>
                   </label>
                   <label htmlFor="diseño-web">
                      <input type="radio" name="categoria" id="diseño-web" onChange={handleChange} checked={categoriaSeleccionada === 'diseño-web'}/>
                       <span className="opcion">Diseño Web</span>
                   </label>
                   <label htmlFor="desarrollo-web">
                      <input type="radio" name="categoria" id="desarrollo-web" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollo-web'}/>
                       <span className="opcion">Desarrollo Web</span>
                   </label>
                   <label htmlFor="aplicaciones-moviles">
                      <input type="radio" name="categoria" id="aplicaciones-moviles" onChange={handleChange} checked={categoriaSeleccionada === 'aplicaciones-moviles'}/>
                       <span className="opcion">Aplicaciones Moviles</span>
                   </label>
                   <label htmlFor="desarrollador-software">
                      <input type="radio" name="categoria" id="desarrollador-software" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollador-software'}/>
                       <span className="opcion">Desarrollador de Software</span>
                   </label>
               </div>
               <div className="grid">
                  {trabajosFiltrados.map((trabajo, index) => {
                     return(
                        <div className="trabajo" key={trabajo.id}>
                        <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                            <img 
                              loading="lazy" 
                              src={trabajo.thumb.url} 
                              alt={trabajo.thumb.alt} 
                            />
                        </a>
                        <div className="info">
                             <div className="textos">
                                <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
                                    {trabajo.info.nombre}
                                    </a>
                                <p className="categoria">{trabajo.info.categoria}</p>
                             </div>
                             <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)} >
                             <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                fill="currentColor" 
                                viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                             </svg>
                             </a>
                        </div>
                        </div>
                     );
                  })}
               </div>
            </section>

            {estadoModal && <Modal closeModal={closeModal} trabajo={trabajoSeleccionado}/>}
        </>
      );
}
 
export default Trabajos;
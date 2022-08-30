

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () => {
    console.log('Eliminando ', paciente.id)
    const respuesta = confirm('Seguro que quieres eliminar el paciente '+ paciente.nombre + '?')
    if(respuesta) {
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className="bg-white rounded-lg px-5 py-10 mt-5 mx-5">
        <p className="text-gray-700 uppercase font-bold mb-3">Nombre mascota: <span className="normal-case font-normal">{paciente.nombre}</span></p>
        <p className="text-gray-700 uppercase font-bold mb-3">Nombre propietario: <span className="normal-case font-normal">{paciente.propietario}</span></p>
        <p className="text-gray-700 uppercase font-bold mb-3">Email: <span className="normal-case font-normal">{paciente.email}</span></p>
        <p className="text-gray-700 uppercase font-bold mb-3">Fecha alta: <span className="normal-case font-normal">{paciente.fecha}</span></p>
        <p className="text-gray-700 uppercase font-bold mb-3">Sintomas: <span className="normal-case font-normal">{paciente.sintomas}</span></p>
        <div>

          <button 
          onClick={() => setPaciente(paciente)}
          type="button" 
          className="py-2 bg-indigo-600 px-10 hover:bg-indigo-700 text-white font-bold uppercase rounded mr-3">
            Editar
            </button>
          <button 
          onClick={handleEliminar}
          type="button" 
          className="py-2 bg-red-700 px-10 hover:bg-red-800 text-white font-bold uppercase rounded">
            Eliminar
            </button>
        </div>
    </div>
    
  )
}

export default Paciente
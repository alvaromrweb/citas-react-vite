import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)

    return random + date
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Faltan campso por rellenar')
      setError(true)
    } else {
      setError(false)
      console.log('formulario enviado')

      const objPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      console.log(objPaciente)
      if(paciente.id) {
        objPaciente.id = paciente.id
        const pacientesUpdated = pacientes.map( oldPaciente => oldPaciente.id === objPaciente.id ? objPaciente : oldPaciente)
        setPacientes(pacientesUpdated)
        setPaciente({})
      } else {
        objPaciente.id = generarId()
        setPacientes([...pacientes, objPaciente])

      }

      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }

    
  }

  return (
    <div className="md:w-1/2 lg:2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

        <p className="text-lg mt-5 text-center">Añade pacientes y <span className="text-indigo-600 font-bold ">administralos</span></p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10">
          {error && 
            <Error><p>Todos los campos son obligatorios</p></Error>
          }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
            <input id="mascota" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) } className="border-2 p-2 w-full placeholder-gray-400 rounded-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
            <input id="propietario" type="text" placeholder="Nombre del propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } className="border-2 p-2 w-full placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input id="email" type="email" placeholder="Email del propietario" value={email} onChange={ (e) => setEmail(e.target.value) } className="border-2 p-2 w-full placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input id="alta" type="date" value={fecha} onChange={ (e) => setFecha(e.target.value) } className="border-2 p-2 w-full placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
            <textarea id="sintomas" placeholder="Describe los sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } className="border-2 p-2 w-full placeholder-gray-400 rounded-md"/>
          </div>
          <div>
            <input 
            type="submit" 
            className="bg-indigo-600 w-full uppercase text-white p-2 font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
          </div>
        </form>
    </div>
  )
}

export default Formulario
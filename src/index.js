import {useState, useEffect, React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {dataFetch} from './rest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

const Content = () => {
  const [Page, setPage] = useState(() => List);
  const changePage = (page) => {
    setPage(() => page);
  }

  return (
    <div id="controller">
      <Page changer={changePage}/>
    </div>
  )
}

function List({changer}) {

  const [data, setData] = useState([]);
  useEffect(() => {
    dataFetch('GET','empleados',{nombres_order:'asc'}).then(res => setData(res))
  }, [])
  
  return (
    <table className="table table-striped table-bordered table-hover table-sm table-responsive">
      <caption>Lista de empleados</caption>
      <thead className="thead-dark">
        <tr className="text-nowrap">
          <th scope="col">#</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">No. Cédula</th>
          <th scope="col">Cargo</th>
          <th scope="col">Fecha de nacimiento</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Correo</th>
          <th scope="col">Dirección</th>
          <th scope="col"></th>
        </tr>
        
      </thead>
      <tbody>
        {data.map((item,key) => {
          return (
            <tr key={item.id} className="text-nowrap">
              <td>{item.id}</td>
              <td>{item.nombres}</td>
              <td>{item.apellidos}</td>
              <td>{item.cedula}</td>
              <td>{item.cargo}</td>
              <td>{item.fechaNacimiento}</td>
              <td>{item.telefono}</td>
              <td>{item.correo}</td>
              <td>{item.direccion}</td>
              <td className='d-flex'>
                <FontAwesomeIcon icon={faEye} />
                <FontAwesomeIcon icon='fa-solid fa-pencil' />
                <FontAwesomeIcon icon='fa-solid fa-trash' />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Create = () => {
  return (
    <div>
      This is the create page
    </div>
  )
}

const View = () => {
  return (
    <div>
      This is the view page
    </div>
  )
}

const Update = () => {
  return (
    <div>
      This is the update page
    </div>
  )
}

const Delete = () => {
  return (
    <div>
      This is the delete page
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Content />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

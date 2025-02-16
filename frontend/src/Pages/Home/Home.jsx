import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Bienvenido a la Gestoría de Bases de Datos</h1>
      <h2>Administra, organiza y optimiza tus bases de datos de manera eficiente.</h2>
      <div className='info'>
        <h3 style={{'marginTop': '3%'}}>¿Qué puedes hacer aquí?</h3>
        <ul className='list'>
          <li>📌 Crear nuevas entidades en la base de datos.</li>
          <li>🔗 Relacionar entidades entre sí de manera sencilla.</li>
          <li>📊 Visualizar los datos almacenados en las tablas.</li>
          <li>✏️ Realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).</li>
          <li>📄 Descargar los datos de las tablas en formato PDF.</li>
        </ul>
      </div>
      
      <p><b>Explora las funcionalidades y comienza a gestionar tus bases de datos de forma intuitiva y eficiente.</b></p>
    </div>
  );
};

export default Home;
import React, { useState } from 'react'
import Entity from '../../Components/Entity/Entity';
import './CrearBD.css'

const CrearBD = () => {
    
    const [numEntidades, setNumEntidades] = useState(0);

    const [entities, setEntities] = useState([]);

    const removeEntity = (index) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
        
        setEntities(entities.filter((_, i) => i !== index));
    };

    return (
        <div className='create-bd-page'>
            <h1>Creación de Bases de datos</h1>
            <form className='create-bd'>
                <div className='input-to-bd'>
                    <h2>Numero de entidades</h2>
                    <input className='input-value num' type='number' onChange={(e) => setNumEntidades(parseInt(e.target.value) || 0)}/>
                </div>
                {Array.from({ length: numEntidades }).map((_, index) => (
                    <Entity key={index} index={index} removeEntity={removeEntity}/>
                ))}
            </form>
        </div>
    )
}

export default CrearBD

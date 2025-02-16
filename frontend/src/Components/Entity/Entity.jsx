import React, { useState } from 'react';
import './Entity.css';

const Entity = ({ index, removeEntity }) => {
    const [fields, setFields] = useState([]);
    const [numRelations, setNumRelations] = useState(0);
    const [relations, setRelations] = useState([]);
    const [entities, setEntities] = useState([]);

    const addField = () => {
        setFields([...fields, { name: '', type: '' }]);
    };

    const removeField = (fieldIndex) => {
        console.log(fieldIndex);
        let updated = fields.slice(fieldIndex, 1)
        setFields(updated)
        //setFields(prevFields => prevFields.filter((_, index) => index !== fieldIndex));
    };    

    const handleRelationChange = (e) => {
        const num = parseInt(e.target.value) || 0;
        setNumRelations(num);
        setRelations(Array.from({ length: num }, () => ({ table: '', type: '' })));
    };

    return (
        <div className='entity' key={index}>
            <div className='form'>
                <div className='entity-header'>
                    <h2>Nombre de la entidad {index + 1}</h2>
                    <input className='input-value' placeholder="Nombre de la entidad" />
                    <button className='button create-field' type="button" onClick={addField}>
                        Crear Campo
                    </button>
                </div>
                <div className='fields'>
                    {fields.map((_, fieldIndex) => (
                        <div className='field-container' key={fieldIndex}>
                            <div className='value-field'>
                                <h3>Nombre del campo</h3>
                                <input className='input-value-field' placeholder="Nombre del campo" />
                            </div>
                            <div className='value-field'>
                                <h3>Tipo de dato</h3>
                                <select className='input-value-field'>
                                    <option>Seleccionar tipo de dato</option>
                                    <option value="int">INT (Entero)</option>
                                    <option value="varchar">VARCHAR (Texto variable)</option>
                                    <option value="text">TEXT (Texto largo)</option>
                                    <option value="boolean">BOOLEAN (Verdadero/Falso)</option>
                                    <option value="date">DATE (Fecha)</option>
                                    <option value="datetime">DATETIME (Fecha y hora)</option>
                                    <option value="timestamp">TIMESTAMP (Marca de tiempo)</option>
                                    <option value="float">FLOAT (Número decimal)</option>
                                    <option value="double">DOUBLE (Número decimal grande)</option>
                                    <option value="decimal">DECIMAL (Número decimal preciso)</option>
                                    <option value="char">CHAR (Texto fijo)</option>
                                    <option value="blob">BLOB (Datos binarios)</option>
                                </select>
                            </div>
                            <button className='button remove-field' onClick={(event) =>{
                                 event.preventDefault(); removeField(fieldIndex)}}>Eliminar Campo</button>
                            <hr />
                        </div>
                    ))}
                    <div className='relations'>
                        <h2>RELACIONES</h2>
                        <div className='value-field'>
                            <div>
                                <h3>Número de relaciones</h3>
                                <input
                                    type='number'
                                    className='input-value-field'
                                    placeholder="Número de relaciones"
                                    min={0}
                                    onChange={handleRelationChange}
                                />
                            </div>
                            <div>
                               <ul>
                                    {relations.map((_, relationIndex) => (
                                        <li className='relation' key={relationIndex}>
                                            <h3>Tabla</h3>
                                            <input placeholder="Nombre de la tabla" />
                                            <h3>Tipo de relación</h3>
                                            <select className='input-value-field'>
                                                <option>Seleccionar tipo de relación</option>
                                                <option value="one-to-one">Uno a uno</option>
                                                <option value="one-to-many">Uno a muchos</option>
                                                <option value="many-to-one">Muchos a uno</option>
                                                <option value="many-to-many">Muchos a muchos</option>
                                            </select>
                                        </li>
                                    ))}
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
                <button className='button remove-entity' onClick={(event) => {event.preventDefault(); removeEntity}}>Eliminar entidad</button>
            </div>
            <hr style={{ height: '4px', backgroundColor: 'black', border: 'none' }} />
        </div>
    );
};

export default Entity;

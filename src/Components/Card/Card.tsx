import { Droppable } from 'react-beautiful-dnd'

import './Card.styles.css'

interface OptionsProps {
    data: {
        forename: string;
        surname: string;
        nationality: string;
        age: number;
        picture: string;
        color: string;
    }
}

function Card({data}: OptionsProps): JSX.Element {
    return (
        <div className="card-container">
            <div className="header">
                <h1 className='header-title'>Tarjeta de Identidad</h1>
                <img className='header-image' src="RD-Flag-02.svg" alt="Bandera de República Dominicana"/>
            </div>
            <div className="content">
                <div className="content-picture">
                    <img src={data.picture} alt="Foto del titular"/>
                </div>
                <div className="content-info">
                    <strong>Nombres:</strong>
                    <p>{data.forename}</p>
                    <strong>Apellidos:</strong>
                    <p>{data.surname}</p>
                    <strong>Edad:</strong>
                    <Droppable droppableId="age">                        
                        {(droppableProvided) => (
                        <p 
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                        >{data.age}{droppableProvided.placeholder}</p>)}
                    </Droppable>
                    <strong>Nacionalidad:</strong>
                    <Droppable droppableId="nationality">
                        <p>{data.nationality}</p>
                    </Droppable>
                </div>
            </div>
        </div>
    )
}

export default Card;
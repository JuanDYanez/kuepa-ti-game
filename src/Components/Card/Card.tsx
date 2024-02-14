/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDroppable } from '@dnd-kit/core';

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

    const {setNodeRef: ageDroppable, isOver: isOverAge} = useDroppable({
        id: 'ageDroppable',
        data: {
            type: 'ageDroppable'
        }
    })
    const {setNodeRef: nationalityDroppable, isOver: isOverNationality} = useDroppable({
        id: 'nationalityDroppable',
        data: {
            type: 'nationalityDroppable'
        }
    })
    
    // const handleDrop = (event: DropEvent) => {
    //     const {active, over} = event;

    //     if (destination) {
    //         const {droppableId, index} = destination
    //     }

    //     console.log(`Soltado en droppableId: ${droppableId}, index: ${index}`);
    // };


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
                    <div className='content-info-item'>{data.forename}</div>
                    <strong>Apellidos:</strong>
                    <div className='content-info-item'>{data.surname}</div>
                    <strong>Edad:</strong>
                    {isOverAge ? (
                        <div ref={ageDroppable} onDrop={handleDrop} className='content-info-item'>{isOverAge && data.age}</div>
                    ) : null}
                    <strong>Nacionalidad:</strong>
                    {isOverNationality ? (
                        <div ref={nationalityDroppable} onDrop={handleDrop} className='content-info-item'>{data.nationality}</div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Card;
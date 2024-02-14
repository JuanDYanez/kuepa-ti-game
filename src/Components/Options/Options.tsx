import { Draggable} from 'react-beautiful-dnd'

import './Options.styles.css'

interface OptionsProps {
    data: {
        forename: string;
        surname: string;
        nationality: string;
        age: number;
        picture: string;
        color: string;
    },
    onRandomColor: () => string
}

function Options({data, onRandomColor}: OptionsProps): JSX.Element {

    return (
        <div className="options-container">
            <h1 className='options-title'>Opciones</h1>
            <Draggable draggableId="" index="">
                {(draggableProvided) => (
                <div
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className="option"
                    style={{backgroundColor: onRandomColor()}}
                >
                    {data.age}
                </div>)}
            </Draggable>
            <Draggable>
                <div className="option" style={{backgroundColor: onRandomColor()}}>{data.nationality}</div>
            </Draggable>
        </div>
    )
}

export default Options;
import { useEffect, useState } from "react";
import {Droppable, DroppableProps } from 'react-beautiful-dnd'

export const DroppableStrict = ({children, ...props}: DroppableProps) => {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true))
        return () => {
            cancelAnimationFrame(animation)
            setEnabled(true)
        }
    }, [])
    if (!enabled) {
        return null
    }
    return <Droppable {...props}>{children}</Droppable>
}
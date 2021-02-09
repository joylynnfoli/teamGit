import React from 'react'

const Display = ({name, id}) => {
    return (
        <div key = {id}>
            <p>{name}</p>
        </div>

export default Display;
import React from 'react'

const Resources = ({ resources }) => {
    return (
        <div>
            <ol>
                {resources.map((resource) => (
                    <li key={resource.id}>{resource.title}</li>
                ))}
            </ol>

        </div>
    )
}

export default Resources;

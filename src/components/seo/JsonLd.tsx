import React from 'react'

const JsonLd = ({ schema }: { schema: object | object[] }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export default JsonLd

import React from 'react'

export default function Container({padding, className, children}) {
    return (
        <div className={`container ${className}`} style={{padding: padding || "40px 40px 60px"}}>
            {children}
        </div>
    )
}

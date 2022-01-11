import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({href, target, children, icon, className}) {

    const Icon = () => {
        if(icon) {
            return <FontAwesomeIcon icon={icon} />
        }
        return null
    }

    return (
        <a
            href={href}
            target={target || "_self"}
            className={`button ${icon ? `button_has-icon` : ``} ${className || ""}`}
        >
            <Icon />
            <span>{children}</span>
        </a>
    )
}

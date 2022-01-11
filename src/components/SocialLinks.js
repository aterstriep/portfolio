import * as React from "react"
import Button from "./Button"

const SocialLinks = ({className}) => {

    const linksList = [
        { name: "email", text: "Email Me", icon: "envelope", href: "mailto:ashterstriep@gmail.com" },
        { name: "github", text: "GitHub", icon: ["fab", "github"], href: "https://github.com/aterstriep" },
        { name: "linkedin", text: "LinkedIn", icon: ["fab", "linkedin-in"], href: "https://linkedin.com/in/ashleysisk/" }
    ]

    return (
        <div className={`social-links ${className || ""}`}>
            {linksList.map(item => {
                return (
                    <Button index={item.name} icon={item.icon} href={item.href} target="_blank" className={`button_small ${item.name}`}>
                        {item.text}
                    </Button>
                )
            })}
        </div>
    )
}

export default SocialLinks
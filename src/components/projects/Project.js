import React from "react"
import Category from "./Category"
import Image from "../Image";
import Button from "../Button";

const Project = ({title, links, imageFileName, description, categoryList}) => {

    const Categories = () => {
        return (
            <div className="categories-container">
                <h4 className="subtitle">Technology Used</h4>
                {categoryList.sort().map((category, index) => {
                    return <Category name={category} key={index} />
                })}
            </div>
        )
        
    }

    return (
        <div className="project-container">
            <div className="project-image">
                <Image
                    src="browser.png"
                    className="browser-mockup"
                    alt="Browser mockup"
                />
                <Image
                    src={imageFileName}
                    className="project-screenshot"
                    alt="Screenshot"
                />
            </div>
            <div className="project-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <Categories />
                <div className="buttons-container">
                    {links.map((link, index) => {
                        return <Button href={link.url} icon={link.icon} target="_blank" key={index}>{link.text}</Button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project
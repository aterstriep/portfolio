import React from "react"
import Category from "./Category"
import Image from "../Image";
import Button from "../Button";

const Project = ({title, subtitle, links, imageFileName, description, categoryList}) => {

    const id = title.toLowerCase().replace(/\s+/g, '-');

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
        <div className="project-container" id={id}>
            <div>
                <p className="subtitle">{subtitle}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <Categories />
                <div className="buttons-container">
                    {links.map((link, index) => {
                        return <Button href={link.url} icon={link.icon} target="_blank" key={index}>{link.text}</Button>
                    })}
                </div>
                <Image
                    src={imageFileName}
                    className="project-screenshot"
                    alt="Screenshot"
                />
            </div>
        </div>
    )
}

export default Project
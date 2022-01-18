import * as React from "react"

const Category = ({name}) => {

    const categoryId = name.toLowerCase().replace(/\s+/g, "-");
    let borderColor;

    switch (categoryId) {
        case "react":
            borderColor = "#61dafb";
            break;
        case "ruby-on-rails":
            borderColor = "#cc0000";
            break;
        case "javascript":
            borderColor = "#fcdc00";
            break;
        case "php":
            borderColor = "#8892BF";
            break;
        case "gatsby":
            borderColor = "#663399";
            break;
        case "css/scss":
            borderColor = "#cf6499";
            break;
        case "wordpress":
            borderColor = "#117ac9";
            break;
        case "netlify":
            borderColor = "#5cebdf";
            break;
        case "heroku":
            borderColor = "#8863b3";
            break;
        case "node.js":
            borderColor = "#84ba64";
            break;
        default:
            borderColor = "black";
            break;
    }

    return (
        <span
            className="category-tag"
            category={categoryId}
            style={{borderColor: borderColor}}
        >
            {name}
        </span>
    )
}

export default Category
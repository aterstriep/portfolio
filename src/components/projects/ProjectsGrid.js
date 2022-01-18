import * as React from "react"
import Project from "./Project"

const ProjectsGrid = () => {
    return (
        <div className="projects-grid mw-1600">
            <h2 className="mw-1200">Recent Projects</h2>
            <div className="projects-grid-inner">

                <Project
                    title="Notes App"
                    subtitle="Full Stack"
                    description="A plain text notes app created with React that stores notes on an Express server."
                    links={[
                        { text: "View on GitHub", icon: ["fab", "github"], url: "https://github.com/aterstriep/notes-app" },
                        { text: "View Deployed", icon: "bolt", url: "https://at-notes-app.herokuapp.com/" }
                    ]}
                    categoryList={["React", "CSS/SCSS", "Javascript", "Express", "Node.js", "Heroku"]}
                />

                <Project
                    title="Meal Planning App"
                    subtitle="Frontend"
                    description="A recipe API search app that allows users to save recipes and create a weekly meal plan using a drag-and-drop interface. This project utilizes Netlify serverless functions to retrieve recipes from the Spoonacular Recipes API."
                    links={[
                        { text: "View on GitHub", icon: ["fab", "github"], url: "https://github.com/aterstriep/meal-planning" },
                        { text: "View Deployed", icon: "bolt", url: "https://mealplanapp.netlify.com"}
                    ]}
                    imageFileName="mealplan-screenshot.png"
                    categoryList={["React", "Gatsby", "CSS/SCSS", "Javascript", "Netlify"]}
                />

                <Project
                    title="Portfolio"
                    subtitle="Frontend"
                    description="A basic single page portfolio site to display recent projects. This is currently being used as a placeholder while I redesign my portfolio."
                    links={[
                        { text: "View on GitHub", icon: ["fab", "github"], url: "https://github.com/aterstriep/portfolio"}
                    ]}
                    categoryList={["React", "Gatsby", "CSS/SCSS", "Javascript", "Netlify"]}
                />

            </div>
        </div>
    )
}

export default ProjectsGrid
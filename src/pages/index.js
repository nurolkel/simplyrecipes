import React from "react"
import Layout  from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"


export default function Home() {
  return ( 
    <Layout>
      <SEO title="Home"  description="This is Home Page"/>
      <main className="page">
        <header className="hero">
          <StaticImage 
            src="../assets/images/main.jpeg" 
            alt="Flour and Eggs"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="hero-img"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simple Recipes</h1>
                <h4>No Fluff, Just Recipes</h4>
              </div>
            </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
    )
}

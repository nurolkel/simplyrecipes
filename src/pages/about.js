import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';


export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        prepTime
      }
    }
  }
`


const About = ({data: {allContentfulRecipe: {nodes:recipes}}}) => {



    return ( 
        <Layout>
            <SEO title="about" description="This is the About Page" />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>
                        I am a recipes Page
                        </h2>
                        <p>
                        Come here to get delicious recipes for you and your loved ones to try at home
                        </p>
                        <p>
                        We wanted to create a recipe page that let their visitors also add recipes to the page
                        </p>
                        <Link to="/contact" className="btn">
                            Contact
                        </Link>
                    </article>
                <StaticImage 
                    src="../assets/images/about.jpeg" 
                    alt="Person Pouring Salt in Bowl" 
                    className="about-img"
                    placeholder="blurred"    
                    />
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesauce!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export default About;
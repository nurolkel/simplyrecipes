import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from '../components/RecipesList';
import SEO from "../components/SEO";

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

const Contact = ({data}) => {

    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
            <SEO title="Contact" />
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Do you want to submit a new recipe to Simply Recipes?</p>
                        <p>Fill the form our</p>
                        <p>We will get in touch with you so you can share your goodness!</p>
                    </article>
                    <article>
                        <form 
                          className="form contact-form"
                          action="https://formspree.io/f/myylrygb"
                          method="POST"
                        >
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">
                                submit
                            </button>
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesauce!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
        )
}

export default Contact;
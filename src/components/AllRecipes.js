import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
        prepTime
      }
    }
  }
`

const AllRecipes = () => {

    // One Way below is to use regular JS and split the Static Query in variables

    //const data = useStaticQuery(query);
    //const recipes = data.allContentfulRecipe.nodes
    //console.log(recipes);

    // The Second Way is to destructor the object

    const {
        allContentfulRecipe: {
            nodes: recipes
        }
    } = useStaticQuery(query);

    // Check if it works with a console.log, and it does!
    //console.log(recipes);

    return ( 
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export default AllRecipes;
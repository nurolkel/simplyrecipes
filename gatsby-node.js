// Require the path module
const path = require('path');
// Require Slugify
const slugify = require('slugify');

// This comes Directly from Gatsby

exports.createPages = async ({ graphql, actions }) => {
    
    const {createPage} = actions;

    // Since This is CommonJS and Node, we must use graphql with parentheses

    const result = await graphql(`
    query getRecipes {
        allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }      
    `)

    // You want the Template Link to match the Path in the CreatePage function value of path

    result.data.allContentfulRecipe.nodes.forEach(recipe => {
        recipe.content.tags.forEach(tag => {
            const tagSlug = slugify(tag,{ lower: true })
            createPage({
                path:`/tags/${tagSlug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag

                }
            })
        })
    })

}
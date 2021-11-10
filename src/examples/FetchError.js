import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query ErrorQuery  {
        site {
           info: siteMetadata {
                    title
                    description
                    author
                    person {
                        name
                        age
                    }
                    simpleData
                    complexData {
                        name
                        age
                    }
                }
        }
    }
`;


const FetchError = () => {
    // Normal Way
    //const data = useStaticQuery(getData);
    console.log(useStaticQuery(getData))
    // Destructed Data 
    const { 
        site:{
            info:{
                title
            },
        }
    } = useStaticQuery(getData);
    return ( 
        <div>
            <h1>Hello From fetch Error</h1>
            <h2>Site Title is : {title}</h2>
        </div>
    )
}

export default FetchError;
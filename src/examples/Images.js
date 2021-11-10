import React from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
    return ( 
        <Wrapper>
            <article>
                <h4>Constrained / default</h4>
                <StaticImage 
                    src='../assets/images/recipes/recipe-1.jpeg' 
                    alt="food" 
                    placeholder="tracedSVG"
                    // Constrained Height And Width determines the Max Height and Width for the Picture
                    layout="constrained"
                    className="example-img"    
                    as="section"
                    />
            </article>
            <article>
                <h4>Fixed</h4>
                <StaticImage 
                    src='../assets/images/recipes/recipe-1.jpeg' 
                    alt="food" 
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    className="example-img"    
                    as="div"
                    />
            </article>
            <article>
                <h4>Full Width</h4>
                <StaticImage 
                    src='../assets/images/recipes/recipe-1.jpeg' 
                    alt="food" 
                    placeholder="dominantColor"
                    layout="fullWidth"
                    width={200}
                    className="example-img"    
                    as="article"
                    />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 70vh;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;
    article {
        border: 2px solid red;
    }
    .example-img {
        border-radius:1rem;
    }
    @media (min-width: 992px) {
        grid-template-columns:1fr 1fr 1fr;
    }
`;

export default Images;
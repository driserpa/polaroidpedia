import { styled } from "styled-components"
import BarraLateral from "../BarraLateral"


const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    height: 0;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    padding-top: 28.55%;
    margin-bottom: 50px;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({ backgroundImage }) => {
    return (
        <>
            <FigureEstilizada $backgroundImage={backgroundImage}>
                <TituloEstilizado></TituloEstilizado>
            </FigureEstilizada>
        </>
    )
}

export default Banner
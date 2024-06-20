import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"
import { usePolaroidContext } from "../../../Context/PolaroidContext"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '300px'};
    max-width: 100%;
    //margin: auto;
    margin: 0 20px 20px 15px;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        height: ${props => props.$expandida ? '100%' : '460px'};
        object-fit: cover;
        align-self: center;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;

        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
            font-weight: 300;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
`

const Imagem = ({ foto, expandida = false}) => {

    const { aoZoomSolicitado, aoAlternarFavorito } = usePolaroidContext()

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    //let iconeFavorito = './public/icones/favorito.png';
    //if (foto.Favorita) {
    //    iconeFavorito = './public/icones/favorito-ativo.png'
    //}

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>Genero: {foto.genero}</h4>
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </BotaoIcone>
                    {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </BotaoIcone>}
                </Rodape>
            </figcaption>
        </Figure>)
}

export default Imagem
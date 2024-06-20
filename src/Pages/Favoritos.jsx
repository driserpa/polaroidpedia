import styled from "styled-components";
import { usePolaroidContext } from "../Context/PolaroidContext";
import Imagem from "../componentes/Galeria/Imagem";

const FavoritoContainer = styled.section`
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

const ImagemFavorita = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    justify-content: center;
`

const FavoritoTitle = styled.h1`
    padding: 0;
    margin: 0;
`
const NaoFavorito = styled.p`
    font-size: 20px;
`

const PaginaFavorito = () => {
    const { fotosDaGaleria } = usePolaroidContext()
    const fotosFavoritas = fotosDaGaleria.filter(foto => foto.favorita);

    return (
        <>
            <FavoritoContainer>
                <FavoritoTitle>Fotos Favoritas</FavoritoTitle>
                {fotosFavoritas.length > 0 ? (
                    <ImagemFavorita>
                        {/* Renderiza as fotos favoritas */}
                        {fotosFavoritas.map(foto => (
                            <Imagem foto={foto} key={foto.id} />
                        ))}
                    </ImagemFavorita>
                ) : (
                    <NaoFavorito>Você ainda não tem favoritos!</NaoFavorito>
                )}
            </FavoritoContainer>
        </>
    )
}

export default PaginaFavorito
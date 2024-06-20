import { styled } from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"
import { usePolaroidContext } from "../../Context/PolaroidContext"
import { Link } from "react-router-dom"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    //width: 700px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            //right: 5px;
        }
    }
`

const ModalZoom = () => {
    const { aoAlternarFavorito, aoFechar, fotoComZoom, fotosDaGaleria } = usePolaroidContext()




    return (
        <>
            {fotoComZoom && <>
                <Overlay />
                <DialogEstilizado open={!!fotoComZoom} onClose={aoFechar}>
                    <Imagem foto={fotoComZoom} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom
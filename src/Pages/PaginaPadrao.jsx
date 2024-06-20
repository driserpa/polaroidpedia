import { Outlet } from "react-router-dom"
import Cabecalho from "../componentes/Cabecalho"
import Rodape from "../componentes/Rodape"
import styled from "styled-components"
import ModalZoom from "../componentes/ModalZoom"
import Banner from "../componentes/Banner"
import BarraLateral from "../componentes/BarraLateral"

const AppContainer = styled.div`
  padding: 0 30px;
  max-width: 100%;
`

const BodyContainer = styled.main`
    display: flex;
    gap: 30px; 
`

const PaginaPadrao = () => {
    return (
        <>
            <AppContainer>
                <Cabecalho />
                <BodyContainer>
                    <BarraLateral/>
                    <Outlet />
                </BodyContainer>

                <ModalZoom />
            </AppContainer>
            <Rodape />

        </>
    )
}

export default PaginaPadrao
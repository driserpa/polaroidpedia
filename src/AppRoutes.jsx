import { styled } from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./componentes/EstilosGlobais"
import PaginaPadrao from "./Pages/PaginaPadrao"
import PaginaInicio from "./Pages/Inicio"
import PaginaFavorito from "./Pages/Favoritos"
import PaginaAdicionar from "./Pages/Adicionar"
import { PolaroidProvider } from "./Context/PolaroidContext"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppRoutes = () => {


  return (
    <BrowserRouter>
      <PolaroidProvider>
      <FundoGradiente>
        <EstilosGlobais />

        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<PaginaInicio />} />
            <Route path="favorito" element={<PaginaFavorito />} />
            <Route path="adicionar" element={<PaginaAdicionar />} />
          </Route>

        </Routes>

      </FundoGradiente>
      </PolaroidProvider>
    </BrowserRouter>

  )
}

export default AppRoutes

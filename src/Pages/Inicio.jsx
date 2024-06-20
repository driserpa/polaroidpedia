import styled from 'styled-components'
import Banner from '../componentes/Banner'
import bannerBackground from '/src/assets/banner.png'
import Galeria from '../componentes/Galeria'
import ModalZoom from '../componentes/ModalZoom'


const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const PaginaInicio = () => {

  return (
    <>
        <MainContainer>
          <ConteudoGaleria>
            <Banner
              backgroundImage={bannerBackground}
            //texto=''
            />
            <Galeria/>

          </ConteudoGaleria>
        </MainContainer>
    </>
  )
}

export default PaginaInicio
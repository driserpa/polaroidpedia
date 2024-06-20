import styled from "styled-components"

const Containerfooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #0c284e;
    padding: 22px;
    box-sizing: border-box;
    
`
const ContainerUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        display: inline-block;
        margin-right: 25px;
    }
`

const RodapeTexto = styled.p`
    font-size: 16px;
    color: #ffffff;
    margin: 0;
`

const Rodape = () => {
    return (
        <Containerfooter>
            <ContainerUl>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/facebook.svg" alt="Icone do facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/instagram.svg" alt="Icone do Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/twitter.svg" alt="Icone do Twitter" />
                    </a>
                </li>
            </ContainerUl>
            <RodapeTexto>Desenvolvido por Adriana.</RodapeTexto>
        </Containerfooter>
    )
}

export default Rodape
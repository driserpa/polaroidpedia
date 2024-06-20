import { useState } from "react"
import styled from "styled-components"
import { usePolaroidContext } from "../Context/PolaroidContext"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #ffffff;
    margin-right: 100px;
`
const Formulario = styled.form`
    display: flex;
`
const SectionInput = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    input{
        height: 46px;
        padding: 12px 16px;
        border-radius: 10px;
        border: 2px solid;
        border-color: #C98CF1;
        background: transparent;
        box-sizing: border-box;
        width: 450px;
        color: #D9D9D9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
`
const HiddenInput = styled.input`
  display: none;
`
const StyledLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  cursor: pointer;
`
const Botao = styled.button`
    width: auto;
    height: auto;
    background-color: transparent;
    align-self: end;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    background-color: #c98cf19d;
  }
`


const PaginaAdicionar = () => {
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [foto, setFoto] = useState('')

    const { adicionarFoto } = usePolaroidContext();

    const handleAdicionar = () => {
        if(!nome || !genero || !foto){
            alert('Todos os campos são obrigatorios!');
            return;
        }
        adicionarFoto({ titulo: nome, genero: genero, path: foto });
        setNome('')
        setGenero('')
        setFoto('')
    }

    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Formulario onSubmit={(e) => { e.preventDefault(); handleAdicionar(); }}>
            <Container>
                <SectionInput>
                    <input
                        type="text"
                        id="nome_filme"
                        placeholder="Qual o nome do filme"
                        value={nome}
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        id="genero_filme"
                        placeholder="Genero do filme"
                        value={genero}
                        required
                        onChange={(e) => setGenero(e.target.value)}
                    />
                </SectionInput>
                <section>
                    <StyledLabel htmlFor="foto_filme">Adicionar Foto</StyledLabel>
                    <HiddenInput type="file" id="foto_filme" accept="image/*" onChange={handleFotoChange} />
                </section>
            </Container>
            <Botao onClick={handleAdicionar}>Salvar polaroid</Botao>
        </Formulario>
    )
}

export default PaginaAdicionar
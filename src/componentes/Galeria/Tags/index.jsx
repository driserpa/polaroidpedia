
import { usePolaroidContext } from '../../../Context/PolaroidContext'
import tags from './tags.json'
import { styled } from 'styled-components'

const BarraTags = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

`
const TituloTags = styled.p`
     color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    font-weight: 400;
    padding-right: 25px;
`
const Tag = styled.button`
   color: #ffffff;
    font-weight: 400;
    font-size: 24px;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-bottom: 5px;
    &:hover{
        border-color: #C98CF1;
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`
const Tags = () => {
    const { setTag } = usePolaroidContext()

    return (
        <BarraTags>
            <TituloTags>Busque por tags:</TituloTags>
            <Div>
                {tags.map(tag =>
                    <Tag
                        key={tag.id}
                        onClick={() => setTag(tag.tag)}>
                        {tag.titulo}
                    </Tag>)}
            </Div>
        </BarraTags>
    )
}

export default Tags

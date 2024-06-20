import { createContext, useContext, useEffect, useState } from "react";
import fotos from '/src/fotos.json'

const PolaroidContext = createContext()

export const PolaroidProvider = ({ children }) => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)
  const [fotosAdicionadas, setFotosAdicionadas] = useState([])
  const [nextId, setNextId] = useState(1)

  useEffect(() => {
    const maxId = fotosDaGaleria.reduce((max, foto) => Math.max(foto.id, max), 0);
    setNextId(maxId + 1); // Ajusta o próximo ID com base no maior ID do JSON inicial
  }, [fotosDaGaleria]);

  const adicionarFoto = (novaFoto) => {
    setFotosDaGaleria(prevFotos => [...prevFotos, { ...novaFoto, id: nextId }])
    setNextId(prevId => prevId + 1)
  }

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.palavras.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])


  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorita: !fotoComZoom.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }

    }))

  }

  const aoZoomSolicitado = (foto) => {
    if (foto) {
      setFotoComZoom(foto);
    }
  };

  const aoFechar = () => {
    setFotoComZoom(null);
  };

  return (
    <PolaroidContext.Provider value={{
      fotosDaGaleria,
      setFotosDaGaleria,
      filtro,
      setFiltro,
      tag,
      setTag,
      fotoComZoom,
      setFotoComZoom,
      aoAlternarFavorito,
      aoZoomSolicitado,
      aoFechar,
      fotosAdicionadas,
      setFotosAdicionadas,
      adicionarFoto

    }}>
      {children}
    </PolaroidContext.Provider>
  )
}

export const usePolaroidContext = () => {
  return useContext(PolaroidContext)
}
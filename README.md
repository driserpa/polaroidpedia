# polaroidpedia
Polaroidpedia é uma aplicação web interativa construída com React, permitindo aos usuários gerenciar uma coleção de polaroids. Os usuários podem adicionar novas fotos, visualizar uma galeria de fotos existentes e marcar suas favoritas. As fotos iniciais são carregadas a partir de um arquivo JSON, enquanto as novas fotos adicionadas são temporárias e não persistem após a atualização da página.

### Páginas

- **Página Principal (`/`):** Exibe a galeria de fotos.
- **Favoritos (`/favoritos`):** Exibe as fotos marcadas como favoritas.
- **Adicionar Nova Foto (`/adicionar`):** Formulário para adicionar novas fotos.

### Adicionar Nova Foto

1. Navegue até a página de adicionar nova foto.
2. Preencha o nome do filme, gênero e selecione a foto.
3. Clique em "Salvar polaroid" para adicionar a nova foto à galeria.

**Nota:** As fotos adicionadas pelo usuário não são persistidas no `fotos.json` e serão perdidas após a atualização da página.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript:** Linguagem de programação principal.
- **HTML/CSS:** Estrutura e estilização da aplicação.

## Limitações

- **Persistência de Dados:** As fotos adicionadas pelos usuários não são salvas permanentemente e serão perdidas após a atualização da página.

### Nota Adicional

Este é um projeto simples e educativo para demonstrar como trabalhar com gerenciamento de dados e interatividade utilizando React, HTML, CSS e JavaScript. Sinta-se à vontade para expandir e adaptar o código conforme suas necessidades.

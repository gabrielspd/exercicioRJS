# Catálogo de Filmes

Aplicativo em **React** criado com **Vite** que consome a API **OMDb** para permitir que usuários busquem filmes, vejam detalhes e montem uma lista de favoritos.

---

## Funcionalidades

- **Página de Busca**: campo de texto para pesquisar filmes.
- **Exibição de Resultados**: pôster, título, ano e botão de detalhes.
- **Paginação**: navegação pelas páginas de resultados.
- **Página de Detalhes**: informações sobre o filme.
- **Lista de Favoritos**: adicionar/remover filmes.
- **Tratamento de Erros e Loading**: mensagens informativas na requisições.

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) - bundler rápido para desenvolvimento.
- [React Router](https://reactrouter.com/) - navegação entre páginas.
- [OMDb API](http://www.omdbapi.com/) - consulta de filmes.

---

Observações:

- Para quem clonar o projeto, basta criar o .env com a própria chave da OMDb.

- O projeto está totalmente responsivo e utiliza cores predominantes roxo e preto.

- Favoritos são persistidos no localStorage.

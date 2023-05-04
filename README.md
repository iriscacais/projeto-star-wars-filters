# Projeto Star wars: planets search
## Desenvolvido no módulo de front-end do curso de desenvolvimento web da Trybe 🚀

### Descrição do projeto
O objetivo desse projeto foi criar uma lista com diversos filtros de planetas do universo Star Wars usando Context API e react hooks. É possível filtrar planetas por nome, e outras caracteristicas como diametro e população utilizando operadores lógicos. Foi utilizada a API: https://swapi.dev/api/planets

obs: esse projeto ainda não conta com estilizaçã0 CSS.

### Tecnologias usadas no desenvolvimento do projeto
- Context API;
- react hooks useState;
- react hooks useContext;
- react hooks useEffect;
- testes unitários.

### Para rodar esse projeto
Para ver esse projeto funcionando na sua máquina:
- Clonar o repositório:
> git clone git@github.com:iriscacais/projeto-star-wars-filters.git
- Instalar as dependências:
> npm install
- Para visualizar o projeto em uma página web utilize:
> npm start

### O que foi desenvolvido
1. Realizada uma requisiçao para a API do star wars com endpoint /planets. Com os valores retornados uma tabela foi preenchida.

2. Desenvolvido um filtro de texto que atualiza a tabela com os planetas correspondentes a medica que o nome é digitado.

3. Desenvolvido um filtro numérico em que é possível filtrar planetas a partir da combinaçao de 3 seletores. Ao clicar no botao de filtrar os planetas serão atualizados na tabela.

4. Foi desenvolvida uma lógica para implementação de múltiplos filtros e para que não se possa utilizar filtros repetidos.

5. Desenvolvido um botão para excluir todos os filtros e botões para que se exclua apenas um filtro selecionado.

6. Desenvolvidos testes unitários para testar o funcionamento da aplicação. 

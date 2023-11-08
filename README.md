# meuacervo

Este é o repositório do projeto "Meu Acervo", uma aplicação web que permite gerenciar uma biblioteca pessoal de livros lidos. O projeto envolve uma aplicação web em HTML, CSS e JavaScript que se comunica com um servidor Node.js que, por sua vez, se conecta a um banco de dados MySQL.

## Tecnologias Utilizadas

- HTML;
- CSS;
- JavaScript.

### Bibliotecas e Recursos Externos

O projeto faz uso das seguintes bibliotecas, recursos e tecnologias:

#### Aplicação Web

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Linguagem de marcação utilizada para criar a estrutura da aplicação.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Utilizado para a estilização da interface do usuário.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Linguagem de programação usada para interações dinâmicas na aplicação.

#### Servidor Node.js

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript que hospeda o servidor da aplicação.
- [Express.js](https://expressjs.com/): Um framework Node.js utilizado para criar rotas e gerenciar solicitações HTTP.
- [MySQL](https://www.mysql.com/): Um sistema de gerenciamento de banco de dados relacional.

### Bibliotecas e Recursos Externos

- [Axios](https://github.com/axios/axios): Uma biblioteca que simplifica o processo de fazer solicitações HTTP ao servidor.
- [Awesomplete](https://leaverou.github.io/awesomplete/): Uma biblioteca que oferece campos de entrada com recursos de autocompletar.
- [Bootstrap](https://getbootstrap.com/): Um framework CSS popular usado para estilização de componentes e layout responsivo.

## Funcionalidades

O projeto "Meu Acervo" inclui as seguintes funcionalidades:

- Gerenciamento de autores e seus detalhes (nome, data de nascimento, país).
- Adição e remoção de livros com detalhes como título, ano, ISBN, editora, edição, número de páginas, gênero e autor associado.
- Busca e sugestões de editoras com base nas entradas do usuário.
- Listagem de livros adicionados à biblioteca pessoal.

## Como Visualizar o Site

Você pode acessar o site do meu portfólio online em https://annedearaujo.github.io/meuacervo/.

Obs.: o servidor está inativo no momento.


## Como Executar o Projeto Localmente

Para executar o projeto em seu ambiente local, siga estas etapas:

1. Clone o repositório:
git clone https://github.com/annedearaujo/meuacervo.git


2. Navegue até a pasta do projeto:
cd meuacervo


3. Instale as dependências do servidor Node.js:
npm install


4. Inicie o servidor:
node app.js


5. Acesse o aplicativo em seu navegador em `http://localhost:4000`.

Certifique-se de configurar seu servidor MySQL e as credenciais apropriadas no arquivo `config.js` para que o aplicativo possa se conectar ao banco de dados.

## Estrutura do Projeto

O projeto "Meu Acervo" segue uma estrutura de diretórios com os principais componentes da aplicação. Aqui está uma visão geral da estrutura:

- `assets/`: Pasta que contém ícones e imagens utilizados no site.
- `styles.css`: Arquivo de estilo principal para o site.
- `index.html`: Página HTML que compõe a interface do usuário.
- `app.js`: Script JavaScript que controla a lógica da aplicação e faz solicitações ao servidor.
- Outros arquivos de scripts e estilos externos.

## Explicação do HTML

O arquivo `index.html` é a página principal da aplicação e contém a estrutura da interface do usuário. Aqui estão algumas seções importantes:

- **Barra de Navegação**: A barra de navegação fornece acesso rápido às diferentes partes da aplicação.
- **Seções de Autores e Livros**: Essas seções exibem listas de autores e livros lidos pelo usuário.
- **Formulários de Adição de Autor e Livro**: Os formulários permitem ao usuário adicionar novos autores e livros à sua biblioteca pessoal.

## Explicação do JavaScript

O arquivo `app.js` contém a lógica da aplicação, incluindo funções para exibir autores, livros, adicionar autor e adicionar livro. Aqui estão algumas funções e seu papel:

- `displayAutores(autores)`: Exibe a lista de autores na página.
- `displayLivros(livros)`: Exibe a lista de livros na página.
- `sugerirEditoras(parcialEditora)`: Faz solicitações ao servidor para obter sugestões de editoras com base na entrada do usuário.
- `addAutor(event)`: Envia uma solicitação POST para adicionar um novo autor.
- `addLivro(event)`: Envia uma solicitação POST para adicionar um novo livro.

## Recursos Externos

O projeto faz uso de várias bibliotecas e recursos externos para aprimorar a funcionalidade e o estilo do site. Aqui estão alguns dos recursos externos utilizados:

- Axios: Uma biblioteca para fazer solicitações HTTP ao servidor.
- Awesomplete: Uma biblioteca para criar campos de entrada autocompletados.
- Bootstrap: Um framework CSS para estilização de componentes e layout.

## Como Contribuir

Se deseja contribuir para o projeto, você pode abrir problemas (issues) ou enviar pull requests com melhorias. Sua contribuição é bem-vinda!

## Autor

Este projeto foi desenvolvido por Anne Araújo em 2023.

## Contato

- E-mail: [araujjoanne@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/annedearaujo/]

Se você tiver alguma pergunta ou precisar de mais informações, não hesite em entrar em contato comigo.

# Catálogo de Produtos - Frontend

Este é o front da aplicação de catálogo de produtos, construído com React.  
O frontend permite que os usuários:  
- Adicionem produtos ao catálogo.
- Visualizem a lista de produtos adicionados.
- Enviem a lista de produtos para a API.

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Como Iniciar o Frontend

1. Clone este repositório do frontend em um diretório local:  
- git clone git@github.com:MvBona/daftar-challenge-products.git;

2. Acesse o diretório do frontend e instale as dependências:  
- cd daftar-challenge-products

3. Inicie o servidor do frontend com:
- npm run start  
ou
- yarn start

4. O servidor do frontend será iniciado na porta 3000.  
Certifique-se de que nenhuma outra aplicação esteja usando essa porta.

## Como Usar o Frontend

1. Acesse o frontend no navegador em http://localhost:3000/.

2. Use o formulário no frontend para adicionar produtos ao catálogo.  
Preencha os campos "Nome", "Descrição" e "Preço" e clique no botão "Adicionar".

3. Os produtos adicionados serão exibidos na lista abaixo do formulário.

4. Para enviar os produtos para a API, clique no botão "Enviar" no final da lista.  
Isso enviará os produtos salvos no Redux para a API, que os salvará em um arquivo em um JSON temporário.
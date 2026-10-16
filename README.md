API-IMPERIO-DO-SONINHO 😴🥱💤

Loja especializada na comercialização de camas. A
empresa deseja organizar as informações dos produtos disponíveis para venda e disponibilizar esses
dados por meio de uma API que poderá ser consumida futuramente por uma aplicação web.

🛠️ Tecnologias Utilizadas

Node.js com Express (Criação do servidor e rotas)
TypeScript (Tipagem estática para maior segurança do código)
PostgreSQL & node-postgres (pg) (Banco de dados relacional)

⚙️ Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Git
Node.js (Versão 18 ou superior)
Um banco de dados PostgreSQL rodando localmente.

🚀 Como executar o projeto

Git clone

## Instalação das Dependências

npm install
# Banco de dados
npm i pg
npm install --save-dev @types/pg
npm i bcrypt jsonwebtoken @types/bcrypt @types/jsonwebtoken

# Tipagens e Typescript global
npm install -g typescript
npm install -D @types/node

# Framework e Variáveis de ambiente
npm install express dotenv
npm install -D @types/express

##
Crie um arquivo .env na raiz do projeto e configure suas credenciais do PostgreSQL:
PGUSER=seu_usuario
PGHOST=localhost
PGPASSWORD=sua_senha
PGDATABASE=nome_do_banco
PGPORT=5432

# Inicie o servidor de desenvolvimento
npm run dev
# E-commerce Frontend

Aplicação frontend desenvolvida em React para um sistema de e-commerce, consumindo uma API REST para autenticação de usuários, listagem de produtos e gerenciamento do carrinho.

# 🚀 Tecnologias utilizadas
## Front-End
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- React Hooks
## Back- End
- PHP
- Laravel
- MySQL
- API REST

## 📂 Funcionalidades
- Cadastro e login de usuários
- Autenticação integrada com API
- Listagem de produtos
- Visualização de detalhes do produto
- Carrinho de compras
- Integração completa com backend

## 🧠 Conceitos aplicados
- Componentização
- Hooks (`useState`, `useEffect`)
- Consumo de API REST
- Gerenciamento de estado
- Tratamento de erros
- Separação de responsabilidades
- Organização em camadas (Frontend / Backend)

## 🔗 Integração com Backend
O frontend consome uma API REST desenvolvida em Laravel, localizada no mesmo repositório, responsável por autenticação, regras de negócio e persistência dos dados.

## ▶️ Como executar o projeto
```bash
git clone https://github.com/andreidasilvamoreira/ReactApplications

front-end:

npm install
npm run dev

back-end:

composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

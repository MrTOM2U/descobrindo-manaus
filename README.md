# Descobrindo Lugares

Aplicação full stack para descoberta de lugares (bares, restaurantes, pontos turísticos),
com autenticação JWT e limitação de buscas para usuários não autenticados.

🚧 **Projeto em desenvolvimento** 🚧

---

## 🧱 Stack

### Backend
- Node.js
- Express
- SQLite
- JWT (jsonwebtoken)
- bcryptjs
- CORS

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API

---

## 🔐 Funcionalidades já implementadas

- Login real com JWT
- Persistência de sessão (localStorage)
- Interceptor global de token no Axios
- Logout automático em erro 401
- Busca de lugares
- Limite de buscas para usuários não logados
- Proteção de rotas (PrivateRoute)
- UX com mensagens claras de erro e loading

---

## 🚧 Em desenvolvimento

- Refinamento visual (UI/UX)
- Feedbacks visuais mais ricos
- Deploy (backend + frontend)
- Documentação técnica detalhada
- Testes automatizados

---

## ▶️ Como rodar o projeto localmente

### Backend
```bash
cd backend
npm install
npm run dev

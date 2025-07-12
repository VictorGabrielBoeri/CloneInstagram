# CloneInstagram

Este projeto é um clone simplificado do Instagram, desenvolvido em React, com foco em frontend e experiência de usuário. O objetivo é simular as principais funcionalidades da rede social, como feed de posts, stories, perfil de usuário, explorar, mensagens e modo escuro.

## Funcionalidades

- **Feed de Posts:** Visualize publicações de diversos usuários, com imagens, legendas, curtidas e comentários fictícios.
- **Stories:** Barra de stories no topo do feed, simulando a experiência do Instagram.
- **Explorar:** Página para descobrir novas publicações.
- **Perfil:** Visualize o perfil do usuário, suas informações e posts.
- **Mensagens:** Interface de mensagens diretas (dados fictícios).
- **Notificações:** Simulação de notificações de atividades.
- **Criar Post:** Modal e página para criar novas publicações (funcionalidade mockada, sem backend real).
- **Modo Escuro:** Alternância entre tema claro e escuro.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Axios](https://axios-http.com/) para requisições (mockadas)
- [Heroicons](https://heroicons.com/) para ícones
- [Testing Library](https://testing-library.com/) para testes

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd cloneinstagram
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o projeto:**
   ```bash
   npm start
   ```
   O app estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de Pastas

- `src/` - Código fonte principal
  - `components/` - Componentes reutilizáveis (Feed, Stories, Sidebar, etc)
  - `pages/` - Páginas principais (Home, Explore, Profile, etc)
  - `context/` - Contexto global do app (usuário, posts, tema)
  - `services/` - Serviços e APIs mockadas
  - `assets/` - Imagens e outros assets
- `public/` - Arquivos estáticos

## Observações

- O projeto utiliza dados fictícios e APIs públicas para simulação. Não há backend real implementado.
- A funcionalidade de criar post apenas exibe um alerta, pois não há persistência de dados.
- O modo escuro pode ser alternado pelo botão no menu.

## Scripts Disponíveis

- `npm start` - Executa o app em modo desenvolvimento
- `npm test` - Executa os testes
- `npm run build` - Gera a versão de produção

---

Projeto desenvolvido para fins de estudo e demonstração. Sinta-se à vontade para contribuir!

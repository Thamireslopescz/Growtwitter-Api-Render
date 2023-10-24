# Projeto Final do Backend GrowDev - API GrowTwitter 🚀

**Node.js | Prisma | Bcrypt | PostgreSQL | Express**

**Objetivo**

A API GrowTwitter é o projeto final do backend desenvolvido pela Growdever Thamires Lopes. Trata-se de uma aplicação que lembra o Twitter e que reúne as tecnologias mais descoladas para criar uma experiência de rede social que vai te deixar super empolgado. Utilizando o Node.js, Prisma, Bcrypt e PostgreSQL para fornecer uma série de recursos alucinantes, incluindo autenticação de usuário, gerenciamento de tweets, likes, retweets, seguidores e muito mais.

**Índice**
1. Instalação
2. Configuração
3. Utilização
4. As Manhas da API
5. Dependências
6. Dependências de Desenvolvimento
7. Quem Tá Por Trás Dessa Magia?

**Instalação**

Agora, vamos colocar a mão na massa para executar o projeto final do backend da Growev na sua própria máquina:

1. Clone este incrível projeto final com o seguinte comando:
   ```
   git clone https://github.com/Thamireslopescz/Growtwitter.git
   cd api-growtwitter
   ```

2. Instale as dependências necessárias para que tudo funcione como um relógio:
   ```
   npm install
   ```

3. Chegou a hora de configurar o banco de dados. Crie um arquivo `.env` na raiz do projeto e insira as informações da conexão com o PostgreSQL. Dê uma olhada no exemplo abaixo para orientação:
   ```
   DATABASE_URL=postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco-de-dados
   ```

4. Após mexer no banco de dados, execute o seguinte comando para criar o esquema e adicionar alguns dados iniciais:
   ```
   npx prisma db push
   ```

5. Agora é a hora de ligar o motor do servidor de desenvolvimento com o seguinte comando:
   ```
   npm run dev
   ```

**Configuração**

A API é esperta e utiliza variáveis de ambiente para suas configurações. Para configurar a aplicação de acordo com suas necessidades, crie um arquivo `.env` na raiz do projeto e ajuste as variáveis conforme desejado. Se você tiver alguma dúvida, confira o exemplo acima.

**Utilização**

Aqui é onde a mágica acontece. Antes de começar a explorar, certifique-se de seguir os passos de instalação e configuração para garantir que tudo esteja pronto para decolar.

**Autenticação de Usuário:**

- Para realizar o login de um usuário, envie uma requisição POST para `/api/auth/login`.
- Para encerrar a sessão de um usuário, acesse `/api/auth/logout`.

**Likes:**

- Para listar todos os likes, acesse `/api/likes`.
- Para criar um novo like, faça uma requisição POST para `/api/likes`.
- Para excluir um like, acesse `/api/likes/:id_like/:id_usuario`.

**Retweets:**

- Para listar todos os retweets, acesse `/api/retweets`.
- Para criar um novo retweet, faça uma requisição POST para `/api/retweets`.
- Para atualizar um retweet existente, acesse `/api/retweets`.
- Para excluir um retweet, acesse `/api/retweets/:id_retweet/:id_usuario`.

**Seguidores:**

- Para listar todos os seguidores, acesse `/api/seguidores`.
- Para seguir um usuário, faça uma requisição POST para `/api/seguidores/seguir`.
- Para deixar de seguir um usuário, acesse `/api/seguidores/deixar-de-seguir`.

**Tweets:**

- Para listar todos os tweets, acesse `/api/tweets`.
- Para criar um novo tweet, faça uma requisição POST para `/api/tweets`.
- Para atualizar um tweet existente, acesse `/api/tweets`.
- Para excluir um tweet, acesse `/api/tweets/:id_tweet/:id_usuario`.

**Usuários:**

- Para criar um usuário, faça uma requisição POST para `/api/usuarios`.
- Para listar todos os usuários, acesse `/api/usuarios`.
- Para atualizar um usuário, faça uma requisição PUT para `/api/usuarios/:id`.
- Para excluir um usuário, acesse `/api/usuarios/:id`.

**Rotas da API**

A API GrowTwitter segue um esquema organizado chamado Modelo-Controlador-Transferência de Dados-Serviço-Rota (ou, em inglês, Model-Controller-DTO-Service-Route). Aqui estão as rotas principais da API e suas responsabilidades:

- **/models:** Os modelos definem a estrutura dos objetos de dados, como usuário, tweet, like, retweet, etc.

- **/controllers:** Os controladores tratam das requisições HTTP, conectando-se aos serviços e retornando respostas adequadas.

- **/dtos:** Os objetos de transferência de dados (DTOs) são usados para validar e transferir dados de forma segura entre o cliente e o servidor.

- **/services:** Os serviços contêm a lógica de negócios da aplicação e interagem com os modelos e controladores.

- **/routes:** As rotas definem as URLs da API e encaminham as requisições HTTP para os controladores apropriados.

**Dependências**

A API utiliza as seguintes dependências incríveis:

- Node.js v14.17.6
- Prisma v5.3.1
- Bcrypt v5.1.1
- PostgreSQL v14.1
- Express v4.18.2
- UUID v9.0.1

**Dependências de Desenvolvimento**

E para os desenvolvedores que gostam de mergulhar fundo no código, aqui estão algumas dependências extras:

- TypeScript v5.2.2
- @types/bcrypt v5.0.0
- @types/cors v2.8.14
- @types/express v4.17.18
- @types/node v20.7.0
- @types/uuid v9.0.4

**Quem Tá Por Trás Dessa Magia?**

Thamires Lopes. Se quiser entrar em contato, dê um alô! 🚀👩‍💻
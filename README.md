# App'ointment Calendar - Frontend

---

<h2><a href="https://github.com/Gonzagadavid/appointment-calendar-backend" >App'ointment Calendar - Backend</a></h2>

---

# Sumário

- [Introdução](#introdução)
- [Instruções para rodar localmente](#instruções-para-rodar-localmente)
- [Detalhes da aplicação](#detalhes-da-aplicação)
  - [Tela inicial](#tela-inicial)
  - [Cadastro](#cadastro)
  - [Login](#login)
  - [Adicionar tarefa](#adicionar-tarefa)
- [API](#api)
- [Tecnologias](#tecnologias)
- [Deploy](#deploy)
- [Futuras Implementações](#futuras-implementações)

---

# Introdução

A aplicação Appoiment Calendar foi desenvolvida com o objetivo de proporcionar a pessoa usuária de forma visual o controle  de prazos e agendamento de tarefas, prazos e compromissos.

![tela da aplicação](./public/assets/images/introducao.png)

---

# Instruções para rodar localmente

1 - Abra o terminal

2 - clone o repositório do Backend `git@github.com:Gonzagadavid/appointment-calendar-backend.git`

3 - entre no diretório do repositorio clonado `cd appointment-calendar-backend`

4 - execute o comando para instalar as dependências `npm install`

5 - preencha o arquivo `.env-eg` com os dados do seu banco de dados MongoDB local e mude o nome do arquivo para `.env`  
*caso não tenha o MongoDB instalado siga o seguinte [tutorial](https://docs.mongodb.com/manual/installation/)* 

6 - execute o comando para iniciar o servidor `npm start`

7 - abra um nova janela do terminal

8 - clone o repositório do Frontend `git clone git@github.com:Gonzagadavid/appointment-calendar-frontend.git`

9 - entre no diretório do repositorio clonado `cd appointment-calendar-frontend`

10 - execute o comando para instalar as dependências `npm install`

11 - verifique no arquivo `src/services/backend/endpoints.ts` está com a constante BASE_URL  condizente com a porta do backend, caso tenha alterado no backend, deverá ser atulizado nessa constante também 

12 - execute o comando para iniciar a aplicação `npm start`

13 - a aplicação iniciará em `http://localhost:3000`

---

# Detalhes da aplicação


## Tela inicial

Ao iniciar a aplicação, a pessoa usuária terá acesso normalmente ao calendário, porém para adicionar tarefa será requisitado o login. 

![tela inicial](./public/assets/images/tela-inicial.png)

## Cadastro

Ao clicar em Sign Up na parte superior direita a pessoa usuária porderá se cadastrar na aplicação, forncendo nome, sobrenome e um email ativo.

![formulario de cadastro](./public/assets/images/cadastro.png)

Após a pessoa fornecer as informações, um código de quatro caracteres e um digito será enviado no email, então será renderizado um modal para que a pessoa possa inserir e assim validar seu email.

![modal do código](./public/assets/images/confirm-code.png)


## Login

Ao clicar em Log In na parte superior da tela a pessoa usuária poderá entrar na aplicação, tendo a opção de manter-se logada. 
Caso a pessoa esqueça a senha basta clicar em 'Forgot password' e a senha será enviada para seu o email.

![tela de login](./public/assets/images/login.png)


Após logar o nome da pessoa usuária será exibido no lado superio direito da tela

![tela inicial](./public/assets/images/logged.png)

## Adicionar tarefa

Para adicionar tarefa basta a pessoa usuária clicar em 'Add Task' na parte inferior direita

![formulário de tarefa](./public/assets/images/add-task.png)

Após preencher o formulário com as informações da tarefa e clicar em 'Send', será exibido os detalhes da tarefa, e então a tarefa será adicionada na lista daquele dia.
Os dias em que tarefas são adicionado a cor da data será azulada com um ícone, indicando que há compromisso para aquele dia.

![tela com tarefa adicionada](./public/assets/images/task-added.png)

## Detalhes da tarefa

Ao clicar em uma tarefa da lista, será exibido os detalhes da tarefa, e pessoa poderá também editar e remover a tarefa.

![detalhes da tarefa](./public/assets/images/task-details.png)

---

# Api

Para a renderização correta do calendário foi utilizada a API [Calendar JSON API](#https://github.com/Gonzagadavid/calendar-json-api)

---

# Tecnologias

- React
- Typescript
- Testing Library
- Axios
- Eslint

<div align="center">
  <img height="100" width="100" src="./public/assets/icons/react.svg"/> 
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./public/assets/icons/typescript.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./public/assets/icons/testinglibrary.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./public/assets/icons/eslint.svg" />
</div>

# Deploy

Para o deploy da aplicação foi escolhido a [Vercel](#https://vercel.com/)

# Futuras implementações

- cobertura de teste em 100% da aplicação

- implementar página para a pessoa adminitradora direcionar tarefas para outras pessoas usuárias

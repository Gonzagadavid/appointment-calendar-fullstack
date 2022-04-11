# App'ointment Calendar - Frontend

<h1><a href="https://appointment-calendar-frontend.vercel.app/" >Visite a Aplicação</a></h1>

---

<h2><a href="https://github.com/Gonzagadavid/appointment-calendar-backend" >App'ointment Calendar - Backend</a></h2>

---

# Sumário

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

<h1><a href="https://appointment-calendar-frontend.vercel.app/" >Visite a Aplicação</a></h1>

# Futuras implementações

- cobertura de teste em 100% da aplicação

- implementar página para a pessoa adminitradora direcionar tarefas para outras pessoas usuárias

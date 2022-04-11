# App'ointment Calendar - Full stack

<h1><a href="https://appointment-calendar-frontend.vercel.app/" >Visite a Aplicação</a></h1>

---

<h2><a href="https://github.com/Gonzagadavid/appointment-calendar-frontend" >App'ointment Calendar - Frontend</a></h2>

---

<h2><a href="https://github.com/Gonzagadavid/appointment-calendar-backend" >App'ointment Calendar - Backend</a></h2>

---

# Sumário

- [Introdução](#introdução)
- [Instruções](#instruções)
- [Frontend](#Frontend)
  - [Detalhes da aplicação](#detalhes-da-aplicação)
    - [Tela inicial](#tela-inicial)
    - [Cadastro](#cadastro)
    - [Login](#login)
    - [Adicionar tarefa](#adicionar-tarefa)
  - [API](#api)
  - [Tecnologias](#tecnologias)
  - [Deploy](#deploy)
  - [Futuras Implementações](#futuras-implementações)
- [Backend](#backend)
  - [Arquitetura](#Arquitetura)
  - [Rotas](#rotas)
    - [POST /users](post-/user)
    - [POST /users/login](post-/user/login)
    - [POST /tasks](post-/task)
    - [GET /tasks](get-/task)
    - [GET /tasks/:id](get-/task/:id)
    - [PUT /tasks/:id](put-/task/:id)
    - [DELETE /tasks/:id](delete-/task/:id)
  - [Banco de Dados](#banco-de-dados)
  - [Validação](#validação)
  - [Tecnologias](#tecnologias)
  - [Deploy](#deploy)
  - [Implementações Futuras](implementações-futuras)


---

# Introdução

A aplicação Appoiment Calendar foi desenvolvida com o objetivo de proporcionar a pessoa usuária de forma visual o controle  de prazos e agendamento de tarefas, prazos e compromissos.

---

# Instruções

1 - abra o terminal

2- clone o repositório do full stack `git@github.com:Gonzagadavid/appointment-calendar-fullstack.git`

3- entre no diretório do repositorio clonado `appointment-calendar-fullstack`

4- entre no diretório do backend `cd backend`

5- execute o comando para instalar as dependências `npm install`

6- preencha o arquivo `.env-eg` com os dados do seu banco de dados MongoDB local e mude o nome do arquivo para `.env`  
*caso não tenha o MongoDB instalado siga o seguinte [tutorial](https://docs.mongodb.com/manual/installation/)* 

7- execute o comando para iniciar o servidor `npm start`

7- abra um nova janela do terminal no diretorio `appointment-calendar-fullstack`

9- entre no diretório do frontend `cd frontend`

10- execute o comando para instalar as dependências `npm install`

11 - verifique no arquivo `src/services/backend/endpoints.ts` está com a constante BASE_URL  condizente com a porta do backend, caso tenha alterado no backend, deverá ser atulizado nessa constante também 

12- execute o comando para iniciar a aplicação `npm start`

13- a aplicação iniciará em `http://localhost:3000`


# Frontend

# Detalhes da aplicação


## Tela inicial

Ao iniciar a aplicação, a pessoa usuária terá acesso normalmente ao calendário, porém para adicionar tarefa será requisitado o login. 

![tela inicial](./frontend/public/assets/images/tela-inicial.png)

## Cadastro

Ao clicar em Sign Up na parte superior direita a pessoa usuária porderá se cadastrar na aplicação, forncendo nome, sobrenome e um email ativo.

![formulario de cadastro](./frontend/public/assets/images/cadastro.png)

Após a pessoa fornecer as informações, um código de quatro caracteres e um digito será enviado no email, então será renderizado um modal para que a pessoa possa inserir e assim validar seu email.

![modal do código](./frontend/public/assets/images/confirm-code.png)


## Login

Ao clicar em Log In na parte superior da tela a pessoa usuária poderá entrar na aplicação, tendo a opção de manter-se logada. 
Caso a pessoa esqueça a senha basta clicar em 'Forgot password' e a senha será enviada para seu o email.

![tela de login](./frontend/public/assets/images/login.png)


Após logar o nome da pessoa usuária será exibido no lado superio direito da tela

![tela inicial](./frontend/public/assets/images/logged.png)

## Adicionar tarefa

Para adicionar tarefa basta a pessoa usuária clicar em 'Add Task' na parte inferior direita

![formulário de tarefa](./frontend/public/assets/images/add-task.png)

Após preencher o formulário com as informações da tarefa e clicar em 'Send', será exibido os detalhes da tarefa, e então a tarefa será adicionada na lista daquele dia.
Os dias em que tarefas são adicionado a cor da data será azulada com um ícone, indicando que há compromisso para aquele dia.

![tela com tarefa adicionada](./frontend/public/assets/images/task-added.png)

## Detalhes da tarefa

Ao clicar em uma tarefa da lista, será exibido os detalhes da tarefa, e pessoa poderá também editar e remover a tarefa.

![detalhes da tarefa](./frontend/public/assets/images/task-details.png)

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
  <img height="100" width="100" src="./frontend/public/assets/icons/react.svg"/> 
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./frontend/public/assets/icons/typescript.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./frontend/public/assets/icons/testinglibrary.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./frontend/public/assets/icons/eslint.svg" />
</div>

# Deploy

Para o deploy da aplicação foi escolhido a [Vercel](#https://vercel.com/)

<h1><a href="https://appointment-calendar-frontend.vercel.app/" >Visite a Aplicação</a></h1>

# Futuras implementações

- cobertura de teste em 100% da aplicação

- implementar página para a pessoa adminitradora direcionar tarefas para outras pessoas usuárias

---

# Backend

# Arquitetura

Sequindo o formato da arquitetura em camadas MSC *(Model Service Controllers)*, inicialmente o código foi desenvolvido de forma funcional, porém  foi refatorado para POO(programação orientada a objetos) ,a estruturação do código foi feita de forma tornar o código légivel e de fácil entendimento, visando o  reaproveitamento e não gerar problemas para a implementação de futuras melhorias, novas funcionalidades e escalabilidade.

![estruturação de pastas](./backend/assets/images/arquitetura.png)


# Rotas

## POST /users 

A rota `POST /users` foi desenvolvida para o registro de novas pessoas usuárias da aplicação.

entrada:

```json
{
  "body": {
	  "name": "User",
    "lastname": "Test",
	  "email": "user@server.com",
	  "password": "123456"
  }
}

```

saída *(status: 201)*:

```json
{
	"message": "user created successfully"
}

```

## POST /users/login

A rota `POST /users/login` foi desenvolvida para que a pessoa usuária registrada no banco de dados possa logar na aplicação.

entrada:

```json
{
  "body": {
  	"email": "user@server.com",
	  "password": "123456"
  }
}

```

saída *(status: 202)*:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E",
	"userName": "User Test"
}

```

## POST /email

A rota `POST /email` foi desenvolvida para enviar um código de validação para o email da pessoa usuária, durante o cadastro.

entrada:

```json
{
  "body": {
  	"email": "user@server.com",
	  "password": "123456"
  }
}

```
saída *(status: 202)*:

```json
{
  {
	  "code": "BUQN-8"
  }
}

```

## POST /email/password

A rota `POST /email/password` foi desenvolvida para enviar a senha da pessoa usuária para seu email, caso tenha esquecido.

entrada:

```json
{
  "body": {
  	"email": "user@server.com",
	  "password": "123456"
  }
}

```

saída *(status: 202)*:

```json
{
	{
		"message": "password sent to email user@server.com"
	}

}

```


## POST /tasks

A rota `POST /tasks` foi desenvolvida para a inseção de uma nova tarefa no banco de dados.

entrada:

```json
{
  "body": {
	  "title": "Tarefa 1",
	  "description":"Descrição da tarefa 1",
	  "status": "Programmed",
    "date": "2022-04-10T16:46:08.471+00:00"
  },
  "headers": {
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E"
  }
}

```

saída *(status: 201)*:

```json
{
	"_id": "6253391c4b6c6911e42b7593",
	"userId": "625333e34b6c6911e42b7590",
	"email": "user@server.com",
	"title": "Tarefa 1",
	"description": "Descrição da tarefa 1",
	"status": "Programmed",
	"date": "2022-04-10T16:46:08.471+00:00",
	"updated": "2022-04-10T20:07:56.489Z"
}

```

## GET /tasks

A rota `GET /tasks` foi desenvolvida para buscar todas as tarefas da pessoa usuária no banco de dados.

entrada:

```json
{
   "headers": {
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E"
  }
}

```

saída *(status: 200)*:

```json
{
	"tasks": [
		{
			"title": "Tarefa 1",
			"status": "Programmed",
			"date": "2022-04-10T16:46:08.471+00:00",
			"id": "6253391c4b6c6911e42b7593"
		},
		{
			"title": "Tarefa 2",
			"status": "Programmed",
			"date": "2022-04-10T16:46:08.471+00:00",
			"id": "625339394b6c6911e42b7594"
		}
	]
}

```

## GET /tasks/:id

A rota `GET /tasks/:id` foi desenvolvida para buscar e retornar os dados completos de uma tarefa pelo seu id.

entrada:

```json
{
   "headers": {
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E"
  }
}

```

saída *(status: 200)*:

```json
{
	"_id": "6253391c4b6c6911e42b7593",
	"userId": "625333e34b6c6911e42b7590",
	"email": "user@server.com",
	"title": "Tarefa 1",
	"description": "Descrição da tarefa 1",
	"status": "Programmed",
	"date": "2022-04-10T16:46:08.471+00:00",
	"updated": "2022-04-10T20:07:56.489Z"
}

```

## PUT /tasks/:id

A rota `PUT /tasks/:id` foi desenvolvida para atualizar e retornar os dados completos de uma tarefa pelo seu id.

entrada:

```json
{
  "body": {
	  "title": "Tarefa 1",
	  "description":"Descrição da tarefa 1",
	  "status": "Programmed",
    "date": "2022-04-10T16:46:08.471+00:00"
  },
  "headers": {
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E"
  }
}

```

saída *(status: 202)*:

```json
{
	"message": "task modified successfully"
}

```


## DELETE /task/:id

A rota `DELETE /task/:id` foi desenvolvida para remover uma tarefa do banco de dados pelo seu id.


entrada:

```json
{
	"headers": {
		"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E"
  }
}

```

saída *(status: 202)*:

```json
{
	"message": "task removed successfully"
}

```

---

# Banco de dados

O banco de dados usado para aplicação foi o MongoDB, sendo ele um banco não relacional, tornou-se uma excelente opção para uma aplicação, pois a relação entre os dados da aplicação são simples.

---

# Validação

Para a validação de entrada foi desenvolvido middlewares, dessa forma evitando o desperdício de recursos com requisições inválidas. Para gerar e validar o token foi utilizado o jsonwebtoken, podendo utilizar informações da pessoa usuária contidas no payload para registro de suas ações evitando uso de recursos para obter essas informações. 

---

# Tecnologias

- Express
- Typescript
- Ts node
- Nodemon
- MongoDB
- Json Web Token
- Dotenv
- ESlint

<div align="center">
  <img height="100" width="100" src="./backend/assets/icons/express.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/typescript.svg"/>
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/tsnode.svg"/>
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/nodemon.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/mongodb.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/eslint.svg" />
  &nbsp;&nbsp;&nbsp;
  <img height="100" width="100" src="./backend/assets/icons/jsonwebtokens.svg" />
</div>

# Deploy

Deploy feito no heroku [Heroku](https://www.heroku.com/)

 <img src="./backend/assets/icons/heroku.svg" alt="heroku icon" height="70" width="70">

<h1><a href="https://appointment-calendar-frontend.vercel.app/" >Visite a Aplicação</a></h1>

# Implementações Futuras

- Documentação Swagger
- 100% de cobertura de teste
- Rota de pessoa administradora para direcionar tarefas.

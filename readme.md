# Claudio-News-API

Desenvolvi em mentoria, um projeto de newsletter com formulário de cadastro e área de gerenciamento. Utilizando o Node.JS (Typescript) com o framework Express.JS, implementei essa API Rest para lidar com a lógica dos dados no lado do servidor, armazenando num banco de dados MongoDB.

Para clonar o repositório, utilize o seguinte comando em seu terminal:

```
git clone https://github.com/ClaudioMascaro/Claudio-News-API.git
```

## Para configurar o ambiente:
### Docker

Crie um arquivo .env seguindo o modelo .env.example, insira o DB_NAME e a SERVER_PORT que vai utilizar. Pode manter o DB_HOST=db e DB_PORT=27017

Para configurar os containers utilizando o Makefile, utilize o seguinte comando:

```
make up
```

Pare ou inicie os containers com `make stop` e `make start`. E remova-os utilizando `make down`. 


Utilizando os comandos do docker-compose:

```
docker-compose up -d
```

Pare ou inicie os containers com `docker-compose stop` e `docker-compose start` 
Remova-os utilizando `docker-compose down`

E para ver os logs: `make logs` ou `docker-compose logs -f`

> Se surgir esse erro: `Interpreter [...] is NOT AVAILABLE in PATH ...` utilize:
> `yarn postinstall` ou `npm run postinstall`
> Configure novamente os containers e resolvido.

Já pode utilizar os recursos!

### Local

Se quiser configurar e utilizar a API no ambiente local, após clonar o repositório, utilize:

```
yarn
```

ou:
```
npm install
```

Crie uma pasta `data` e utilize no terminal `mongod --dbpath data`
Crie um arquivo .env seguindo o modelo .env.example, insira o nome do banco de dados e a porta do servidor. Pode manter DB_PORT=27017, e utilize DB_HOST=0.0.0.0

Para iniciar o servidor de desenvolvimento:

```
yarn dev:server
```

ou:

```
npm run dev:server
```


## Recursos: 

### GET /newsletter

Busca de registros. 

Filtros (opcionais): 
- `?page=&limit=` Limite e paginação
- `?sortby=&order=` Ordenação por 'email' ou 'createdAt'

Exemplos de uso:

- GET `/newsletter` retorna todos os registros.

- GET `/newsletter?page=1&limit=10&sortby=email&order=1` retorna os resultados da primeira página, limitando a 10 registros por página, e ordenados de 0-9a-z.

- GET `/newsletter?sortby=createdAt&order=-1` retorna os resultados do registro mais recente ao mais antigo. 

### POST /newsletter

Recebe, valida e persiste 'email' do corpo da mensagem.

Exemplos:

{
	"Email": "teste@net.com"
}
> => "E-mail inválido ou já cadastrado"


{
	"email": "teste@net.co"
}
> => "E-mail inválido ou já cadastrado"


{
	"email": "teste@net.com"
}
> => "message": "E-mail cadastrado com sucesso!"


### DELETE /newsletter/{email}

Apaga um registro, exemplo:

- DELETE `/newsletter/teste@net.com`

> => "E-mail deletado"  

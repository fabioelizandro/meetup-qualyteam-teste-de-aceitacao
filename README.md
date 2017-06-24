# Meetup Qualyteam teste de aceitação

Projeto tenta demonstra como utilizar a ferramenta CodeceptJS para fazer testes de aceitação.
Nele é feito um pequeno teste de aceitação do site do Google.

## Instalação

Primeiro instale todas as dependências do projeto 

    $ npm install
    
Agora instale o selenium server na sua maquina

    $ npm run selenium install  

## Rodando os testes

Levante o servidor selenium 

    $ npm run selenium start 

Em um novo terminal mande rodar seus testes

    $ npm run codeceptjs run
     
Para rodar mostrando todos os paços do ator

    $ npm run codeceptjs run -- --steps
    
Para rodar em modo de depuração

NOTA: modo de depuração só faz sentido caso você tenha um `pause()` em seu teste

    $ npm run codeceptjs run -- --steps --debug

Gerar relatório HTML

    $ npm run codeceptjs run -- --reporter mochawesome

# Prints de erros 

Você pode encontrar na pasta output o print da browser sempre que um teste falhar.

## Gerador de códigos

Para gerar um novo teste 

    $ npm run codeceptjs gt

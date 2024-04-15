# API Back-End

## Este é um projeto Java com Spring Boot que oferece uma API para gerenciamento de bancos

## Tecnologias Utilizadas

- Java
- Spring Boot
- Spring Data
- Apache POI

## Funcionalidades

1. O Java e Spring Boot foram usados para criar o servidor web
2. O Spring Data é usado para fazer conexões com o banco e consultas sem precisar de consultas nativas em linguagem sql.
3. O Apache POI é usado para interagir com o arquivo planilha em `teste_estagio_back/src/main/resources/bancos.xls`(base para o projeto) e criar uma lista de objetos do tipo Banco, através dessa lista cada objeto é inserido no banco de dados caso não tenham sido inseridos anteriormente de forma manual.

## Como Executar o Projeto

### Pré-Requisitos

- JDK 17 ou superior instalado e configurado no seu sistema.
- Maven instalado e configurado no seu sistema (ou IDE compatível com Maven, Intelij Community).
- Banco de dados configurado, e necessário a criação de um banco de dados MYSQL e alteração das variáveis de ambiente em: `teste_estagio_back/src/main/resources/application.yaml`

datasource:

    driver-class-name: com.mysql.cj.jdbc.Driver
    username: `usuario`
    url: jdbc:mysql://${`conexao`:localhost}:3306/`revgas_estagio`
    password: `senha`

> Onde Serão substituidos(sem uso de crase):

usuario: pelo usuário do BD,

conexao pelo nome da conexão,

revgas_estagio pelo nome do schema disponibilizado para api,

password pela senha

### Passos

- Clone o repositório:

`https://github.com/guilhermeerib/teste_estagio_revgas.git`

- Navegue até o diretório do projeto:

`cd teste_estagio_back`

- Compile o projeto:

`mvn clean package`

- Execute o aplicativo Spring Boot:

`java -jar target/seu-projeto.jar`

## Endpoints

1. Listagem de todos os bancos

   Descrição: Retorna uma lista de todos os bancos presentes no banco de dados.

   Endpoint: GET localhost:8080/banco/todos

   Parâmetros: Nenhum

   Resposta de Sucesso (200 OK):

   Exemplo de uso: `curl -X GET http://localhost:8080/api/bancos`

2. Selecionar Banco .

   Descrição: Retorna um objeto Banco, que foi filtrado por Código de compensação(id).

   Endpoint: GET localhost:8080/banco/{idBanco}

   Parâmetros: Código de compensação(id do tipo number)

   Resposta de Sucesso (200 OK):

   Exemplo de uso: `curl -X GET http://localhost:8080/api/bancos/123`

# Projeto de Consulta de Bancos

## Este projeto tem como objetivo criar uma aplicação web para consulta de bancos, utilizando uma API RESTful para disponibilizar as informações presentes em um banco de dados MySQL

## Estrutura do Projeto

- ddl_banco_mysql: Contém o código fonte do banco de dados.
- teste_estagio_back: Contém o código fonte da APIREST
- teste-estagio-front: Contém o código fonte da interface de usuário.

## Descrição do Projeto

1. Criação da Tabela no Banco de Dados: Uma tabela será criada no banco de dados MySQL para armazenar a lista de bancos. Os dados serão obtidos a partir de um arquivo em anexo `bancos.xls`. O arquivo contendo o DDL e DML dessa etapa está disponível em `ddl_banco_mysql.sql`

2. API RESTful: Foi desenvolvida uma API, utilizando Java 17 com Framework Spring Boot, para disponibilizar as informações dos bancos. Tem como endpoints um request para buscar todos os bancos, e um para buscar um banco específico por Código de Compensação. Os detalhes da criação dessa API estão disponíveis em `teste_estagio_back/README.md`

3. Interface de Usuário: Foi criada uma tela de consulta de bancos que irá consumir a API desenvolvida na etapa anterior. Esta tela foi desenvolvida utilizando HTMl CSS com o Framework Angular. Mais informações sobre a Aplicação WEB estão disponíveis em `teste-estagio-front/README.md`

## Requisitos

1. Criar uma tabela no banco de dados MySQL e armazenar a lista de bancos, presente no arquivo em anexo.
2. Criar uma API utilizando um framework web da sua escolha, para disponibilizar as informações presentes no banco de dados que você criou, com os seguintes endpoints:

   2.1 - Listagem de todos os bancos - método GET;

   2.2 - Consultar um banco passando o código de compensação como parâmetro - método GET;

3. Criar uma tela de consulta dos bancos que irá consumir a API, utilizando um framework web da sua escolha;

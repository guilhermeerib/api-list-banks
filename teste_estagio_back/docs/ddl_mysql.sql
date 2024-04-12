create schema revgas_estagio;
use revgas_estagio;

create table banco(
 id int primary key,
 nome VARCHAR(255));
 
insert into revgas_estagio.banco ( id,nome) values (1, "teste")
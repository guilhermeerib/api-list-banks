# Usar uma imagem base com Maven e JDK 17
FROM maven:3.8.4-openjdk-17 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o arquivo pom.xml e as dependências
COPY pom.xml .

# Copiar todo o código do projeto para o container
COPY src ./src

# Baixar as dependências do Maven
RUN mvn dependency:go-offline

# Compilar o projeto
RUN mvn clean package -DskipTests

# Usar uma imagem base com OpenJDK 17
FROM openjdk:17-jdk-slim

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o JAR construído e o código-fonte para o container final
COPY --from=build /app/target/*.jar app.jar
COPY --from=build /app/src /app/src

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]

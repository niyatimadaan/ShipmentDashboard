# Stage 1: Build the application
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean install

# Stage 2: Setup Tomcat and deploy the application
FROM tomcat:9.0-jdk17
COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/myapp.war
EXPOSE 8081
CMD ["catalina.sh", "run"]

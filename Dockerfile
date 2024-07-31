#
# Build stage
#
FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean install

#
# Package stage
#
FROM eclipse-temurin:17-jdk
COPY --from=build /target/dashboard-0.0.1-SNAPSHOT.jar. dashboard.jar
# ENV PORT=8081
EXPOSE 8081
ENTRYPOINT ["java","-jar","demo.jar"]
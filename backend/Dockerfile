FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src/ ./src/

RUN mvn clean package -DskipTests

FROM openjdk:17
WORKDIR /app

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar ./backend.jar

ENV DB_URL=localhost:3306/biketracker
ENV DB_PASSWORD=RohrKabel06
ENV DB_USERNAME=root

EXPOSE 8080
EXPOSE 9092

CMD ["java", "-jar", "backend.jar"]
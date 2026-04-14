FROM golang:1.21-alpine

WORKDIR /app

# copy go mod first
COPY services/backend-go/go.mod .
COPY services/backend-go/go.sum .

RUN go mod tidy

# copy full backend code
COPY services/backend-go/ .

RUN go build -o main ./cmd

EXPOSE 3000

CMD ["./main"]

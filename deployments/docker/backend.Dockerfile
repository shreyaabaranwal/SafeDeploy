FROM golang:1.21-alpine

WORKDIR /app

# copy go.mod only (no go.sum needed)
COPY services/backend-go/go.mod ./

RUN go mod tidy

# copy full code
COPY services/backend-go/ ./

# build (IMPORTANT: correct path)
RUN go build -o main ./cmd

EXPOSE 3000

CMD ["./main"]

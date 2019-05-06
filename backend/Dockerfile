FROM golang:latest

COPY . /go/src/grpc-sample/

ENV CGO_ENABLED 0

RUN go get -u github.com/golang/protobuf/protoc-gen-go && \
    go get github.com/ktr0731/evans && \
    go get -u google.golang.org/grpc

RUN go build -o /backend grpc-sample/backend

FROM scratch

COPY --from=0 /backend /backend

ENTRYPOINT ["/backend"]

FROM golang:latest

COPY . /go/src/grpc-sample/

ENV CGO_ENABLED 0

RUN cd /go/src/grpc-sample && \
    go build -o /grpcwebproxy ./vendor/github.com/improbable-eng/grpc-web/go/grpcwebproxy

FROM scratch

COPY --from=0 /grpcwebproxy /grpcwebproxy

ENTRYPOINT ["/grpcwebproxy"]

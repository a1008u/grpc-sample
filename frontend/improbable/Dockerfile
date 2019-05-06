FROM golang:latest

COPY . /go/src/grpc-sample/

ENV CGO_ENABLED 0

RUN go build -o /frontend grpc-sample/frontend

FROM node:latest

COPY . /home/node/src

RUN cd /home/node/src/frontend/improbable && npm install && npm run build

FROM scratch

COPY --from=0 /frontend /frontend
COPY --from=1 /home/node/src/frontend/improbable/html /html

EXPOSE 10000

ENTRYPOINT ["/frontend", "--root-dir", "/html", "--port", "10000"]

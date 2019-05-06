#!/bin/bash

cd /Users/akira/go/src/go-docker-grpc/grpc-node-go/article
protoc article.proto --go_out=plugins=grpc:.
protoc --js_out=import_style=commonjs:pb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pb .



sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.4-darwin-x86_64 /usr/local/bin/protoc-gen-grpc-web
chmod +x /usr/local/bin/protoc-gen-grpc-web



protoc -I=./proto article.proto \
--js_out=import_style=commonjs,binary:./frontend/improbable/proto \
--grpc-web_out=import_style=commonjs,mode=improbable:./frontend/improbable/proto \
--go_out=plugins=grpc,path=source_relative:./backend/proto




generate:
	docker run --rm -v $$(pwd):/repo jfbrandhorst/grpc-web-generators \
		protoc -I/repo/proto/echo \
		--js_out=import_style=commonjs,binary:/repo/frontend/improbable/proto \
		--ts_out=service=true:/repo/frontend/improbable/proto \
		--go_out=plugins=grpc,path=source_relative,import_path=github.com/johanbrandhorst/grpc-web-compatibility-test/backend/proto/echo:/repo/backend/proto/ \
		/repo/proto/echo/echo.proto


// local
evans ./proto/article.proto -p 10000 --host 0.0.0.0
show service
call MkArticle

// docker
evans ./proto/article.proto -p 8080 --host 0.0.0.0
show service
call MkArticle

docker-compose up -d echo-server
docker-compose up -d envoy
docker-compose up -d improbable

docker-compose down
docker rm grpc-sample_echo-server_1
docker rmi grpc-sample_echo-server

docker stop grpc-sample_improbable_1
docker rm grpc-sample_improbable_1
docker rmi grpc-sample_improbable

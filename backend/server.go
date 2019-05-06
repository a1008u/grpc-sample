package main

import (
	"context"
	"flag"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/reflection"
	article "grpc-sample/backend/proto"
	"log"
	"net"

)

type server struct{}

func (*server) MkArticle(ctx context.Context, req *article.ArticleRequest) (* article.ArticleResponse, error) {
	fmt.Printf("Greet function was invoked with %v\n", req)
	content := req.GetArticle().Content
	result := "Getting content is  " + content
	res := &article.ArticleResponse{
		Article: &article.Article{
			No: "11111",
			Content: result,
		},
	}
	return res, nil
}

var (
	gRPCPort = flag.Int("grpc_port", 10000, "The gRPC server port")
)


// go run server.go
func main() {
	fmt.Println("wake up my grpc-node-go server")

	flag.Parse()
	addr := fmt.Sprintf("0.0.0.0:%d", *gRPCPort)
	fmt.Println(addr)
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	opts := []grpc.ServerOption{}
	tls := false
	if tls {
		certFile := "ssl/server.crt"
		keyFile := "ssl/server.pem"
		creds, sslErr := credentials.NewServerTLSFromFile(certFile, keyFile)
		if sslErr != nil {
			log.Fatalf("Failed loading certificates: %v", sslErr)
			return
		}
		opts = append(opts, grpc.Creds(creds))
	}

	s := grpc.NewServer(opts...)
	article.RegisterArticleServiceServer(s, &server{})

	reflection.Register(s)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

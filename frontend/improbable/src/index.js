console.log("--- test ---");

import article from '../proto/article_grpc_web_pb'
// import { grpc } from "@improbable-eng/grpc-web/dist/typings";

const host = "http://" + window.location.hostname + ":8080";

const a = new article.Article()
a.setNo("1")
a.setContent("testtesttesttesttest")
const articleService = new article.ArticleServicePromiseClient(host)
const req = new article.ArticleRequest()
req.setArticle(a)
articleService
  .mkArticle(req)
  .then((res)=>console.log("resの結果(成功)", res))
  .catch((err)=>console.error("resの結果(失敗)", err))


// var client = new article.ArticleServiceClient(host, {
//   transport: CrossBrowserHttpTransport({
//     withCredentials: false
//   }),
//   debug: true
// });
//
// function makeEchoRequest() {
//   const req = new article.Article();
//   req.setNo("1");
//   req.setContent("test");
//   console.log("reqを行う",req)
//   client.mkArticle(req)
//   .then((res)=>console.log(res))
//   .catch((err)=>console.error(err))
//  
//   // client(req, function (
//   //   err: null,
//   //   resp: article.ArticleResponse | null
//   // ) {
//   //   if (err != null) {
//   //     console.log("Unary error");
//   //     console.log("Error:", err.message);
//   //     console.log("Code:", err.code);
//   //     console.log("Metadata:", err.metadata);
//   //   } else {
//   //     console.log("Unary success");
//   //     console.log("Message:", resp);
//   //   }
//   // });
// }
//
// makeEchoRequest();

/**
 * @fileoverview gRPC-Web generated client stub for article
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.article = require('./article_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.article.ArticleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.article.ArticleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.article.ArticleRequest,
 *   !proto.article.ArticleResponse>}
 */
const methodInfo_ArticleService_MkArticle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.article.ArticleResponse,
  /** @param {!proto.article.ArticleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.article.ArticleResponse.deserializeBinary
);


/**
 * @param {!proto.article.ArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.article.ArticleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.article.ArticleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.article.ArticleServiceClient.prototype.mkArticle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/article.ArticleService/MkArticle',
      request,
      metadata || {},
      methodInfo_ArticleService_MkArticle,
      callback);
};


/**
 * @param {!proto.article.ArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.article.ArticleResponse>}
 *     A native promise that resolves to the response
 */
proto.article.ArticleServicePromiseClient.prototype.mkArticle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/article.ArticleService/MkArticle',
      request,
      metadata || {},
      methodInfo_ArticleService_MkArticle);
};


module.exports = proto.article;


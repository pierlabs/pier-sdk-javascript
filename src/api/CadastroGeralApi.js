(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ProdutoDetalhesResponse', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/OrigemComercialResponse', '../model/PageTipoAjusteResponse', '../model/AtendimentoClienteResponse', '../model/PageTipoBoletoResponse', '../model/TipoEnderecoResponse', '../model/TipoOperacaoResponse', '../model/TipoTelefoneResponse', '../model/BancoResponse', '../model/PageContaDetalheResponse', '../model/PageCampoCodificadoDescricaoResponse', '../model/PageFantasiaBasicaResponse', '../model/HistoricoTelefoneResponse', '../model/PageOrigemComercialResponse', '../model/PagePortadorResponse', '../model/PageProdutoResponse', '../model/PageAtendimentoClienteResponse', '../model/PagePromotorResponse', '../model/PageTipoEnderecoResponse', '../model/PageTipoTelefoneResponse', '../model/PageBancoResponse', '../model/PageControleVencimentoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProdutoDetalhesResponse'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/OrigemComercialResponse'), require('../model/PageTipoAjusteResponse'), require('../model/AtendimentoClienteResponse'), require('../model/PageTipoBoletoResponse'), require('../model/TipoEnderecoResponse'), require('../model/TipoOperacaoResponse'), require('../model/TipoTelefoneResponse'), require('../model/BancoResponse'), require('../model/PageContaDetalheResponse'), require('../model/PageCampoCodificadoDescricaoResponse'), require('../model/PageFantasiaBasicaResponse'), require('../model/HistoricoTelefoneResponse'), require('../model/PageOrigemComercialResponse'), require('../model/PagePortadorResponse'), require('../model/PageProdutoResponse'), require('../model/PageAtendimentoClienteResponse'), require('../model/PagePromotorResponse'), require('../model/PageTipoEnderecoResponse'), require('../model/PageTipoTelefoneResponse'), require('../model/PageBancoResponse'), require('../model/PageControleVencimentoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CadastroGeralApi = factory(root.Pier.ApiClient, root.Pier.ProdutoDetalhesResponse, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.OrigemComercialResponse, root.Pier.PageTipoAjusteResponse, root.Pier.AtendimentoClienteResponse, root.Pier.PageTipoBoletoResponse, root.Pier.TipoEnderecoResponse, root.Pier.TipoOperacaoResponse, root.Pier.TipoTelefoneResponse, root.Pier.BancoResponse, root.Pier.PageContaDetalheResponse, root.Pier.PageCampoCodificadoDescricaoResponse, root.Pier.PageFantasiaBasicaResponse, root.Pier.HistoricoTelefoneResponse, root.Pier.PageOrigemComercialResponse, root.Pier.PagePortadorResponse, root.Pier.PageProdutoResponse, root.Pier.PageAtendimentoClienteResponse, root.Pier.PagePromotorResponse, root.Pier.PageTipoEnderecoResponse, root.Pier.PageTipoTelefoneResponse, root.Pier.PageBancoResponse, root.Pier.PageControleVencimentoResponse);
  }
}(this, function(ApiClient, ProdutoDetalhesResponse, ParametroProdutoResponse, TaxaAntecipacaoRequest, OrigemComercialResponse, PageTipoAjusteResponse, AtendimentoClienteResponse, PageTipoBoletoResponse, TipoEnderecoResponse, TipoOperacaoResponse, TipoTelefoneResponse, BancoResponse, PageContaDetalheResponse, PageCampoCodificadoDescricaoResponse, PageFantasiaBasicaResponse, HistoricoTelefoneResponse, PageOrigemComercialResponse, PagePortadorResponse, PageProdutoResponse, PageAtendimentoClienteResponse, PagePromotorResponse, PageTipoEnderecoResponse, PageTipoTelefoneResponse, PageBancoResponse, PageControleVencimentoResponse) {
  'use strict';

  /**
   * CadastroGeral service.
   * @module api/CadastroGeralApi
   * @version 2.32.0
   */

  /**
   * Constructs a new CadastroGeralApi. 
   * @alias module:api/CadastroGeralApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarUsoExteriorUsingPOST operation.
     * @callback module:api/CadastroGeralApi~ativarUsoExteriorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ativa o par\u00C3\u00A2metro uso exterior para o produto
     * Este m\u00C3\u00A9todo permite ativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastroGeralApi~ativarUsoExteriorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.ativarUsoExteriorUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarUsoExteriorUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/ativar-uso-exterior', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configurarTaxaAntecipacaoUsingPOST operation.
     * @callback module:api/CadastroGeralApi~configurarTaxaAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite configurar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/TaxaAntecipacaoRequest} taxaAntecipacaoRequest taxaAntecipacaoRequest
     * @param {module:api/CadastroGeralApi~configurarTaxaAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.configurarTaxaAntecipacaoUsingPOST = function(id, taxaAntecipacaoRequest, callback) {
      var postBody = taxaAntecipacaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling configurarTaxaAntecipacaoUsingPOST";
      }

      // verify the required parameter 'taxaAntecipacaoRequest' is set
      if (taxaAntecipacaoRequest == undefined || taxaAntecipacaoRequest == null) {
        throw "Missing the required parameter 'taxaAntecipacaoRequest' when calling configurarTaxaAntecipacaoUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/configurar-taxa-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarOrigemComercialUsingGET operation.
     * @callback module:api/CadastroGeralApi~consultarOrigemComercialUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial
     * Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id ID da Origem Comercial
     * @param {module:api/CadastroGeralApi~consultarOrigemComercialUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercialResponse}
     */
    this.consultarOrigemComercialUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarOrigemComercialUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTaxaAntecipacaoUsingGET operation.
     * @callback module:api/CadastroGeralApi~consultarTaxaAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite consultar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/String} tipoTransacao Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US)
     * @param {module:api/CadastroGeralApi~consultarTaxaAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.consultarTaxaAntecipacaoUsingGET = function(id, tipoTransacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTaxaAntecipacaoUsingGET";
      }

      // verify the required parameter 'tipoTransacao' is set
      if (tipoTransacao == undefined || tipoTransacao == null) {
        throw "Missing the required parameter 'tipoTransacao' when calling consultarTaxaAntecipacaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'tipoTransacao': tipoTransacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/consultar-taxa-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET13 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Produto
     * Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.consultarUsingGET13 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET13";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de ajustes do emissor 
     * Este recurso permite que sejam listados os tipos de ajustes existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de ajuste.
     * @param {module:api/CadastroGeralApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoAjusteResponse}
     */
    this.consultarUsingGET19 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoAjusteResponse;

      return this.apiClient.callApi(
        '/api/tipos-ajustes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Atendimento
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Atendimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (idAtendimento).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoClienteResponse}
     */
    this.consultarUsingGET2 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET2";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET20 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoBoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de boletos do emissor 
     * Este recurso permite que sejam listados os tipos de boletos existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo de boleto.
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto.
     * @param {Integer} opts.banco C\u00C3\u00B3digo identificador do banco.
     * @param {module:api/CadastroGeralApi~consultarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoBoletoResponse}
     */
    this.consultarUsingGET20 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'banco': opts['banco']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoBoletoResponse;

      return this.apiClient.callApi(
        '/api/tipos-boletos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET21 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEnderecoResponse}
     */
    this.consultarUsingGET21 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET21";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TipoEnderecoResponse;

      return this.apiClient.callApi(
        '/api/tipos-enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET22 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o
     * Este recurso permite consultar dados de um determinado tipo opera\u00C3\u00A7\u00C3\u00A3o a partir do idCartao, idEstabelecimento e codigoProcessamento.
     * @param {Integer} idCartao C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cartao (idCartao).
     * @param {Integer} idEstabelecimento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (idEstabelecimento).
     * @param {String} codigoProcessamento C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:api/CadastroGeralApi~consultarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOperacaoResponse}
     */
    this.consultarUsingGET22 = function(idCartao, idEstabelecimento, codigoProcessamento, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarUsingGET22";
      }

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling consultarUsingGET22";
      }

      // verify the required parameter 'codigoProcessamento' is set
      if (codigoProcessamento == undefined || codigoProcessamento == null) {
        throw "Missing the required parameter 'codigoProcessamento' when calling consultarUsingGET22";
      }


      var pathParams = {
      };
      var queryParams = {
        'idCartao': idCartao,
        'idEstabelecimento': idEstabelecimento,
        'codigoProcessamento': codigoProcessamento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TipoOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipo-operacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET24 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefoneResponse}
     */
    this.consultarUsingGET24 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET24";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TipoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/tipos-telefones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/BancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Banco
     * Este m\u00C3\u00A9todo permite consultar um determinado Banco a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BancoResponse}
     */
    this.consultarUsingGET3 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET3";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BancoResponse;

      return this.apiClient.callApi(
        '/api/bancos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarUsoExteriorUsingPOST operation.
     * @callback module:api/CadastroGeralApi~desativarUsoExteriorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativa o par\u00C3\u00A2metro uso exterior para o produto
     * Este m\u00C3\u00A9todo permite desativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastroGeralApi~desativarUsoExteriorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.desativarUsoExteriorUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsoExteriorUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/desativar-uso-exterior', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarContasPorPessoaUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarContasPorPessoaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as contas da pessoa
     * Permite listar as contas de um pessoa a partir do seu numero na receita federal.
     * @param {String} numeroReceitaFederal N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do cliente na Receita Federal (CPF ou CNPJ)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarContasPorPessoaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaDetalheResponse}
     */
    this.listarContasPorPessoaUsingGET = function(numeroReceitaFederal, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroReceitaFederal' is set
      if (numeroReceitaFederal == undefined || numeroReceitaFederal == null) {
        throw "Missing the required parameter 'numeroReceitaFederal' when calling listarContasPorPessoaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroReceitaFederal': numeroReceitaFederal,
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageContaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas/listar-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstadosCivisUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarEstadosCivisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Estados C\u00C3\u00ADvis
     * Este m\u00C3\u00A9todo permite que sejam listados os Estados C\u00C3\u00ADvis na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarEstadosCivisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarEstadosCivisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/estados-civis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFantasiasBasicasUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarFantasiasBasicasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFantasiaBasicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Fantasias B\u00C3\u00A1sicas
     * Lista as fantasia b\u00C3\u00A1sicas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarFantasiasBasicasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFantasiaBasicaResponse}
     */
    this.listarFantasiasBasicasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFantasiaBasicaResponse;

      return this.apiClient.callApi(
        '/api/fantasias-basicas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoTelefonesUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarHistoricoTelefonesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias
     * Este m\u00C3\u00A9todo permite verificar quais os telefones de um determinado que cliente que sofreram altera\u00C3\u00A7\u00C3\u00A3o nos \u00C3\u00BAltimos 60 dias.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {module:api/CadastroGeralApi~listarHistoricoTelefonesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoTelefoneResponse}
     */
    this.listarHistoricoTelefonesUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoTelefonesUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HistoricoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/pessoas/{id}/historico-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNacionalidadesUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarNacionalidadesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista nacionalidades
     * Este m\u00C3\u00A9todo permite que sejam listados as nacionalidades na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarNacionalidadesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarNacionalidadesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/nacionalidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNaturezasOcupacoesUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarNaturezasOcupacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que sejam listados as naturezas de opera\u00C3\u00A7\u00C3\u00B5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarNaturezasOcupacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarNaturezasOcupacoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/ocupacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarOrigensComerciaisUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarOrigensComerciaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais
     * Este m\u00C3\u00A9todo permite que sejam listadas as Origens Comerciais existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id da origem comercial
     * @param {String} opts.nome Nome da origem comercial
     * @param {Integer} opts.status Status da origem comercial
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo identificador do estabelecimento
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo identificador do produto
     * @param {module:api/CadastroGeralApi~listarOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOrigemComercialResponse}
     */
    this.listarOrigensComerciaisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'status': opts['status'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idProduto': opts['idProduto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarParentescosUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarParentescosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Parentescos
     * Este m\u00C3\u00A9todo permite que sejam listados parentescos na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarParentescosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarParentescosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/parentescos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProfissoesUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarProfissoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista profiss\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que sejam listados as profiss\u00C3\u00B5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarProfissoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarProfissoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/profissoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET18 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Portadores existentes
     * Este m\u00C3\u00A9todo permite que sejam listados os portadores cadastrados na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {Integer} opts.idParentesco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco (id)
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.nomeImpresso Apresenta o nome a ser impresso no cart\u00C3\u00A3o.
     * @param {Integer} opts.idTipoCartao Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do cart\u00C3\u00A3o (id), que ser\u00C3\u00A1 utilizado para gerar os cart\u00C3\u00B5es deste portador, vinculados a sua respectiva conta atrav\u00C3\u00A9s do campo idConta.
     * @param {Integer} opts.flagAtivo Quanto ativa, indica que o cadastro do Portador est\u00C3\u00A1 ativo, em emissores que realizam este tipo de gest\u00C3\u00A3o.
     * @param {String} opts.dataCadastroPortador Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {String} opts.dataCancelamentoPortador Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:api/CadastroGeralApi~listarUsingGET18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePortadorResponse}
     */
    this.listarUsingGET18 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'idProduto': opts['idProduto'],
        'idPessoa': opts['idPessoa'],
        'idParentesco': opts['idParentesco'],
        'tipoPortador': opts['tipoPortador'],
        'nomeImpresso': opts['nomeImpresso'],
        'idTipoCartao': opts['idTipoCartao'],
        'flagAtivo': opts['flagAtivo'],
        'dataCadastroPortador': opts['dataCadastroPortador'],
        'dataCancelamentoPortador': opts['dataCancelamentoPortador']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePortadorResponse;

      return this.apiClient.callApi(
        '/api/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET19 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Produtos do Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.nome Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
     * @param {Integer} opts.status Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo).
     * @param {Integer} opts.idFantasiaBasica C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia B\u00C3\u00A1sica (id) a qual o produto pertence.
     * @param {module:api/CadastroGeralApi~listarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageProdutoResponse}
     */
    this.listarUsingGET19 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'status': opts['status'],
        'idFantasiaBasica': opts['idFantasiaBasica']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista todos os atendimentos
     * Este m\u00C3\u00A9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoAtendimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {String} opts.dataAtendimento Apresenta a data em que o Atendimento foi realizado.
     * @param {module:api/CadastroGeralApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAtendimentoClienteResponse}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoAtendimento': opts['idTipoAtendimento'],
        'idConta': opts['idConta'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET20 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePromotorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista promotores cadastrados na base do emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os cadastros de Promoteres existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do promotor (id)
     * @param {String} opts.nome Nome do Promotor
     * @param {String} opts.dataCadastro Data da Inclus\u00C3\u00A3o.
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento
     * @param {Integer} opts.idUsuario C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do usu\u00C3\u00A1rio
     * @param {module:api/CadastroGeralApi~listarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePromotorResponse}
     */
    this.listarUsingGET20 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'dataCadastro': opts['dataCadastro'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idUsuario': opts['idUsuario']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePromotorResponse;

      return this.apiClient.callApi(
        '/api/promotores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET26 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {String} opts.nome Nome do Tipo do Endere\u00C3\u00A7o
     * @param {module:api/CadastroGeralApi~listarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoEnderecoResponse}
     */
    this.listarUsingGET26 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoEnderecoResponse;

      return this.apiClient.callApi(
        '/api/tipos-enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET28 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de Telefones
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {String} opts.nome Nome do Tipo do Telefone
     * @param {module:api/CadastroGeralApi~listarUsingGET28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefoneResponse}
     */
    this.listarUsingGET28 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/tipos-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Bancos cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Bancos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBancoResponse}
     */
    this.listarUsingGET3 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageBancoResponse;

      return this.apiClient.callApi(
        '/api/bancos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET33 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageControleVencimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Vencimentos
     * Este recurso permite que sejam listados os Vencimentos do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Indica a data de vencimento das faturas
     * @param {module:api/CadastroGeralApi~listarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageControleVencimentoResponse}
     */
    this.listarUsingGET33 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageControleVencimentoResponse;

      return this.apiClient.callApi(
        '/api/vencimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST2 operation.
     * @callback module:api/CadastroGeralApi~salvarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado
     * @param {String} opts.conteudoAtendimento Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento.
     * @param {String} opts.detalhesAtendimento Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {String} opts.dataAtendimento Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {String} opts.dataAgendamento Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {String} opts.dataHoraInicioAtendimento Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {String} opts.dataHoraFimAtendimento Apresenta a data e hora em que o Atendimento foi finalizado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {Integer} opts.flagFilaFraude Flag fila fraude
     * @param {module:api/CadastroGeralApi~salvarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoClienteResponse}
     */
    this.salvarUsingPOST2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'conteudoAtendimento': opts['conteudoAtendimento'],
        'detalhesAtendimento': opts['detalhesAtendimento'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento'],
        'dataAgendamento': opts['dataAgendamento'],
        'dataHoraInicioAtendimento': opts['dataHoraInicioAtendimento'],
        'dataHoraFimAtendimento': opts['dataHoraFimAtendimento'],
        'flagFilaFraude': opts['flagFilaFraude']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
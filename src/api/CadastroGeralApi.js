(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CampanhaResponse', '../model/CampanhaUpdate', '../model/ConfiguracaoRegistroCobrancaPersist', '../model/ConfiguracaoRegistroCobrancaResponse', '../model/ConfiguracaoRotativoDetalheResponse', '../model/ConfiguracaoRotativoPersist', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/ProdutoDetalhesResponse', '../model/PageTipoAjusteResponse', '../model/PageTipoBoletoResponse', '../model/TipoEnderecoResponse', '../model/TipoOperacaoResponse', '../model/TipoTelefoneResponse', '../model/AtendimentoClienteResponse', '../model/BancoResponse', '../model/PageCampanhaResponse', '../model/PageContaDetalheResponse', '../model/PageCampoCodificadoDescricaoResponse', '../model/PageFantasiaBasicaResponse', '../model/HistoricoTelefoneResponse', '../model/PageTipoCampanhaResponse', '../model/PageConfiguracaoRotativoResponse', '../model/PagePortadorResponse', '../model/PageProdutoResponse', '../model/PagePromotorResponse', '../model/PageTipoEnderecoResponse', '../model/PageTipoTelefoneResponse', '../model/PageControleVencimentoResponse', '../model/PageAtendimentoClienteResponse', '../model/PageBancoResponse', '../model/CampanhaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CampanhaResponse'), require('../model/CampanhaUpdate'), require('../model/ConfiguracaoRegistroCobrancaPersist'), require('../model/ConfiguracaoRegistroCobrancaResponse'), require('../model/ConfiguracaoRotativoDetalheResponse'), require('../model/ConfiguracaoRotativoPersist'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/ProdutoDetalhesResponse'), require('../model/PageTipoAjusteResponse'), require('../model/PageTipoBoletoResponse'), require('../model/TipoEnderecoResponse'), require('../model/TipoOperacaoResponse'), require('../model/TipoTelefoneResponse'), require('../model/AtendimentoClienteResponse'), require('../model/BancoResponse'), require('../model/PageCampanhaResponse'), require('../model/PageContaDetalheResponse'), require('../model/PageCampoCodificadoDescricaoResponse'), require('../model/PageFantasiaBasicaResponse'), require('../model/HistoricoTelefoneResponse'), require('../model/PageTipoCampanhaResponse'), require('../model/PageConfiguracaoRotativoResponse'), require('../model/PagePortadorResponse'), require('../model/PageProdutoResponse'), require('../model/PagePromotorResponse'), require('../model/PageTipoEnderecoResponse'), require('../model/PageTipoTelefoneResponse'), require('../model/PageControleVencimentoResponse'), require('../model/PageAtendimentoClienteResponse'), require('../model/PageBancoResponse'), require('../model/CampanhaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CadastroGeralApi = factory(root.Pier.ApiClient, root.Pier.CampanhaResponse, root.Pier.CampanhaUpdate, root.Pier.ConfiguracaoRegistroCobrancaPersist, root.Pier.ConfiguracaoRegistroCobrancaResponse, root.Pier.ConfiguracaoRotativoDetalheResponse, root.Pier.ConfiguracaoRotativoPersist, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.ProdutoDetalhesResponse, root.Pier.PageTipoAjusteResponse, root.Pier.PageTipoBoletoResponse, root.Pier.TipoEnderecoResponse, root.Pier.TipoOperacaoResponse, root.Pier.TipoTelefoneResponse, root.Pier.AtendimentoClienteResponse, root.Pier.BancoResponse, root.Pier.PageCampanhaResponse, root.Pier.PageContaDetalheResponse, root.Pier.PageCampoCodificadoDescricaoResponse, root.Pier.PageFantasiaBasicaResponse, root.Pier.HistoricoTelefoneResponse, root.Pier.PageTipoCampanhaResponse, root.Pier.PageConfiguracaoRotativoResponse, root.Pier.PagePortadorResponse, root.Pier.PageProdutoResponse, root.Pier.PagePromotorResponse, root.Pier.PageTipoEnderecoResponse, root.Pier.PageTipoTelefoneResponse, root.Pier.PageControleVencimentoResponse, root.Pier.PageAtendimentoClienteResponse, root.Pier.PageBancoResponse, root.Pier.CampanhaPersist);
  }
}(this, function(ApiClient, CampanhaResponse, CampanhaUpdate, ConfiguracaoRegistroCobrancaPersist, ConfiguracaoRegistroCobrancaResponse, ConfiguracaoRotativoDetalheResponse, ConfiguracaoRotativoPersist, ParametroProdutoResponse, TaxaAntecipacaoRequest, ProdutoDetalhesResponse, PageTipoAjusteResponse, PageTipoBoletoResponse, TipoEnderecoResponse, TipoOperacaoResponse, TipoTelefoneResponse, AtendimentoClienteResponse, BancoResponse, PageCampanhaResponse, PageContaDetalheResponse, PageCampoCodificadoDescricaoResponse, PageFantasiaBasicaResponse, HistoricoTelefoneResponse, PageTipoCampanhaResponse, PageConfiguracaoRotativoResponse, PagePortadorResponse, PageProdutoResponse, PagePromotorResponse, PageTipoEnderecoResponse, PageTipoTelefoneResponse, PageControleVencimentoResponse, PageAtendimentoClienteResponse, PageBancoResponse, CampanhaPersist) {
  'use strict';

  /**
   * CadastroGeral service.
   * @module api/CadastroGeralApi
   * @version 2.57.0
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
     * Callback function to receive the result of the alterarUsingPUT2 operation.
     * @callback module:api/CadastroGeralApi~alterarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar campanha
     * Este m\u00E9todo permite que sejam alterados os dados de uma campanha.
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o da campanha (id).
     * @param {module:model/CampanhaUpdate} update update
     * @param {module:api/CadastroGeralApi~alterarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.alterarUsingPUT2 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT2";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT2";
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT3 operation.
     * @callback module:api/CadastroGeralApi~alterarUsingPUT3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar configura\u00E7\u00E3o para registro de cobran\u00E7a
     * Este m\u00E9todo permite atualizar uma configura\u00E7\u00E3o, para registro de cobran\u00E7a.
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o da configura\u00E7\u00E3o (id).
     * @param {module:model/ConfiguracaoRegistroCobrancaPersist} configuracaoPersist configuracaoPersist
     * @param {module:api/CadastroGeralApi~alterarUsingPUT3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.alterarUsingPUT3 = function(id, configuracaoPersist, callback) {
      var postBody = configuracaoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'configuracaoPersist' is set
      if (configuracaoPersist == undefined || configuracaoPersist == null) {
        throw "Missing the required parameter 'configuracaoPersist' when calling alterarUsingPUT3";
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT4 operation.
     * @callback module:api/CadastroGeralApi~alterarUsingPUT4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar os dados de configura\u00E7\u00E3o do rotativo de um produto
     * Este m\u00E9todo permite que seja alterada uma configura\u00E7\u00E3o do rotativo para um determinado produto.
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o da configura\u00E7\u00E3o (id).
     * @param {module:model/ConfiguracaoRotativoPersist} configuracaoRotativoPersist configuracaoRotativoPersist
     * @param {module:api/CadastroGeralApi~alterarUsingPUT4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    this.alterarUsingPUT4 = function(id, configuracaoRotativoPersist, callback) {
      var postBody = configuracaoRotativoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT4";
      }

      // verify the required parameter 'configuracaoRotativoPersist' is set
      if (configuracaoRotativoPersist == undefined || configuracaoRotativoPersist == null) {
        throw "Missing the required parameter 'configuracaoRotativoPersist' when calling alterarUsingPUT4";
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST1 operation.
     * @callback module:api/CadastroGeralApi~cadastrarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inserir configura\u00E7\u00E3o para registro de cobran\u00E7a
     * Este m\u00E9todo permite que seja cadastrado uma nova configura\u00E7\u00E3o, para registro de cobran\u00E7a.
     * @param {module:model/ConfiguracaoRegistroCobrancaPersist} configuracaoPersist configuracaoPersist
     * @param {module:api/CadastroGeralApi~cadastrarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.cadastrarUsingPOST1 = function(configuracaoPersist, callback) {
      var postBody = configuracaoPersist;

      // verify the required parameter 'configuracaoPersist' is set
      if (configuracaoPersist == undefined || configuracaoPersist == null) {
        throw "Missing the required parameter 'configuracaoPersist' when calling cadastrarUsingPOST1";
      }


      var pathParams = {
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca', 'POST',
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
     * Configura a Taxa de Antecipa\u00E7\u00E3o de um Produto
     * Este recurso permite configurar a Taxa de Antecipa\u00E7\u00E3o de um Produto, a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
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
     * Callback function to receive the result of the consultarCampanhaUsingGET operation.
     * @callback module:api/CadastroGeralApi~consultarCampanhaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar campanha
     * Este m\u00E9todo permite que sejam listados os dados de uma determinada campanha existente na base do emissor. Para isso, \u00E9 preciso informar o seu respectivo c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id ID da Campanha
     * @param {module:api/CadastroGeralApi~consultarCampanhaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.consultarCampanhaUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarCampanhaUsingGET";
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas/{id}', 'GET',
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
     * Consulta a Taxa de Antecipa\u00E7\u00E3o de um Produto
     * Este recurso permite consultar a Taxa de Antecipa\u00E7\u00E3o de um Produto, a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/String} tipoTransacao Tipo da Transa\u00E7\u00E3o (ON-US ou OFF-US)
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
     * Callback function to receive the result of the consultarUsingGET10 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar configura\u00E7\u00E3o para registro de cobran\u00E7a
     * Este m\u00E9todo permite buscar uma configura\u00E7\u00E3o, para registro de cobran\u00E7a.
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o da configura\u00E7\u00E3o (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.consultarUsingGET10 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET10";
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET11 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de configura\u00E7\u00E3o do rotativo espec\u00EDfico.
     * Este recurso permite consultar dados de configura\u00E7\u00E3o do parcelamento rotativo a partir de seu codigo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o de configura\u00E7\u00E3o rotativo (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    this.consultarUsingGET11 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET11";
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET26 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Produto
     * Este m\u00E9todo permite consultar um determinado Produto a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o do Produto (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.consultarUsingGET26 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET26";
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
     * Callback function to receive the result of the consultarUsingGET33 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de ajustes do emissor 
     * Este recurso permite que sejam listados os tipos de ajustes existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo identificador do tipo de ajuste.
     * @param {String} opts.descricao Descri\u00E7\u00E3o do tipo de ajuste.
     * @param {module:api/CadastroGeralApi~consultarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoAjusteResponse}
     */
    this.consultarUsingGET33 = function(opts, callback) {
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
     * Callback function to receive the result of the consultarUsingGET34 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET34Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoBoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de boletos do emissor 
     * Este recurso permite que sejam listados os tipos de boletos existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo identificador do tipo de boleto.
     * @param {String} opts.descricao Descri\u00E7\u00E3o do tipo de boleto.
     * @param {Integer} opts.banco C\u00F3digo identificador do banco.
     * @param {module:api/CadastroGeralApi~consultarUsingGET34Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoBoletoResponse}
     */
    this.consultarUsingGET34 = function(opts, callback) {
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
     * Callback function to receive the result of the consultarUsingGET35 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Endere\u00E7o
     * Este m\u00E9todo permite consultar um determinado Tipo de Endere\u00E7o a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Endere\u00E7o (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEnderecoResponse}
     */
    this.consultarUsingGET35 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET35";
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
     * Callback function to receive the result of the consultarUsingGET36 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo de opera\u00E7\u00E3o
     * Este recurso permite consultar dados de um determinado tipo opera\u00E7\u00E3o a partir do idCartao, idEstabelecimento e codigoProcessamento.
     * @param {Integer} idCartao C\u00F3digo de identifica\u00E7\u00E3o do cartao (idCartao).
     * @param {Integer} idEstabelecimento C\u00F3digo de identifica\u00E7\u00E3o do estabelecimento (idEstabelecimento).
     * @param {String} codigoProcessamento C\u00F3digo de processamento da opera\u00E7\u00E3o.
     * @param {module:api/CadastroGeralApi~consultarUsingGET36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOperacaoResponse}
     */
    this.consultarUsingGET36 = function(idCartao, idEstabelecimento, codigoProcessamento, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarUsingGET36";
      }

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling consultarUsingGET36";
      }

      // verify the required parameter 'codigoProcessamento' is set
      if (codigoProcessamento == undefined || codigoProcessamento == null) {
        throw "Missing the required parameter 'codigoProcessamento' when calling consultarUsingGET36";
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
        '/api/tipos-operacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET38 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET38Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Telefone
     * Este m\u00E9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id)
     * @param {module:api/CadastroGeralApi~consultarUsingGET38Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefoneResponse}
     */
    this.consultarUsingGET38 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET38";
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
     * Callback function to receive the result of the consultarUsingGET4 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Atendimento
     * Este m\u00E9todo permite consultar os par\u00E2metros de um determinado Atendimento a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (idAtendimento).
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o do atendimento cliente (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoClienteResponse}
     */
    this.consultarUsingGET4 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET4";
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
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/CadastroGeralApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/BancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Banco
     * Este m\u00E9todo permite consultar um determinado Banco a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o do Banco (id).
     * @param {module:api/CadastroGeralApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BancoResponse}
     */
    this.consultarUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
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
     * Callback function to receive the result of the listarCampanhasUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarCampanhasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Campanhas
     * Lista as campanhas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoCampanha C\u00F3digo de Identifica\u00E7\u00E3o do tipo de campanha (id).
     * @param {module:api/CadastroGeralApi~listarCampanhasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampanhaResponse}
     */
    this.listarCampanhasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoCampanha': opts['idTipoCampanha']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas', 'GET',
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
     * @param {String} numeroReceitaFederal N\u00FAmero de identifica\u00E7\u00E3o do cliente na Receita Federal (CPF ou CNPJ)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Lista os Estados C\u00EDvis
     * Este m\u00E9todo permite que sejam listados os Estados C\u00EDvis na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Listar Fantasias B\u00E1sicas
     * Lista as fantasia b\u00E1sicas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Listar altera\u00E7\u00F5es de telefones realizadas nos \u00FAltimos 60 dias
     * Este m\u00E9todo permite verificar quais os telefones de um determinado que cliente que sofreram altera\u00E7\u00E3o nos \u00FAltimos 60 dias.
     * @param {Integer} id C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id).
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
     * Este m\u00E9todo permite que sejam listados as nacionalidades na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Lista as Ocupa\u00E7\u00F5es
     * Este m\u00E9todo permite que sejam listados as naturezas de opera\u00E7\u00F5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Callback function to receive the result of the listarParentescosUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarParentescosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Parentescos
     * Este m\u00E9todo permite que sejam listados parentescos na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Lista profiss\u00F5es
     * Este m\u00E9todo permite que sejam listados as profiss\u00F5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
     * Callback function to receive the result of the listarTiposCampanhasUsingGET operation.
     * @callback module:api/CadastroGeralApi~listarTiposCampanhasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoCampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Tipos de Campanhas
     * Lista os tipos de campanhas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarTiposCampanhasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoCampanhaResponse}
     */
    this.listarTiposCampanhasUsingGET = function(opts, callback) {
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
      var returnType = PageTipoCampanhaResponse;

      return this.apiClient.callApi(
        '/api/tipos-campanhas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET13 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar configura\u00E7\u00F5es para registro de cobran\u00E7a
     * Este m\u00E9todo permite listar as configura\u00E7\u00F5es de registro de cobran\u00E7a.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.listarUsingGET13 = function(opts, callback) {
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageConfiguracaoRotativoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as configura\u00E7\u00F5es rotativo.
     * Este recurso permite listar as configura\u00E7\u00F5es rotativo.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idProduto C\u00F3digo de identifica\u00E7\u00E3o do Produto.
     * @param {module:api/CadastroGeralApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageConfiguracaoRotativoResponse}
     */
    this.listarUsingGET14 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idProduto': opts['idProduto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageConfiguracaoRotativoResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET34 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET34Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Portadores existentes
     * Este m\u00E9todo permite que sejam listados os portadores cadastrados na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00F3digo de Identifica\u00E7\u00E3o da Conta (id).
     * @param {Integer} opts.idProduto C\u00F3digo de Identifica\u00E7\u00E3o do Produto (id).
     * @param {Integer} opts.idPessoa C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id).
     * @param {Integer} opts.idParentesco C\u00F3digo de Identifica\u00E7\u00E3o do Parentesco (id)
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00E3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.nomeImpresso Apresenta o nome a ser impresso no cart\u00E3o.
     * @param {Integer} opts.idTipoCartao Apresenta o c\u00F3digo de identifica\u00E7\u00E3o do tipo do cart\u00E3o (id), que ser\u00E1 utilizado para gerar os cart\u00F5es deste portador, vinculados a sua respectiva conta atrav\u00E9s do campo idConta.
     * @param {Integer} opts.flagAtivo Quanto ativa, indica que o cadastro do Portador est\u00E1 ativo, em emissores que realizam este tipo de gest\u00E3o.
     * @param {String} opts.dataCadastroPortador Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00E7\u00E3o.
     * @param {String} opts.dataCancelamentoPortador Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00E7\u00E3o.
     * @param {module:api/CadastroGeralApi~listarUsingGET34Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePortadorResponse}
     */
    this.listarUsingGET34 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET35 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Produtos do Emissor
     * Este m\u00E9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {String} opts.nome Descri\u00E7\u00E3o do Nome do Produto.
     * @param {Integer} opts.status Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo).
     * @param {Integer} opts.idFantasiaBasica C\u00F3digo de Identifica\u00E7\u00E3o da Fantasia B\u00E1sica (id) a qual o produto pertence.
     * @param {module:api/CadastroGeralApi~listarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageProdutoResponse}
     */
    this.listarUsingGET35 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET36 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePromotorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista promotores cadastrados na base do emissor
     * Este m\u00E9todo permite que sejam listados os cadastros de Promoteres existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo de Identifica\u00E7\u00E3o do promotor (id)
     * @param {String} opts.nome Nome do Promotor
     * @param {String} opts.dataCadastro Data da Inclus\u00E3o.
     * @param {Integer} opts.idEstabelecimento C\u00F3digo de Identifica\u00E7\u00E3o do Estabelecimento
     * @param {Integer} opts.idUsuario C\u00F3digo de Identifica\u00E7\u00E3o do usu\u00E1rio
     * @param {module:api/CadastroGeralApi~listarUsingGET36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePromotorResponse}
     */
    this.listarUsingGET36 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET44 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET44Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00F5es de Tipos de Endere\u00E7os do Emissor 
     * Este m\u00E9todo permite que sejam listados os Tipos de Endere\u00E7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Endere\u00E7o (id)
     * @param {String} opts.nome Nome do Tipo do Endere\u00E7o
     * @param {module:api/CadastroGeralApi~listarUsingGET44Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoEnderecoResponse}
     */
    this.listarUsingGET44 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET46 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET46Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de Telefones
     * Este m\u00E9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id).
     * @param {String} opts.nome Nome do Tipo do Telefone
     * @param {module:api/CadastroGeralApi~listarUsingGET46Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefoneResponse}
     */
    this.listarUsingGET46 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET52 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET52Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageControleVencimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Vencimentos
     * Este recurso permite que sejam listados os Vencimentos do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Indica a data de vencimento das faturas
     * @param {module:api/CadastroGeralApi~listarUsingGET52Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageControleVencimentoResponse}
     */
    this.listarUsingGET52 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET6 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista todos os atendimentos
     * Este m\u00E9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoAtendimento C\u00F3digo de Identifica\u00E7\u00E3o do Tipo de Atendimento (id)
     * @param {Integer} opts.idConta C\u00F3digo de identifica\u00E7\u00E3o de conta (id).
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {String} opts.dataAtendimento Apresenta a data em que o Atendimento foi realizado.
     * @param {module:api/CadastroGeralApi~listarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAtendimentoClienteResponse}
     */
    this.listarUsingGET6 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/CadastroGeralApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Bancos cadastrados para o Emissor
     * Este m\u00E9todo permite que sejam listados os Bancos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/CadastroGeralApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBancoResponse}
     */
    this.listarUsingGET8 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST2 operation.
     * @callback module:api/CadastroGeralApi~salvarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro um novo Atendimento do tipo Gen\u00E9rico para uma Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00F3digo de Identifica\u00E7\u00E3o da Conta a qual o Atendimento est\u00E1 associado
     * @param {String} opts.conteudoAtendimento Apresenta as informa\u00E7\u00F5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00E7\u00F5es relacionadas ao Atendimento.
     * @param {String} opts.detalhesAtendimento Apresenta os detalhes lan\u00E7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
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

    /**
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/CadastroGeralApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inserir campanha
     * Este m\u00E9todo permite que seja cadastrado uma nova campanha.
     * @param {module:model/CampanhaPersist} campanhaPersist campanhaPersist
     * @param {module:api/CadastroGeralApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.salvarUsingPOST5 = function(campanhaPersist, callback) {
      var postBody = campanhaPersist;

      // verify the required parameter 'campanhaPersist' is set
      if (campanhaPersist == undefined || campanhaPersist == null) {
        throw "Missing the required parameter 'campanhaPersist' when calling salvarUsingPOST5";
      }


      var pathParams = {
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST7 operation.
     * @callback module:api/CadastroGeralApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inserir os dados de configura\u00E7\u00E3o do rotativo de um produto
     * Este m\u00E9todo permite que seja cadastrado uma nova configura\u00E7\u00E3o do rotativo para um determinado produto.
     * @param {module:model/ConfiguracaoRotativoPersist} configuracaoRotativoPersist configuracaoRotativoPersist
     * @param {module:api/CadastroGeralApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    this.salvarUsingPOST7 = function(configuracaoRotativoPersist, callback) {
      var postBody = configuracaoRotativoPersist;

      // verify the required parameter 'configuracaoRotativoPersist' is set
      if (configuracaoRotativoPersist == undefined || configuracaoRotativoPersist == null) {
        throw "Missing the required parameter 'configuracaoRotativoPersist' when calling salvarUsingPOST7";
      }


      var pathParams = {
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

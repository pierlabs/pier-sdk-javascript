(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AtendimentoCliente', '../model/RiscoFraudeDetalhadoResponse', '../model/ModelDate', '../model/PageAtendimentoClientes', '../model/RiscoFraudeResponsePage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AtendimentoCliente'), require('../model/RiscoFraudeDetalhadoResponse'), require('../model/ModelDate'), require('../model/PageAtendimentoClientes'), require('../model/RiscoFraudeResponsePage'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.RiscoFraudeApi = factory(root.Pier.ApiClient, root.Pier.AtendimentoCliente, root.Pier.RiscoFraudeDetalhadoResponse, root.Pier.ModelDate, root.Pier.PageAtendimentoClientes, root.Pier.RiscoFraudeResponsePage);
  }
}(this, function(ApiClient, AtendimentoCliente, RiscoFraudeDetalhadoResponse, ModelDate, PageAtendimentoClientes, RiscoFraudeResponsePage) {
  'use strict';

  /**
   * RiscoFraude service.
   * @module api/RiscoFraudeApi
   * @version 2.15.5
   */

  /**
   * Constructs a new RiscoFraudeApi. 
   * @alias module:api/RiscoFraudeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/RiscoFraudeApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoCliente} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Atendimento
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Atendimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (idAtendimento).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id).
     * @param {module:api/RiscoFraudeApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoCliente}
     */
    this.consultarUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET";
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
      var returnType = AtendimentoCliente;

      return this.apiClient.callApi(
        '/api/atendimento-clientes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET10 operation.
     * @callback module:api/RiscoFraudeApi~consultarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
     * Consulta os detalhes de uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~consultarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
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
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the informarRiscoFraudeUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~informarRiscoFraudeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receber Risco Fraude
     * Receber risco fraude
     * @param {Array.<module:model/RiscoFraudeDetalhadoResponse>} detalhadoResponses detalhadoResponses
     * @param {module:api/RiscoFraudeApi~informarRiscoFraudeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.informarRiscoFraudeUsingPOST = function(detalhadoResponses, callback) {
      var postBody = detalhadoResponses;

      // verify the required parameter 'detalhadoResponses' is set
      if (detalhadoResponses == undefined || detalhadoResponses == null) {
        throw "Missing the required parameter 'detalhadoResponses' when calling informarRiscoFraudeUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/riscos-fraudes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET1 operation.
     * @callback module:api/RiscoFraudeApi~listarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAtendimentoClientes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista todos os atendimentos
     * Este m\u00C3\u00A9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idTipoAtendimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {module:model/ModelDate} opts.dataAtendimento Apresenta a data em que o Atendimento foi realizado.
     * @param {module:api/RiscoFraudeApi~listarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAtendimentoClientes}
     */
    this.listarUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageAtendimentoClientes;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/RiscoFraudeApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeResponsePage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as transa\u00C3\u00A7\u00C3\u00B5es com resolu\u00C3\u00A7\u00C3\u00A3o de risco fraude pendente
     * Este recurso permite que sejam listados os riscos de fraudes existentes
     * @param {Integer} idConta Id Conta
     * @param {module:model/String} confirmacaoFraude Confirma\u00C3\u00A7\u00C3\u00A3o da fraude
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/RiscoFraudeApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeResponsePage}
     */
    this.listarUsingGET14 = function(idConta, confirmacaoFraude, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET14";
      }

      // verify the required parameter 'confirmacaoFraude' is set
      if (confirmacaoFraude == undefined || confirmacaoFraude == null) {
        throw "Missing the required parameter 'confirmacaoFraude' when calling listarUsingGET14";
      }


      var pathParams = {
      };
      var queryParams = {
        'id_conta': idConta,
        'confirmacao_fraude': confirmacaoFraude,
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
      var returnType = RiscoFraudeResponsePage;

      return this.apiClient.callApi(
        '/api/riscos-fraudes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the negarUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~negarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Negar autenticidade da transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
     * Nega a realiza\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~negarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.negarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling negarUsingPOST";
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
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}/negar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reconhecerUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~reconhecerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reconhecer a transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
     * Confirma a autenticidade da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~reconhecerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.reconhecerUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling reconhecerUsingPOST";
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
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}/reconhecer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST1 operation.
     * @callback module:api/RiscoFraudeApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoCliente} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado
     * @param {String} opts.conteudoAtendimento Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento.
     * @param {String} opts.detalhesAtendimento Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {Date} opts.dataAtendimento Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {Date} opts.dataAgendamento Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {Date} opts.dataHoraInicioAtendimento Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {Date} opts.dataHoraFimAtendimento Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {Integer} opts.flagFilaFraude Flag fila fraude
     * @param {module:api/RiscoFraudeApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoCliente}
     */
    this.salvarUsingPOST1 = function(opts, callback) {
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
      var returnType = AtendimentoCliente;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

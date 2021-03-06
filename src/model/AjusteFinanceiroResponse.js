(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AjusteFinanceiroResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AjusteFinanceiroResponse model module.
   * @module model/AjusteFinanceiroResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AjusteFinanceiroResponse</code>.
   * {{{ajuste_financeiro_response_description}}}
   * @alias module:model/AjusteFinanceiroResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>AjusteFinanceiroResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AjusteFinanceiroResponse} obj Optional instance to populate.
   * @return {module:model/AjusteFinanceiroResponse} The populated <code>AjusteFinanceiroResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoAjuste')) {
        obj['idTipoAjuste'] = ApiClient.convertToType(data['idTipoAjuste'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataAjuste')) {
        obj['dataAjuste'] = ApiClient.convertToType(data['dataAjuste'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('identificadorExterno')) {
        obj['identificadorExterno'] = ApiClient.convertToType(data['identificadorExterno'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{ajuste_financeiro_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{ajuste_financeiro_response_id_tipo_ajuste_value}}}
   * @member {Integer} idTipoAjuste
   */
  exports.prototype['idTipoAjuste'] = undefined;

  /**
   * {{{ajuste_financeiro_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{ajuste_financeiro_response_data_ajuste_value}}}
   * @member {String} dataAjuste
   */
  exports.prototype['dataAjuste'] = undefined;

  /**
   * {{{ajuste_financeiro_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{ajuste_financeiro_response_identificador_externo_value}}}
   * @member {String} identificadorExterno
   */
  exports.prototype['identificadorExterno'] = undefined;

  /**
   * {{{ajuste_financeiro_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));

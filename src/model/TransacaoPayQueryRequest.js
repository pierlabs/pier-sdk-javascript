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
    root.Pier.TransacaoPayQueryRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoPayQueryRequest model module.
   * @module model/TransacaoPayQueryRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransacaoPayQueryRequest</code>.
   * {{{transacao_pay_query_request_description}}}
   * @alias module:model/TransacaoPayQueryRequest
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TransacaoPayQueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoPayQueryRequest} obj Optional instance to populate.
   * @return {module:model/TransacaoPayQueryRequest} The populated <code>TransacaoPayQueryRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('origem')) {
        obj['origem'] = ApiClient.convertToType(data['origem'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
      }
    }
    return obj;
  }


  /**
   * {{{transacao_pay_generic_request_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{transacao_pay_generic_request_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{transacao_pay_query_request_origem_value}}}
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * {{{global_menssagem_sort_sort}}}
   * @member {Array.<String>} sort
   */
  exports.prototype['sort'] = undefined;




  return exports;
}));

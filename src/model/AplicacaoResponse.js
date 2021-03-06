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
    root.Pier.AplicacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoResponse model module.
   * @module model/AplicacaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AplicacaoResponse</code>.
   * {{{aplicacao_response_description}}}
   * @alias module:model/AplicacaoResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>AplicacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoResponse} obj Optional instance to populate.
   * @return {module:model/AplicacaoResponse} The populated <code>AplicacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('tokenId')) {
        obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{aplicacao_dto_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{aplicacao_dto_token_value}}}
   * @member {Integer} tokenId
   */
  exports.prototype['tokenId'] = undefined;




  return exports;
}));

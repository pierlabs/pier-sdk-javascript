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
    root.Pier.TipoEstabelecimentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoEstabelecimentoResponse model module.
   * @module model/TipoEstabelecimentoResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TipoEstabelecimentoResponse</code>.
   * Resposta do recurso de tipo de estabelecimento
   * @alias module:model/TipoEstabelecimentoResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoEstabelecimentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoEstabelecimentoResponse} obj Optional instance to populate.
   * @return {module:model/TipoEstabelecimentoResponse} The populated <code>TipoEstabelecimentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do tipo estabelecimento (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00E7\u00E3o do tipo de estabelecimento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));

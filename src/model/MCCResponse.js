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
    root.Pier.MCCResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MCCResponse model module.
   * @module model/MCCResponse
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>MCCResponse</code>.
   * ObjetoMCC
   * @alias module:model/MCCResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>MCCResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MCCResponse} obj Optional instance to populate.
   * @return {module:model/MCCResponse} The populated <code>MCCResponse</code> instance.
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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do MCC (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * descricao do MCC.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
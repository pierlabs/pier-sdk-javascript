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
    root.Pier.EstagioCartaoUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EstagioCartaoUpdate model module.
   * @module model/EstagioCartaoUpdate
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>EstagioCartaoUpdate</code>.
   * {{{estagio_cartao_update_id}}}
   * @alias module:model/EstagioCartaoUpdate
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>EstagioCartaoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstagioCartaoUpdate} obj Optional instance to populate.
   * @return {module:model/EstagioCartaoUpdate} The populated <code>EstagioCartaoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{estagio_cartao_update_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
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
    root.Pier.TipoFaturamentoPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoPersist model module.
   * @module model/TipoFaturamentoPersist
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TipoFaturamentoPersist</code>.
   * TipoFaturamentoPersist
   * @alias module:model/TipoFaturamentoPersist
   * @class
   * @param descricao
   * @param flagApenasDemonstrativo
   */
  var exports = function(descricao, flagApenasDemonstrativo) {

    this['descricao'] = descricao;
    this['flagApenasDemonstrativo'] = flagApenasDemonstrativo;

  };

  /**
   * Constructs a <code>TipoFaturamentoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoPersist} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoPersist} The populated <code>TipoFaturamentoPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('flagApenasDemonstrativo')) {
        obj['flagApenasDemonstrativo'] = ApiClient.convertToType(data['flagApenasDemonstrativo'], 'Boolean');
      }
      if (data.hasOwnProperty('idConvenio')) {
        obj['idConvenio'] = ApiClient.convertToType(data['idConvenio'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Desci\u00E7\u00E3o do tipo de faturamento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Flag que representa que o faturamento ser\u00E1 apenas demonstrativo.
   * @member {Boolean} flagApenasDemonstrativo
   */
  exports.prototype['flagApenasDemonstrativo'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do convenio relacionado ao tipo de faturamento.
   * @member {Integer} idConvenio
   */
  exports.prototype['idConvenio'] = undefined;




  return exports;
}));

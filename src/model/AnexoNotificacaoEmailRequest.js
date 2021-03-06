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
    root.Pier.AnexoNotificacaoEmailRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnexoNotificacaoEmailRequest model module.
   * @module model/AnexoNotificacaoEmailRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AnexoNotificacaoEmailRequest</code>.
   * {{{anexo_notificacao_email_request_description}}}
   * @alias module:model/AnexoNotificacaoEmailRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AnexoNotificacaoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnexoNotificacaoEmailRequest} obj Optional instance to populate.
   * @return {module:model/AnexoNotificacaoEmailRequest} The populated <code>AnexoNotificacaoEmailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idDocumento')) {
        obj['idDocumento'] = ApiClient.convertToType(data['idDocumento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{anexo_notificacao_email_request_id_documento_value}}}
   * @member {Integer} idDocumento
   */
  exports.prototype['idDocumento'] = undefined;




  return exports;
}));

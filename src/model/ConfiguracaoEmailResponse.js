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
    root.Pier.ConfiguracaoEmailResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConfiguracaoEmailResponse model module.
   * @module model/ConfiguracaoEmailResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ConfiguracaoEmailResponse</code>.
   * {{{configuracao_email_response_description}}}
   * @alias module:model/ConfiguracaoEmailResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>ConfiguracaoEmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfiguracaoEmailResponse} obj Optional instance to populate.
   * @return {module:model/ConfiguracaoEmailResponse} The populated <code>ConfiguracaoEmailResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'String');
      }
      if (data.hasOwnProperty('portTLSSTARTTLS')) {
        obj['portTLSSTARTTLS'] = ApiClient.convertToType(data['portTLSSTARTTLS'], 'String');
      }
      if (data.hasOwnProperty('portSSL')) {
        obj['portSSL'] = ApiClient.convertToType(data['portSSL'], 'String');
      }
      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
      if (data.hasOwnProperty('requerAutenticacao')) {
        obj['requerAutenticacao'] = ApiClient.convertToType(data['requerAutenticacao'], 'Boolean');
      }
      if (data.hasOwnProperty('requerSSL')) {
        obj['requerSSL'] = ApiClient.convertToType(data['requerSSL'], 'Boolean');
      }
      if (data.hasOwnProperty('requerTLS')) {
        obj['requerTLS'] = ApiClient.convertToType(data['requerTLS'], 'Boolean');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{configuracao_email_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{configuracao_email_response_host_value}}}
   * @member {String} host
   */
  exports.prototype['host'] = undefined;

  /**
   * {{{configuracao_email_response_port_value}}}
   * @member {String} port
   */
  exports.prototype['port'] = undefined;

  /**
   * {{{configuracao_email_response_port_t_l_s_s_t_a_r_t_t_l_s_value}}}
   * @member {String} portTLSSTARTTLS
   */
  exports.prototype['portTLSSTARTTLS'] = undefined;

  /**
   * {{{configuracao_email_response_port_s_s_l_value}}}
   * @member {String} portSSL
   */
  exports.prototype['portSSL'] = undefined;

  /**
   * {{{configuracao_email_response_protocolo_value}}}
   * @member {String} protocolo
   */
  exports.prototype['protocolo'] = undefined;

  /**
   * {{{configuracao_email_response_requer_autenticacao_value}}}
   * @member {Boolean} requerAutenticacao
   */
  exports.prototype['requerAutenticacao'] = undefined;

  /**
   * {{{configuracao_email_response_requer_s_s_l_value}}}
   * @member {Boolean} requerSSL
   */
  exports.prototype['requerSSL'] = undefined;

  /**
   * {{{configuracao_email_response_requer_t_l_s_value}}}
   * @member {Boolean} requerTLS
   */
  exports.prototype['requerTLS'] = undefined;

  /**
   * {{{configuracao_email_response_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * {{{configuracao_email_response_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{configuracao_email_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{configuracao_email_response_data_alteracao_value}}}
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;




  return exports;
}));

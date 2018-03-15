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
    root.Pier.ProdutoDetalhesResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProdutoDetalhesResponse model module.
   * @module model/ProdutoDetalhesResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>ProdutoDetalhesResponse</code>.
   * ProdutoDetalhes
   * @alias module:model/ProdutoDetalhesResponse
   * @class
   * @param id
   * @param nome
   * @param status
   */
  var exports = function(id, nome, status) {

    this['id'] = id;
    this['nome'] = nome;
    this['status'] = status;



  };

  /**
   * Constructs a <code>ProdutoDetalhesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProdutoDetalhesResponse} obj Optional instance to populate.
   * @return {module:model/ProdutoDetalhesResponse} The populated <code>ProdutoDetalhesResponse</code> instance.
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('idFantasiaBasica')) {
        obj['idFantasiaBasica'] = ApiClient.convertToType(data['idFantasiaBasica'], 'Integer');
      }
      if (data.hasOwnProperty('fantasiaBasica')) {
        obj['fantasiaBasica'] = ApiClient.convertToType(data['fantasiaBasica'], 'String');
      }
      if (data.hasOwnProperty('usoExterior')) {
        obj['usoExterior'] = ApiClient.convertToType(data['usoExterior'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Produto (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00E7\u00E3o do Nome do Produto.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Representa o Status do Produto, onde: (\"0\": Inativo), (\"1\": Ativo).
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da Fantasia B\u00E1sica (id) a qual o produto pertence.
   * @member {Integer} idFantasiaBasica
   */
  exports.prototype['idFantasiaBasica'] = undefined;

  /**
   * Descri\u00E7\u00E3o da Fantasia B\u00E1sica a qual o produto pertence.
   * @member {String} fantasiaBasica
   */
  exports.prototype['fantasiaBasica'] = undefined;

  /**
   * Par\u00E2metro que indica se o produto est\u00E1 habilitado para compras no exterior.
   * @member {Boolean} usoExterior
   */
  exports.prototype['usoExterior'] = undefined;




  return exports;
}));

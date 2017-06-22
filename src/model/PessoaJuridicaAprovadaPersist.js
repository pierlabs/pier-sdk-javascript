(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './EnderecoAprovadoPersist', './PessoaPersist', './TelefonePessoaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnderecoAprovadoPersist'), require('./PessoaPersist'), require('./TelefonePessoaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaJuridicaAprovadaPersist = factory(root.Pier.ApiClient, root.Pier.EnderecoAprovadoPersist, root.Pier.PessoaPersist, root.Pier.TelefonePessoaAprovadaPersist);
  }
}(this, function(ApiClient, EnderecoAprovadoPersist, PessoaPersist, TelefonePessoaAprovadaPersist) {
  'use strict';

  /**
   * The PessoaJuridicaAprovadaPersist model module.
   * @module model/PessoaJuridicaAprovadaPersist
   * @version 2.16.6
   */

  /**
   * Constructs a new <code>PessoaJuridicaAprovadaPersist</code>.
   * PessoaJuridicaAprovadaPersist
   * @alias module:model/PessoaJuridicaAprovadaPersist
   * @class
   * @param razaoSocial
   * @param cnpj
   * @param dataAberturaEmpresa
   * @param idOrigemComercial
   * @param idProduto
   * @param diaVencimento
   * @param enderecos
   */
  var exports = function(razaoSocial, cnpj, dataAberturaEmpresa, idOrigemComercial, idProduto, diaVencimento, enderecos) {

    this['razaoSocial'] = razaoSocial;

    this['cnpj'] = cnpj;

    this['dataAberturaEmpresa'] = dataAberturaEmpresa;
    this['idOrigemComercial'] = idOrigemComercial;
    this['idProduto'] = idProduto;



    this['diaVencimento'] = diaVencimento;


    this['enderecos'] = enderecos;

  };

  /**
   * Constructs a <code>PessoaJuridicaAprovadaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PessoaJuridicaAprovadaPersist} obj Optional instance to populate.
   * @return {module:model/PessoaJuridicaAprovadaPersist} The populated <code>PessoaJuridicaAprovadaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('razaoSocial')) {
        obj['razaoSocial'] = ApiClient.convertToType(data['razaoSocial'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasia')) {
        obj['nomeFantasia'] = ApiClient.convertToType(data['nomeFantasia'], 'String');
      }
      if (data.hasOwnProperty('cnpj')) {
        obj['cnpj'] = ApiClient.convertToType(data['cnpj'], 'String');
      }
      if (data.hasOwnProperty('inscricaoEstadual')) {
        obj['inscricaoEstadual'] = ApiClient.convertToType(data['inscricaoEstadual'], 'String');
      }
      if (data.hasOwnProperty('dataAberturaEmpresa')) {
        obj['dataAberturaEmpresa'] = ApiClient.convertToType(data['dataAberturaEmpresa'], 'String');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorrente')) {
        obj['numeroContaCorrente'] = ApiClient.convertToType(data['numeroContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaPersist]);
      }
      if (data.hasOwnProperty('enderecos')) {
        obj['enderecos'] = ApiClient.convertToType(data['enderecos'], [EnderecoAprovadoPersist]);
      }
      if (data.hasOwnProperty('socios')) {
        obj['socios'] = ApiClient.convertToType(data['socios'], [PessoaPersist]);
      }
    }
    return obj;
  }


  /**
   * Apresenta o nome completo da raz\u00C3\u00A3o social (nome empresarial)'.
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * Apresenta o nome fantasia da empresa.
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * N\u00C3\u00BAmero do Cadastro Nacional de Pessoa Juridica (CNPJ)
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * N\u00C3\u00BAmero da Inscri\u00C3\u00A7\u00C3\u00A3o Estadual (IE).
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * Data de abertura da empresa, essa data deve ser informada no formato: aaaa-MM-dd.
   * @member {String} dataAberturaEmpresa
   */
  exports.prototype['dataAberturaEmpresa'] = undefined;

  /**
   * Id da origem comercial
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * Id do produto
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da conta corrente.
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * Email da empresa
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Dia vencimento
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * Nome que deve ser impresso no cart\u00C3\u00A3o
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Apresenta os telefones da empresa
   * @member {Array.<module:model/TelefonePessoaAprovadaPersist>} telefones
   */
  exports.prototype['telefones'] = undefined;

  /**
   * Pode ser informado os seguintes tipos de endere\u00C3\u00A7o: Residencial, Comercial, e Outros
   * @member {Array.<module:model/EnderecoAprovadoPersist>} enderecos
   */
  exports.prototype['enderecos'] = undefined;

  /**
   * Apresenta os dados dos s\u00C3\u00B3cios da empresa, caso exista
   * @member {Array.<module:model/PessoaPersist>} socios
   */
  exports.prototype['socios'] = undefined;




  return exports;
}));
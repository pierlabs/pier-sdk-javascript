# Pier.CartaoDetalheResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | [optional] 
**idStatusCartao** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id). | [optional] 
**idEstagioCartao** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | [optional] 
**idConta** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id). | [optional] 
**idPessoa** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id) | [optional] 
**idProduto** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id). | [optional] 
**tipoPortador** | **String** | Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional). | [optional] 
**numeroCartao** | **String** | Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o. | [optional] 
**nomeImpresso** | **String** | Apresenta o nome impresso no cart\u00C3\u00A3o. | [optional] 
**dataGeracao** | **String** | Apresenta a data em que o cart\u00C3\u00A3o foi gerado. | [optional] 
**dataStatusCartao** | **String** | Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**dataEstagioCartao** | **String** | Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**dataValidade** | **String** | Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver. | [optional] 
**dataImpressao** | **String** | Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica. | [optional] 
**arquivoImpressao** | **String** | Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver. | [optional] 
**flagImpressaoOrigemComercial** | **Integer** | Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial. | [optional] 
**flagVirtual** | **Integer** | Apresenta o status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual. | [optional] 
**codigoDesbloqueio** | **String** | Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade. | [optional] 
**sequencialCartao** | **Integer** | N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o | [optional] 
**descricaoTipoCartao** | **String** | Descreve o tipo do cart\u00C3\u00A3o. | [optional] 
**tipoCartao** | **Integer** | Indica o identificador do tipo do cart\u00C3\u00A3o. | [optional] 


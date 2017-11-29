# Pier.DadosCartaoImpressaoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idConta** | **Integer** | O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) a qual o cart\u00C3\u00A3o gerado pertence. | [optional] 
**idPessoa** | **Integer** | O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) portadora do cart\u00C3\u00A3o gerado. | [optional] 
**idCartao** | **Integer** | O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) que foi gerado. | [optional] 
**idBandeira** | **Integer** | O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Bandeira (id) a qual o Cart\u00C3\u00A3o pertence, quando bandeirado. | [optional] 
**idTipoCartao** | **Integer** | O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id) atribu\u00C3\u00ADdo ao Cart\u00C3\u00A3o. | [optional] 
**numeroCartao** | **String** | O n\u00C3\u00BAmero do cart\u00C3\u00A3o. | [optional] 
**nomePlastico** | **String** | O nome do Portador do Cart\u00C3\u00A3o. | [optional] 
**cvv2** | **String** | O n\u00C3\u00BAmero do CVV a ser impresso no Cart\u00C3\u00A3o | [optional] 
**dataGeracao** | **String** | Apresenta a data de emiss\u00C3\u00A3o do Cart\u00C3\u00A3o. | [optional] 
**dataValidade** | **String** | Apresenta a data de Validade do Cart\u00C3\u00A3o. | [optional] 
**cpf** | **String** | O CPF do Portador do Cart\u00C3\u00A3o. | [optional] 
**tipoPortador** | **String** | O tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional). | [optional] 
**trilha1** | **String** | Os dados da Trilha1, seguindo as regras de trilha do emissor. | [optional] 
**trilha2** | **String** | Os dados da Trilha2, seguindo as regras de trilha do emissor. | [optional] 
**trilhaCVV1** | **String** | Os dados da TrilhaCVV01, seguindo as regras de trilha do emissor. | [optional] 
**trilhaCVV2** | **String** | Os dados da TrilhaCVV02, seguindo as regras de trilha do emissor. | [optional] 
**flagVirtual** | **Integer** | O status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual  | [optional] 
**nomeBandeira** | **String** | Nome da Bandeira | [optional] 
**flagTitular** | **Integer** | Flag Indicativo de Titularidade da Conta | [optional] 
**sequencialCartao** | **Integer** | C\u00C3\u00B3digo Sequencial do Cart\u00C3\u00A3o | [optional] 
**idStatus** | **Integer** | Identificador do Status do Cart\u00C3\u00A3o | [optional] 
**descricaoStatusCartao** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o | [optional] 
**dataStatus** | **String** | Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**idEstagio** | **Integer** | Identificador do Est\u00C3\u00A1gio do Cart\u00C3\u00A3o. | [optional] 
**descricaoEstagio** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do Estagio do Cart\u00C3\u00A3o. | [optional] 
**dataEstagio** | **String** | Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**numeroBin** | **String** | N\u00C3\u00BAmero do Bin do Cart\u00C3\u00A3o | [optional] 
**idProduto** | **Integer** | Identificador do Produto Associado a Conta | [optional] 
**descricaoProduto** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do produto | [optional] 
**idStatusConta** | **Integer** | Identificador do Status da Conta | [optional] 
**descricaoStatusConta** | **Integer** | Descri\u00C3\u00A7\u00C3\u00A3o do status da conta | [optional] 
**dataEmbossing** | **String** | Data que o cart\u00C3\u00A3o foi embossado | [optional] 
**codigoDesbloqueio** | **String** | C\u00C3\u00B3digo de desbloqueio do cart\u00C3\u00A3o | [optional] 
**nomePessoa** | **String** | O &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;. | [optional] 
**tipoPessoa** | **String** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica). | [optional] 
**dataNascimento** | **String** | Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. | [optional] 
**idEndereco** | **Integer** | Identificador do Endere\u00C3\u00A7o do titular do cart\u00C3\u00A3o | [optional] 
**idTipoEndereco** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
**descricaoTipoEndereco** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do Tipo de Endere\u00C3\u00A7o | [optional] 
**cep** | **String** | O C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
**logradouro** | **String** | Nome do Logradouro | [optional] 
**numeroEndereco** | **String** | N\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
**complementoEndereco** | **String** | Descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
**bairro** | **String** | Nome do bairro | [optional] 
**cidade** | **String** | Nome do cidade | [optional] 
**uf** | **String** | Unidade federativa | [optional] 
**pais** | **String** | Nome do pa\u00C3\u00ADs | [optional] 


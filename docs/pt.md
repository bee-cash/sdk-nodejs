# Bee SDK Node.Js

É uma biblioteca desenvolvida para php com intuito de facilitar a conexão entre os desenvolvedores e a [Bee](https://bee.cash).  

## Confira as moedas aceitas pela [Bee](https://bee.cash)  

| Nome | Código da moeda |
|:------|:-----:|
| Bitcoin | btc |
| Litecoin | ltc |
| Dogecoin | doge |
| Real | brl |  

**Observação:** O campo **Código da moeda** informado na tabela acima equivale ao campo **coin** nos metódos que você irá conhecer abaixo.  

## Como usar?

Para começar a usar a biblioteca, você precisa ter um cadastro na [Bee](https://bee.cash) e gerar o seu token de acesso.  

Agora que você possui seu token, vamos conectar a biblioteca:

**1: Inclua a biblioteca**
```javascript
const Bee = require('./src/bee')

const bee = Bee('meu token')
```  

**2: Inicie a instância** 
```javascript
bee = Bee('seu-token')	
```  

Pronto nossa biblioteca está conectada com a [Bee](https://bee.cash).  

Agora vamos conhecer os metódos disponíveis:

## **_altcoin_address_create_**

Responsável por criar endereços de depósito para altcoins.  

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| coin | string | sim | código da moeda na qual o endereço deve ser gerado. |
| notification_url | string | não | url para envio das notificações de depósito referêntes a este endereço. |
| reference | string | não | informe algo que sirva de referencia pra você. |
| label | string | não | descrição de identificação do endereço. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados do endereço criado. |

#### Exemplo:

```javascript
bee.altcoin_address_create({
   coin: 'btc',
   label: 'Endereco BTC'
}).then((response) {
    console.log(response)
})
```

&#160;

## **_altcoin_withdrawal_create_**

Responsável por realizar saques de altcoins.  

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| address | string | sim | endereço para onde será enviado o saque. |
| amount | float | sim | valor do saque. |
| coin | string | sim | código da moeda na qual o endereço deve ser gerado. |
| notification_url | string | não | url para envio das notificações desta retirada. |
| reference | string | não | informe algo que sirva de referencia pra você. |
| label | string | não | descrição de identificação da retirada. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados da retirada. |

#### Exemplo:

```javascript
bee.altcoin_withdrawal_create({
   address: '18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX',
   amount: 0.01,
   coin: 'btc',
   label: 'saque para minha carteira'
}).then((response) {
    console.log(response)
})
```

&#160;

## **_balance_**

Responsável por buscar o saldo da sua conta.  

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| coin | string | não | código da moeda na qual você quer buscar o saldo. |

**Retorno (informando o código da moeda)**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com o saldo da moeda informada. |

**Retorno (não informando o código da moeda)**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com o saldo de todas as moedas disponíveis. |

#### Exemplo:


```javascript
bee.balance('btc').then((response) {
    console.log(response)
})
```

```javascript
bee.balance().then((response) {
    console.log(response)
})
```

&#160;

## **_bank_deposit_boleto_create_**

Responsável por criar um boleto de depósito.  
Nessa modalidade você pode criar boletos sem precisar cadastrar um cliente, observe que nessa requisição, você sempre será o sacado do boleto. 

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| coin | string | não | código da moeda na qual a cobrança deve ser gerada, se não enviar, vamos considerar **brl**. |
| amount | float | sim | valor do boleto. |
| due_at | date | sim | data de vecimento do boleto. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados do boleto de depósito criado. |

#### Exemplo:

```javascript
bee.bank_deposit_boleto_create({
   amount: 59.99,
   due_at:'2020-04-29',
})
```

&#160;

## **_coin_list_**

Responsável por listar todas as moedas aceitas pela [Bee](https://bee.cash).  

**Parâmetros**

nenhum.

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com todas as moedas disponíveis. |

#### Exemplo:

```javascript
bee.coin_list().then((response) {
    console.log(response)
})
```

&#160;

## **_coin_info_**

Responsável por buscar as informações de uma moeda.  

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| coin | string | sim | moeda que deseja obter informações. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados da moeda. |

#### Exemplo:

```javascript
bee.coin_info('btc').then((response) {
    console.log(response)
})
```

&#160;

## **_charge_boleto_create_**

Responsável por criar de cobrança.  
Geralmente utilizado para que seus clientes façam pagamentos dentro da [Bee](https://bee.cash) e seu sistema seja avisado deste pagamento. 

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| coin | string | não | código da moeda na qual a cobrança deve ser gerada, se não enviar, vamos considerar **brl**. |
| amount | float | sim | valor do boleto. |
| client_id | int | sim | informe o id do cliente titular da cobrança |
| due_at | date | sim | data de vecimento do boleto. |
| notification_url | string | não | url para envio das notificações de depósito referêntes a este boleto. |
| reference | string | não | informe algo que sirva de referencia pra você. |
| installments | int | não | quantidade de parcelas. |
| recurrence_interval | int | não | intervalo de recorrência em meses para gerar o boleto. |
| interest | float | não | percentual de juros ao mês sobre o valor da cobrança para pagamento após o vencimento. |
| fine | float | não | percentual de multa sobre o valor da cobrança para pagamento após o vencimento. | 
| send_by_email | bool | não | informe **true**, pra gente enviar o boleto por email ou **false** para não enviar.
| label | string | não | nome de identificação da fatura. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados do boleto criado. |

#### Exemplo:

```javascript
bee.charge_boleto_create({
   amount: 59.99,
   client_id: 5,
   due_at: '2020-04-29',
   label: 'Cobrança referente a compra de tenis sport'
}).then((response) {
    console.log(response)
})
```

&#160;

## **_charge_boleto_receive_in_cash_**

Responsável por marcar o boleto como recebido em dinheiro.  

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| boleto_id | int | sim | id do boleto a ser recebido |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |

#### Exemplo:

```javascript
bee.charge_boleto_receive_in_cash(boleto_id)
```

&#160;

## **_charge_client_create_**

Responsável por criar um cliente para cobranças.

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| name | string | sim | nome completo do cliente. |
| documento | string | sim | cpf/cnpj do cliente, pode ser informado com o sem máscara. |
| email | string | sim | email do cliente |
| address.neighborhood | string | sim | bairro do cliente. |
| address.street | string | sim | rua/avenida do cliente. |
| address.zip_code | string | sim | cep do cliente, pode ser com ou sem máscara. |
| address.number | int | não | número da residencia do cliente. |
| address.complement | string | não | complemento, por ex: casa, lote, bloco. |
| phone.number | string | sim | número de telefone, pode ser com ou sem máscara. |
| phone.label | string | não | breve descrição, por ex: celular pessoal. |
| phone.is_whatsapp | bool | não | informe **true** se for whatsapp ou **false** se não for. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados do cliente criado. |

#### Exemplo:

```python
bee.charge_client_create({
   name: 'João Silva',
   document: '123.456.789-10',
   email: 'joao_silva@provedor.com',
   address: {
        neighborhood: 'setor balneário',
        street: 'av. nerópolis',
        zip_code: '74590-510'
   },
   phone: {
        number: '(12) 23456-7891'
   }
}).then((response) {
    console.log(response)
})
```

&#160;

## **_transfer_create_**

Responsável por tranferir dinheiro para outro usuário.    

**Parâmetros**

| Campo | Tipo | Obrigatório | Descrição |
|:------|:-----|:-----------:|:----------|
| amount | float | sim | valor da transferência. |
| coin | string | sim | código da moeda a ser transferida. |
| username | string | sim | nome de usuário a quem deseja tranferir. |
| label | string | não | descrição sobre essa transferência, ex: pagamento de lanche. |

**Retorno**

Campo | Tipo | Descrição
:----|:----|:---------
success | boolean  | **true** em caso de sucesso  **false** em caso de falha. |
errors | array | erros ocorridos durante a solicitação. este campo só existirá caso success seja **false**. |
result | array | array com os dados da transferência. |

#### Exemplo:

```javascript
bee.transfer_create({
   username: 'nome-de-usuario',
   amount: 100,
   coin: 'brl'
}).then((response) {
    console.log(response)
})
```
# Validação de Cartão de Crédito
---

**Esta biblioteca se destina à validação de cartões de crédito.** 
Na versão atual é possivel verificar se o número inserido é ou não válido inserindo apenas os números, sem opção de dígitos.

## Os métodos utilizados na biblioteca são:
---

**cardValidator(cardNumber);**

Exemplo de uso:

```javascript
$node
	let lib = require("card-validator-karina")
	lib.cardValidator(234567);
=> true
```

## Instalação
---

+ Certifique-se de já possuir o node e o npm instalados. Para mais informações, visite o [site oficial][npm].
+ proceda com a instalação com:

```javascript
$npm install card-validator-karina
```

### RoadMap do Projeto
----

#### Versão 3.0.0 (sem previsão)
+ Possibilidade de identificar a bandeira do cartão (mostrando imagem)
+ Retornar o resultado ocultando os números do cartão com * e mostrando apenas os 4 últimos dígitos.

#### Versão 2.0.0 (sem previsão)
+ Validar data de vencimento do cartão
+ Validar código de segurança do cartão

#### Versão 1.0.1 (publicada)
+ README.md adicionado
+ Retorno da função melhorado

#### Versão 1.0.0 (publicada)
+ Validação do número de cartão
+ Garante entrada apenas de números
+ Uso do Algoritmo de Luhn
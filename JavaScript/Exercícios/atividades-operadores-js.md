# 📚 Atividades de JavaScript — Operadores para Iniciantes

> Pratique os operadores aritméticos, lógicos e de comparação com exercícios progressivos.

---

## ➕ Operadores Aritméticos

> `+` `-` `*` `/` `%` `**`

1. **Calculadora simples** — Declare duas variáveis numéricas e exiba o resultado da soma, subtração, multiplicação e divisão entre elas.

2. **Resto da divisão** — Dado um número fornecido pelo usuário, verifique se ele é par ou ímpar usando o operador `%`.

3. **Potência** — Calcule o quadrado e o cubo de um número usando o operador `**`.

4. **Conversão de temperatura** — Converta uma temperatura de Celsius para Fahrenheit usando a fórmula `F = (C * 9/5) + 32`.

5. **Média aritmética** — Receba três notas e calcule a média usando operadores aritméticos. Exiba o resultado com duas casas decimais.

6. **Cálculo de troco** — Simule um caixa: dado o preço de um produto e o valor pago, calcule e exiba o troco.

---

## ⚖️ Operadores de Comparação

> `==` `===` `!=` `!==` `>` `<` `>=` `<=`

7. **Igual ou diferente?** — Compare dois valores usando `==` e `===`. Observe e explique a diferença entre os resultados.

8. **Maior ou menor?** — Dados dois números, exiba qual é o maior usando os operadores `>` e `<`.

9. **Aprovado ou reprovado?** — Dada uma nota, verifique se o aluno foi aprovado (nota `>=` 7) ou reprovado usando um operador de comparação dentro de um `console.log`.

10. **Verificação de idade** — Pergunte a idade do usuário e verifique se ele tem 18 anos ou mais, usando `>=`.

11. **Comparação de strings** — Compare duas strings com `===` e `!==`. Teste com palavras iguais, diferentes e com diferença de maiúsculas/minúsculas.

12. **Faixa de preço** — Verifique se um produto custa entre R$ 10 e R$ 100 usando operadores de comparação.

---

## 🔗 Operadores Lógicos

> `&&` `||` `!`

13. **E lógico (`&&`)** — Verifique se um número é ao mesmo tempo positivo **e** par. Exiba `true` ou `false`.

14. **OU lógico (`||`)** — Verifique se um usuário digitou o nome `"admin"` **ou** `"root"` para simular um login simples.

15. **NÃO lógico (`!`)** — Dada uma variável booleana `logado`, use `!` para inverter seu valor e exiba uma mensagem correspondente.

16. **Validação de formulário** — Simule a validação de um cadastro: o usuário deve ter mais de 18 anos **e** ter informado um e-mail (string não vazia).

17. **Desconto especial** — Um produto tem desconto se o cliente for assinante **ou** se o total da compra for maior que R$ 200. Use `||` para verificar.

18. **Acesso restrito** — Verifique se um usuário pode acessar um conteúdo: ele deve ser maior de idade **e** ter uma conta ativa **e** não estar banido. Use `&&` e `!` juntos.

---

## 🚀 Desafios Combinados

19. **Par e dentro do intervalo** — Verifique se um número é par **e** está entre 1 e 100. Use `%`, `&&`, `>=` e `<=`.

20. **Classificação de nota** — Dada uma nota de 0 a 10:
    - `>= 9` → Excelente
    - `>= 7` → Aprovado
    - `>= 5` → Recuperação
    - `< 5` → Reprovado

    Use operadores de comparação e lógicos para classificar.

21. **Calculadora de IMC** — Calcule o IMC (`peso / altura²`) e use operadores de comparação para classificar o resultado em: Abaixo do peso, Normal, Sobrepeso ou Obesidade.

22. **Jogo de adivinhar o número** — Gere um número fixo (ex: `42`) e compare com o palpite do usuário. Exiba se é igual, maior ou menor usando `===`, `>` e `<`.

---

*💡 Dica: Use `console.log()` para exibir todos os resultados e teste seus códigos no navegador ou no Node.js.*

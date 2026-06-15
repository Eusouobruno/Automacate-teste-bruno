Feature: Busca de Produto

Scenario: Buscar produto existente
  Given que estou na página de produtos
  When pesquiso por "Blue Top"
  Then o produto deve aparecer na listagem

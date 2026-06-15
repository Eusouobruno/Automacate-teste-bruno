Feature: Carrinho

Scenario: Adicionar produto ao carrinho
  Given que estou na página de produtos
  When adiciono um item ao carrinho
  Then o produto deve ser exibido no carrinho

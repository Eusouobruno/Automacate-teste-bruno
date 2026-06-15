Feature: Pesquisa de produtos API

Scenario: Pesquisar tablets
  Given que a API está disponível
  When realizo uma busca por tablet
  Then o retorno deve ser 200
  And a categoria retornada deve ser TABLETS

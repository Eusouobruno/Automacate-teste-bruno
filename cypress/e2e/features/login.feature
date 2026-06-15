Feature: Login

Scenario: Login com sucesso
  Given que estou na página de login
  When informo um e-mail válido
  And informo uma senha válida
  And clico em Login
  Then devo acessar minha conta

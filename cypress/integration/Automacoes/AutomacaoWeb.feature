Feature: Adicionar um produto no carrinho com sucesso

  Scenario: Adicionar um produto no carrinho com sucesso
    Given que esteja logado no site
    When realizar a busca pelo produto dresss
    And adiciono o vestido no carrinho
    Then valido os produtos inseridos no carrinho

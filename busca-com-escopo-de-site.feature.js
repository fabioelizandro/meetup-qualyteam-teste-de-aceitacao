Feature('Busca com escopo de site');

Before((I) => {
  I.amOnPage('/');
  I.waitForElement('input');
});

Scenario('site e conteúdo encontrados', (I) => {
  I.fillField('q', 'site:rilix.com.br sobre');
  I.click('form [type=submit]');
  I.waitForText('2 resultados');
  I.see('rilix.com.br/sobre/');
  I.see('www.rilix.com.br/');
});

Scenario('site encontrado e conteúdo não encontrado', (I) => {
  I.fillField('q', 'site:rilix.com.br conteúdo não existente');
  I.click('form [type=submit]');
  I.waitForText('Sua pesquisa - site:rilix.com.br conteúdo não existente - não encontrou nenhum documento correspondente.');
});

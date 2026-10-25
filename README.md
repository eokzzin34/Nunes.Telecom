# Nunes Telecom — site profissional revisado

Site institucional responsivo em HTML, CSS e JavaScript puro. A identidade original em vermelho, grafite e branco foi preservada, com aplicação padronizada da logo em fundos brancos, hierarquia visual refinada e apresentação adaptada a celulares, tablets e computadores.

## Visualizar e publicar

Abra `index.html` no navegador ou envie todo o conteúdo desta pasta para a hospedagem estática de sua preferência, preservando `assets/img/`, `style.css` e `script.js`. Não exige instalação de dependências, banco de dados ou backend. Para visualizar com um servidor local, use `python3 -m http.server 3000` dentro desta pasta.

## O que mudou

A mesma logo é usada no cabeçalho e no rodapé, sem distorção, com as margens brancas excedentes recortadas. Os arquivos originais da logo continuam em `assets/img/`. As seções agora usam fundos neutros coerentes e o vermelho aparece como cor de destaque. Os ícones foram padronizados, os botões possuem estados de foco e a navegação foi refinada para celular e teclado.

Os serviços agora possuem áreas de imagem fáceis de atualizar. Entre em `assets/img/servicos/` e substitua os arquivos pelos nomes indicados no README daquela pasta. Não é necessário mexer no CSS ou no JavaScript: se a foto estiver no caminho correto, ela aparece automaticamente; se ainda não estiver, o card mostra uma área de espera bem identificada. As duas fotografias gerais atuais são ilustrativas, obtidas por busca no Unsplash e armazenadas localmente em WebP. Não são apresentadas como instalações reais da Nunes Telecom. As fontes usam Google Fonts; há fontes alternativas locais caso a conexão não esteja disponível.

## Contatos preservados do arquivo enviado

WhatsApp/telefone: (34) 99668-4714. E-mail: carlisma.nunes@gmail.com. Região de atendimento: Uberlândia e região. O nome exibido segue a logo fornecida: **Nunes Telecom**.

Antes de publicar, confirme a atualidade dos contatos e dos sete serviços anunciados. Não foram acrescentados avaliações, certificações, depoimentos, garantias, prazos, preços ou números de experiência sem informação da empresa.

## Imagens

Logo: arquivos fornecidos pelo usuário. Fotografias ilustrativas: resultados públicos do Unsplash em https://unsplash.com/s/photos/security-cameras e https://unsplash.com/s/photos/home-security. Quando houver fotos próprias das instalações, recomendamos substituí-las mantendo o caminho no HTML e uma descrição alternativa adequada.

## Abrir do jeito simples

Este site é estático, como o arquivo original enviado. Não precisa de servidor, Python, Node ou Live Server.

No Windows, basta dar dois cliques em **ABRIR-SITE.bat**. Ele abrirá diretamente o `index.html` no navegador padrão. Também é possível dar dois cliques diretamente no arquivo `index.html`.

Para editar o site, abra a pasta `nunes-telecom-site` no VS Code. Para visualizar, use o arquivo **ABRIR-SITE.bat** fora do VS Code. O F5 do VS Code foi removido de propósito para não depender de servidor local.

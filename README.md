# Tela de Carregamento com Vídeo para RedM

Este projeto implementa uma tela de carregamento personalizada para servidores RedM usando um vídeo como plano de fundo. A tela de carregamento foi projetada para ser visualmente atraente e fácil de configurar, proporcionando aos jogadores uma introdução envolvente ao servidor.

## Recursos

- Vídeo de fundo em fullscreen.
- Reprodução automática de vídeo com som.
- O vídeo é exibido em loop contínuo até que o carregamento seja concluído.

## Estrutura de Arquivos

O recurso inclui os seguintes arquivos:
- `fxmanifest.lua` - Manifesto do recurso.
- `index.html` - Arquivo HTML para a tela de carregamento.
- `video.mp4` - Arquivo de vídeo usado como plano de fundo.

## Instalação

Para instalar a tela de carregamento em seu servidor RedM, siga estas etapas:

1. Clone este repositório ou faça download dos arquivos para sua máquina local.
2. Copie a pasta do recurso para o diretório `resources` do seu servidor RedM.
3. Adicione a linha `ensure nome_da_pasta` ao seu arquivo de configuração `server.cfg`, substituindo `nome_da_pasta` pelo nome da pasta onde você copiou os arquivos.
4. Reinicie seu servidor para as mudanças terem efeito.

## Configuração

### Mudar o Vídeo
Para alterar o vídeo de fundo:
1. Substitua o arquivo `video.mp4` na pasta do recurso pelo novo vídeo que deseja usar.
2. Certifique-se de que o novo arquivo de vídeo também seja nomeado como `video.mp4`, ou atualize a referência no arquivo `index.html`.

### Ajustes de Volume
Recomenda-se ajustar o volume do vídeo antes de carregá-lo no servidor para garantir que não esteja muito alto ou muito baixo. Use um editor de vídeo para modificar o volume conforme necessário.

## Contribuições

Contribuições para este projeto são bem-vindas. Se você tiver sugestões de melhorias ou correções, sinta-se à vontade para abrir um pull request ou issue.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para mais detalhes.

## Autor

Duzy

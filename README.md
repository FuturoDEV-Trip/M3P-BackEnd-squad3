# Viagem365
 
## Visão: 
### A iniciativa "Viagem365" surge como uma celebração da Ilha da Magia, convidando os moradores de Florianópolis e arredores a redescobrir sua própria cidade. Este projeto propõe uma aplicação que conecta pessoas com interesses similares em explorar as belezas escondidas da ilha, incentivando a pergunta: “Por que não ser turista em sua própria cidade?”

### Assim, esses grupos se formariam com base no interesse comum em conhecer novos lugares na ilha, facilitando o encontro de companheiros de viagem para compartilhar caronas ou viagens de ônibus, em um modelo similar ao “blablacar”. O objetivo é fortalecer laços sociais e incentivar a descoberta coletiva de trilhas, praias, mirantes, e outros tesouros locais.

### A longo prazo, a plataforma poderá servir como um canal para promover o comércio local, destacando estabelecimentos que muitas vezes não têm visibilidade devido à falta de investimento em marketing. Isso não apenas apoia a economia local, mas também enriquece a experiência cultural dos usuários.

### Exemplo Prático: Imagine um grupo de cinco entusiastas ansiosos para explorar o “Morro das Pedras”. Utilizando o Viagem365, eles se conectam via WhatsApp, planejam o passeio e, através de recomendações no app, descobrem um ponto de venda tradicional de “cana-de-açúcar”.

### Inclusão Social e Cultural: A aplicação também serve como uma ponte para novos residentes e viajantes de curta duração, ajudando-os a se integrar e a conhecer as maravilhas locais. Para os moradores de longa data, é uma oportunidade de ver a cidade sob uma nova luz e para os anfitriões locais, uma chance de compartilhar o orgulho de sua “casa”.

### Em essência, a “Viagem365” é mais do que uma ferramenta de viagem; é um movimento para reconectar as pessoas com a riqueza cultural e natural de Florianópolis, transformando cada saída em uma aventura significativa e cada encontro em uma nova amizade. 


## Objetivos:
### Oferecer uma lista de destinos para que os usuários possam escolher e visualizar informações detalhadas. Já, o cadastro de usuários é essencial para criar uma comunidade de viajantes interessados em explorar destinos sustentáveis e compartilhar experiências. Além de incentivar os usuários a compartilhar dicas e relatos de suas viagens.


## Melhorias Estratégicas:
### Para garantir o sucesso e a segurança da plataforma, algumas melhorias são cruciais:

## 1. Segurança dos Usuários:
#### Implementação de verificações rigorosas de CPF e antecedentes criminais.
#### Criação de um ambiente digital seguro, promovendo confiança e uso contínuo.

## 2. Sistema de Avaliações:
#### Desenvolvimento de um sistema de feedback pós-passeio, permitindo que os usuários avaliem suas experiências mútuas.
#### As avaliações contribuem para a reputação e a confiabilidade dentro da comunidade.

## 3. Personalização de Interesses:
#### Introdução de filtros personalizáveis, permitindo aos usuários escolher passeios que atendam aos seus interesses específicos, como praias ou trilhas.

## 4. Integração com Negócios Locais:
#### Promoção de negócios locais através de anúncios no aplicativo, incentivando o turismo e o apoio à economia local.

## 5. Eventos e Atividades:
#### Organização de eventos e atividades exclusivas para os usuários do aplicativo, como trilhas guiadas, workshops culturais e visitas a locais históricos.

## 6. Gamificação:
#### Implementar um sistema de gamificação onde os usuários ganham pontos e recompensas por participarem de passeios e interagirem com a comunidade.
 

## Ferramentas utilizadas:
1. Draw.io: Para criação de diagramas claros e detalhados, facilitando a visualização da arquitetura do sistema e o fluxo de processos.

2. Trello com quadro em modelo Kanban: Organização das tarefas e a visualização do progresso do projeto, permitindo uma gestão ágil e flexível.

3. Visual Studio Code: Ferramenta para a escrita do código-fonte. Oferece suporte a diversas linguagens e extensões, melhorando a produtividade do desenvolvedor.

4. PostgreSQL: Sistema de gerenciamento de banco de dados. Atua como o repositório central de dados para a aplicação, garantindo a integridade e a segurança das informações.

5. Sequelize: Intermedia a comunicação entre o Node.js e o PostgreSQL, permitindo a manipulação dos dados de forma mais intuitiva e segura.

6. Node: Execução JavaScript no lado do servidor, construção de aplicações escaláveis e eficientes. Utilizado para execução da aplicação, lidando com as requisições dos usuários e a lógica de negócios.

7. Swagger: Documentação de APIs para facilitar o entendimento e o uso dos endpoints por desenvolvedores e usuários finais. Possui uma interface amigável para que os usuários possam interagir com a aplicação, testando e compreendendo as funcionalidades disponíveis.

8. Seeders: Para o preenchimento do banco de dados com dados de teste, facilitando o desenvolvimento e a verificação da aplicação. Inicialização do banco de dados com dados necessários para que a aplicação possa ser testada e validada desde o início do desenvolvimento.

9. Axios: Requisições HTTP a API de mapas, a partir do Node.js.

10. Nominatim: Geocodificação de código aberto, permite converter endereços em coordenas geográficas, e vice-versa.

11. JsonWebToken: Autenticação de usuários e troca segura de informações entre o cliente e o servidor.

## Diagramas:
![image](https://github.com/rayssa-freitas/VIAGEM365/assets/149340917/f55b4c0d-e30f-44e5-86dc-a6aef4a85752)

![image](https://github.com/rayssa-freitas/VIAGEM365/assets/149340917/ead8ad99-ebe2-4add-b739-23b3a268a14a)

## Rodando o repositório:
### Clone o repositório com o comando: git clone `https://github.com/rayssa-freitas/VIAGEM365.git`

### Intalação das dependências:
1. `npm install`
2. Em ambiente local: `npm install --dev`

### Criar pasta `.env` a partir do env.example com os dados da sua máquina

### Para executar em ambiente local:
#### `npm run start:dev`

### Instalação do JsonWebToken
#### `npm install jsonwebtoken`

### Instalação do Axios
#### `npm install axios`

### Para carregar Seeders
#### `sequelize db:seed:all`

### Instalação do Swagger UI
#### `npm install swagger-ui-express`

### Instalação do Swagger AutoGen
#### `npm install swagger-autogen`

### Desenvolvido por Rayssa Maciel de Freitas

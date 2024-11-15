# M3P-BackEnd-squad3

# DescubraFloripa - BackEnd 

## Visão:

A iniciativa "DescubraFloripa" surge como uma celebração da Ilha da Magia, convidando os moradores de Florianópolis e arredores a redescobrir sua própria cidade. Este projeto propõe uma aplicação que conecta pessoas com interesses similares em explorar as belezas escondidas da ilha, incentivando a pergunta: “Por que não ser turista em sua própria cidade?”

Assim, esses grupos se formariam com base no interesse comum em conhecer novos lugares na ilha, facilitando o encontro de companheiros de viagem para compartilhar caronas ou viagens de ônibus, em um modelo similar ao “blablacar”. O objetivo é fortalecer laços sociais e incentivar a descoberta coletiva de trilhas, praias, mirantes, e outros tesouros locais.

A longo prazo, a plataforma poderá servir como um canal para promover o comércio local, destacando estabelecimentos que muitas vezes não têm visibilidade devido à falta de investimento em marketing. Isso não apenas apoia a economia local, mas também enriquece a experiência cultural dos usuários.
Exemplo Prático: Imagine um grupo de cinco entusiastas ansiosos para explorar o “Morro das Pedras”. Utilizando o DescubraFloripa, eles se conectam via WhatsApp, planejam o passeio e, através de recomendações no app, descobrem um ponto de venda tradicional de “caldo de cana”.

Inclusão Social e Cultural:  A aplicação também serve como uma ponte para novos residentes e viajantes de curta duração, ajudando-os a se integrar e a conhecer as maravilhas locais. Para os moradores de longa data, é uma oportunidade de ver a cidade sob uma nova luz e para os anfitriões locais, uma chance de compartilhar o orgulho de sua “casa”.
Em essência, o “DescubraFloripa” é mais do que uma ferramenta de viagem; é um movimento para reconectar as pessoas com a riqueza cultural e natural de Florianópolis, transformando cada saída em uma aventura significativa e cada encontro em uma nova amizade.

# Objetivos:

Oferecer uma lista de destinos para que os usuários possam escolher e visualizar informações detalhadas. Já, o cadastro de usuários é essencial para criar uma comunidade de viajantes interessados em explorar destinos sustentáveis e compartilhar experiências. Além de incentivar os usuários a compartilhar dicas e relatos de suas viagens.

# Melhorias Estratégicas:

Para garantir o sucesso e a segurança da plataforma, algumas melhorias são cruciais:

1. Segurança dos Usuários:

Implementação de verificações rigorosas de CPF e antecedentes criminais.
Criação de um ambiente digital seguro, promovendo confiança e uso contínuo.

2. Sistema de Avaliações:

Desenvolvimento de um sistema de feedback pós-passeio, permitindo que os usuários avaliem suas experiências mútuas.
As avaliações contribuem para a reputação e a confiabilidade dentro da comunidade.

3. Personalização de Interesses:

Introdução de filtros personalizáveis, permitindo aos usuários escolher passeios que atendam aos seus interesses específicos, como praias ou trilhas.

4. Integração com Negócios Locais:

Promoção de negócios locais através de anúncios no aplicativo, incentivando o turismo e o apoio à economia local.

5. Eventos e Atividades:

Organização de eventos e atividades exclusivas para os usuários do aplicativo, como trilhas guiadas, workshops culturais e visitas a locais históricos.

6. Gamificação:

Implementar um sistema de gamificação onde os usuários ganham pontos e recompensas por participarem de passeios e interagirem com a comunidade.

# Ferramentas utilizadas:

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

11. Bcrypt: Autenticação de usuários e troca segura de informações entre o cliente e o servidor.

12. Criação de interfaces de usuário dinâmicas e reutilizáveis. Assim, facilitando a construção de componentes interativos e melhorando a performance com o virtual DOM. Ideal para desenvolver aplicações web modernas e escaláveis.

13. Docker: containerização que permite empacotar a aplicação e suas dependências em contêineres, garantindo que o software rode de maneira consistente em qualquer ambiente.

14.  Yup: validação de esquemas para JavaScript. Ela foi utilizada no projeto para validar formulários, garantindo que os dados inseridos pelos usuários estejam corretos antes de serem enviados ao backend.

# Logotipo:

<img src="https://github.com/user-attachments/assets/63868f0a-f995-4f41-902b-87b95ac0cfce" alt="Logo Descubra Floripa" width="200"/> 

# Modelagem de banco de dados
![image](https://github.com/user-attachments/assets/36c8e3de-7dc0-419e-93f9-f7b1df4ba494)


# Fluxo do usuário 

![image](https://github.com/user-attachments/assets/5e2f0367-4d03-4784-bc09-ba0ee3c7d8f3)

# Funcionalidades

1. Cadastro de Usuários: Permite que os usuários se registrem na plataforma para acessar informações exclusivas e criar grupos de exploração.

2. Autenticação: Implementação de um sistema de login seguro, com uso de tokens JWT.

3. Listagem de Destinos: Apresentação de uma lista interativa com os principais destinos de Florianópolis, filtrados por interesse.

# Rodando o Repositório

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

2. Navegue até o diretório do projeto:
`cd https://github.com/FuturoDEV-Trip/M3P-BackEnd-squad3.git`

### Instalação das dependências:
1. `npm install`
2. Em ambiente local: `npm install --dev`

### Criar pasta `.env` a partir do env.example com os dados da sua máquina

### Para executar em ambiente local:
#### `npm run start:dev`

### Inicializar migrations
1. `sequelize init`
#### Criar migrations 
2. `sequelize migration:create --name nome-da-migracao`
#### Rodar migrations
3. `sequelize db:migrate`

### Para carregar Seeders
#### `sequelize db:seed:all`

#### Execução com Docker (opcional):
Caso prefira executar o projeto utilizando Docker:

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
2. Construa e execute os contêineres:
#### `docker-compose up --build`
      
### Instalação do Bcrypt
#### `npm install bcrypt`

### Intalação do Yup
#### `npm install yup`

### Instação do Cors
#### `npm install cors`

### Instação do Dotenv
#### `npm install dotenv`

### Instalação do Axios
#### `npm install axios`

### Instalação do Express
#### `npm install express`

### Instalação do PostgreeSQL
#### `npm install pg pg-connection-string`

### Instalação do Sequelize
#### `npm install sequelize`

### Instalação do Nodemon
#### `npm install nodemon --save--dev`

### Instalação do Sequelize CLI
#### `npm install sequelize-cli --save-dev`

### Instalação do Swagger UI
#### `npm install swagger-ui-express`

### Instalação do Swagger AutoGen
#### `npm install swagger-autogen`

# Estrutura de Pastas Back End
![image](https://github.com/user-attachments/assets/ae0a278e-2e18-4e89-a77c-9cfa250ba10a)

# Páginas do APP

* Página de login: Acesso às páginas privadas do sistema.(pública)
* ![pagina de login](https://github.com/user-attachments/assets/6b2bfcdf-94fc-4d1c-9390-f462faf09944)

* Página Dashboard: Página Principal da Aplicação (Home)
![pagina-dashboard-publica](https://github.com/user-attachments/assets/74f0cd40-5311-4cab-906e-ac40ced4d779)

* Página de Dashboard: Privada (Após o login)
![pagina-dashboard](https://github.com/user-attachments/assets/06ad37ee-9f01-4a5c-9c90-d6d1b4e21be9)

* Página de Cadastro de novos usuários 
![paginacadastroreadme](https://github.com/user-attachments/assets/7658f424-e371-4593-805c-2c04d0d78d5a)

* Página Cadastro de Locais de visitação 
![página-cadastro-locais](https://github.com/user-attachments/assets/adaaf31a-4b07-42bb-93e5-cc0f39ae9cc5)

* Página Listagem de locais
![página-listagem-locais](https://github.com/user-attachments/assets/37d2685f-348b-4b63-bd02-f696e2703faf)

**Versão FrontEnd do Projeto:**
`https://github.com/FuturoDEV-Trip/M3P-FrontEnd-squad3`

### Desenvolvido por Rayssa Freitas, Daiane Arruda, Roni Rodrigues, Diego Aquino e Lívia Carvalho

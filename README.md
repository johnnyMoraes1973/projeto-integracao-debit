Integração de Login com Plataforma Debit
Este projeto implementa a integração do sistema de Login da Plataforma Debit utilizando Node.js, Express e Axios. Ele segue todas as diretrizes do Guia de Integração de Login para Plataforma Debit.

📌 Recursos

✅ Autenticação via OAuth 2.0 usando redirecionamento.

✅ Troca de código de autorização por token de acesso.

✅ Validação do login via API RESTful.

✅ Segurança aprimorada com .env, HTTPS e validações.



📂 projeto-integracao-debit

│── 📂 src

│   │── 📄 server.js          # Servidor Express

│   │── 📄 authController.js  # Controlador de autenticação

│   │── 📄 config.js          # Configuração de credenciais

│── 📄 .env                   # Variáveis de ambiente

│── 📄 package.json           # Dependências do projeto

│── 📄 README.md              # Documentação


🚀 Pré-requisitos

Node.js (versão 14 ou superior)

Conta e credenciais na Plataforma Debit

Ambiente seguro com HTTPS ativado

🔧 Configuração

1️⃣ Clonar o repositório

git clone https://github.com/johnnyMoraes1973/projeto-integracao-debit.git

cd projeto-integracao-debit


2️⃣ Instalar dependências

npm install

3️⃣ Criar e configurar o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione:

CLIENT_ID=SEU_CLIENT_ID

CLIENT_SECRET=SEU_CLIENT_SECRET

REDIRECT_URI=http://localhost:3000/callback

API_AUTH_URL=https://auth.debit.com

API_VALIDATE_URL=https://api.debit.com/validate-login

PORT=3000


🔄 Fluxo de Autenticação

1️⃣ Redirecionamento para Login

Acesse: http://localhost:3000/login.

O usuário será redirecionado para a Plataforma Debit para autenticação.


2️⃣ Recebimento do Callback

Após o login, a Plataforma Debit enviará um código de autenticação para:

http://localhost:3000/callback?code=CODIGO

O sistema captura esse código e troca por um token de acesso.

3️⃣ Validação do Token

Para validar o token e obter informações do usuário:

curl -X POST http://localhost:3000/validate-login -H "Content-Type: application/json" -d '{"token":"TOKEN_DE_ACESSO"}'


📌 Endpoints Disponíveis

Método	Rota	Descrição

GET	/login	Redireciona para a tela de login da Plataforma Debit

GET	/callback	Recebe o código de autenticação e troca por token

POST	/validate-login	Valida o token recebido

🔐 Boas Práticas de Segurança

✅ Nunca exponha credenciais no código-fonte.

✅ Use HTTPS para todas as comunicações.

✅ Implemente rate limiting para evitar abuso.

✅ Registre logs de autenticação para auditoria.

🚀 Executando o Servidor

Inicie o servidor localmente:

🚀 Executando o Servidor

Inicie o servidor localmente:

🤝 Contribuição

Se quiser melhorar este projeto, sinta-se à vontade para abrir um Pull Request!

📄 Licença

Este projeto é open-source sob a licença MIT.



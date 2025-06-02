# Projeto Cardápio API

Este repositório contém uma API simples em Node.js/Express para oferecer informações de refeições diárias. A seguir, você encontrará instruções de como configurar, instalar dependências e executar o servidor, bem como os endpoints disponíveis.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **NVM**: v1.2.2
- **Node.js**: v22.16.0
- **npm**: v10.9.2

> **Observação**: para alterar de versão do Node, use o NVM:
> ```bash
> nvm install 22.16.0
> nvm use 22.16.0
> ```

---

## ⚙️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/maria-alicia184/back-endPBD
   cd back-endPBD
   ```

2. Instale as dependências:
   ```bash
   npm i
   ```
---

## 🔒 Configuração de variáveis de ambiente

1. Na raiz do projeto, copie o arquivo de exemplo, execute o codigo a baixo ou crie um arquivo `.env` copiando as informações de `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Abra o arquivo `.env` e defina as credenciais do seu MongoDB usando as variáveis abaixo. **Não compartilhe credenciais reais** no repositório:
   ```dotenv
   MONGO_USER={usuario}
   MONGO_PASS={senha}
   ```
    - `MONGO_USER`: usuário do banco MongoDB (passado no grupo)
    - `MONGO_PASS`: senha correspondente (passado no grupo)

---

## ▶️ Executando o servidor

Na raiz do projeto, execute:

```bash
npm start
```

Após iniciar, você deverá ver no console:
```
API rodando na porta 3000
Banco de dados conectado com sucesso!
```

---

## 🚪 Endpoints disponíveis

A API expõe dois tipos de endpoints:
1. **Detalhe do dia da semana**
2. **Refeições específicas (café da manhã e almoço)**

Todos os endpoints partem de `http://localhost:3000`.

---

### Segunda-feira

- **Detalhe do dia da semana**
  ```
  GET /detalheSegunda/segunda
  ```
  URL completa:
  ```
  http://localhost:3000/detalheSegunda/segunda
  ```

- **Refeições**
    - Café da manhã:
      ```
      GET /refeicaoSegunda/café da manhã
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoSegunda/café da manhã
      ```
    - Almoço:
      ```
      GET /refeicaoSegunda/almoço
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoSegunda/almoço
      ```

---

### Terça-feira

- **Detalhe do dia da semana**
  ```
  GET /detalheTerca/terça
  ```
  URL completa:
  ```
  http://localhost:3000/detalheTerca/terça
  ```

- **Refeições**
    - Café da manhã:
      ```
      GET /refeicaoTerca/café da manhã
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoTerca/café da manhã
      ```
    - Almoço:
      ```
      GET /refeicaoTerca/almoço
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoTerca/almoço
      ```

---

### Quarta-feira

- **Detalhe do dia da semana**
  ```
  GET /detalheQuarta/quarta
  ```
  URL completa:
  ```
  http://localhost:3000/detalheQuarta/quarta
  ```

- **Refeições**
    - Café da manhã:
      ```
      GET /refeicaoQuarta/café da manhã
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoQuarta/café da manhã
      ```
    - Almoço:
      ```
      GET /refeicaoQuarta/almoço
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoQuarta/almoço
      ```

---

### Quinta-feira

- **Detalhe do dia da semana**
  ```
  GET /detalheQuinta/quinta
  ```
  URL completa:
  ```
  http://localhost:3000/detalheQuinta/quinta
  ```

- **Refeições**
    - Café da manhã:
      ```
      GET /refeicaoQuinta/café da manhã
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoQuinta/café da manhã
      ```
    - Almoço:
      ```
      GET /refeicaoQuinta/almoço
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoQuinta/almoço
      ```

---

### Sexta-feira

- **Detalhe do dia da semana**
  ```
  GET /detalheSexta/sexta
  ```
  URL completa:
  ```
  http://localhost:3000/detalheSexta/sexta
  ```

- **Refeições**
    - Café da manhã:
      ```
      GET /refeicaoSexta/café da manhã
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoSexta/café da manhã
      ```
    - Almoço:
      ```
      GET /refeicaoSexta/almoço
      ```
      URL completa:
      ```
      http://localhost:3000/refeicaoSexta/almoço
      ```

---

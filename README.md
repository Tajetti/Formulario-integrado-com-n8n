# Pesquisa sobre Sedentarismo entre Policiais Militares

Este projeto consiste em um **formulário web** que coleta informações de policiais militares sobre a prática de atividade física (sedentarismo) e envia os dados para um **webhook do n8n**, que faz o tratamento dos dados e os armazena em uma **planilha do Google Sheets**.

---

## Estrutura do Projeto

pesquisa-sedentarismo/<br>
│<br>
├─ index.html ← Formulário da pesquisa<br>
├─ script.js ← JavaScript para enviar os dados via POST<br>
└─ style.css ← Estilo opcional para o formulário<br>


---

## Funcionalidades do Formulário

- Captura os seguintes campos:
  - Nome
  - Posto/Graduação
  - Idade
  - Nível de atividade física (Sedentário, Ativo, Muito Ativo)
  - Tempo de serviço (em anos)
- Envia os dados automaticamente para o **webhook do n8n** em formato JSON.
- Exibe mensagens de feedback para o usuário: envio com sucesso ou erro.

---

## Fluxo do n8n

1. **Webhook Node**  
   - Recebe os dados do formulário em JSON.  

2. **Tratamento de Dados**  
   - Permite validações, filtragens ou ajustes no formato dos dados.  

3. **Google Sheets Node**  
   - Insere os dados tratados em uma planilha do Google Sheets, permitindo o acompanhamento das respostas em tempo real.

> Observação: Certifique-se de que o n8n tenha permissão para acessar a planilha e que o Webhook aceite requisições do seu domínio (CORS).

---

## Configuração

1. Clone ou baixe o projeto:

```bash
git clone <URL_DO_PROJETO>

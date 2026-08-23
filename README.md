# 🚀 Helpdesk API (Node.js & TypeScript)

Esta é uma API RESTful desenvolvida para gerenciar o fluxo de atendimento de chamados internos de TI. O projeto foi estruturado com foco em boas práticas de arquitetura backend, tipagem forte e padronização de códigos de resposta HTTP.

## 🛠️ Tecnologias Utilizadas
- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **Padrão de Arquitetura:** REST API (CRUD)
- **Versionamento:** Git & GitHub

## 📌 Rotas da API
| Método | End-point | Descrição |
| :--- | :--- | :--- |
| **GET** | `/api/chamados` | Lista todos os chamados cadastrados. |
| **GET** | `/api/chamados/:id` | Retorna os detalhes de um chamado específico pelo ID. |
| **POST** | `/api/chamados` | Cadastra um novo chamado no sistema. |
| **PATCH** | `/api/chamados/:id/status` | Atualiza o status de atendimento de um chamado. |

## 🚀 Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/Rafael-Pedra-7325/helpdesk-api-node-typescript.git

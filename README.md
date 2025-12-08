# EcoTrack - Sistema de Monitoramento Ambiental - INFNET - AT

![React](https://img.shields.io/badge/React-19.2.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-brightgreen.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.6-0081CB.svg)
![React Router](https://img.shields.io/badge/React%20Router-7.10.0-red.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Ativo-success.svg)

Sistema desenvolvido como projeto prático para monitoramento e rastreamento da qualidade do ar, implementando uma interface web e interativa com React, Material-UI e gerenciamento de rotas, focado em fornecer dados ambientais.

## Sobre o Projeto

Este projeto foi desenvolvido como parte do **AT - Assessment: Fundamentos em React** do Instituto Infnet, implementando um sistema de monitoramento ambiental com gerenciamento de estações de monitoramento, sistema de favoritos e ferramentas de busca e filtragem.

**Instituto Infnet** - Assessment  
**Disciplina:** Fundamentos em React  
**Aluno:** Thiago Teodoro Peres

### Propósito

EcoTrack é uma aplicação web que permite o monitoramento em tempo real de estações ambientais. O sistema oferece recursos para:

- Visualização de dados de estações de monitoramento
- Sistema de favoritos para acesso rápido
- Busca e filtros avançados por localização e condição
- Gerenciamento de pontos de monitoramento
- Dashboard para análise de dados

## Arquitetura

O sistema implementa uma arquitetura baseada em componentes React seguindo os padrões de desenvolvimento frontend:

```
Presentation Layer (React Components)
        ↓
Route Layer (React Router)
        ↓
Component Layer (UI Components)
        ↓
Styling Layer (CSS Modules + Material-UI)
```

## Tecnologias Utilizadas

- **React 19.2.1** - Biblioteca principal para construção da interface
- **React Router DOM 7.10.0** - Gerenciamento de rotas e navegação
- **Material-UI 7.3.6** - Componentes de UI e sistema de ícones
- **Emotion 11.14** - Estilização CSS-in-JS
- **Vite 7.2.4** - Build tool moderna e dev server rápido
- **ESLint 9.39.1** - Linting e qualidade de código

## Como Executar

### Pré-requisitos

- Node.js 24
- npm

### Execução

1. **Clone e instale:**

   ```bash
   git clone https://github.com/thiagoperest/EcoTrack.git
   cd EcoTrack
   npm install
   ```

2. **Execute a aplicação:**

   ```bash
   npm run dev
   ```

3. **Acesse o sistema:**

    - Aplicação: http://localhost:5173

## Funcionalidades Implementadas

- **Sistema de Monitoramento** - Visualização completa de estações ambientais
- **Gestão de Favoritos** - Marque e acesse rapidamente estações prioritárias
- **Busca e Filtros** - Sistema completo de busca por localização e condição
- **Dashboard** - Métricas e estatísticas
- **Navegação Dinâmica** - Rotas com React Router
- **Indicadores Visuais** - Status ativo/inativo com feedback visual

## Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento.  
Acesse: `http://localhost:5173`

### Linting
```bash
npm run lint
```
Executa o ESLint para verificar problemas no código.

## Rotas

- `/` - Página inicial (Dashboard)
- `/details` - Datalhes de monitoramento
- `/favorite` - Estações favoritas
- `/config` - Configurações
- `/*` - Página 404 (Not Found)

## Estilização

O projeto utiliza CSS Modules para componentização de estilos, garantindo:
- Escopo local de estilos
- Prevenção de conflitos de CSS
- Melhor manutenibilidade

## Dependências Principais

### Produção
- `react` & `react-dom`: Framework principal
- `react-router-dom`: Gerenciamento de rotas
- `@mui/material` & `@mui/icons-material`: Biblioteca de componentes Material Design
- `@emotion/react` & `@emotion/styled`: Solução de estilização

### Desenvolvimento
- `vite`: Build tool moderna e rápida
- `eslint`: Linter para JavaScript/React
- `typescript`: Suporte a tipos (dev dependency)

## Contato

**Thiago Teodoro Peres**  
Email: thiago.peres@al.infnet.edu.br  
Instituto Infnet - Fundamentos em React

---

**Projeto desenvolvido para o Instituto Infnet - AT**

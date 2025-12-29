# Curso Base de React 2025

Este é um projeto prático desenvolvido para o **Curso de React 2025**. O aplicativo consiste em um gerenciador de tarefas (Todo List) completo, com sistema de autenticação, dashboard de métricas e gerenciamento de estados.

## 🚀 O Projeto

O app oferece uma experiência moderna de gerenciamento de tarefas, incluindo:

- **Autenticação de Usuário**: Sistema de login para proteção de rotas.
- **Dashboard**: Visualização de dados e progresso das tarefas usando gráficos.
- **Gerenciamento de Todos**: Criação, edição, exclusão e marcação de conclusão de tarefas.
- **Mock de API**: Utilização do MirageJS para simular um backend completo no navegador, incluindo persistência no `localStorage`.

## 🛠️ Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema React:

### Core

- **React 19**: Versão estável mais recente do React.
- **Vite 6**: Tooling ultra-rápido para desenvolvimento frontend.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.

### Estilização e UI

- **Tailwind CSS 4**: Estilização baseada em utilitários com performance otimizada.
- **Radix UI**: Primitivos de interface acessíveis e sem estilização forçada.
- **Lucide React**: Biblioteca de ícones elegantes.
- **Recharts**: Biblioteca de gráficos compositáveis.

### Navegação e Formulários

- **React Router 7**: Roteamento robusto e moderno.
- **React Hook Form**: Gerenciamento de formulários eficiente.
- **Zod**: Validação de esquemas baseada em TypeScript.

### Comunicação e Mock

- **Axios**: Cliente HTTP para chamadas à API.
- **MirageJS**: Servidor de mock para desenvolvimento e testes.

## ⚙️ Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes detectado no projeto)

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd App
   ```

3. Instale as dependências:
   ```bash
   yarn install
   ```

---

### Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173`.

---

### Ambiente de Produção

1. **Build do projeto**:
   Gere os arquivos otimizados para produção:

   ```bash
   yarn build
   ```

   Isso criará uma pasta `dist/` com o código transpilado e minificado.

2. **Visualizar o Build (Localmente)**:
   Para testar o build localmente antes do deploy:

   ```bash
   yarn preview
   ```

3. **Deploy**:
   Os arquivos dentro da pasta `dist/` podem ser hospedados em qualquer servidor estático (Vercel, Netlify, AWS S3, etc.).

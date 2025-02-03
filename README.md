# mStack

🖥 ️[Preview: mstack-starter.vercel.app](https://mstack-starter.vercel.app)

🌐 [English Documentation](https://github.com/lopesmarcello/mstack?tab=readme-ov-file#english-version-)

Projeto desenvolvido à fim de servir como projeto starter já configurado para projetos Next.JS baseado em uma arquitetura de BFF (Backend For Front-End) e Atom Design System.

As dependências do projeto foram escolhidas pensando que a alta aderência de mercado viabiliza pesquisas de conteúdos, suporte a bugs e acesso a atualizações.

O projeto inicial é um _overkill_ para aplicações simples como essa. Entretanto, o objetivo do projeto é ser um _starter_ provendo uma estrutura de pastas, configurações iniciais e exemplos dos conceitos que serão explicados nesse README.

## Para instalar:

Clone o projeto ou rode o seguinte comando em seu terminal:

```
npx mstack-script
```

## Escolhas de tecnologias

### Next.JS

Começando pela escolha mais impactante, o uso do framework [Next.JS](https://nextjs.org/).

Assim como [a própria documentação do React recomenda](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework), começamos com um framework para prover soluções robustas e alinhadas com o mercado e ecossistema React.

A escolha do framework Next.JS foi feita pensando na estrutura do framework possibilitar a implementação da arquitetura [BFF (Backend For Frontend)](https://medium.com/digitalproductsdev/arquitetura-bff-back-end-for-front-end-13e2cbfbcda2), escolhida para estrutrara a camada de requisições da aplicação, com facilidade.

### Arquitetura BFF

A arquitetura BFF (Backend For Frontend) é uma abordagem que cria uma camada de backend específica para cada frontend, permitindo que o frontend receba dados já formatados e otimizados para suas necessidades. Isso reduz a complexidade no frontend, melhora o desempenho e facilita a manutenção, já que o backend pode evoluir independentemente do frontend.

### Tanstack Query

[Tanstack Query](https://tanstack.com/query/latest) (anteriormente conhecido como React Query) é uma biblioteca para gerenciamento de estado e cache de dados em aplicações React. Ele simplifica o processo de buscar, armazenar e sincronizar dados entre o frontend e o backend, além de oferecer recursos como refetch automático, paginação e tratamento de erros. Isso melhora a eficiência e a experiência do usuário, especialmente em aplicações que dependem de muitas requisições assíncronas.

### Radix-UI, TailwindCSS e Atom Design System

- **[Radix-UI](https://www.radix-ui.com/)**: Uma biblioteca de componentes acessíveis e altamente customizáveis, que segue as melhores práticas de acessibilidade e design. Ela permite criar interfaces consistentes e funcionais sem sacrificar a flexibilidade.

- **[TailwindCSS](https://tailwindcss.com/)**: Um framework CSS utilitário que permite criar designs responsivos e modernos de forma rápida e eficiente. Com Tailwind, é possível estilizar componentes diretamente no HTML, reduzindo a necessidade de escrever CSS personalizado e mantendo o código mais limpo.

- **[Atom Design System](https://atomicdesign.bradfrost.com/)**: Uma abordagem de design que organiza componentes em átomos, moléculas e organismos, promovendo reutilização e consistência na interface do usuário. Isso facilita a criação de interfaces modulares e escaláveis, além de melhorar a colaboração entre designers e desenvolvedores.

### Dependências opcionais utilizadas nesse projeto

- **[React Toastify](https://fkhadra.github.io/react-toastify/introduction/)**: Uma biblioteca para exibir notificações (toasts) de forma simples e elegante. Ela é altamente customizável e fácil de integrar, proporcionando uma experiência de usuário mais rica.

- **[Spinners React](https://www.npmjs.com/package/spinners-react)**: Uma coleção de componentes de spinners (indicadores de carregamento) que podem ser usados para melhorar a experiência do usuário durante operações assíncronas. Esses spinners são leves e altamente personalizáveis.

Essas dependências são totalmente opcionais e foram incluídas apenas para demonstração no projeto exemplo, mas podem ser facilmente removidas ou substituídas conforme necessário.

## Estrutura de pastas

```
mstack/
├── node_modules/ # Pasta padrão de projetos JS contendo suas dependências
├── public/ # Pasta pública do Next.JS
├── src/ # Código-fonte do frontend da aplicação
│ ├── app/ # Next.JS App Router
│ │ ├── (pages)/ # Pasta que centraliza as páginas da aplicação
│ │ │ ├── (home)/ # Maneira simples de centralizar a página Home e arquivos relacionados
│ │ │ ├── layout.tsx # Layout padrão da aplicação
│ │ ├── api/ # Rotas de API (BFF)
│ │ ├── favicon.ico # Favicon da aplicação
│ │ ├── globals.css # CSS Global da aplicação
│ ├── common/ # Pasta de arquivos compartilhados por toda aplicação
│ │ ├── contexts/ # Contextos e Providers
│ │ ├── utils/ # utilitários gerais
│ ├── components/ # Pasta que centraliza componentes (Atom Design System)
│
└── README.md # Documentação principal do repositório
```

# English Version 🌐

Project developed to serve as a starter project already configured for Next.JS projects based on a BFF (Backend For Front-End) architecture and Atom Design System.

The project dependencies were chosen considering that high market adherence enables content research, bug support, and access to updates.

The initial project is an overkill for simple applications like this one. However, the project's goal is to be a starter providing a folder structure, initial configurations, and examples of the concepts that will be explained in this README.

## To install:

Clone the project or run the following command in your terminal:

```
npx mstack-script
```

## Technology Choices

### Next.JS

Starting with the most impactful choice, the use of the [Next.JS](https://nextjs.org/) framework.

As [React's own documentation recommends](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework), we start with a framework to provide robust solutions aligned with the market and React ecosystem.

The choice of the Next.JS framework was made considering the framework's structure enabling the implementation of the [BFF (Backend For Frontend)](https://samnewman.io/patterns/architectural/bff/) architecture, chosen to structure the application's request layer with ease.

### BFF Architecture

The BFF (Backend For Frontend) architecture is an approach that creates a specific backend layer for each frontend, allowing the frontend to receive data already formatted and optimized for its needs. This reduces complexity in the frontend, improves performance, and facilitates maintenance, as the backend can evolve independently of the frontend.

### Tanstack Query

[Tanstack Query](https://tanstack.com/query/latest) (formerly known as React Query) is a library for state management and data caching in React applications. It simplifies the process of fetching, storing, and synchronizing data between the frontend and backend, and offers features like automatic refetching, pagination, and error handling. This improves efficiency and user experience, especially in applications that rely on many asynchronous requests.

### Radix-UI, TailwindCSS, and Atom Design System

- **[Radix-UI](https://www.radix-ui.com/)**: A library of accessible and highly customizable components that follows best practices in accessibility and design. It allows for the creation of consistent and functional interfaces without sacrificing flexibility.

- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for the quick and efficient creation of modern, responsive designs. With Tailwind, it's possible to style components directly in the HTML, reducing the need to write custom CSS and keeping the code cleaner.

- **[Atom Design System](https://atomicdesign.bradfrost.com/)**: A design approach that organizes components into atoms, molecules, and organisms, promoting reusability and consistency in the user interface. This facilitates the creation of modular and scalable interfaces, and improves collaboration between designers and developers.

### Optional Dependencies Used in This Project

- **[React Toastify](https://fkhadra.github.io/react-toastify/introduction/)**: A library for displaying notifications (toasts) in a simple and elegant way. It is highly customizable and easy to integrate, providing a richer user experience.

- **[Spinners React](https://www.npmjs.com/package/spinners-react)**: A collection of spinner components (loading indicators) that can be used to enhance the user experience during asynchronous operations. These spinners are lightweight and highly customizable.

These dependencies are entirely optional and were included only for demonstration purposes in the example project, but they can be easily removed or replaced as needed.

## Folder Structure

```
mstack/
├── node_modules/ # Default folder for JS projects containing their dependencies
├── public/ # Next.JS public folder
├── src/ # Frontend application source code
│ ├── app/ # Next.JS App Router
│ │ ├── (pages)/ # Folder that centralizes the application's pages
│ │ │ ├── (home)/ # Simple way to centralize the Home page and related files
│ │ │ ├── layout.tsx # Default application layout
│ │ ├── api/ # API routes (BFF)
│ │ ├── favicon.ico # Application favicon
│ │ ├── globals.css # Global CSS of the application
│ ├── common/ # Folder for files shared across the application
│ │ ├── contexts/ # Contexts and Providers
│ │ ├── utils/ # General utilities
│ ├── components/ # Folder that centralizes components (Atom Design System)
│
└── README.md # Main repository documentation
```

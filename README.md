# mStack

[Preview: mstack-starter.vercel.app](https://mstack-starter.vercel.app)

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

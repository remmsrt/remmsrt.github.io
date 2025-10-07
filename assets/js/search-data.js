// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-repositories",
          title: "Repositories",
          description: "A selection of my GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of my personal and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-genai",
          title: "GenAI",
          description: "A non-exhaustive list of key papers and resources on GenAI for continuous spaces.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/genAI/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Recent presentations and seminars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-start-of-my-research-internship-at-cfm-within-the-statistical-arbitrage-team-supervised-by-vipin-kerala-varma-dario-villamaina-and-alexios-beveratos-worked-on-the-study-implied-volatility-surfaces-around-major-market-events",
          title: 'Start of my research internship at CFM, within the Statistical Arbitrage team. Supervised...',
          description: "",
          section: "News",},{id: "news-start-of-my-research-internship-at-oist-okinawa-japan-within-the-mlds-team-supervised-by-prof-makoto-yamada-and-prof-kenji-fukumizu-worked-on-flow-based-generative-models-and-diffusion-models",
          title: 'Start of my research internship at OIST, Okinawa, Japan, within the MLDS team....',
          description: "",
          section: "News",},{id: "news-start-of-my-phd-at-cermics-and-bnp-paribas-cib-within-the-quantitative-research-team-work-on-the-study-of-generative-models-of-financial-time-series",
          title: 'Start of my PhD at CERMICS and BNP Paribas CIB, within the quantitative...',
          description: "",
          section: "News",},{id: "projects-blank-project",
          title: 'Blank Project',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-score-based-diffusion-model",
          title: 'Score-Based Diffusion Model',
          description: "Theory from single noise perturbation to SDE formulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-classification-using-svms",
          title: 'Classification using SVMs',
          description: "Application to dog/cat and handwritten character recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-traveling-salesman-and-knapsack-problems-solver",
          title: 'Traveling Salesman and Knapsack problems solver',
          description: "Greedy algorithms, dynamic programming, integer linear optimization, local search, Kruskal and Christofides.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-maze-generation",
          title: 'Maze generation',
          description: "Implemented in C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-american-options-pricing",
          title: 'American Options Pricing',
          description: "Simple least-squares approach using Longstaff Schwartz algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-study-of-babynames",
          title: 'Study of babynames',
          description: "Data analytics and visualization using numpy and pandas",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},];

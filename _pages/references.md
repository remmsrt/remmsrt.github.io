---
layout: page
title: GenAI
permalink: /genAI/
description: A selection of nice papers, blog posts and others about generative AI for continuous spaces.
nav: true
nav_order: 3
---

## Energy-Based Models

- **2003 — A Tutorial on Energy-Based Learning**  
  Introduction fondatrice aux modèles à base d’énergie et à leurs principes d’apprentissage.
- **2004 — On Contrastive Divergence Learning for EBMs**  
  Présente la méthode du *Contrastive Divergence* pour entraîner efficacement les modèles d’énergie.
- **2005 — Estimation of Non-Normalized Statistical Models by Score Matching**  
  Introduit le *score matching*, clé de nombreux modèles génératifs modernes.
- **2010 — Noise-Contrastive Estimation for Unnormalized Statistical Models**  
  Propose la *Noise-Contrastive Estimation (NCE)* pour estimer des modèles non normalisés.

---

## Normalizing Flows

- **2015 — Variational Inference with Normalizing Flows**  
  Introduit les *normalizing flows* pour rendre les inférences variationnelles plus expressives.  
- **2016 — Density Estimation Using Real NVP**  
  Présente le modèle *RealNVP*, architecture emblématique pour la modélisation de densités.
- **2017 — Masked Autoregressive Flow for Density Estimation**  
  Introduit *MAF*, une version autoregressive des flows pour une estimation flexible.  
- **2018 — FFJORD: Free-form Continuous Dynamics for Scalable Reversible Generative Models**  
  Étend les flows aux dynamiques différentielles continues pour des transformations invertibles.  
- **2018 — Neural Ordinary Differential Equations**  
  Introduit les *Neural ODEs*, reliant les réseaux neuronaux aux systèmes dynamiques continus.  

---

## Diffusion & Score-Based Models

- **2015 — Deep Unsupervised Learning using Nonequilibrium Thermodynamics**  
  Précurseur des modèles de diffusion, introduisant l’idée d’inverser un processus de bruitage.  
- **2019 — Generative Modeling by Estimating Gradients of the Data Distribution**  
  Introduit le concept de *score-based generative modeling* par estimation de gradient.  
- **2020 — Denoising Diffusion Probabilistic Models**  
  Popularise les *DDPMs*, base des modèles de diffusion modernes.  
- **2020 — Improved Techniques for Training Score-Based Generative Models**  
  Améliore la stabilité et la qualité des modèles à base de score.  
- **2021 — Score-Based Generative Modeling through Stochastic Differential Equations**  
  Unifie les diffusion models et score models via les *SDEs*.  
- **2021 — Denoising Diffusion Implicit Models**  
  Propose *DDIM*, une variante plus rapide et déterministe des DDPMs.

[Yang Song — Blog about score-based generative models](https://yang-song.net/blog/2021/score/)


## Flow Matching

- **2022 — Building Normalizing Flows with Stochastic Interpolants**  
  Explore une formulation stochastique unifiant flows et diffusion models.  
- **2022 — Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow**  
  Introduit les *rectified flows*, permettant des interpolations plus directes et efficaces.  
- **2022 — Flow Matching for Generative Modeling**  
  Présente *flow matching*, une méthode élégante reliant directement les champs de vecteurs aux données.

[Simon Coste — Notes about Flow-based generative models](https://scoste.fr/notes/)

---
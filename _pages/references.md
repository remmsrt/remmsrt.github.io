---
layout: page
title: GenAI
permalink: /genAI/
description: A timeline of key papers and resources on generative AI for continuous spaces.
nav: true
nav_order: 3
---

<div class="timeline">

  <div class="tl-row">
    <div class="tl-year">2022</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2206.00364" target="_blank" rel="noopener">Building Normalizing Flows with Stochastic Interpolants</a></strong> — formulation stochastique reliant flows et diffusion.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2210.02747" target="_blank" rel="noopener">Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow</a></strong> — introduit les rectified flows pour des interpolations plus directes.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2210.02747" target="_blank" rel="noopener">Flow Matching for Generative Modeling</a></strong> — relie les champs de vecteurs aux données via flow matching.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2021</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2011.13456" target="_blank" rel="noopener">Score-Based Generative Modeling through Stochastic Differential Equations</a></strong> — unifie les diffusion et score models avec les SDEs.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2010.02502" target="_blank" rel="noopener">Denoising Diffusion Implicit Models</a></strong> — propose DDIM, plus rapide et déterministe que les DDPMs.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2020</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2006.09011" target="_blank" rel="noopener">Improved Techniques for Training Score-Based Generative Models</a></strong> — améliore la stabilité et la qualité des modèles à base de score.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2006.11239" target="_blank" rel="noopener">Denoising Diffusion Probabilistic Models</a></strong> — popularise les DDPMs, base des modèles de diffusion modernes.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2019</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1907.05600" target="_blank" rel="noopener">Generative Modeling by Estimating Gradients of the Data Distribution</a></strong> — introduit le score-based generative modeling (estimation ∇log p(x)).</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2018</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1810.01367" target="_blank" rel="noopener">FFJORD: Free-form Continuous Dynamics for Scalable Reversible Generative Models</a></strong> — introduit les continuous flows basés sur Neural ODEs.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1806.07366" target="_blank" rel="noopener">Neural Ordinary Differential Equations</a></strong> — relie les réseaux neuronaux aux systèmes dynamiques continus.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2017</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1705.07057" target="_blank" rel="noopener">Masked Autoregressive Flow for Density Estimation</a></strong> — MAF, flow autoregressif flexible pour l’estimation de densité.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2016</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1605.08803" target="_blank" rel="noopener">Density Estimation Using Real NVP</a></strong> — RealNVP, bijection simple et efficace pour la modélisation de densité.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2015</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1505.05770" target="_blank" rel="noopener">Variational Inference with Normalizing Flows</a></strong> — rend l’inférence variationnelle plus expressive avec des bijections paramétrées.</div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1503.03585" target="_blank" rel="noopener">Deep Unsupervised Learning using Nonequilibrium Thermodynamics</a></strong> — précurseur des modèles de diffusion, inversant un processus de bruitage.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2010</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://proceedings.mlr.press/v9/gutmann10a.html" target="_blank" rel="noopener">Noise-Contrastive Estimation for Unnormalized Statistical Models</a></strong> — introduit la NCE, pour estimer des modèles non normalisés.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2005</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.helsinki.fi/u/ahyvarin/papers/scorematch.pdf" target="_blank" rel="noopener">Estimation of Non-Normalized Statistical Models by Score Matching</a></strong> — propose le score matching, base des score-based models modernes.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2004</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf" target="_blank" rel="noopener">On Contrastive Divergence Learning for EBMs</a></strong> — introduit le contrastive divergence pour entraîner les EBMs.</div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2003</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.toronto.edu/~hinton/absps/ebm.tutorial.pdf" target="_blank" rel="noopener">A Tutorial on Energy-Based Learning</a></strong> — texte fondateur sur les modèles à base d’énergie.</div>
    </div>
  </div>

</div>

---

## Blog posts

- **2021 — <a href="https://yang-song.net/blog/2021/score/" target="_blank" rel="noopener">Score-Based Generative Models</a>**, *Yang Song*  

- **2023 — <a href="https://scoste.fr/notes/" target="_blank" rel="noopener">Flow-Based Generative Models — Notes</a>**, *Simon Coste*


<style>
/* --- Timeline styling --- */
.tl-sub {
  color: #6a6f73;
  margin: 0 0 1.2rem 0;
  font-size: .95rem;
}
.timeline {
  position: relative;
  display: grid;
  gap: 1.25rem;
  margin: 1.5rem 0 2.5rem;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 7.5rem;
  top: .5rem;
  bottom: .5rem;
  width: 2px;
  background: linear-gradient(#0f3b3d, #cbd5e1);
  opacity: .6;
}
.tl-row {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  align-items: start;
}
.tl-year {
  position: relative;
  font-weight: 700;
  color: #0f3b3d;
  letter-spacing: .02em;
}
.tl-year::after {
  content: "";
  position: absolute;
  right: -.5rem;
  top: .45rem;
  width: .6rem;
  height: .6rem;
  background: #0f3b3d;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #e6f0f0;
}
.tl-content {
  padding: 0 0 0 1.25rem;
}
.tl-item {
  margin: .25rem 0;
  line-height: 1.4;
}
.tl-item a {
  color: #0f3b3d;
  text-decoration: none;
  border-bottom: 1px dotted #0f3b3d;
}
.tl-item a:hover {
  color: #145a68;
  border-bottom: 1px solid #145a68;
}
.tl-item strong {
  font-weight: 600;
}
@media (max-width: 640px) {
  .timeline::before { left: 5.5rem; }
  .tl-row { grid-template-columns: 5.5rem 1fr; }
  .tl-year::after { right: -.45rem; }
}
</style>
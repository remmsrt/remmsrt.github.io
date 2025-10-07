---
layout: page
title: GenAI
permalink: /genAI/
description: A non-exhaustive list of key papers and resources on GenAI for continuous spaces.
nav: true
nav_order: 3
---

<div class="timeline">

  <div class="tl-row">
    <div class="tl-year">2022</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2209.15571" target="_blank" rel="noopener">Building Normalizing Flows with Stochastic Interpolants</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2209.03003" target="_blank" rel="noopener">Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2210.02747" target="_blank" rel="noopener">Flow Matching for Generative Modeling</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2021</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2011.13456" target="_blank" rel="noopener">Score-Based Generative Modeling through Stochastic Differential Equations</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2010.02502" target="_blank" rel="noopener">Denoising Diffusion Implicit Models</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2020</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2006.09011" target="_blank" rel="noopener">Improved Techniques for Training Score-Based Generative Models</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/2006.11239" target="_blank" rel="noopener">Denoising Diffusion Probabilistic Models</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2019</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1907.05600" target="_blank" rel="noopener">Generative Modeling by Estimating Gradients of the Data Distribution</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2018</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1810.01367" target="_blank" rel="noopener">FFJORD: Free-form Continuous Dynamics for Scalable Reversible Generative Models</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1806.07366" target="_blank" rel="noopener">Neural Ordinary Differential Equations</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2017</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1705.07057" target="_blank" rel="noopener">Masked Autoregressive Flow for Density Estimation</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2016</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1605.08803" target="_blank" rel="noopener">Density Estimation Using Real NVP</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2015</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1505.05770" target="_blank" rel="noopener">Variational Inference with Normalizing Flows</a></strong></div>
      <div class="tl-item"><strong><a href="https://arxiv.org/abs/1503.03585" target="_blank" rel="noopener">Deep Unsupervised Learning using Nonequilibrium Thermodynamics</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2010</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://proceedings.mlr.press/v9/gutmann10a.html" target="_blank" rel="noopener">Noise-Contrastive Estimation for Unnormalized Statistical Models</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2005</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.helsinki.fi/u/ahyvarin/papers/scorematch.pdf" target="_blank" rel="noopener">Estimation of Non-Normalized Statistical Models by Score Matching</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2004</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf" target="_blank" rel="noopener">On Contrastive Divergence Learning for EBMs</a></strong></div>
    </div>
  </div>

  <div class="tl-row">
    <div class="tl-year">2003</div>
    <div class="tl-content">
      <div class="tl-item"><strong><a href="https://www.cs.toronto.edu/~hinton/absps/ebm.tutorial.pdf" target="_blank" rel="noopener">A Tutorial on Energy-Based Learning</a></strong></div>
    </div>
  </div>

</div>

---

## Blog posts

<br>

**2021 — <a href="https://yang-song.net/blog/2021/score/" target="_blank" rel="noopener">Score-Based Generative Models</a>**, *Yang Song*  
**2023 — <a href="https://scoste.fr/notes/" target="_blank" rel="noopener">Flow-Based Generative Models — Notes</a>**, *Simon Coste*

<style>
/* --- Timeline styling, solid line & dots --- */
.timeline {
  position: relative;
  display: grid;
  gap: 1.25rem;
  margin: 1.5rem 0 2.5rem;
}

/* Barre verticale — pleine */
.timeline::before {
  content: "";
  position: absolute;
  left: 7.3rem;        /* aligné avec les points */
  top: .5rem;
  bottom: .5rem;
  width: 2px;          /* tu peux mettre 3px si tu veux plus épais */
  background: currentColor;  /* garde la couleur du thème */
  opacity: 1;          /* plein, sans transparence */
}

/* Ligne (année + contenu) */
.tl-row {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  align-items: start;
}

/* Année */
.tl-year {
  position: relative;
  font-weight: 700;
  letter-spacing: .02em;
}

/* Points — pleins, centrés sur la barre */
.tl-year::after {
  content: "";
  position: absolute;
  right: -0.25rem;      /* centré par rapport à la barre à 7.3rem */
  top: .45rem;
  width: .6rem;
  height: .6rem;
  background: currentColor;  /* même couleur que le thème */
  border-radius: 50%;
  opacity: 1;          /* plein */
  box-shadow: none;    /* pas d’auréole/transparence */
}

/* Contenu */
.tl-content { padding-left: 1.25rem; }
.tl-item { margin: .25rem 0; line-height: 1.4; }

/* Responsive */
@media (max-width: 640px) {
  .timeline::before { left: 5.3rem; }
  .tl-row { grid-template-columns: 5.5rem 1fr; }
  .tl-year::after { right: -0.45rem; }
}
</style>
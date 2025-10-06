---
layout: page
title: GenAI
permalink: /genAI/
description: A selection of nice papers, blog posts and others about GenAI for continuous spaces.
nav: true
nav_order: 3
---

# How we evolved from EBMs to flows and diffusion

<p class="tl-sub">(many extensions/applications)</p>

<div class="timeline">

  <!-- 2022 -->
  <div class="tl-row">
    <div class="tl-year">2022</div>
    <div class="tl-content">
      <div class="tl-tag">Flow Matching</div>
      <div class="tl-item"><strong>Building Normalizing Flows with Stochastic Interpolants</strong> — formulation stochastique qui relie flows et diffusion.</div>
      <div class="tl-item"><strong>Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow</strong> — interpolations “rectifiées” pour des générations plus directes.</div>
      <div class="tl-item"><strong>Flow Matching for Generative Modeling</strong> — aligne un champ de vecteurs avec la distribution cible via flow-matching.</div>
    </div>
  </div>

  <!-- 2021 -->
  <div class="tl-row">
    <div class="tl-year">2021</div>
    <div class="tl-content">
      <div class="tl-tag">Diffusion & Score-Based</div>
      <div class="tl-item"><strong>Score-Based Generative Modeling through Stochastic Differential Equations</strong> — unification SDE des modèles de score et de diffusion.</div>
      <div class="tl-item"><strong>Denoising Diffusion Implicit Models</strong> — DDIM, générations plus rapides et déterministes.</div>
    </div>
  </div>

  <!-- 2020 -->
  <div class="tl-row">
    <div class="tl-year">2020</div>
    <div class="tl-content">
      <div class="tl-tag">Diffusion & Score-Based</div>
      <div class="tl-item"><strong>Improved Techniques for Training Score-Based Generative Models</strong> — astuces d’entraînement et meilleures qualités d’échantillons.</div>
      <div class="tl-item"><strong>Denoising Diffusion Probabilistic Models</strong> — popularise les DDPMs (diffusion discrète + reverse denoising).</div>
    </div>
  </div>

  <!-- 2019 -->
  <div class="tl-row">
    <div class="tl-year">2019</div>
    <div class="tl-content">
      <div class="tl-tag">Diffusion & Score-Based</div>
      <div class="tl-item"><strong>Generative Modeling by Estimating Gradients of the Data Distribution</strong> — lance le score-based modeling (estimation ∇log p(x)).</div>
    </div>
  </div>

  <!-- 2018 -->
  <div class="tl-row">
    <div class="tl-year">2018</div>
    <div class="tl-content">
      <div class="tl-tag">Normalizing Flows</div>
      <div class="tl-item"><strong>FFJORD: Free-form Continuous Dynamics for Scalable Reversible Generative Models</strong> — flows continus avec Neural ODEs & estim. de trace.</div>
      <div class="tl-item"><strong>Neural Ordinary Differential Equations</strong> — paramètre des dynamiques continues, base des continuous flows.</div>
    </div>
  </div>

  <!-- 2017 -->
  <div class="tl-row">
    <div class="tl-year">2017</div>
    <div class="tl-content">
      <div class="tl-tag">Normalizing Flows</div>
      <div class="tl-item"><strong>Masked Autoregressive Flow for Density Estimation</strong> — MAF : transformation autoregressive flexible pour p(x).</div>
    </div>
  </div>

  <!-- 2016 -->
  <div class="tl-row">
    <div class="tl-year">2016</div>
    <div class="tl-content">
      <div class="tl-tag">Normalizing Flows</div>
      <div class="tl-item"><strong>Density Estimation Using Real NVP</strong> — couplings bijectifs simples & efficaces pour l’estimation de densité.</div>
    </div>
  </div>

  <!-- 2015 -->
  <div class="tl-row">
    <div class="tl-year">2015</div>
    <div class="tl-content">
      <div class="tl-tag">Normalizing Flows</div>
      <div class="tl-item"><strong>Variational Inference with Normalizing Flows</strong> — rend l’approximation variationnelle expressive via des bijections.</div>
      <div class="tl-tag">Diffusion (précurseur)</div>
      <div class="tl-item"><strong>Deep Unsupervised Learning using Nonequilibrium Thermodynamics</strong> — idée d’inverser un processus de bruitage progressif.</div>
    </div>
  </div>

  <!-- 2010 -->
  <div class="tl-row">
    <div class="tl-year">2010</div>
    <div class="tl-content">
      <div class="tl-tag">EBMs</div>
      <div class="tl-item"><strong>Noise-Contrastive Estimation for Unnormalized Statistical Models</strong> — NCE : apprendre des modèles non normalisés via un jeu de classification.</div>
    </div>
  </div>

  <!-- 2005 -->
  <div class="tl-row">
    <div class="tl-year">2005</div>
    <div class="tl-content">
      <div class="tl-tag">EBMs</div>
      <div class="tl-item"><strong>Estimation of Non-Normalized Statistical Models by Score Matching</strong> — critère de score matching, fondamental pour les modèles à score.</div>
    </div>
  </div>

  <!-- 2004 -->
  <div class="tl-row">
    <div class="tl-year">2004</div>
    <div class="tl-content">
      <div class="tl-tag">EBMs</div>
      <div class="tl-item"><strong>On Contrastive Divergence Learning for EBMs</strong> — CD : entraînement pragmatique des modèles d’énergie.</div>
    </div>
  </div>

  <!-- 2003 -->
  <div class="tl-row">
    <div class="tl-year">2003</div>
    <div class="tl-content">
      <div class="tl-tag">EBMs</div>
      <div class="tl-item"><strong>A Tutorial on Energy-Based Learning</strong> — notions de base : fonctions d’énergie, apprentissage & inférence.</div>
    </div>
  </div>
</div>

---

## Blogs & notes

- <a href="https://yang-song.net/blog/2021/score/" target="_blank" rel="noopener">Yang Song — Blog about score-based generative models</a>  
- <a href="https://scoste.fr/notes/" target="_blank" rel="noopener">Simon Coste — Notes about Flow-based generative models</a>

<style>
/* --- Timeline styling --- */
.tl-sub{ color:#6a6f73; margin:0 0 1.2rem 0; font-size:.95rem; }
.timeline{
  position:relative; display:grid; gap:1.25rem; margin:1.5rem 0 2.5rem;
}
.timeline::before{
  content:""; position:absolute; left:7.5rem; top:.5rem; bottom:.5rem;
  width:2px; background:linear-gradient(#0f3b3d,#cbd5e1);
  opacity:.6;
}
.tl-row{ display:grid; grid-template-columns:7.5rem 1fr; align-items:start; }
.tl-year{
  position:relative; font-weight:700; color:#0f3b3d; letter-spacing:.02em;
}
.tl-year::after{
  content:""; position:absolute; right:-.5rem; top:.45rem;
  width:.6rem; height:.6rem; background:#0f3b3d; border-radius:50%;
  box-shadow:0 0 0 4px #e6f0f0;
}
.tl-content{ padding:0 0 0 1.25rem; }
.tl-tag{
  display:inline-block; font-size:.78rem; text-transform:uppercase;
  letter-spacing:.06em; color:#334155; background:#eef2ff; border:1px solid #c7d2fe;
  padding:.15rem .45rem; border-radius:.4rem; margin:0 0 .35rem 0;
}
.tl-item{
  margin:.2rem 0; line-height:1.35;
}
.tl-item strong{ font-weight:600; }
@media (max-width: 640px){
  .timeline::before{ left:5.5rem; }
  .tl-row{ grid-template-columns:5.5rem 1fr; }
  .tl-year::after{ right:-.45rem; }
}
</style>
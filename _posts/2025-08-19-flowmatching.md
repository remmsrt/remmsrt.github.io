---
layout: post
title: "Flow Matching for Generative Modeling"
description: "Current state of the art methods in Generative AI."
---

This blog ambitions to discuss current state of the art methods in Generative AI. We will mainly focus on sampling methods on continuous space, but connections with counterparts on discrete space, such as Large Language Models, will also be considered. We will first briefly review well established methods such as Normalizing flow, Autoencoders, Generative Adversarial Networks or Energy based models and will then mainly focus on denoising diffusion models and their deterministic counterparts. The ambition of the blog is not to focus on the impressive applications in e.g. image/video generation or scientific domains such as weather forecasting, but rather to focus on the mathematical formulation of these methods and to highlight relevant underlying open research directions in the field. We will cover techniques such as pretraining, fine tuning, free guidance, conditioned sampling or distillation. Connections with optimal transport and Shrödinger bridge methods will also be covered.
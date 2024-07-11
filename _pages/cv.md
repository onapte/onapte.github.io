---
layout: archive
title: "Short CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Computer Science, University of Colorado Boulder, 2026 (expected)
* B.Tech. in Computer Science and Engineering, Vellore Institute of Technology, 2024

Internships
======
* Computer Vision Research Intern
  * Yuan Ze University, Taoyuan City, Taiwan

* Visiting Researcher
  * DIPAS, Delhi, India

* Artificial Intelligence Research Intern
  * Vellore Institute of Technology, Chennai, India

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

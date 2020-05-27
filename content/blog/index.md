---
title: Blog
layout: list
permalink: "/blog/page-{{ pagination.pageNumber }}.html"
pagination:
  size: 2
  alias: blogs
  data: collections.blog
---

{% for blog in blogs %}
<article class="list">
<a href="{{ blog.url }}">
<header class="list-header">
<h2>{{ blog.data.title }}</h2>
</header>
<section class="list-content">
<h3>
{{ content }}
</h3>
<div class="read-more">➜</div>
</section>
</a>
</article>
{% endfor %}

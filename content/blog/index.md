title: Blog
layout: list
pagination:
  size: 2
  alias: blog
  data: collections.blog
---

{% for blog in blog %}
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

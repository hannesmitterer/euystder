---
layout: default
title: "ZeppBamboo Bauphasen"
description: "Die Vision erreicht die DeepAuraHarmony Stage: Eine Reise der Nachhaltigkeit, Schritt für Schritt."
show_user_controls: true
firebase_enabled: true
---

<main id="main-content" class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <p id="loading" class="text-center text-lg text-gray-500 col-span-full">Lade Inhalt...</p>
    
    <!-- Fallback content for static rendering -->
    <noscript>
        {% for phase in site.data.phases %}
        <div class="phase-card p-6">
            <h2 class="text-3xl font-bold mb-4 text-gray-700">{{ phase.title }}</h2>
            <img src="{{ phase.img }}" alt="{{ phase.alt }}" class="w-full h-auto object-cover rounded-lg mb-4 shadow-md">
            <p class="text-gray-700">{{ phase.text }}</p>
        </div>
        {% endfor %}
    </noscript>
</main>
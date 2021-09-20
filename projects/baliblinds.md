---
title: Bali Blinds - Motorization
description: Developed a new motorization page for baliblinds.com which helps consumer get informed about motorization as well as troubleshoot any questions they have about owning and operating motorized blinds and shades.
tags: project
layout: layouts/project-page.njk
date: 2021-09-19
status: active
templateClass: base-layout
---

<h1 class="heading-xl text-center">Bali Blinds - Motorization Page Redesign</h1>

I've worked on this page numerous times while working at Springs Window Fashions. This iteration is by far the best and most robust. For this project, I collaborated with our UX designer to develop a page that delivered a better messaging strategy for explaining what motorization is and why you should by it. This is built within Episerver which is a .NET MVC framework in Visual Studio.

You can view the current incarnation of that page here: [baliblinds.com/motorization](https://www.baliblinds.com/motorization/). Additionally, the full page screenshot I've archived here: <a href="../../img/project-images/baliblinds-motorization-full-page.png" target="_blank">full page screenshot.</a>

Two sections of the page were my favorite to work on. These required building in interactivity rather than just static content. 

<h2 class="heading-md pt-10">New Product Flip Cards</h2>
This section was a bit trick to manage, but I was able to build this with grid and flex box. All of the cards have to be the same height which ended up being determined by the back sides of the cards. Positioning all of the images was tedious, but I like some of the effects that happen when the squares get a bit smaller with screen size.
<video controls class="project-video pt-8 mb-20">
    <source src="../../img/project-images/motorization-card-flips.webm"
            type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

<h2 class="heading-md pt-5">Product Solutions Grid Gallery</h2>
My favorite part of the page: the modal grid gallery. I did a few cool things with this: first off, I created a bunch of utility classes that can be applied to grid items. based on those classes, you can manipulate the dimensions on the grid. Additionally, I wrote some javascript to animate in each modal on click and then hooked it up to animate close on 'esc' or the two back buttons. This was a cool challenge in working with grid more and really diving into positioning and density.
<video controls class="project-video pt-8 mb-20">
    <source src="../../img/project-images/motorization-grid-gallery.webm"
            type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

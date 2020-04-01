---
title: March
description: This is a post on My Blog about agile frameworks.
date: 2020-31-03
layout: layouts/march
---

<h1 class="h1">{{title}}</h1>

[Link to project](https://www.behance.net/gallery/33985094/INTO-architecture-office)
[Photo by Lance Anderson on Unsplash](https://unsplash.com/photos/QdAAasrZhdk)
[Photo by Joel Filipe on Unsplash](https://unsplash.com/photos/RFDP7_80v5A)
[Photo by Joel Filipe on Unsplash](https://unsplash.com/photos/g8OgQYKT9e4)

## MARCH!!! CORONA SEASON!!!

March 2020 has been a crazy month. When I started this project, everything was good around the world. Now that I'm finishing this project up, I've been working from home since March 18th and will most likely still be working from home when I finish the april project.

This month was tough all around, but the reason I'm writing is for this months project, and this one was a difficult. It's clearly the largest page I've built so far and possibly the most challenging design as well. That is one of the reasons I picked this page to build.

Here were some of the initial goals I had for this project:

- don't build another carousel
- Build a responsive layout
- add in some spicy javascript

While I can say I hit all of these targets, I was really hoping to build in some parallax scrolling elements that are featured in the original. I did add a parallax mixin to the mixins.scss module so its ready next time.

### Don't add a carousel

I could have. But I didn't. done.

### Build a responsive layout

I barely finished the part off. but I did it. or at least did an okay attempt at it. I finished that around 9pm of march 31st, right before writing this. I think I really need to focus on developing mobile styles as I build out components. I think that would make the responsive styles seem less of an after thought and I could spend more time designing how they flow better.

I do think there is more to be explored with Grid and flex-box to make my componenets 'flex' better intrinsically. That will probably be a task for next month. I have been thinking about how to best create utility classes and styles sheets. I bet these would be great to develop side by side. Ideally, I'd love to define styles and utility classes that would do things like create a full-bleed container, or set up a fluid type system. I think longer pages like these would be much easier to develop.

using grid over flexbox: After initially setting up the welcome-in section as flexbox, I changed it over to grid once I setup the responsive styles. I found that grid was a great way to work with the accented box and have it maintain shape versus defining a bunch of different flex-basis values. I liked the 2 column layout best when the page sized down.

### Spicy Javascript

There's some fancy JS up in here!! I promise.

It may be hard to notice, but the javascript I wrote loops through the articles, checks to see if they aren't featured articles and then sets the normal articles to be the same height via getting the tallest article element on the page.

When creating this section, I had some interesting ideas about dynamically building this section off of data. This could handle more than 3 articles or less, and trigger new ways of displaying.

# U06 Trello Clone

School Assignment @ Chas Academy, class FWD20

---

>In this assignment, you will build an application that works as a "kanban board", similar to e.g. [trello.com](https://trello.com/). Only frontend and no backend are to be implemented.

## Requirements

As a user, you should be able to do the following:
- [x] Draw "cards" between three different "columns" (todo, doing, done)
- [x] Click on a card to see its information (dialog)
- [x] Click different tabs in a card to get more information about it (tabs)
- [x] Set a deadline on each card (datepicker)

The finished solution must implement:
- [x] JQuery UI datepicker
- [x] JQuery UI draggable and droppable (or sortable)
- [x] JQuery UI dialog
- [x] JQuery UI tabs
- [x] At least two effects of your choice from JQuery UI
- [x] At least one custom created simple JQuery UI Widget
- [x] Layout / disposition completely created from a CSS framework (optional)

## Deployment

The site is deployed on Github Pages: [chas-academy.github.io/u06-trello-clone-stenwall](https://chas-academy.github.io/u06-trello-clone-stenwall/)

## Notes

### Design

I took the opportunity to implement Bootstrap, since I've never worked with it before. I had a lot of problems getting it to work with jQuery UI, even tough the latter's documentation said it would be easy, using their `classes`-functionality.

In the end, it's a mashup of Bootstrap, jQuery UI, Spectrum Colorpicker and then my own CSS, trying to fix it so it looked kind of the same.

This was my first time ever working with a CSS-framework.

### Other notes

Handing this in, I just had a two months long break from this code, and coming back to it, it doesn't look pretty. The only thing I was lacking before the break was a working colorpicker and a custom made widget. Back then, I had plans on making a custom colorpicker from scratch, but all that code was just messy and crappy so I threw it away and implemented the simpliest possible custom widget: I extended the button-widget to implement two classes from Bootstrap.

Half of my `index.html` is just CDN's and CSS-links. I tried half-heartedly to import everything with a package manager and webpack, but again there was problems with jQuery UI, and I decided it was better to just finish the assignment.

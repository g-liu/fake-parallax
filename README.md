Fake Parallax
=============

Most parallax scrolling solutions today use JavaScript or a JS library. Not this one. It's pure HTML and CSS, and not a single line of code is needed to 

## Explanation

The `body` element contains a fixed background image. It does not scroll with the rest of the elements, which have an opaque background.

Yes, the image in the back does not move. This is why it's called **fake** parallax. It still achieves a nice effect without any JavaScript.

### Want JavaScript?

If you would like a more realistic parallax effect, you can uncomment the following line of code in `index.html`:

    <script type="text/javascript" src="js/parallax.js"></script>

This is a bare-bones JavaScript that listens for scrolling and adjusts the `body`'s `background-position-y` property accordingly. You can also adjust the value of `PARALLAX_FACTOR` in the JS itself.

## Credits

* [Lorempixel](http://lorempixel.com), for providing the random image.
* [Corporate Ipsum](http://www.cipsum.com/), because we're all tired of Lorem Ipsum.
* [ColorZilla Gradient Editor](http://www.colorzilla.com/gradient-editor/), for the footer gradient.

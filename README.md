# goit-js-hw-07

<h2>Task 1 - image gallery</h2>
Create a gallery with the ability to click on its items and view full size images in a modal window. Check out the demo video of the gallery.

Do this task in the 01-gallery.html and 01-gallery.js files. Break it down into several subtasks:

1. Creating and rendering markup from the galleryItems data array and provided gallery item template.
2. Implementing delegation to div.gallery and getting the url of a large image.
3. Adding the script and styles of the modal window library basicLightbox. Use the jsdelivrCDN service and add links to minified (.min) library files to your project.
4. Opening a modal window by clicking on a gallery item. To do this, check out the documentation and examples.
5. Replacing the value of the src attribute of the &#60;img> element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the basicLightbox library.
   <br>
   Gallery item markup
   The link to the original image must be stored in the source data attribute on the &#60;img> element and specified in the link's href. Do not add any HTML tags or CSS classes other than those in this template.
   <br>
   <br>&#60;div class="gallery**item">
   <br>&#60;a class="gallery**link" href="large-image.jpg">
   <br><img
   <br> class="gallery\_\_image"
   <br> src="small-image.jpg"
   <br> data-source="large-image.jpg"
   <br> alt="Image description"
   />&#60;/a>
   <br>&#60;/div>
   <br><br>
   Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

Closing from keyboard
ATTENTION
The following features are optional, but they will be a good additional practice.

Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal window is open. In the basicLightbox library, there is a method to close the modal window programmatically.

<h2>Task 2 - SimpleLightbox library</h2>
Create the same gallery as in the first task, but using the SimpleLightbox library, which will handle image clicks, modal opening and closing and image scrolling with the keyboard.

It is necessary to slightly change the gallery card markup; use this template.
<br>
<br>&#60;a class="gallery**item" href="large-image.jpg">
<br>&#60;img class="gallery**image" src="small-image.jpg" alt="Image description" />
<br>&#60;/a>
<br>
Do this task in the 02-lightbox.html and 02-lightbox.js files. Break it down into several subtasks:

1. Creating and rendering markup from the galleryItems data array and provided gallery element template. Use the ready-made code from the first task.
2. Adding the script and library styles using the cdnjs CDN service. You need to add links to two files: simple-lightbox.min.js and simple-lightbox.min.css.
3. Library initialization after gallery items are created and added to div.gallery. To do this, read the SimpleLightbox documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add image caption display from the alt attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.

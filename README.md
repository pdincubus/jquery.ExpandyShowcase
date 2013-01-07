# jquery.ExpandyShowcase plugin

Lets you turn a list (or a div with things in it) into an expandable quasi-carousel showcase type thing

## Basic example

[Visit the demo](pdincubus.github.com/jquery.ExpandyShowcase/) for a working example

### HTML

I'd usually use an unordered list, but i guess this should work just as well with a div with a load of divs inside it too.

```html
<ul class="cf" id="expandy">
	<li class="first">
    <img src="img/hoverfly.jpg" alt="hoverfly">
    <div class="info">
		  <h2>Hoverfly</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet volutpat libero. Pellentesque mauris ipsum, imperdiet vitae vulputate sit amet, tempor quis odio. Sed luctus ultrices odio, quis pharetra turpis porta ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et quam nisi, a posuere neque. Sed fermentum auctor leo sed varius. Etiam condimentum pulvinar volutpat. Morbi nunc orci, bibendum eget vestibulum at, pretium ac lacus. Vestibulum eu nulla ornare odio aliquet pharetra. Nam suscipit lobortis nibh id bibendum. Vivamus ante justo, blandit at porta eget, tincidunt eget tortor.</p>
    </div>
	</li>
	<li class="second">
    <img src="img/dragonfly.jpg" alt="dragonfly">
    <div class="info">
		  <h2>Dragonfly</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet volutpat libero. Pellentesque mauris ipsum, imperdiet vitae vulputate sit amet, tempor quis odio. Sed luctus ultrices odio, quis pharetra turpis porta ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et quam nisi, a posuere neque. Sed fermentum auctor leo sed varius. Etiam condimentum pulvinar volutpat. Morbi nunc orci, bibendum eget vestibulum at, pretium ac lacus. Vestibulum eu nulla ornare odio aliquet pharetra. Nam suscipit lobortis nibh id bibendum. Vivamus ante justo, blandit at porta eget, tincidunt eget tortor.</p>
    </div>
	</li>
	<li class="third">
    <img src="img/pigeon.jpg" alt="pigeon">
    <div class="info">
		  <h2>Pigeon</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet volutpat libero. Pellentesque mauris ipsum, imperdiet vitae vulputate sit amet, tempor quis odio. Sed luctus ultrices odio, quis pharetra turpis porta ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et quam nisi, a posuere neque. Sed fermentum auctor leo sed varius. Etiam condimentum pulvinar volutpat. Morbi nunc orci, bibendum eget vestibulum at, pretium ac lacus. Vestibulum eu nulla ornare odio aliquet pharetra. Nam suscipit lobortis nibh id bibendum. Vivamus ante justo, blandit at porta eget, tincidunt eget tortor.</p>
    </div>
	</li>
	<li class="fourth">
    <img src="img/twoflies.jpg" alt="two flies">
    <div class="info">
		  <h2>Two Flies</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet volutpat libero. Pellentesque mauris ipsum, imperdiet vitae vulputate sit amet, tempor quis odio. Sed luctus ultrices odio, quis pharetra turpis porta ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et quam nisi, a posuere neque. Sed fermentum auctor leo sed varius. Etiam condimentum pulvinar volutpat. Morbi nunc orci, bibendum eget vestibulum at, pretium ac lacus. Vestibulum eu nulla ornare odio aliquet pharetra. Nam suscipit lobortis nibh id bibendum. Vivamus ante justo, blandit at porta eget, tincidunt eget tortor.</p>
    </div>
	</li>
	<li class="fifth">
    <img src="img/web.jpg" alt="web">
    <div class="info">
		  <h2>Web</h2>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet volutpat libero. Pellentesque mauris ipsum, imperdiet vitae vulputate sit amet, tempor quis odio. Sed luctus ultrices odio, quis pharetra turpis porta ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et quam nisi, a posuere neque. Sed fermentum auctor leo sed varius. Etiam condimentum pulvinar volutpat. Morbi nunc orci, bibendum eget vestibulum at, pretium ac lacus. Vestibulum eu nulla ornare odio aliquet pharetra. Nam suscipit lobortis nibh id bibendum. Vivamus ante justo, blandit at porta eget, tincidunt eget tortor.</p>
    </div>
	</li>
</ul>
```

### CSS

Chuck a bit of CSS in there.

The important parts are to ensure that the container has a set width and height, and that overflow is set to hidden for both the container and each list item (see the demo for the text hiding off-edge).

```css
#expandy {
	list-style: none;
	padding: 0;
	margin: 0;
	position: relative;
	overflow: hidden;
	width: 1000px;
	height: 350px;
}

#expandy li {
	float: left;
	position: relative;
	margin: 0;
	width: 150px;
	height: 350px;
	overflow: hidden;
	cursor: pointer;
	-moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
	-webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
	box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
}

#expandy li img {
  position: absolute;
  top: 0;
  left: 0;
}

#expandy li .info {
  width: 400px;
  height: 350px;
  padding: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
}

#expandy li h2 {
	font-size: 14px;
	margin: 0;
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
}

#expandy li p {
	font-size: 14px;
	margin: 0;
  position: absolute;
  z-index: 10;
  top: 70px;
  left: 20px;
  width: 360px;
}

#expandy li:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 400px;
  height: 350px;
  background: #000;
  background: rgba(0,0,0,0.8);
  opacity: 0;
  -moz-opacity: 0;
  -webkit-opacity: 0;
  transition: 0.5s all ease-in-out;
  -moz-transition: 0.5s all ease-in-out;
  -webkit-transition: 0.5s all ease-in-out;
}

#expandy li.active:before {
  opacity: 1;
  -moz-opacity: 1;
  -webkit-opacity: 1;
}

#info {
	background: #fff;
	color: #666;
	padding: 10px;
	font-size: 18px;
}

#info a {
	text-decoration: none;
	color: #c00;
}

#info a:hover {
	color: #e00;
}

.cf:before, .cf:after { content: ""; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
```

### jQuery

Make sure you have called jQuery, pulled in the expandy js file (and easing if you want those effects too) before you try to run expandy:

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="http://cachedcommons.org/cache/jquery-easing/1.3.0/javascripts/jquery-easing-min.js"></script>
<script type="text/javascript" src="/path/to/js/jquery.ExpandyShowcase.js"></script>
```

Call expandy to run. This doesn't have to be $(window).load, it could be $(document).ready if that makes you happy. $(window).load is better if you're waiting for images and so forth to finish loading before you invoke expandyShowcase to start.

```javascript
$(window).load(function() {
	$('#expandy').expandyShowcase({
		'animationDuration' : 250,
		'slideEasing'		    : 'swing',
		'compressedSize'	  : '150px',
		'expandedSize'		  : '400px',
		'firstOpen'			    : 0
	});
});
```

The full list of configurable settings (and the defaults) are as follows:

```javascript
'slideElement' 			: 'li',			//the elements under the container that will be expandable
'slideTrigger' 			: '.info',	//the element that contains the text content
'hiddenText' 			  : 'p',			//where's the text that you want to appear?
'animationDuration' : 500,			//milliseconds - currently applied to both text and box resizing
'slideEasing'				: 'swing',	//default options are swing or linear
'compressedSize'		: '164px',	//size of boxes when small
'expandedSize'			: '500px',	//size of the "expandy"
'firstOpen'				  : 0,			  //eq starts from zero, not one. which box should be opened first automatically
```

The default settings are based on the container for the expandy being 1000px wide and containing 5 child items. You'll need to adjust accordingly depending on how many expandy boxes you want.

## Browsers

I've tested and seen this working on Chrome, Safari, Opera, and Firefox on Mac OSX. It should work fine in Internet Explorer 6 (maybe?) onwards. Further testing to be done when I decide I really want to open that browser to do the testing!

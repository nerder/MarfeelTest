# MarfeelTest - Stefano Saitta

This is a short test for [Marfeel](https://www.marfeel.com/).

## Report

Here you can find a small report about how i spend time building it and how many hours tooks to me, of course is approximate so you could think about this adding 1 or 2 hour:

[Marfeel Project Report](https://github.com/nerder/MarfeelTest/blob/master/Marfeel_Project_2016-04-04_to_2016-04-10.pdf)

## Getting Start
- Install dependencies: 
  - `npm install --global gulp-cli bower` (just in case you don't have them already)
- Install the app: 
  - `npm install`
  - `bower install`
  - `gulp serve`

## Docs
### Environment Setup
For this little app i choose to save as many time as possibile setting up the environment and i used [Yeoman Webapp](https://github.com/yeoman/generator-webapp#readme) to init the project, as you can see there it have already all the desired feature like:

- CSS Autoprefixing
- Automagically compile Sass with libsass
- Automagically lint your scripts
- Map compiled CSS to source stylesheets with source maps
- Automagically wire-up dependencies installed with Bower
- The gulpfile makes use of ES6 features by using Babel

### Templating

This was actually a bit hard, cause it was requested to not use any framework, so i suppose to use just vanilla `javascript`
i spend some time to find out this very good tutorial about [Native Javascript Templating](http://codoki.com/2015/09/01/native-javascript-templating/) , in this way i was able to avoid Frameworks nor templates like [Handlebars](http://handlebarsjs.com/)

### Code structure

The codebase is mainly based on `ES6` and use as much as possible a `functional paradigm`. This is because of the readabilty improvements, even performance are involved in this but of course in this specific situation are negligible (due the very small amount of code). Are still presents some ES5, but i will refactor them asap.

### Styles & Layouting

For styling it i used SASS as a css processor, which i found very useful. About layouting instead i had [Bootstrap Framework](http://getbootstrap.com/) already built-in but i prefer to not use it. I use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) cause it's way to easy to layout than a grid system. The app is actually responsive till `800x600`, there are few errors anyway, it can be refactored in order to make it better.

### Testing

I will add some tests as soon as i can. There is just sample right now and you can run it into the browser:

- `gulp serve:test``








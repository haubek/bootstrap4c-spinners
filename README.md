# Bootstrap4C

### spinners

The *Bootstrap4C Spinners* is a simple Bootstrap 4 spinners stylesheet and js component.

See demo here => https://haubek.github.io

### Yarn install

```
yarn add bootstrap4c-spinners
```

### CSS

Load CSS file.
```
<link href="path/to/component-spinners.css" rel="stylesheet">
```

### Javascript

Load js file.
```
<script src="path/to/component-spinners.js"></script>
```

Add a function (like the example below).
```
$('.btn-spinner-example').click(function() {
  var btn = $(this);
  $(btn).buttonLoader('start');
  setTimeout(function() {
    $(btn).buttonLoader('stop');
  }, 3000);
});
```

### HTML5 markup

```
<button type="button" class="btn btn-secondary btn-spinner btn-spinner-example">Button</button>
```

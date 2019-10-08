# Getting started
Step 1. Install the required dependencies globally
```
npm install -g typescript
```
```
npm install -g @angular/cli
```

Step 2. Go into root directory
```
cd <ROOT>
```

Step 3. Create a new project
```
ng new angular-adminlte-template
```

Step 4. Go into the project directory
```
cd angular-adminlte-template
```

Step 5. Run the application
```
ng serve
```

Step 6. Open the browser and go to `http://localhost:4200/` 

# Install Admin-LTE
```
npm install admin-lte --save
```

Open the `angular.json` and replace `"styles":[]` and `"scripts":[]` sections with this:
```javascript
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/font-awesome/css/font-awesome.css",
    "node_modules/ionicons/dist/css/ionicons.css",
    "src/_variables.less",
    "src/styles.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.js",
    "node_modules/admin-lte/plugins/jQueryUI/jquery-ui.js",
    "node_modules/bootstrap/dist/js/bootstrap.js",
    "node_modules/admin-lte/dist/js/adminlte.js",
    "src/assets/js/adminLTEOptions.js",
    "src/assets/js/scripts.js"
]
```

## Read more...
https://adminlte.io/themes/AdminLTE/documentation/index.html
https://programmer.help/blogs/5c49843d32437.html
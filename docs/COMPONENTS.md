# Components
The front end is constructed using components (or widgets). A component is a collection of HTML, CSS and often Javascript that solve one specific concern. The component structure in this project is modeled based on [jQuery](https://jquery.com/) widgets or [bootstrap](http://getbootstrap.com/) components. Which means every component is connected to a CSS class. If you add the class to the specified HTML element the component definition will transform that element into the defined component.

## How to develop a component?
The project includes an example component which includes a HTML, a CSS and a Javascript file called [.lf-gh-fork-ribbon](). Often HTML or Javascript is not needed. For example if we create a ```<button>``` element that looks and feels the consistent throughout our application we most likely only need to define a CSS class that defines our button. Following are some suggestions on how to develop a component for this project. 

### Create the folder structure
Find a good place under "front-end/components" and create a folder with the name of the component. You find the [.lf-gh-fork-ribbon]() in the "gh-fork-ribbon" directory. Now you may ask why are the component(class)name and the directory name different? It is good practice to [namespace](https://en.wikipedia.org/wiki/Namespace) our components. In our case we prefix every component class with "lf-" for "lanflix". This allows people to use our component library in other projects without interfering with other libraries or project specific CSS. 

### Write the component specific HTML/CSS/Javascript
As mentioned before, if the component only requires a specific style a CSS file may do, but for more complex components you may need a HTML structure and some Javascript to inject that structure into the Document Object Model (DOM, Html code).\[[1](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)[2](https://www.w3.org/TR/WD-DOM/introduction.html)\]. Let's take a look at the [.lf-gh-fork-ribbon]().

 #### Use the Component

 ```html
 <div class=".lf-fh-fork-ribbon"></div>
 ```

 #### Components HTML ([gh-fork-ribbon.html]())
 The component needs a specific HTML structure, which displays the ribbon

  ```html
 <a href="https://github.com/LearnDevelopmentPublic/Lanflix" class="ribbon-link">
    <img 
        src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" 
        alt="Fork me on GitHub" 
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png">
</a>
 ```

#### Add the HTML to the DOM based on the class ([gh-fork-ribbon.js]())
Since HTML doesn't provide any solution to include another HTML file into the document structure. We need to write some Javascript that puts in wherever we encounter the ".lf-gh-fork-ribbon" class.

```javascript
    // load HTML from file (just text)
    var html = _loadHTML('components/gh-fork-ribbon/gh-fork-ribbon.html')
    
    // create a HTML element based on the loaded html
    var ele = document.createElement('div');
    ele.innerHTML = html;

    // find any instance of the .lf-gh-fork-ribbon class
    var wrappers = document.getElementsByClassName('lf-gh-fork-ribbon');

    // append HTML element to every wrapper
    Array.prototype.forEach.call(wrappers, function (wrapper) {
        wrapper.appendChild(domNode);
    });

```
That should be it. The actual file looks different because the component does a little bit more. It adds a hover effect to the ribbon that changes the background image. The code is not well commented since I tried to keep my function names as descriptive as possible. If there are any questions hit me up on Discord or Github (KenavR).

#### Add CSS ([gh-fork-ribbon.css]())
This component doesn't need styling but there is still a CSS file in the component's directory to illustrate how it could look like. It is important to keep the styling scoped to your component (prefix every styling with the component class). If you need to write styling that applies to multiple components or the entire site please add it to the [default.css]() file. Also keep in mind, if you only target one specific HTML element (e.g. button) add that to the definition (e.g. button.lf-button).

I would also recommend to keep as much positional settings out of the component. These components can be used by anyone wherever they want to place them. If for instance you add CSS that always puts it at the top right corner of the screen, the user either won't use the component or needs to overwrite the stylings which often is quite the pain.

### Load the CSS and Javascript
Now you need to load your files in the [index.html]() file to make it available to the site. 

```html
<link rel="stylesheet" href="./components/gh-fork-ribbon/gh-fork-ribbon.css">
<script src="./components/gh-fork-ribbon/gh-fork-ribbon.js" defer></script>
```
For the Javascript file we use the attribute [defer](https://developer.mozilla.org/de/docs/Web/HTML/Element/script) which tells the browser to execute the file AFTER the rest of the document is parsed. Otherwise the browser executes the Javascript file (which potentially could take some time)and halts parsing. Which means it takes longer until the user sees something on their screen. Now every element that has the class ".lf-gh-fork-ribbon" transforms into the Github fork ribbon.

## Component playground
To give people the option to see which components are already available, the project has an overview of the components. The playground can be accessed under http://localhost:3000/playground (the project needs to be running). This page should ideally show every component, but currently it is dependent on the developer to add it to the page. It currently shows two example components. To add another one, please load the CSS and Javascript files the same way as above and add an entry to the navigation and copy/edit an ```<article>``` element. 

## Issues
For the most part issues will tell you to develop a new component. We try to work our way from the smallest possible elements (e.g. button, input,...) up to bigger ones (e.g. sign in, dynamic drop down,...). Please always check if there are already components you can use for your implementation. For example a sign in form certainly will need some ```<input>``` fields, rather than styling it your own check if there already is a ".lf-input" you can use. This keeps the styling consistent throughout the page. 


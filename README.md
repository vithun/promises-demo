# JavaScript Promises Demo

An exercise to understand the usefulness of [Promises](http://www.html5rocks.com/en/tutorials/es6/promises/) in JavaScript while trying to tell the story of [Titanic](http://www.imdb.com/title/tt0120338/).

Note: This example doesn't use Promises directly, instead it makes use of the [`q`](http://documentup.com/kriskowal/q/) library.

## Asynchronous Code

To begin understanding why to use promises, we first need to understand the asynchronous behaviour of a lot of code in JavaScript. Compared to other languages like Java, asynchronous behaviour comes on by default in JavaScript. What does this mean? Consider the three lines of code below:

```js
var googleContent = request('https://www.google.com');
var completed = true;
console.log(googleContent, completed);
```

Now imagine `request` to be a method from some library which makes an HTTP request and gets the contents from a URL. If you are new to JavaScript, you might think by the time the code reaches line 3 `googleContent` contains the actual content from Google. However, in reality you would be surprised (unless you have explicitly used a library that makes synchronous requests, which is not generally a good idea).

The process of fetching the contents from a URL takes some time. So line 2 gets executed immediately after the call to make a request has happened, and line 3 follows. `googleContent` will just be a pointer to something (or a `Promise`; we'll come to that later). And at some point in the future, the HTTP request made in line 1 would complete.

This leads to a problem. What if you wanted the `console.log` to happen only after the actual request completed? Such sort of synchronous behaviour can be introduced using `callbacks` or `promises`. The rest of the demo goes through both and demonstrates why using `promises` might be a better option.

## Setup

To begin, first clone this repository. Then on the command line traverse to the first step using Git:

```bash
$ git checkout step-1
```

Now open the file `index.html` in a browser (this exercise has been tested in Chrome, so switch to it if it doesn't work in other browsers).

You should see something like this:

![Screenshot](https://raw.githubusercontent.com/vithun/promises-demo/master/screenshot.png)

Open the Chrome developer console, and start typing each of the following lines one-by-one. Make sure to wait for the effect of each line to complete before typing the next one.

*Each line just adds CSS classes which then triggers transitions. Check `characters.js` and `style.css` for details if you are interested, but that is not necessary for this exercise.*

```js
titanic.addPassenger(jack);
// wait
titanic.addPassenger(rose);
// wait
titanic.sail();
// wait
titanic.tilt();
// wait
titanic.drown();
// wait
jack.drown();
```

Each of those lines combine and together enact the story of Titanic. Now try running them together in a single line:

```js
titanic.addPassenger(jack);titanic.addPassenger(rose);titanic.sail();titanic.tilt();titanic.drown();jack.drown();
```

Do you see the story playing in sequence properly? Nope. What's happening? Remember the asynchronous code we discussed above. `request` was one example of a thing that can take time and hence is asynchronous. CSS transitions, in this case, is also asynchronous. So what is happening here is that each subsequent line is being called even before the transition from the previous line has completed resulting in a mess!

How do we get it working as expected? First let's take a look at callbacks.

## Callbacks

Now check out the Step 2 of the code:

```bash
$ git checkout step-2
```

If you now take a look at each method within `characters.js`, you will see that they have all been modified to accept a `callback` parameter. This can be a function that you pass in which gets called back after the callee has finished executing whatever it has to do: in this case waiting for the transition to end.

Callbacks used to be (and still is) a widely used pattern to work with asynchronous code. Now take a look at `story.js` and see the implementation of the `story` function. That is how you work with code that is based on callbacks. You see how for every function call you pass in the next code you want to execute as a callback function.

As callbacks increase, it can get really frustrating to read, maintain and work with. But it works. Refresh the page on the browser, and just type this in the console:

```js
story();
```

You should see the story play out as expected.

## Promises

Promises also provide a way of handling asynchronous behaviour but do it in a more elegant way compared to callbacks. The [HTML5 Rocks link](http://www.html5rocks.com/en/tutorials/es6/promises/) is a good page to start learning about promises. Go read this now and try to make some sense out of it. It's ok if you don't understand it completely, that should change at the end of this exercise.

Now check out the third and final step of the code:

```bash
$ git checkout step-3
```

You will now notice in the `characters.js` file, every method has been updated to return a promise.
With this change, you can now start using `then` to just chain each call which is what the new `story.js` code looks like. Doesn't that look a lot cleaner than the callback hell before?

*Note 1: The `Q.all`, `.catch` are all convenience methods provided by the `q` library and not part of the Promises specification.*

*Note 2: Don't worry too much about the `.bind` calls if you don't know about it. If you are curious to learn this, which is good, [here's a good link](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/).*

Try running the story in your browser, and it should still work. Now with some cleaner code behind it.

```js
story();
```

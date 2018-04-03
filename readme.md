# Instructions #
* Get the latest version of node.js
* Install Yarn ```npm install -g yarn```
* Clone this repo and cd into the directory
* run ```yarn```
* run ```yarn serve```

## Why? ##
This project gathers a neat list of my github projects. And quite nicely
displays the incredible ease of working with Vue.js. I believe that this
could serve as a nice exercise for anyone that is interested in learning
Vue.


## Structure ##
At the root of the src directory, we find a file called main.js. This is
the entry point to our application. Here we import some important
dependencies that are going to be used throughout the application. In
our case the vue-router(to handle routing(url-management)),
vuex(to manage state) and vue-resource(http). We also specify the
graphical entry point App.vue.

### Vue files ###
This is where we create our components. Our input forms, header regions,
navigation bars, pretty much anything that is a noun. Vue files can
contain html, javascript and css. You can opt out of both css and js
if it is a very simple component. Optionally you can place the js and
css into different files.

### Routing ###
When talking about routing, we really are just referring to url
management. Binding a view to a url. With Vue there are a few different
options as far as routers go, but we have decieded to go with the router
that was provided by the Vue team. Conveniently named vue-router.

Using the vue-router is fairly very simple. Looking in the router.js
file, we can see a new router being created. And looking at the
parameters that are being passed to the constructor, we can see a list
of routes. Each specifying a url and a component. This and the use of
```<router-view />``` in App.vue is all that is needed to create a
functioning route. In our case binding ```/``` to Home.vue and ```/projects```
to Projects.vue.

Adding sub-routes is just as simple. The route that we want to have sub
routes we simply specify a children array containing new routes. To
projects we add the ```:project``` route. The use of ```:``` indicates
that project is a wild card. Anything after ```project/``` will match
our new route. Similar to adding ```<router-view />``` in App.vue we
will add one in Projects.vue.

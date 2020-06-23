## Web Store Front
This is a web app based on vue.js, it depends on node backend project to fetch the data.


it has following features:

1. login using google signin `localhost:8080/login`
2. create store front `localhost:8080/creator`
3. accessing store front using `localhost:8080/store?id=<store_id>`

## Project Setup
1. `npm install`
2. `npm run serve`


## Project Structure
1. pages: contains all the page components. these are the container compoenents which is build using another components.
2. router: vur router to handle routing, all page components are imported into this router.
3. App.vue: root app file which render route-views
4. Auth: custom auth0 vue plugin 
5. assets: contains all the static files like images, icon etc.
6. components: contains all the components which is used in page component.
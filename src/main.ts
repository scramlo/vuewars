import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "vue3-particles";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
    uri: 'https://swapigql.netlify.app/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();

app.provide(DefaultApolloClient, apolloClient);

app.use(pinia);
app.use(router);
// @ts-ignore
app.use(Particles);

app.mount('#app');

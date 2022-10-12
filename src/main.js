import { createApp } from 'vue'
import App from './App.vue'

import {languages} from "./i18n"
import {defaultLocale} from "./i18n";
import {createI18n} from "vue-i18n";

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)

const i18n = createI18n({
    seo: true,
    legacy: true,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')


import './bootstrap';
import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
import ApiConsumo from './components/ComponenteExamenFinal.vue';


const app = createApp({});
app.component('example-component', ExampleComponent);
app.mount('#app');



const appNasa = createApp({});
appNasa.component('api-consumo', ApiConsumo);
appNasa.mount('#examen-content');

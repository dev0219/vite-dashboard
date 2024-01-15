import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import PrimeVue from "primevue/config";
import './styles/index.css'
import './styles/button.css'
import './styles/app.css'
import './styles/dragdrop.css'
import './styles/printConstructor.css'
import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

const app = createApp(App)

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Badge from 'primevue/badge';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';




app.component('ButtonComponent', Button);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('TextareaElement', Textarea);
app.component('Dropdown', Dropdown);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Badge', Badge);
app.component('InputNumber', InputNumber);
app.component('DialogComponent', Dialog);

app.use(router)
app.use(PrimeVue);
app.mount('#app')

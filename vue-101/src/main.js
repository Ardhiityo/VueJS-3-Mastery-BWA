import {createApp} from "vue";
import App from "./App.vue";

import TagInput from "./components/TagInput.vue";

const app = createApp(App);

// Component secara global
app.component("TagInput", TagInput);

app.mount("#app");

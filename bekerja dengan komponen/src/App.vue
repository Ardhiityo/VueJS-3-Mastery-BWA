<script>
import Alerts from "./components/Alerts.vue";
import LoginForm from "./components/auth/LoginForm.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";
import IconCheck from "./components/icons/IconCheck.vue";
import IconExclamation from "./components/icons/IconExclamation.vue";
import Modal from "./components/Modal.vue";
import TodoList from "./components/TodoList.vue";
import Person from "./components/Person.vue";
import Alert from "./components/Alert.vue";
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
  components: {
    Person,
    Alerts,
    Alert,
    LoginForm,
    BaseInput,
    BaseButton,
    Modal,
    IconCheck,
    IconExclamation,
    TodoList,
    Login,
    Register
  },
  data: () => ({
    items: 3,
    show: true,
    alert: {
      message: "Message",
      types: ["success", "warning", "danger"],
    },
    email: "",
    password: "",
    message: "Alert message",
    showForm: 'Login'
  }),
  methods: {
    handleSubmit(email, password) {
      alert(email + " " + password);
    },
  },
};
</script>

<template>
  <div class="container py-5">
    <!-- Props dengan kebab case -->
    <!-- Bila props dengan bind gunakan (:) maka dianggap js syntax -->
    <!-- <Person first-name="Eko" last-name="Khannedy" :age="30" /> -->

    <!-- Bind sekaligus dengan object -->
    <!-- <Alerts v-bind="alert" :items="items" /> -->

    <!-- <Alert type="danger" :show="show" @alert-close="show = !show">Hello Vue!</Alert> -->

    <!-- <LoginForm @submit="handleSubmit" /> -->

    <!-- Binding Cara 1 -->
    <!-- <input type="email" v-model="email">
    {{ email }} -->

    <!-- Binding Cara 2 -->
    <!-- <input type="email" :value="email" @input="email = $event.target.value">
    {{ email }} -->

    <!-- 2 Flow data binding cara lama -->
    <!-- Sebenarnya Vue mengubah kode tersebut menjadi seperti ini di belakang layar: -->
    <!-- :modelValue="email" @update:modelValue="email = $event" -->

    <!-- Custom modifier -->
    <!-- <BaseInput label="Email" v-model.lowercase="email" />
    {{ email }} -->

    <!-- Multiple v-model binding -->
    <!-- <LoginForm v-model:email.lowercase="email" v-model:password="password" />
    {{ email }} - {{ password }} -->

    <!-- Falltrough Attributes : terjadi apabila di component hanya memiliki 1 element  -->
    <!-- class otomatis ditambahkan ke component tanpa harus via props -->
    <!-- <BaseButton class="btn-lg" text="Submit" /> -->
    <!-- type otomatis ditambahkan ke component tanpa harus via props -->
    <!-- <BaseInput v-model="email" label="email" type="text" /> -->

    <!-- Slot -->
    <!-- <Alert :show="show" @click="show = !show">
      <IconCheck /> Hello Alert!
    </Alert> -->

    <!-- Slot Name -->
    <!-- <Modal :show="true"> -->
    <!-- Slot header cara 1-->
    <!-- <template v-slot:header>Title content</template> -->

    <!-- Slot header cara 2-->
    <!-- <template #header>Title content</template> -->

    <!-- Slot default cara 1-->
    <!-- <template v-slot:default>Body content here!</template> -->

    <!-- Slot default cara 2-->
    <!-- Body content here! -->

    <!-- Slot default -->
    <!-- <template v-slot:footer>Footer</template> -->
    <!-- </Modal> -->

    <!-- Scoped slot cara 1 -->
    <!-- <Alert :show="true" v-slot="scopedSlot">
      Hello Vue! <a href="" :class="scopedSlot.alertLink">Link</a>
    </Alert> -->

    <!-- Scoped slot cara 1 -->
    <!-- <Alert :show="true" v-slot="{ alertLink }">
      Hello Vue! <a href="" :class="alertLink">Link</a>
    </Alert> -->

    <!-- Scoped slot parameter cara 1 -->
    <!-- <TodoList>
      <template #default="defaultProps">
        <input type="checkbox" name="" id="" class="form-check-input me-1">
        {{ defaultProps.name }}
      </template>
      <template #footer="{ all, todo, done }">
        <div class="d-flex justify-content-between">
          <span class="text-muted">All {{ all }}</span>
          <span class="text-muted">Todo {{ todo }}</span>
          <span class="text-muted">Done {{ done }}</span>
        </div>
      </template>
    </TodoList>
  -->

    <!-- Scoped slot parameter cara 2 -->
    <!-- <TodoList>
      <template #default="{ name }">
        <input type="checkbox" name="" id="" class="form-check-input me-1">
        {{ name }}
      </template>
      <template #footer="iniParam">
        <div class="d-flex justify-content-between">
          <span class="text-muted">All {{ iniParam.all }}</span>
          <span class="text-muted">Todo {{ iniParam.todo }}</span>
          <span class="text-muted">Done {{ iniParam.done }}</span>
        </div>
      </template>
    </TodoList>
     -->

    <!-- Dynamic Component -->
    <!-- Keep Alive digunakan apabila berpindah component maka state sebelumnya tetap disimpan -->
    <section>
      <button class="btn btn-primary" @click="showForm = 'Login'">Login</button>
      <button class="btn btn-primary" @click="showForm = 'Register'">Register</button>
      <KeepAlive>
        <component :is="showForm" />
      </KeepAlive>
    </section>

  </div>
</template>

<script>
import Alerts from "./components/Alerts.vue"
import LoginForm from "./components/auth/LoginForm.vue"
import BaseInput from "./components/BaseInput.vue"
import BaseButton from "./components/BaseButton.vue"
import IconCheck from "./components/icons/IconCheck.vue"
import IconExclamation from "./components/icons/IconExclamation.vue"
import Modal from "./components/Modal.vue"
import TodoList from "./components/TodoList.vue"
import Person from "./components/Person.vue"
import Alert from "./components/Alert.vue"

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
    TodoList
  },
  data: () => ({
    items: 3,
    show: true,
    alert: {
      message: "Message",
      types: ["success", "warning", "danger"],
    },
    email: '',
    password: '',
    message: "Alert message"
  }),
  methods: {
    handleSubmit(email, password) {
      alert(email + ' ' + password);
    }
  }
}
</script>

<template>
  <div class="container py-5">
    <!-- Props dengan kebab case -->
    <!-- Bila props dengan bind gunakan (:) maka dianggap js syntax -->
    <Person first-name="Eko" last-name="Khannedy" :age="30" />

    <!-- Bind sekaligus dengan object -->
    <Alerts v-bind="alert" :items="items" />
  </div>
</template>

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">D26</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">О Нас</router-link>
                    </li>
                </ul>
                <div class="navbar__info">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <span v-if="isLoggedIn"><a @click="open" class="btn btn-danger navbar__btn">Выход</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Modal v-if="isOpen">
            <h3 class="mb-5">Вы уверены?</h3>
            <div class="modals__btn-group">
                <a @click="logout" class="btn btn-danger navbar__btn">Выход</a>
                <a @click="open" class="btn btn-secondary navbar__btn">Отмена</a>
            </div>
        </Modal>
    </div>
</template>
<script>
import firebase from 'firebase/app';
import Modal from '../../components/Modal/Modal';

export default {
  name: "NavBar",
  components: {
    Modal
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isLoggedIn() {
      const currentUser = firebase.auth().currentUser;
      return currentUser ? !this.isAuth : this.isAuth
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login')
    },
   open() {
      this.isOpen = !this.isOpen
   }
  }
}
</script>
<style lang="scss" scoped>
    @import "NavBar";
</style>

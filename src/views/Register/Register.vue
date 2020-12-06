<template>
    <div class="login">
        <div class="row justify-content-md-center mt-5">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Зарегистрироваться!
                    </div>
                    <div class="card-body">
                        <form class="login" @submit.prevent="register">
                            <Input v-model="name" type="name" label="Name"/>
                            <Input v-model="email" type="email" label="E-mail"/>
                            <Input v-model="password" type="password" label="password"/>
                            <div class="login__btn-group">
                                <button type="submit" class="btn btn-primary">Отправить</button>
                                <router-link to="/login" class="btn btn-secondary">Войти</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-if="isOpen" text="О Регистрации">
            <h3>Вы зарегистрировались</h3>
        </Modal>
    </div>
</template>
<script>
import Modal from '../../components/Modal/Modal'
import Input from '../../components/Forms/Input/Input'

export default {
  data() {
    return {
      name : "",
      email : "",
      password : "",
      isOpen: false
    }
  },
  components: {
    Modal,
    Input
  },
  methods: {
    async register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch('register', data)
          .then((data) => {
            console.log(data);
            this.isOpen = true;
            setTimeout(() => {
              this.$router.push('/login')
            }, 1500);
          })
          .catch(err => console.log(err))
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "Register";
</style>
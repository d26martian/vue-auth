<template>
    <div class="login">
        <div class="row justify-content-md-center mt-5">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        Вход в систему!
                    </div>
                    <div class="card-body">
                        <form class="login" @submit.prevent="login">
                            <Input v-model="email" type="email" label="E-mail"/>
                            <Input v-model="password" type="password" label="Password"/>
                            <div class="login__btn-group">
                                <button type="submit" class="btn btn-primary">Отправить</button>
                                <router-link to="/register" class="btn btn-secondary">Регистрация</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Input from '../../components/Forms/Input/Input';

export default {
  data() {
    return {
      email : "",
      password : "",
      userId: ""
    }
  },
  components: {
    Input
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    }
  },
  methods: {
    async login() {
      let email = this.email;
      let password = this.password;
      try {
        await this.$store.dispatch('login', {email, password});
        this.$router.push('/secure')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "Login";
</style>
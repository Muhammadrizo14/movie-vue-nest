<template>
  <div>
    <div class="upwrap">
      <div class="container">
        <div class="container_wrap">
          <Header/>
          <div class="content">
            <div class="register">
              <div class="col-md-6">
                <table>
                  <tr>
                    <td>Name: </td>
                    <td v-for="i in profile">{{ i.name }}</td>
                  </tr>
                  <tr>
                    <td>Password: </td>
                    <td  v-for="i in profile">{{ i.password }}</td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6 login-right">
                <h3>Edit profile</h3>
                <form  @submit.prevent="handleSubmit">
                  <div>
                    <span>Name<label>*</label></span>
                    <input ref="name"  type="text">
                  </div>
                  <div>
                    <span>Password<label>*</label></span>
                    <input ref="password"  type="text">
                  </div>
                  <input v-on:click="editPro()" type="submit" value="Edit">
                </form>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/header-users";
import Footer from "@/components/footer";

export default {
  name: "profile",
  components: {Header, Footer},
  data() {
    return {
      profile: {},
      username: '',
      password: ''
    }
  },

  mounted() {
    axios({
      method: "GET",
      url: 'http://localhost:3033/auth/profile',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
        .then((response => {
          console.log(response.data)
          this.profile = response.data
        }))
        .catch((err => {
          console.log(err)
        }))
  },

  methods:{
    editPro: function (){
      axios({
        method: "PATCH",
        url: 'http://localhost:3033/user/' + this.profile.user.id,
        data: {
          "name": this.$refs.name.value,
          "password": this.$refs.password.value,
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      })
          .then((response => {
            console.log(response.data)
            location.reload()
          }))
          .catch((err => {
            console.log(err)
          }))
    }
  }

}
</script>

<style scoped>

</style>
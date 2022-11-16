<template>
  <Header/>
  <h1>Users</h1>
  <table class="fixed_headers">
    <thead>
    <tr>
      <th>Name</th>
      <th>Password</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(data, index) in users" :key="index">
      <td>{{ data.name }}</td>
      <td>{{ data.password }}</td>
      <td>
        <vue-final-modal v-model="editModal" classes="modal-container"  content-class="modal-content" :esc-to-close="true">
          <Button @click="editModal = false " icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined modal__close"/>
          <span class="modal__title">{{$t('delete_user.delete_user')}}</span>
          <div  class="modal__action">
            <button class="editbtn" @click="updataBtn(data.id)">{{$t('yes')}}</button>
          </div>
        </vue-final-modal>
        <Button @click="editModal = true" icon="pi pi-trash"  class="p-button-danger"  />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import Header from '@/admin/header-admins'
import axios from "axios";
import Button from 'primevue/button';

export default {
  name: 'users',
  data() {
    return {
      users: [],
      editModal: false,
      token: localStorage.getItem('token'),
      name: localStorage.getItem('name'),
      password: localStorage.getItem('password')
    }
  },
  components: {
    Header,
    Button
  },
  mounted() {
    axios({
      method: "GET",
      url: 'http://localhost:3033/user/',
      headers: {
        Authorization: "Bearer " + this.token
      }
    })
        .then((response => {
          this.users = response.data
        }))
        .catch((err => {
          console.log(err)
        }))
    if (!this.name === 'admin' && this.password) {
      this.$router.push('/')
    }
  },
  methods: {
    updataBtn: function (i) {
      console.log(i)
      this.editModal = false
      location.reload()

      axios({
        method: "DELETE",
        url: 'http://localhost:3033/user/' + i,
        headers: {
          Authorization: "Bearer " + this.token
        }
      })
          .then((response => {
            console.log(response)
          }))
          .catch((err => {
            console.log(err)
          }))
    }
  }

}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-page {
  width: 360px;
  padding: 2% 0 0;
  margin: auto;
}
.form {
  padding-top: 13px;
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.editbtn {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}


::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 5rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}



.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}

.container {
  max-width: 63%;
  margin: 0 auto;
  font-family: "Pacifico", sans-serif;
}

.movie-info {
  padding-left: 30px;
}

.eqs {
  margin: 0;
  padding: 0;
}

.am {
  display: flex;
}

.du {
  display: flex;
  padding-top: 20px;
}
.deletem {
  padding-right: 10px;
}
.about-mo {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
}

.title-movie {
  font-size: 40px;
}

.equsd {
  color: rgba(0,0,0,.4);
  padding: 0;
  margin: 0;
}

.dff {
  padding-bottom: 20px;
}

.poster {
  width: 300px;
  height: 444px;
}


.fixed_headers {
  width: 100%;
  table-layout: fixed;
  /*border-collapse: collapse;*/
}

.fixed_headers th, .fixed_headers td {
  padding: 5px;
  text-align: left;
}

.fixed_headers td:nth-child(1), .fixed_headers th:nth-child(1) {
  min-width: 300px;
}

.fixed_headers td:nth-child(2), .fixed_headers th:nth-child(2) {
  width: 100%;
}

.fixed_headers td:nth-child(3), .fixed_headers th:nth-child(3) {
  width: 100%;
}

.fixed_headers thead {
  background-color: #333;
  color: #FDFDFD;
}

.fixed_headers thead tr {
  display: block;
  position: relative;
}

.fixed_headers tbody {
  display: block;
  overflow: auto;
  width: 100%;
}

.fixed_headers tbody tr:nth-child(even) {
  background-color: #DDD;
}



.old_ie_wrapper tbody {
  height: auto;
}




</style>
<template>
      <div class="form-container">
    <div class="main-form">
      <div class="form-triangle"></div>

      <h2 class="form-header">LOG IN</h2>

      <form @submit.prevent="login" class="login-container">
        <p class="error-message">{{ errorInfo }}</p>
        <p>
          <input required 
          type="text" 
          placeholder="Email"
          id="email"
          v-model="email">
        </p>
        <p>
          <input required 
          type="password" 
          placeholder="Password"
          id="passowrd"
          v-model="password">
        </p>
        <p><input type="submit" value="Log In"></p>
        <p class="form-text">New ? Register an account <router-link to="/register"><span class="form-redirect">here</span></router-link></p>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '../supabase/init';
  import {  useRouter } from 'vue-router';

  export default {
    name: "login",
    setup() {

      // setup data variables
      const router = useRouter();
      const email = ref(null);
      const password = ref(null);
      const errorInfo = ref(null);

      const login = async () => {
        try {
          const {user, error} = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push({name: "Dashboard"});
        } catch (error) {
          errorInfo.value = `Error: ${error.message}`;
          setTimeout(() => {
           errorInfo.value = null;
          }, 5000);
        }
      };
  
      return {email, password, errorInfo, login};
    },
  };
  </script>
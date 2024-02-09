<template>
  <div class="reg-form-container">
    <div class="main-form">
      <div class="form-triangle"></div>

      <h2 class="form-header">SIGN UP</h2>

      <form @submit.prevent="registerUser" class="login-container">

        <p class="error-message">{{ errorInfo }}</p>

        <p>
          <input required 
          type="email" 
          placeholder="Email"
          id="email"
          v-model="email">
        </p>
        <p>
          <input required 
          type="text" 
          placeholder="Username"
          id="username"
          v-model="username">
        </p>
        <p>
          <input required 
          type="password" 
          placeholder="Password"
          id="passowrd"
          v-model="password">
        </p>
        <p>
          <input required 
          type="password" 
          placeholder="Confirm password"
          id="confirmPassword"
          v-model="confirmPassword">
        </p>

        <div class="gender-selection">
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" v-model="gender">

        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" v-model="gender">
      </div>

        <p>
          <input required 
          type="tex" 
          placeholder="Weight"
          id="weight"
          v-model="weight">
        </p>

        <p>
          <input required 
          type="text" 
          placeholder="Height"
          id="height"
          v-model="height">
        </p>

        <p><input required type="submit" value="Register"></p>
        
        <p class="form-text">Already have an account? <router-link to="/login"><span class="form-redirect">Login</span></router-link></p>

      </form>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue';
import { supabase } from '../supabase/init';
import {  useRouter } from 'vue-router';



export default {
  name: "register",
  setup() {

    // set up data variables
    const router = useRouter();
    const email = ref(null);
    const username = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const gender = ref(null);
    const height = ref(null);
    const weight = ref(null);
    const errorInfo = ref(null);

    // register function

    const registerUser = async () => {
  if (password.value === confirmPassword.value) {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      
      if (error) {
        throw error;
      }
      
      // Insert additional user information into the database
      const { data, error: insertError } = await supabase
        .from('users')
        .insert({
          email: email.value,
          username: username.value,
          password: password.value,  
          gender: gender.value,
          height: height.value,
          weight: weight.value,
          // Add more fields as needed
        });

      if (insertError) {
        throw insertError;
      }

      console.log('User registered successfully!');
      router.push({name: "Login"});
    } catch (error) {
      console.error('Error registering user:', error.message);
      errorInfo.value = error.message;
    }
  } else {
    errorInfo.value = "Passwords do not match!";
    setTimeout(() => {
      errorInfo.value = null;
    }, 5000);
  }
};

    return { email, username, password, confirmPassword, gender, height, weight, errorInfo, registerUser };
  },
};
</script>
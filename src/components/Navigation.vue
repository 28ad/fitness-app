<template>
    <header>
        <nav class="nav">
            <div class="container">
                <h1><a class="logo" href="#">GO Health</a></h1>
                <ul>
                    <router-link v-if="!user" class="nav-link" to="/">Home</router-link>
                    <router-link v-if="!user" class="nav-link" to="/login">Login</router-link>
                    <router-link v-if="user" class="nav-link" to="/dashboard">Dashboard</router-link>
                    <router-link v-if="user" class="nav-link" to="/food">Food</router-link>
                    <router-link v-if="user" class="nav-link" to="/workouts">Workouts</router-link>
                    <router-link v-if="user" class="nav-link" to="/community">Community</router-link>
                    <li v-if="user" @click="logout" class="nav-link" >Logout</li>

                </ul>
            </div>
</nav>
    </header>
  </template>
  
  <script>
  import { supabase } from '@/supabase/init';
  import { useRouter } from 'vue-router';
  import stores from '../stores/index';
  import { computed } from 'vue';

  export default {
    setup() {

      const user = computed(() => stores.state.user);

      const router = useRouter();

      const logout = async () => {
        await supabase.auth.signOut();
        router.push({name: "Home"});
      }
  
      return {logout, user};
    },
  };
  </script>
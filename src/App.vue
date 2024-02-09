<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { ref } from "vue";
import { supabase } from './supabase/init';
import store from "./stores/index";

export default {
  components: {
    Navigation,
  },
  setup() {
    
    const appIsReady = ref(null);

    const user = supabase.auth.getUser();

    if (!user) {
      appIsReady.value = true;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      console.log("Log happened");
      store.methods.setUser(session);
      appIsReady.value = true;
    })
    return {appIsReady};
  },
};
</script>

<template>
  <Navigation/>
  <RouterView />
</template>


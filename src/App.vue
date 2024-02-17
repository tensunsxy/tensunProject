<template>
  <h1>111</h1>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { reqLogin} from './api/user';

onMounted(()=>{ 
  reqLogin({username:'admin',password:'111111'}).then(res=>{
    console.log(res)
  })
})

</script>
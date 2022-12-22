<template>
    <div class="w-25 chatroom-container">
        <Login v-if="step === 1" @next="nextStep"></Login>
        <Chat v-if="step === 2" :username="username"></Chat>
    </div>
</template>

<script lang="ts" setup>
import Login from '@/components/Login.vue'
import Chat from '@/components/Chat.vue'
import { ref } from 'vue'

const username = ref('')
const step = ref(1)

const nextStep = (name: string) => {
    if (name !== '') {
        username.value = name
        step.value = 2
    }
}

</script>

<style lang="scss" scoped>
.chatroom-container{
    margin: 0 auto;
    border: 1px solid #F4F4F4;
}
</style>

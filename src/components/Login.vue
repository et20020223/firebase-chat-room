<template>
    <div class="login-block mt-10">
        <div class="text-center">請輸入暱稱：</div>
        <v-responsive
            class="mx-auto my-8"
            max-width="300px"
            width="300px">
            <v-text-field
                density="comfortable"
                variant="outlined"
                hide-details="auto"
                v-model.trim="username"
                :placeholder="'請輸入使用者暱稱'">
            </v-text-field>
        </v-responsive>
        <v-responsive
            class="mx-auto my-8"
            max-width="300px"
            width="300px">
            <v-btn
                color="info"
                block
                fab
                :disabled="username === ''"
                @click="nextStep()">
                開始聊天
            </v-btn>
        </v-responsive>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const username = ref('')

const emit = defineEmits({
    next: (_name: string) => true
})

const nextStep = () => {
    if (username.value !== '') {
        emit('next', username.value)
    }
}
</script>

<style lang="scss" scoped>

</style>

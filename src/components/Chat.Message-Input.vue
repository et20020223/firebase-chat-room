<template>
    <v-row class="send-message-block" no-gutters align="center">
        <v-col class="d-flex align-center">
            <v-textarea
                ref="messageInput"
                v-model="msg"
                auto-grow
                outlined
                hide-details
                dense
                rows="1"
                row-height="15"
                :placeholder="'請輸入訊息'"
            ></v-textarea>
            <v-btn
                class="mx-2 elevation-0"
                fab
                dark
                x-small
                :color="msg === '' ? 'gray' : 'primary'"
                :loading="loading"
                :disabled="msg === '' || !sendController"
                @click="send()">
                <v-icon>mdi-send</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { writeUserData } from '@/firebase'

const messageInput = ref<HTMLInputElement>()

const msg = ref('')
const loading = ref(false)
let sendController = ref(true)

const props = defineProps({
    username: {
        type: String,
        required: true
    }
})

const send = () => {
    try {
        sendController.value = false
        writeUserData(props.username, msg.value)
        setTimeout(() => {
            sendController.value = true
        }, 1000)
        msg.value = ''
    } catch (error) {
        console.log('error: ', error)
    }
    toFocusMessageInput()
}

const toFocusMessageInput = () => {
    messageInput.value?.focus()
}
</script>

<style lang="scss" scoped>
.send-message-block{
    height: 80px;
}
</style>

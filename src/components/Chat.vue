<template>
    <div>
        <Info :username="username"></Info>
        <MessageContainer :messages="messages" :username="username"></MessageContainer>
        <MessageInput :username="username"></MessageInput>
    </div>
</template>

<script lang="ts" setup>
import Info from '@/components/Chat.Info.vue'
import MessageContainer from '@/components/Chat.Message-Container.vue'
import MessageInput from '@/components/Chat.Message-Input.vue'
import { onMounted, ref } from 'vue'
import { realtimeRef } from '@/firebase'
import { onValue, DataSnapshot } from 'firebase/database'
import { useDayjs } from '@/utils/day'

type Message = {
    key: string
    message: string
    username: string
    time: string
}

const dayjs = useDayjs()

defineProps({
    username: {
        type: String,
        required: true
    }
})

let messages = ref([] as Array<Message>)
let loginTimestamp = 0

onMounted(() => {
    loginTimestamp = dayjs().unix()
    onValue(realtimeRef, (snapshot: DataSnapshot) => {
        if (snapshot.exists()) {
            let size = 1
            snapshot.forEach((item) => {
                if (snapshot.size === size && item.key !== null && Number(item.key) >= loginTimestamp) {
                    messages.value.push(item.val())
                }
                size++
            })
        }
    }, (error) => {
        console.error(error)
    })
})

</script>

<style lang="scss" scoped>
</style>

<template>
    <div class="message-container pb-10" align="end">
        <div class="message-block" ref="messageContainer">
            <div
                v-for="(item) in messages"
                :class="['d-flex flex-row align-center my-2', item.username === username ? 'justify-end': null]"
                :key="item.key">
                <span v-if="item.username === username" class="mx-3 pa-2 rounded msg-border-user">
                    <v-chip>{{ item.message }}</v-chip>
                </span>
                <div v-if="item.username !== username" class="d-flex mx-2">
                    <div class="d-flex flex-column align-center">
                        <v-avatar class="rounded-circle avatar-border" size="36">
                            <v-icon class="face-agent-icon">mdi-emoticon-cool-outline</v-icon>
                        </v-avatar>
                        <span>{{ item.username }}</span>
                    </div>
                    <span class="mx-3 pa-2 rounded msg-border-service">
                        <v-chip color="secondary">{{ item.message }}</v-chip>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, type PropType, watch } from 'vue'

type Message = {
    key: string
    message: string
    username: string
    time: string
}

const messageContainer = ref<HTMLInputElement>()

const props = defineProps({
    messages: {
        type: [] as PropType<Array<Message>>,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

watch(props.messages, () => {
    scrollToEnd()
})

const scrollToEnd = () => {
    nextTick(() => {
        messageContainer.value!.scrollTo({ top: messageContainer.value!.offsetHeight })
    })
}

</script>

<style lang="scss" scoped>
.message-container{
    height: 80vh;
}
.message-block{
    height: 100%;
    overflow: auto;
}
.avatar-border {
    border: 1px solid var(--v-gray-lighten1);
}
.msg-border-user {
    border: 1px solid var(--v-gray-lighten1);
    background-color: #fff;
}
.msg-border-service {
    background-color: var(--v-gray-lighten1);
}
.face-agent-icon {
    font-size: 30px;
}
</style>

<template>
    <!-- https://www.pixeltrue.com/free-packs/minimalistic-illustrations#preview -->
    <VLottie :autoplay="true" :loop="true" :path="BotJson"></VLottie>
</template>
<script lang="ts" setup>
import VLottie from '../LottieComponent.vue'
import BotJson from './Chatbot-BW-Animation.json?url'
</script>

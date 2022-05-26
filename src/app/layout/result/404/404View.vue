<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <div>
            <VLottie :autoplay="true" :loop="true" :path="errorJson" />
            <!-- <img width="500" src="@/assets/icon/error.png" /> -->
        </div>
        <div>抱歉，您访问的页面不存在</div>
        <Button @click="$router.push('/')" class="mt-1">回到首页</Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'tdesign-vue-next'
import { VLottie } from '@shared/components/lottie'
import errorJson from '@/assets/lottie-json/error-404.json?url'
</script>

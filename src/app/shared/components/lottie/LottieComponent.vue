<template>
    <div class="h-full w-full" ref="containerEle"></div>
</template>

<script lang="ts" setup>
import lottie, { type AnimationItem } from 'lottie-web'
import {
    computed,
    onMounted,
    onUnmounted,
    ref,
    watch,
    watchPostEffect
} from 'vue'

type rendererType = 'svg' | 'canvas' | 'html'

interface IProps {
    // 是否循环播放
    loop?: boolean
    // 渲染动画的类型
    renderer?: rendererType
    // 是否自动播放
    autoplay?: boolean
    // 动画渲染数据，与path互斥
    animationData?: any
    // JSON文件路径，与animationData互斥
    path?: string
}

const props = defineProps<IProps>()

const containerEle = ref<Element>()
const lottieAnimationItem = ref<AnimationItem>()

const options = computed(() => {
    const options: IProps = {
        loop: props.loop,
        renderer: props.renderer,
        autoplay: props.autoplay
    }
    if (props.animationData) {
        options.animationData = props.animationData
    } else {
        options.path = props.path
    }
    return options
})
// watchPostEffect(() => {
//     if (containerEle.value) {
//         lottieAnimationItem.value = lottie.loadAnimation({
//             container: containerEle.value,
//             ...options.value
//         })
//     }
// })
onMounted(() => {
    if (containerEle.value) {
        lottieAnimationItem.value = lottie.loadAnimation({
            container: containerEle.value,
            ...options.value
        })
    }
})

onUnmounted(() => {
    if (lottieAnimationItem.value) {
        lottieAnimationItem.value.destroy()
    }
})

defineExpose({ ...lottieAnimationItem.value })
</script>

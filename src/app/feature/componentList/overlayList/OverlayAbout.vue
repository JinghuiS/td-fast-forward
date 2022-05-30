<template>
    <div>
        <h1>使用服务形式的{{ name }}。</h1>

        <ul class="my-20px">
            <li class="mt-5px">
                调用会返回promise，更适合做常规页面的curd，因为单独页面处理curd，当返回页面时还要记录分页，使用弹出层成本也更小没有页面跳转
            </li>
            <li class="mt-5px">
                <a
                    :href="
                        'https://tdesign.tencent.com/vue-next/components/' +
                        name
                    "
                    >所有参数都基于TDesign的{{ name }}</a
                >
            </li>
            <li class="mt-5px">
                可以通过<code>use{{ name }}Ref</code>获取弹出层的关闭和参数
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ name: string }>()
</script>

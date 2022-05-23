<template>
    <div>登录页面</div>
</template>

<script lang="ts" setup>
import { useTokenService } from '@/app/core/service/Token.Service'

const { setToken } = useTokenService()

function login() {
    //通过setToken可以在登录之后把从后端获取的token保存到本地
    setToken('token')
}
</script>

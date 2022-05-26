<template>
    <div class="pass-container">
        <div class="wrap flex justify-center flex-col">
            <div class="bg">
                <svg
                    width="800"
                    height="800"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter
                            id="grain"
                            x="-50vw"
                            y="-50vh"
                            width="100vw"
                            height="100vh"
                        >
                            <feFlood
                                flood-color="#ffffff"
                                result="neutral-gray"
                            />

                            <feTurbulence
                                in="neutral-gray"
                                type="fractalNoise"
                                baseFrequency="2.5"
                                numOctaves="100"
                                stitchTiles="stitch"
                                result="noise"
                            />

                            <feColorMatrix
                                in="noise"
                                type="saturate"
                                values="0"
                                result="destaturatedNoise"
                            ></feColorMatrix>

                            <feComponentTransfer
                                in="desaturatedNoise"
                                result="theNoise"
                            >
                                <feFuncA
                                    type="table"
                                    tableValues="0 0 0.25 0"
                                ></feFuncA>
                            </feComponentTransfer>

                            <feBlend
                                in="SourceGraphic"
                                in2="theNoise"
                                mode="soft-light"
                                result="noisy-image"
                            />
                        </filter>

                        <linearGradient
                            id="linearGradientId"
                            gradientTransform="rotate(60 0.5 0.5)"
                        >
                            <stop offset="0%" stop-color="#0093E9" />
                            <stop offset="100%" stop-color="#80D0C7" />
                        </linearGradient>

                        <clipPath id="shape">
                            <path
                                fill="currentColor"
                                d="M903,650.5Q859,801,716.5,861.5Q574,922,445,870.5Q316,819,214,730Q112,641,105,497.5Q98,354,187,232.5Q276,111,426,90Q576,69,688,158.5Q800,248,873.5,374Q947,500,903,650.5Z"
                            ></path>
                        </clipPath>
                    </defs>

                    <g filter="url(#grain)" clip-path="url(#shape)">
                        <path
                            fill="url(#linearGradientId)"
                            d="M903,650.5Q859,801,716.5,861.5Q574,922,445,870.5Q316,819,214,730Q112,641,105,497.5Q98,354,187,232.5Q276,111,426,90Q576,69,688,158.5Q800,248,873.5,374Q947,500,903,650.5Z"
                        />
                    </g>
                </svg>
            </div>

            <div class="form-body">
                <h1 class="text-xl font-semibold mb-4 mb-16">
                    td-fast-forward 🖥
                </h1>
                <div class="flex justify-center items-center">
                    <div>
                        <BowLottie />
                        <!-- <img src="@/assets/bg.png" class="img" /> -->
                    </div>
                    <div class="form-box">
                        <div class="text-xl font-semibold mb-4">欢迎回来👏🏻</div>
                        <Form
                            :rules="rules"
                            ref="form"
                            :data="formData"
                            :colon="true"
                            :label-width="0"
                            @reset="onReset"
                            @submit="onSubmit"
                        >
                            <FormItem name="account">
                                <Input
                                    v-model="formData.account"
                                    clearable
                                    placeholder="请输入账户名"
                                >
                                    <template #prefix-icon>
                                        <desktop-icon />
                                    </template>
                                </Input>
                            </FormItem>
                            <FormItem name="password">
                                <Input
                                    v-model="formData.password"
                                    type="password"
                                    clearable
                                    placeholder="请输入密码"
                                >
                                    <template #prefix-icon>
                                        <lock-on-icon />
                                    </template>
                                </Input>
                            </FormItem>
                            <FormItem style="padding-top: 8px">
                                <Button theme="primary" type="submit" block
                                    >登录</Button
                                >
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Button, MessagePlugin, Form, FormItem, Input } from 'tdesign-vue-next'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'
import { formGroup } from '@shared/components/form'
import { BowLottie } from '@shared/components/lottie'
import { useTokenService } from '@/app/core/service/Token.Service'

import { useRouter } from 'vue-router'

const { setToken } = useTokenService()

const { push } = useRouter()

const { rules, data: formData } = formGroup({
    account: ['', [{ required: true, message: '账号必填', type: 'error' }]],
    password: ['', [{ required: true, message: '密码必填', type: 'error' }]]
})

const onReset = () => {
    MessagePlugin.success('重置成功')
}

const onSubmit = ({ validateResult, firstError }: any) => {
    if (validateResult === true) {
        if (
            formData.value.account === 'admin' &&
            formData.value.password === 'admin'
        ) {
            login()
            MessagePlugin.success('登录成功')
            return
        } else {
            console.log('Validate Errors: ', firstError, validateResult)
            MessagePlugin.warning('错误拉')
        }
    } else {
        console.log('Validate Errors: ', firstError, validateResult)
        MessagePlugin.warning(firstError)
    }
}
const login = () => {
    //通过setToken可以在登录之后把从后端获取的token保存到本地
    setToken('token')
    push('/')
}
</script>
<style lang="less" scoped>
.pass-container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f0f2f5;
    .wrap {
        flex: 1;
        padding: 32px 0;
        .bg {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
        .form-body {
            width: 800px;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 20px 80px 80px 40px;
            position: relative;
            z-index: 10;
            background: #fcfcfc;
            .img {
                width: 400px;
                margin-right: 50px;
            }
            .form-box {
                width: 250px;
                margin: auto;
            }
        }
    }
}
</style>

<template>
    <div class="navbar">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate, isActive, isExactActive }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" :class="{ 'router-link-active': isActive, 'router-link-exact-active': isExactActive }" @click="navigate">
                        {{ item.label }}
                    </a>
                </router-link>
                <a v-else :href="item.url" v-bind="props.action" :class="{ 'router-link-active': item.isActive }">
                    {{ item.label }}
                    <!-- <span v-if="hasSubmenu" /> -->
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
const items = ref([
    {
        label: 'Home',
        route: { name: 'Home' }
    },
    {
        label: 'Week1',
        route: { name: 'Week1' }
    },
    {
        label: 'Week2',
        route: { name: 'Week2' }
    },
    {
        label: 'Week3',
        items: [
            {
                label: 'CompositionAPI',
                route: { name: 'CompositionAPI_Example' }
            },
            {
                label: 'PassValue Example',
                route: { name: 'PassValue_Example' }
            },
        ]
    },
    {
        label: 'Week4',
        items: [
            {
                label: 'Axios',
                route: { name: 'Axios_Example' }
            },
            {
                label: 'Pinia',
                route: { name: 'Pinia_Example' }
            },
            {
                label: 'Pinia State',
                route: { name: 'Pinia_Readonly' }
            },
        ]
    },
]);
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
}
</style>
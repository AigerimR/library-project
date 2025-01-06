export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token');
    if(!token.value) {
        return navigateTo('/');
    }

    try {
        const response = await $fetch('http://localhost:1337/api/users/me', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            method: 'GET'
        });
    } catch (error) {
        return navigateTo('/');
    }
})
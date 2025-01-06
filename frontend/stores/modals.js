export const useModalsStore = defineStore('modalsStore', {
    state: () => ({
        login: false,
        signup: false,
        logout: false
    }),
    actions: {
        openModal(modal) {
            this[modal] = true;
        },
        closeModal(modal) {
            this[modal] = false;
        },
    },
})
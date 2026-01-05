export const bodyLock = {
    enable: () => {
        document.body.classList.add('_isLock');
    },
    disable: () => {
        document.body.classList.remove('_isLock');
    },
};
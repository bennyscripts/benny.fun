const loading = document.querySelector('.loading');

const hideLoading = () => {
    loading.style.opacity = 0;
    setTimeout(() => {
        loading.style.display = 'none';
    }, 500);
}

setTimeout(hideLoading, 1000);
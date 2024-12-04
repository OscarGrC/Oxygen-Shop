function calculateScrollPosition() {
    return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
}
const scrollToBottom = () => {
    const element = document.getElementById('lf-chat-body');

    if (element) {
        element.scrollTo({
            top: element.scrollHeight,
            behavior: 'smooth',
        })
    }
};

export default scrollToBottom;
const scrollBottom = () => {
  const element = document.getElementById("rbc-chat-body");

  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
  }
};

export default scrollBottom;

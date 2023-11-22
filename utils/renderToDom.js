function renderToDom(divId, htmlToRender) {
  const target = document.querySelector(divId);
  target.innerHTML = htmlToRender;
}
export default renderToDom;

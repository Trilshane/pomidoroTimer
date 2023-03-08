const createElemet = ({ tag, content, proops, parent }) => {
  const el = document.createElement(tag);
  el.textContent = content;
  proops.map((e) => el.setAttribute(Object.keys(e), Object.values(e)));
  parent.appendChild(el);
  return el;
};

export default createElemet;

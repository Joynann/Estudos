const formulario = document.forms.controles;
const btn = document.querySelector('.btn');

formulario.addEventListener('change', getValues);

function getValues(event)
{
  const name = event.target.name;
  const value = event.target.value;
  setValues[name](value);
  localStorage[name] = value;
}

const setValues =
{
  texto(value)
  {
    btn.innerText = value;
  },
  color(value)
  {
    btn.style.color = value;
  },
  backgroundColor(value)
  {
    btn.style.backgroundColor = value;
  },
  height(value)
  {
    btn.style.height = value + 'px';
  },
  width(value)
  {
    btn.style.width = value + 'px';
  },
  border(value)
  {
    btn.style.border = value;
  },
  borderRadius(value)
  {
    btn.style.borderRadius = value + 'px';
  },
  fontFamily(value)
  {
    btn.style.fontFamily = value;
  },
  fontSize(value)
  {
    btn.style.fontSize = value + 'rem';
  },
}

function setLocalStore()
{
  const cache = Object.keys(localStorage);
  cache.forEach((name) =>
  {
    const value = localStorage[name];
    setValues[name](value);

    formulario[name].value = value;
  })
}

setLocalStore();
import throttle from 'lodash.throttle';

const refs = {
  formElem: document.querySelector('.feedback-form'),
};

function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
}

refs.formElem.addEventListener('input', throttle(onFormElemInput, 500));

function onFormElemInput() {
  const userForm = {};

  const formData = new FormData(refs.formElem);

  formData.forEach((value, key) => {
    userForm[key] = value;
  });

  saveToLs('feedback-form-state', userForm);
}

function onLoad() {
  const data = loadFromLS('feedback-form-state') || {};

  for (const key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }
}

function onFormElemSubmit(e) {
  e.preventDefault();

  const data = loadFromLS('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  console.log(data);
}

refs.formElem.addEventListener('submit', onFormElemSubmit);

onLoad();

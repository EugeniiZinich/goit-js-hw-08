import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
const feedbackFormRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

initPage();

const onSubmitFormValue = e => {
  const { name, value } = e.target;

  try {
    let saveData = load(LOCALSTORAGE_KEY);
    saveData = saveData ? saveData : {};

    saveData[name] = value;
    save(LOCALSTORAGE_KEY, saveData);
  } catch (error) {
    console.error(error);
  }
};

feedbackFormRef.addEventListener('input', throttle(onSubmitFormValue, 500));

function initPage() {
  const saveData = load(LOCALSTORAGE_KEY);

  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      feedbackFormRef.elements[name].value = value;
    });
  }
}

const onSubmitClick = e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    formData[name] = value;
  });
  console.log(formData);
  e.currentTarget.reset();
  remove(LOCALSTORAGE_KEY);
};

feedbackFormRef.addEventListener('submit', onSubmitClick);

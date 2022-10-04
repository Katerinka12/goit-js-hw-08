import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = "feedback-form-state";



form.addEventListener('input', throttle(e => { 
    const objectToSave = { email: inputEmail.value, message: message.value };
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave)), 500},))

form.addEventListener('submit', onSubmit);

function onSubmit(evnt){
    e.preventDefault();
    console.log({email: inputEmail.value, message: message.value});
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);}


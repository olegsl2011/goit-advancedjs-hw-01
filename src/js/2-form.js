const form = document.querySelector('.feedback-form');

let formData = {
    email: "",
    message: ""
};
const feedbackFormState = localStorage.getItem('feedback-form-state');

if(feedbackFormState){
    formData = JSON.parse(feedbackFormState)
    form.email.value = formData.email;
    form.message.value = formData.message;
}



form.addEventListener('input', (e) => {
    const {name, value} = e.target;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        email: e.target.email.value,
        message: e.target.message.value
    };
    if(formData.email && formData.message) {
        localStorage.removeItem('feedback-form-state');
        console.log(formData);
        form.reset();
    };
});

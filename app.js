import { signInUser, signUpUser } from "./fetch-utils.js";
import {};

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');


// Wire up sign in and sign up forms to supabase
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const user = await signInUser(email, data.get('password'));

    if (user) {
        location.replace('/other-page');
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signUpUser(email, data.get('password'));

    if (user) {
        location.replace('/other-page');
    }
});

// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

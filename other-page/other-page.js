import { checkAuth, logout } from '../fetch-utils.js';
// use checkAuth function to redirect if user not authenticated
checkAuth();

const logOutButton = document.getElementById('logout');
// add event listener to the logout button and call logout
logOutButton.addEventListener('click', async () => {
    await logout();
});

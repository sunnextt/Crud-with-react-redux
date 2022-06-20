export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return { Authorization: 'Bearer ' + user.results.token };
    } else {
        return {};
    }
}

const setToken = (token) => {
    localStorage.setItem('nori-token', token); 
}

const getToken = () => {
    localStorage.getItem('nori-token');     
}

const removeToken = () => {
    localStorage.removeItem('nori-token');     
}

export { setToken, getToken, removeToken }
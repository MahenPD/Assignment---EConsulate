import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:8080/users/register', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err=> {
        alert("Registration Unsuccesful");
    })
      
    }

export const login = user => {
  return axios
    .post('http://localhost:8080/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
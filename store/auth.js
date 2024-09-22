import { defineStore } from 'pinia';
import axios  from 'axios';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('user', {
    state: () => ({
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        token: Cookies.get('token') || null,
        redirectRoute: null,
        userInfo: {
            first_name: '',
            last_name: '',
            username: '',
            phone: '',
            email: '',
            password: '',
            password2: null,
        },
        newUserInfo: {
            first_name: '',
            last_name: '',
            username: '',
            phone: '',
            email: '',
            password: '',
            profile_picture: null,
        },
    }),

    actions: {
        setUser(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        setUserInfo(first_name, last_name, username, email, phone, password, password2) {
            this.userInfo.first_name = first_name;
            this.userInfo.last_name = last_name;   
            this.userInfo.username = username;    
            this.userInfo.username = email;    
            this.userInfo.phone = phone;
            this.userInfo.password = password;
            this.userInfo.password2 = password2 || null;
        },
        setNewUserInfo(first_name, last_name, username, phone, password, email) {
            this.newUserInfo.first_name = first_name;
            this.newUserInfo.last_name = last_name;  
            this.userInfo.username = username;      
            this.newUserInfo.phone = phone || null;
            this.newUserInfo.password = password|| null;
            this.newUserInfo.email = email || null;
        },
        resetUserInfo(){
            this.$state ={
                userInfo: {
                    phone: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    username: '',
                    password: '',
                    password2: null,
                },
            }
        },
        setToken(token) {
            this.token = token;
            Cookies.set('token', token);
        },
        setRedirectRoute(route) {
            this.redirectRoute = route;
        },
        clearRedirectRoute() {
            this.redirectRoute = null;
        },
        clearUserSession(){
            this.setUser(null);
            this.setToken(null);
            Cookies.remove('token');
            localStorage.removeItem('user');
        },
        async login(email, password) {
            try {
               const response = await axios.post(`${process.env.publicApi}login`, { email, password });
               if (response.status === 200 && response.data.access_token) {
                  const accessToken = response.data.access_token;
                  console.log(response.data.access_token);
                  if (!accessToken) {
                     throw new Error('No token found');
                  } else {
                     console.log('1');
                     const refreshToken = await axios.post('http://localhost:8000/api/client/auth/v1/token-refresh', {}, {
                        headers: { Authorization: `Bearer ${accessToken}` }
                    });
                    
                    if(refreshToken.status === 200 && refreshToken.data.refresh_token){
                        this.setUser(response.data.data.user);
                        this.setToken(refreshToken.data.refresh_token);
                    }
                  }
               } else {
                  throw new Error('Invalid credentials');
               }
            } catch (error) {
               throw error;
            }
         },
         async register(userInfo){
            try{
               const { password2, ...dataToSend } = userInfo; 
               const response = await axios.post(`${process.env.publicApi}register`, dataToSend);
               return response;
            }
            catch(error){
            throw error;
            }
         },
         async fetchUser() {
            try{
                const token = Cookies.get('token');
                if(!token){
                    throw new Error('No token found');
                }
                const response = await this.$axios.post('user-information');
                if(response.status === 401 && response.data.message === 'Unauthenticated.'){
                    this.logout();
                    this.isAuthenticated = false;
                    return false;
                }else{
                    this.setUser(response.data);
                    return true;
                }
            }catch(error){
                if (error.response) {
                    console.log('Error: ' + error.response.data.message); // Token expired
                }
                else {
                    console.log('Error: ' + error.message);
                }
                this.logout();
                return false; 
            }
        },
 
        async logout() {
            const token = Cookies.get('token');
            if (!token) {
              console.log('Logged out without token!');
            } 
            else {
              try {
                const response = await axios.post('http://localhost:8000/api/client/auth/v1/logout', {}, {
                    headers: { Authorization: `Bearer ${token}` }
                });

        
                if (response.status === 200) {
                  console.log(response.data.message); 
                  this.clearUserSession();
                  return true;
                }
              }
              catch (error) {
                console.log('Error: ' + error.message);
              }
            }
        }      
    },
    getters: {
        isAuthenticated: (state) => !!state.token, // check if there is token 
        getRedirectRoute: (state) => state.redirectRoute,
    }
})
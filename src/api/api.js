import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd0bdd670-55aa-49df-a27b-603088e9c845'
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

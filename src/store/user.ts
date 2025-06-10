import {defineStore} from 'pinia'

export const userStore = defineStore('userStore', {
  actions: {
    changeUserName(value: string) {
      this.userName = this.userName + value;
    },
  },
  getters: {
    getUserName(): string {
      return this.userName
    },
    getUserAge(): number {
      return this.userAge
    }
  },
  state: () => ({
    userName: "shawf",
    userAge: 18,
  }),
})

import { defineStore } from 'pinia';

interface IPerson {
  name: string;
  age: number;
}

export const useStore = defineStore('main', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      user: {
        name: 'iu',
        age: 18,
      },
    };
  },
  getters: {
    firstName: () => 'stephen',
    nextName: () => 'curry',
  },
  actions: {
    changeName(user: IPerson) {
      this.user = user;
      console.log('🌈 pinia响应式actions', this.user);
    },
    async changeNameNow(user: IPerson) {
      const res: IPerson = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: '亚历山大、库奇', age: 99 });
        }, 1000);
      });

      this.user = res;
      console.log('🌈 pinia异步响应式actions', this.user);
    },
  },
});

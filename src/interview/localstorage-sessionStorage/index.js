/**
 * localstorage和sessionStorage、vuex
 */

// 一、sessionStorage
// ①、存储在当前标签页,只有当前标签页永久退出时会失效
// ②、存储大小在5M左右
// ③、一般用来操作固定的数据

sessionStorage.setItem('name', 'iu');
console.log(sessionStorage.getItem('name'), '💙💛 sessionStorage');

// 二、localStorage
// ①、存储在硬盘中,如果不是用户手动清除会永久存在
// ②、存储大小也在5M左右
// ③、一般用来操作固定的数据

localStorage.setItem('age', 18);
console.log(localStorage.getItem('age'), '💙💛 localStorage');

// 三、vuex
// ①、存储在内存中,一般存储的是动态变化的数据
// ②、页面刷新存在vuex中的数据会失效
// console.log(this.$store.state.count, '💙💛 vuex');

// 四、 vuex+persistedstate
// ①、使用vuex和persistedstate持续存储化插件,操作动态数据存储在硬盘里

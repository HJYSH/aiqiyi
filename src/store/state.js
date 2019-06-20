let de = '成都'
try {
  if (localStorage.home) {
    de = localStorage.home
  }
}catch (e) {}

export default {
  city: de
}

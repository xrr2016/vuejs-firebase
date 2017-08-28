import { store } from '../store/index'
export default (to, from, next) => {
  if (store.state.user) {
    next()
  } else {
    next('/login')
  }
}

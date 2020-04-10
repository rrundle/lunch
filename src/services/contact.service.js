import user from '../assets/images/user/user.png'

export const createUser = (value, avatar) => ({
  avatar: avatar ? avatar : user,
  name: value.name,
  surname: value.surname,
  mobile: value.mobile,
  age: value.age,
  nameToSearch: value.name.toLowerCase(),
})

export const deletedUser = (userId) => {
  return
}

export const editUser = (value, url, userId) => ({
  avatar: url ? url : null,
  name: value.name,
  surname: value.surname,
  mobile: value.mobile,
  age: value.age,
  nameToSearch: value.name.toLowerCase(),
})

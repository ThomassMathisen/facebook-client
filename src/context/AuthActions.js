export const LoginStart = (usercredentials) => ({
  type: "LOGIN_START",
})

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
})

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
})

export const Follow = (userId) => ({
  type: "LOGIN_FOLLOW",
  payload: userId
})

export const Unfollow = (userId) => ({
  type: "LOGIN_UNFOLLOW",
  payload: userId
})
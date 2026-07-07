"use server"

export const signIn = async ({ email, password }: LoginUser) => {
  try {
    return "success"
  } catch (error) {
    console.log("Error", error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  try {
    //Create a user account
    return userData
  } catch (error) {
    console.log("Error", error)
  }
}

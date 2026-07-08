"use server"

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../server/appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"

export const signIn = async ({ email, password }: LoginUser) => {
  try {
    const { account } = await createAdminClient()
    const response = await account.createEmailPasswordSession(email, password)
    return parseStringify(response)
  } catch (error) {
    console.log("Error", error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  try {
    //Create a user account
    const { account } = await createAdminClient()
    const { email, password, firstName, lastName } = userData

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    )
    const session = await account.createEmailPasswordSession({
      email,
      password,
    })
    ;(await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })

    return parseStringify(newUserAccount)
  } catch (error) {
    console.log("Error", error)
  }
}

export const logOut = async () => {
  try {
    const { account } = await createSessionClient()
    ;(await cookies()).delete("appwrite-session")
    await account.deleteSessions()
  } catch (error) {
    return null
  }
}

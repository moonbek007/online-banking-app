import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/server/appwrite"

const SignUp = async () => {
  const user = await getLoggedInUser()
  console.log(user)
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SIGN_up} />
    </section>
  )
}

export default SignUp

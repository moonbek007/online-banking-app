import AuthForm from "@/components/AuthForm"

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SIGN_IN} />
    </section>
  )
}

export default SignIn

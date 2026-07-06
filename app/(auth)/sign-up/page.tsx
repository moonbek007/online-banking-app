import AuthForm from "@/components/AuthForm"

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SIGN_up} />
    </section>
  )
}

export default SignUp

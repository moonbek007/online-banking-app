"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"

import CustomInputComponent from "@/components/CustomInputComponent"
import { FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

import formSchema from "@/lib/formSchema"
import { Loader2 } from "lucide-react"

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values)
    setIsLoading(false)
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="Future logo"
            width={34}
            height={34}
          />
          <h1 className="font-ibm-plex-serif text-26 font-bold text-black-1">
            Future
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 font-semibold text-gray-900 lg:text-36">
            {user
              ? "Link Account"
              : type === AuthFormType.SIGN_IN
                ? "Sign In"
                : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <CustomInputComponent
              key={CustomInputLabels.EMAIL}
              label={CustomInputLabels.EMAIL}
              form={form}
            />
            <CustomInputComponent
              key={CustomInputLabels.PASSWORD}
              label={CustomInputLabels.PASSWORD}
              form={form}
            />
          </FieldGroup>
          <div className="flex flex-col gap-4">
            <Button type="submit" className="form-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin">
                    &nbsp; Loading
                  </Loader2>
                </>
              ) : type === AuthFormType.SIGN_IN ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>
      )}
      <footer className="flex justify-center gap-1">
        <p>
          {type === AuthFormType.SIGN_IN
            ? "Don't have an account ?"
            : "Already have an account ?"}
        </p>
        <Link
          className="form-link"
          href={type === AuthFormType.SIGN_IN ? "/sign-up" : "/sign-in"}
        >
          {type === AuthFormType.SIGN_IN ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  )
}

export default AuthForm

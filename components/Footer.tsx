import { logOut } from "@/lib/actions/user.actions"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Footer = ({ user, type = FooterType.DESKTOP }: FooterProps) => {
  const router = useRouter()
  const handleLogOut = async () => {
    const loggedOut = await logOut()
    if (loggedOut) router.push("/sign-in")
  }

  return (
    <footer className="footer">
      <div
        className={
          type === FooterType.MOBILE ? "footer_name-mobile" : "footer_name"
        }
      >
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
      <div
        className={
          type === FooterType.MOBILE ? "footer_email-mobile" : "footer_email"
        }
      >
        <h1 className="truncate text-14 font-semibold text-gray-700">
          {user?.firstName}
        </h1>
        <p className="truncate text-14 font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="logo" />
      </div>
    </footer>
  )
}

export default Footer

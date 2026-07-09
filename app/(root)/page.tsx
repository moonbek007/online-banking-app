import HeaderBox from "@/components/HeaderBox"
import RecentTransactions from "@/components/RecentTransactions"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getAccount, getAccounts } from "@/lib/actions/bank.actions"
import { getLoggedInUser } from "@/lib/server/appwrite"

const Dashboard = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  // {
  //   firstName: "Toby",
  //   lastName: "Mathews",
  //   email: "toby.mathews7@gmail.com",
  // }
  const accounts = await getAccounts({ userId: loggedIn.$id })
  if (!accounts) return

  const accountsData = accounts?.data
  const currentPage = Number(page as string) || 1
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId
  const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={accounts?.transactions}
        banks={accountsData?.slice(0, 2)}
        // banks={[{ currentBalance: 125.25 }, { currentBalance: 485.85 }]}
      />
    </section>
  )
}

export default Dashboard

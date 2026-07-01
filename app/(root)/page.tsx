import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Dashboard = () => {
  const loggedIn = {
    firstName: "Toby",
    lastName: "Mathews",
    email: "toby.mathews7@gmail.com",
  }
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
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        {/* Recent Transactions */}
      </div>
      <RightSideBar
        user={loggedIn}
        transacations={[]}
        banks={[{ currentBalance: 125.25 }, { currentBalance: 485.85 }]}
      />
    </section>
  )
}

export default Dashboard

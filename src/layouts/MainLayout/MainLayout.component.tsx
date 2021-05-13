import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard } from 'pages/Dashboard'
import { Portfolio } from 'pages/Portfolio'
import { Header } from 'components/Header'

const MainLayout = (): JSX.Element => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route render={() => <Redirect to="/dashboard" />} />
      </Switch>
    </main>
  </>
)

export default MainLayout

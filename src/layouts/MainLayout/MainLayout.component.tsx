import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard } from 'pages/Dashboard'
import { Portfolio } from 'pages/Portfolio'

const MainLayout = (): JSX.Element => (
  <>
    <header>header</header>
    <main>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="portfolio">
          <Portfolio />
        </Route>
        <Route render={() => <Redirect to="/dashboard" />} />
      </Switch>
    </main>
  </>
)

export default MainLayout

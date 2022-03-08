import Header from './nav/Header';
import SubscribeBlock from './newsletter/SubscribeBlock';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="px-6 md:px-14 py-8 md:py-24">
      {children}
    </main>
    <SubscribeBlock />
  </>
)

export default Layout;

import { Banner } from './components/Banner/Banner';
import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
// import { Users } from './components/Users/Users';
import { Timer } from './components/Timer/Timer';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      {/* <Banner /> */}
      {/* <Users /> */}
      <Timer />
    </Layout>
  );
};

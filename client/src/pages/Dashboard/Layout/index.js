import Sidbar from './Sidbar';
import PublicView from './PublicView';
import TableData from './TableData';

const sx = {
  dashboard: {
    display: 'flex',
    justifyContent: 'space-betwwen',
  },
  dashboardBody: {
    width: '85vw',
  },
};

const Dashboard = () => (
  <section style={sx.dashboard}>
    <Sidbar />
    <section style={sx.dashboardBody}>
      <PublicView />
      <TableData />
    </section>
  </section>
);
export default Dashboard;

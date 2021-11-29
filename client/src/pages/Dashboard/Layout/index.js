import Sidbar from './Sidbar';
import PublicView from './PublicView';
import TableData from './TableData';

import * as style from './style';

const Dashboard = () => (
  <section style={style.LayoutBody.dashboard}>
    <Sidbar />
    <section style={style.LayoutBody.dashboardBody}>
      <PublicView />
      <TableData />
    </section>
  </section>
);
export default Dashboard;

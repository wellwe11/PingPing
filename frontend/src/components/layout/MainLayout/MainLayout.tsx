import './MainLayout.scss';

import Navbar from '../Navbar/Navbar';

const Mainlayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="main-layout__content">{children}</main>
    </div>
  );
};

export default Mainlayout;

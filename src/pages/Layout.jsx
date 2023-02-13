import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';




const Layout = () => {

    return (

        <>

            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />
                
                <Outlet />
             </div>   

            </>

            )
};
            export default Layout;
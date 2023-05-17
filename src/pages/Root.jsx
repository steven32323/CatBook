import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

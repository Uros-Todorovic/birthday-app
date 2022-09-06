import { Users, BirthdayEvents, MyWishlist, Error404 } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, UserSetter } from "./components";

function App() {
  return (
    <BrowserRouter>
      <UserSetter />
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/birthday-events" element={<BirthdayEvents />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

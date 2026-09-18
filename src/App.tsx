import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import MomentSection from "./components/MomentSection";
import NoCatch from "./components/NoCatch";
import TourCities from "./components/TourCities";
import Steps from "./components/Steps";
import GiftSection from "./components/GiftSection";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";
import Faq from "./components/Faq";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import AccountModal from "./components/AccountModal";
import LegalModal from "./components/LegalModal";
import Toast from "./components/Toast";
import { ShopProvider } from "./store/shop";

export default function App() {
  return (
    <ShopProvider>
      <div id="top" className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Partners />
          <MomentSection />
          <NoCatch />
          <TourCities />
          <Steps />
          <GiftSection />
          <Testimonials />
          <TrustSection />
          <Faq />
          <OrderForm />
        </main>
        <Footer />

        <CartDrawer />
        <AccountModal />
        <LegalModal />
        <Toast />
      </div>
    </ShopProvider>
  );
}

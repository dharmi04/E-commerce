import Image from "next/image";
import Header from "./components/Header";
import Featured from "./components/Featured";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Header />
    <Featured />
    <AboutUs />
    <Banner />
    <Footer />
    </>
  );
}

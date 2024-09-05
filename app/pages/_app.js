// import '../styles/globals.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Contact from './contact';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer />
//       <Contact />
//     </>
//   );
// }

// export default MyApp;

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

export default MyApp;

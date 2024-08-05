import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5fw-normal">About our Ecommerce Platform</h1>
        <p>
          Welcome to our ecommerce platform! We are dedicated to providing customers with a seamless and enjoyable shopping experience from start to finish.
        </p>
        <p>
          Our missio is to offer a wide selection of high-quality products at competitive prices, couples with exceptional customer service and fast shipping.
        </p>
        <p>
          At our ecommerce platform, we believe in the power of online shopping to connect people with the products with the products they love, and we strive to make every interaction with our platform convenient, reliable, and secure.
        </p>
        <p>
         Thank you for choosing our ecommerce platform. We look forward to serving you and excedding your expectations at every turn.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;

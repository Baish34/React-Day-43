import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Header />
      <main className="container py-2">
        <h1 className="display-5 fw-normal">Shopping Cart</h1>
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-start position-relative">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="position-absolute top-0 end-0">
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <p className="fw-bold">Total Cart Price: ${totalPrice}</p>
      </main>
      <Footer />
    </>
  );
}

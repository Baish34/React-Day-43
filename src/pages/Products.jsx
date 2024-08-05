import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  const affordableProducts = products.filter((product) => product.price < 80);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal">Products</h1>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/300x300"
                class="img-fluid rounded-start"
                alt="stay 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Product 1</h5>
                <p class="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet,
                  consectetur adipoisicng elit. Letraset sheets containing Lorem
                  Ipsum passages.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Price: $99.9</small>
                </p>
                <Link to="/products/1" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/300x300"
                class="img-fluid rounded-start"
                alt="stay 2"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Product 2</h5>
                <p class="card-text">
                  Description of Product 2. Lorem ipsum dolor sit amet,
                  consectetur adipoisicng elit. Letraset sheets containing Lorem
                  Ipsum passages.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Price: $129.99</small>
                </p>
                <Link to="/products/2" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/300x300"
                class="img-fluid rounded-start"
                alt="stay 3"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Product 3</h5>
                <p class="card-text">
                  Description of Product 3. Lorem ipsum dolor sit amet,
                  consectetur adipoisicng elit. Letraset sheets containing Lorem
                  Ipsum passages.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Price: $79.99</small>
                </p>
                <Link to="/products/3" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/300x300"
                class="img-fluid rounded-start"
                alt="stay 4"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Product 4</h5>
                <p class="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet,
                  consectetur adipoisicng elit. Letraset sheets containing Lorem
                  Ipsum passages.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Price: $49.99</small>
                </p>
                <Link to="/products/4" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="display-3 fw-normal">Affordable Products</h1>
          {affordableProducts.map((product) => (
            <p key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              Price: ${product.price}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

import ProductList from "../../containers/ProductList/ProductList";
import MainLayout from "../layouts/MainLayout.jsx";
import "./home.css";

const Home = () => {
    return (
        <MainLayout>
            <section className="home-central-section-container">
                <div className="home-h1-container">
                    <h1>
                        Bienvenido a <span className="home-text-color-1">E-Shop</span><br />
                        Tu destino en <span className="home-text-color-2">tecnología</span>
                    </h1>
                    <p>Encontrá los mejores productos informáticos con la mejor atención y garantía.</p>
                </div>
                <div className="home-central-img-container">
                    <img src="./img/common/home-central-image-2.png" alt="" />
                </div>
            </section>
            <ProductList />
        </MainLayout>
    );
}
export default Home;
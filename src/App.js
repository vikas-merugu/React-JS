import './App.css';
import LatestProducts from './components/LatestProducts';

function App() {
  return (
    <div className="app-container">
      <div>
        <div style={{ textAlign: "center" }} >
          <img height="200" src='./images/logo.jpg'></img>
        </div>

        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src="https://i.gadgets360cdn.com/large/galaxy_s24_plus_ultra_g360_1705488937792.jpg" className="d-block w-100"  alt="First Slide" />
            </div>
            <div className="carousel-item active">
              <img src="https://i.ytimg.com/vi/3hPoEmlBQdY/maxresdefault.jpg" className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img src="./images/Samsungs24.jpeg"
                className="d-block w-100" alt="Third Slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br /><br />
        <hr/>
        <h1 style={{ textAlign: 'center' }}>Top Products in Market</h1>
        <hr/>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '36%', paddingRight: '10%' }}>
          <LatestProducts />
        </div>
        <br /><br />
      </div>
      <br /><br />
      <hr/>
      <footer className="footer">
        <p><h3>About Us</h3></p>
        <p><b>This is a sample app to explore Samsung Galaxy products.</b></p>
        <p><b>Contact: Galaxy123@gmail.com</b></p>
      </footer>
    </div>
  );
}

export default App;

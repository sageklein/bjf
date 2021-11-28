import header from "./header1.png";
import footer from "./footer.png";
import about from "./santa.png";
import contact from "./building.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={header} className="App-logo" alt="Blackjack Farms" />
			</header>
			<div className="main-container">
				<div className="box">
					<div className="content">
						<h2>Contact Us</h2>
						<div id="info">
							<div className="img">
								<img
									src={contact}
									className="card"
									alt="Blackjack Farms"
								/>
							</div>
							<p>
								<h1>Address</h1>
								3331 Hwy 231 N <br /> Shelbyville TN 37160
							</p>
							<p>
								{" "}
								<h1>Phone</h1> 931-607-7573
							</p>
							<p>
								<a
									className="link"
									href="mailto:blackjackfarm@charter.net"
									target="_blank"
								>
									Email Us
								</a>
							</p>
							<p>
								<a
									className="link"
									href="https://www.facebook.com/Blackjackfarm/"
									target="_blank"
								>
									Our Facebook
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="box">
					<div className="content">
						<h2>About Us</h2>
						<div id="info">
							<div className="img">
								<img
									src={about}
									className="card"
									alt="Blackjack Farms"
								/>
							</div>
							<p>We Are A Family Owned Buisness</p>
							<p>We Have Beautiful White Pine Trees</p>
							<p>
								Choose And Cut Down Your Very Own Christmas Tree
								Only $50 each
							</p>
							<p>
								We Provide The Saw And Help Tie It To Your Car, Free Of Charge!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-container">
				{" "}
				<img src={footer} className="footer" alt="Blackjack Farms" />
			</div>
		</div>
	);
}

export default App;

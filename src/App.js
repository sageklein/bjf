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
							<p>3331 Hwy 231 N • Shelbyville • TN 37160</p>
							<p>Phone • 931-607-7573</p>
							<p>
								Email •{" "}
								<a
									className="link"
									href="mailto:blackjackfarm@charter.net"
									target="_blank"
								>
									blackjackfarm@charter.net
								</a>
							</p>
							<p>
								Facebook •{" "}
								<a
									className="link"
									href="https://www.facebook.com/Blackjackfarm/"
									target="_blank"
								>
									facebook.com/blackjackfarm
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
							<p>Family owned buisness</p>
							<p>We have beautiful White Pine Trees</p>
							<p>
								Choose and cut down your very own Christmas
								Tree for $50 each!
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

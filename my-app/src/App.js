import React, {useState} from 'react';
import './App.css';
import Banner from './components/banner/banner.js';
import bannerImage from './assests/image/ford-ranger_rd5m4t.jpg';
import cardImage from './assests/image/brisbane_vgpzva.jpg';
import Card from './components/cards/card.js';
import CardsImage from './components/cards/cardImage.js';
import CardHeader from './components/cards/cardHeader.js';
import CardBody from './components/cards/cardBody.js';
import Button from './components/resuable-components/button.js';
import './components/cards/card.css';

function App() {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <div className="App">
      <Banner
        title="Welcome to G Automotive"
        subtitle="Lorem ipsum dolor sit amet. Et fuga perspiciatis quo galisum aliquam eum animi aperiam 33 culpa voluptas. In itaque omnis est blanditiis vero et recusandae neque. 
                  Sit atque accusantium rem illo dolor qui culpa reiciendis. Est dolores repudiandae aut quibusdam suscipit qui quae dolor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        image={bannerImage}
        altText="Sample Banner"
      />
      <div className="card-container">
       <Card isActive={activeCard === 1} onClick={() => setActiveCard(1)}>
        <CardsImage src={cardImage} />
        <CardHeader title="Heading 1" />
        <CardBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </CardBody>
        <Button
          label="Button 1"
          onClick={() => setActiveCard(1)}
          className="card-button"
        />
      </Card>

      <Card isActive={activeCard === 2} onClick={() => setActiveCard(2)}>
        <CardsImage src={cardImage} />
        <CardHeader title="Heading 2" />
        <CardBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </CardBody>
        <Button
          label= "Button 2"
          onClick={() => setActiveCard(2)}
          className="card-button"
        />
      </Card>

      <Card isActive={activeCard === 3} onClick={() => setActiveCard(3)}>
        <CardsImage src={cardImage} />
        <CardHeader title="Heading 3" />
        <CardBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </CardBody>
        <Button
          label="Button 3"
          onClick={() => setActiveCard(3)}
          className="card-button"
        />
      </Card>
      </div>
    </div>
  );
}

export default App;
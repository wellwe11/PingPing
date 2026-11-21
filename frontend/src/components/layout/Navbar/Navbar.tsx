import Button from '@/components/ui/Button/Button';
import './Navbar.scss';
import { useState } from 'react';

// TODO: Fix buttons
const buttons = ['one', 'two', 'three'];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <nav className="main-nav">
      <div className="main-nav__content">
        <div
          className="clicked-el"
          style={{
            height: `${100 / buttons.length}%`,
            transform: `translateY(${activeButton * 100}%)`,
          }}
        />

        {buttons.map((b, i) => (
          <Button
            key={i}
            textPos="start"
            size="medium"
            hover={true}
            className="main-button--light"
            textClass="main-button-text--mix"

            onClick={() => setActiveButton(i)}
          >
            {b}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

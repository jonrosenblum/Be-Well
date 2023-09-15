import '../Styles/PatientFlipCard.css';
import Card from './Card/Card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function PatientFlipCard() {

    const cardData = [
        {
            title: "Card 1",
            text: "Sample text for Card 1"
        },
        {
            title: "Card 2",
            text: "Sample text for Card 2"
        },
        {
            title: "Card 3",
            text: "Sample text for Card 3"
        }
    ];

    const [showFront, setShowFront] = useState(true);
    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card cardData={cardData} onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div>
    );
}

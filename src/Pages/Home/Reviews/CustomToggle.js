import { useAccordionButton, Button } from "react-bootstrap";

// using for accordion 

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            type="button"
            onClick={decoratedOnClick}
            className="mx-auto"
        >
            {children}
        </Button>
    );
}
export default CustomToggle;
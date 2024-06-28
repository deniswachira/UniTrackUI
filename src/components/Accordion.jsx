import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <button className="btn btn-sm">{title}</button>
            </div>
            {isOpen && (
                <div className="accordion-panel">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;

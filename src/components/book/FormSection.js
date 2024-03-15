import React from 'react';
import PriceForm from "./PriceForm";
import CardForm from "./CardForm";

function FormSection() {
    return (
        <div className="forms__container">
            <PriceForm/>
            <CardForm/>
        </div>
    );
}

export default FormSection;

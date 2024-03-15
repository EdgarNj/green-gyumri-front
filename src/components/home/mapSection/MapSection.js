import React from 'react';

function MapSection() {
    return (
        <section className="map__section">
            <iframe

                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.898398233226!2d43.8313623061492!3d40.81045893641876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041f9ad6a035343%3A0xd487fc0db95874fa!2sGreen%20Gyumri!5e0!3m2!1sru!2sam!4v1710493363134!5m2!1sru!2sam"
                allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </section>
    );
}

export default MapSection;

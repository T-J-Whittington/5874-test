import React from 'react';
import type { Testimonial } from '../../types/types';
import './Testimonials.scss';

interface Props {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({testimonial}) => {
    return (
        <div className="container" id={testimonial.id}>
            <div className="card">
                <div className="card_quote">
                    <h2>{testimonial.quote}</h2>
                </div>
                <div className="card_avatar">
                    <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                </div>
                <div className="card_name">
                    <h3>{testimonial.name}</h3>
                </div>
                <div className="card_title">
                    <h4>{testimonial.position}, {testimonial.company}</h4>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
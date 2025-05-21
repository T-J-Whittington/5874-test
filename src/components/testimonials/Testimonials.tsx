import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestimonials } from '../../features/data/testimonialSlice';
import './Testimonials.scss';
import TestimonialCard from './TestimonialCard';
import { type AppDispatch, type RootState } from '../../app/store';

const Testimonials: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items: testimonials, status } = useSelector((state: RootState) => state.data);

    useEffect(() => {
        dispatch(fetchTestimonials());
    }, [dispatch]);
    
    return (
        <div className="container">
            <h1 className="testimonials_header-text">Kind words<br/>
                <span className="testimonials_header-text-alt">from our clients.</span>
            </h1>
            <div className="testimonials_content">
                {/* TODO: Add in some form of cycling through testimonials. */}
                {testimonials.map((testimonial) => (
                    <TestimonialCard testimonial={testimonial}/>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

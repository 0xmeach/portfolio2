import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [ brands, setBrands ] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex ] = useState(0);

  return (
    <div>watup</div>
  )
}

export default Testimonial
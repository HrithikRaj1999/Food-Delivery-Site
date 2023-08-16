import React from "react";
import { aboutImage } from "../utils/constants";
const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">
                Welcome to Foodie Paradise , your one-stop destination for delicious and convenient
                food delivery. Our mission is to bring mouthwatering meals right to your doorstep,
                making your dining experience enjoyable and hassle-free.
            </p>
            <p className="about-text">
                With an extensive menu featuring a wide range of cuisines and flavors, you'll find
                something to satisfy every craving. Our dedicated team of chefs and delivery
                professionals work together to ensure that you receive top-quality food that's both
                flavorful and fresh.
            </p>
            <p className="about-text">
                At Foodie Paradise , we take pride in using only the finest ingredients in our
                dishes, crafting each meal with care and attention to detail. Whether you're looking
                for a quick lunch, a family dinner, or a special treat, we have something for
                everyone.
            </p>
            <p className="about-text">
                Ordering with us is simple and convenient. Just browse our menu, select your
                favorite items, and place your order. Our reliable delivery service will ensure that
                your food arrives at your doorstep piping hot and ready to enjoy.
            </p>
            <p className="about-text">
                Thank you for choosing Foodie Paradise . We look forward to serving you and making
                your dining experience exceptional every time.
            </p>
            <p className="about-text">Bon appétit!</p>

            <div className="about-image-container">
                <img src={aboutImage} alt="About  Foodie Paradise " className="about-image" />
            </div>

            <p className="about-text">
                Our team is passionate about creating culinary delights that tantalize your taste
                buds. Each dish is prepared with love and creativity, reflecting our commitment to
                providing a memorable dining experience.
            </p>
            <p className="about-text">
                We believe that good food brings people together, and we're dedicated to making your
                moments special. Whether you're celebrating an occasion or simply enjoying a cozy
                night in, Foodie Paradise is here to make it memorable.
            </p>
            <p className="about-text">
                Join us on this gastronomic journey and explore a world of flavors, textures, and
                aromas. Experience the joy of great food, delivered right to your doorstep.
            </p>
        </div>
    );
};

export default About;

import React from "react";
import Button from "../Button/Button";
import greekSaladImage from "../../assets/greek-salad.jpg";
import SpecialsCard from "./SpecialsCard";
import { Link } from "react-router-dom";

const Specials = () => {
  const specialsData = [
    {
      image: greekSaladImage,
      title: "Greek salad",
      price: 12.99,
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: greekSaladImage,
      title: "Bruchetta",
      price: 12.99,
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: greekSaladImage,
      title: "Lemon Dessert",
      price: 12.99,
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
  ];

  return (
    <>
      <section id="specials">
        <div className="container">
          <div className="">
            <div className="specials-primary-row">
              <div className="col">
                {" "}
                <h2>Specials</h2>
              </div>
              <div className="col specials-primary-col-right">
                <Link to="booking">
                  <Button title="Online Menu" />
                </Link>
              </div>
            </div>
          </div>
          <div className="special-card-row">
            {specialsData.map((special, index) => (
              <SpecialsCard
                key={index}
                image={special.image}
                title={special.title}
                price={special.price}
                description={special.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;

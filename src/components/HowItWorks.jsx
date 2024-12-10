import React, { useState } from "react";
import "../styles/howItWorks.scss";

import nutritionImg from "../assets/image9.png";
import physicalActivityImg from "../assets/image10.png";
import restorativeSleepImg from "../assets/image11.png";
import stressManagementImg from "../assets/image12.png";
import socialConnectionImg from "../assets/image13.png";
import substanceAbuseImg from "../assets/image14.png";
import heartIcon1 from "../assets/badge1.png";
import heartIcon2 from "../assets/badge2.png";
import moonIcon from "../assets/badge3.png";
import heartIcon3 from "../assets/badge4.png";
import timeIcon from "../assets/badge5.png";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("Nutrition");

  const tabs = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  const cards = [
    {
      id: 1,
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat, and reverse chronic illness.",
      image: nutritionImg,
      badgeIcon: heartIcon1,
      badgeText: "121/80 mmHg",
    },
    {
      id: 2,
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
      image: physicalActivityImg,
      badgeIcon: heartIcon2,
      badgeText: "32 minutes",
    },
    {
      id: 3,
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep enhances brain function and physical recovery.",
      image: restorativeSleepImg,
      badgeIcon: moonIcon,
      badgeText: "8 hours",
    },
    {
      id: 4,
      title: "Stress management",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      image: stressManagementImg,
      badgeIcon: heartIcon3,
      badgeText: "60 bpm",
    },
    {
      id: 5,
      title: "Social connection",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      image: socialConnectionImg,
      badgeIcon: heartIcon2,
      badgeText: "Feeling better",
    },
    {
      id: 6,
      title: "Substance abuse",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      image: substanceAbuseImg,
      badgeIcon: timeIcon,
      badgeText: "62 days",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="section-header">
        <h2>HOW IT WORKS</h2>
        <h3>Lifestyle as medicine: The six pillars</h3>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
              <span className="badge">
                <img src={card.badgeIcon} alt="Badge Icon" />
                {card.badgeText}
              </span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

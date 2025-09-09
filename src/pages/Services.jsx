import {
  FaHistory,
  FaStar,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import "./css/Timeline.css";

export default function Timeline() {
  const events = [
    {
      icon: <FaHistory />,
      title: "Beginnings: Magh 1, 2077 (Jan 15, 2021)",
      description:
        "The rise of our cooperative organization is a history born from a collective dream, unwavering faith, and the purpose of social transformation. Amid the COVID-19 pandemic and lockdown, five ordinary citizens initiated this institution with an initial capital of Rs. 143,000, aiming to empower communities facing economic inequality and social insecurity. Today, this small seed has grown to serve over 2,600 members with the support of four dedicated employees.",
      color: "var(--secondary-color)",
    },
    {
      icon: <FaStar />,
      title: "Historic Moment of 2078 (2021-2022)",
      description:
        "Institution recognized and registered in the National Cooperative Federation (NCF), highlighting our commitment to cooperative values and expanding member services.",
      color: "var(--primary-color)",
    },
    {
      icon: <FaAward />,
      title: "Achievement in 2079 (2022-2023)",
      description:
        "Received recognition for outstanding contributions to financial inclusion and cooperative development.",
      color: "var(--accent-color)",
    },
    {
      icon: <FaUsers />,
      title: "Growing Family",
      description:
        "Membership surpassed 2,600 members, strengthening our community-driven initiatives.",
      color: "var(--hover-color)",
    },
  ];

  return (
    <div className="container">
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-icon" style={{ color: event.color }}>
              {event.icon}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title" style={{ color: event.color }}>
                {event.title}
              </h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

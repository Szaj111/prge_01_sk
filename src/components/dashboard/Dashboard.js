import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "Kowalski",
      content: "jakis opis Janka",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Maja",
      surname: "Igła",
      content: "jakis opis Maji",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Dawid",
      surname: "Młotek",
      content: "jakis opis",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Jas",
      surname: "Lakos",
      content: "jakis opis",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;

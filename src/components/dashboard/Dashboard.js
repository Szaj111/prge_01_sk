import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "Kowalski",
      content: "jakis opis Janka",
      image: "https://www.wig.wat.edu.pl/images/wladze/kedzierski_wladze.jpg",
    },
    {
      name: "Maja",
      surname: "Igła",
      content: "jakis opis Maji",
      image: "https://www.wig.wat.edu.pl/images/wladze/kedzierski_wladze.jpg",
    },
    {
      name: "Dawid",
      surname: "Młotek",
      content: "jakis opis",
      image: "https://www.wig.wat.edu.pl/images/wladze/kedzierski_wladze.jpg",
    },
    {
      name: "Jas",
      surname: "Lakos",
      content: "jakis opis",
      image: "https://www.wig.wat.edu.pl/images/wladze/kedzierski_wladze.jpg",
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

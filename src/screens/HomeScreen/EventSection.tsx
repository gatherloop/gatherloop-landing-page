import { useEffect, useState } from "react";
import { EventCalendar } from "tamakit";

type Event = {
  title: string;
  datetime: string;
  imageSource: string;
};

export function EventSection() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch(
      "https://coda.io/apis/v1/docs/-fpO1-nhhE/tables/table-VEK4j7EgiV/rows?useColumnNames=true&sortBy=natural",
      {
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_CODA_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data.items.map((item: any) => ({
            title: item.values.Title,
            datetime: item.values.Start,
            imageSource:
              item.values["Image URL"] || "/assets/images/Thumbnail.svg",
          }))
        );
      });
  });

  return (
    <EventCalendar
      tag="Event"
      title="Ikuti Keseruan Kegiatan Gatherloop di Bulan Ini"
      subtitle="Tiap bulan ada kegiatan seru di Gatherloop yang bisa level up skillmu"
      align="center"
      maxColumn={4}
      events={events}
    />
  );
}

import Link from "next/link";
import Image from "next/image";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <Image src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import TourSidebar from "@/components/TourSidebar";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

// const destinations = [
//   // Example destinations
//   {
//     id: 1,
//     badge: "Featured",
//     badgeClass: "bgc-pink",
//     image: "assets/images/destinations/tour-list1.jpg",
//     location: "Bali, Indonesia",
//     title: "Bay Cruise by Boat in Bali, Indonesia",
//     description:
//       "Bali, Indonesia, is a tropical paradise renowned for breathtaking beaches, vibrant culture, and lush landscapes.",
//     duration: "3 days 2 nights",
//     guests: "5-8 guest",
//     price: "$58.00",
//     discount: false,
//   },
//   {
//     id: 2,
//     badge: "10% Off",
//     badgeClass: "",
//     image: "assets/images/destinations/tour-list2.jpg",
//     location: "Rome, Italy",
//     title: "Buenos Aires, Calafate & Ushuaia",
//     description:
//       "Rome, Italy, is a historic city known for its ancient ruins, iconic landmarks, and rich culture.",
//     duration: "3 days 2 nights",
//     guests: "5-8 guest",
//     price: "$105.00",
//     discount: true,
//   },
//   {
//     id: 3,
//     badge: "",
//     badgeClass: "",
//     image: "assets/images/destinations/tour-list3.jpg",
//     location: "Tamnougalt, Morocco",
//     title: "Camels on desert Morocco, Sahara",
//     description:
//       "Explore the vast Sahara Desert with camel rides and experience the stunning dunes and breathtaking sunsets.",
//     duration: "3 days 2 nights",
//     guests: "5-8 guest",
//     price: "$386.00",
//     discount: false,
//   },
const villaData = [
  {
    id: "665d954ba1595113a2fc7cb5",
    title: "LT103",
    price: 25000,
    sale_price: null,
    on_sale: null,
    slug: "lt103",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/04-06-2024-13-57-13_8j96r9.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/04-06-2024-13-57-51_nc5ae7.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/04-06-2024-13-58-45_jmstgm.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/04-06-2024-13-59-49_up9cvr.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/04-06-2024-13-57-36_0h6i32.webp",
    ],
    parent: "Vagator, North Goa",
    is_available: true,
    partial_payment: true,
    attributes: [
      {
        title: "Private Pool",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66643734920da-08-06-2024-10-49-24-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f466065fb-11-06-2024-06-53-26-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Luxe",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664384da7049-08-06-2024-10-54-05-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Breakfast",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666437b7ba38c-08-06-2024-10-51-35-65dc79161c449b0a390fbc02.svg",
        order: "3",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "6666d7f3f2d5ff36d207485c",
    title: "LT106",
    price: 20700,
    sale_price: null,
    on_sale: null,
    slug: "lt106",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6666d7f6d4f63-10-06-2024-10-39-50-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6666d7f594009-10-06-2024-10-39-49-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6666d7f3ece1a-10-06-2024-10-39-47-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6666d7f482409-10-06-2024-10-39-48-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6666d7f64186e-10-06-2024-10-39-50-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Vagator, North Goa",
    is_available: true,
    partial_payment: true,
    attributes: [
      {
        title: "Private Pool",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66643734920da-08-06-2024-10-49-24-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f466065fb-11-06-2024-06-53-26-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "665d954ca1595113a2fc7ced",
    title: "LT124",
    price: 25500,
    sale_price: null,
    on_sale: null,
    slug: "lt124",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/05-06-2024-18-28-19_dj1olv.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/05-06-2024-18-28-21_z2ymvg.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/05-06-2024-18-28-00_9ycx27.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/05-06-2024-18-28-25_wopsiu.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/05-06-2024-18-28-22_znoibs.webp",
    ],
    parent: "Morjim, North Goa",
    is_available: true,
    partial_payment: true,
    attributes: [
      {
        title: "Private Pool",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66643734920da-08-06-2024-10-49-24-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Breakfast",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666437b7ba38c-08-06-2024-10-51-35-65dc79161c449b0a390fbc02.svg",
        order: "3",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "6753eeb233dc00a38e0b8b53",
    title: "LT160",
    price: 15000,
    sale_price: null,
    on_sale: null,
    slug: "lt160",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LT160/6753eec75327e-07-12-2024-06-44-23-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LT160/6753eec5a2918-07-12-2024-06-44-21-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LT160/6753eec416036-07-12-2024-06-44-20-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LT160/6753eeb5eb6dc-07-12-2024-06-44-05-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LT160/6753eeb70b401-07-12-2024-06-44-07-66aa213df59e744be90334e3.webp",
    ],
    parent: "Candolim, North Goa",
    is_available: true,
    partial_payment: true,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Breakfast",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666437b7ba38c-08-06-2024-10-51-35-65dc79161c449b0a390fbc02.svg",
        order: "3",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "66681e1f88872a15a3075f32",
    title: "LTA102",
    price: 4000,
    sale_price: null,
    on_sale: null,
    slug: "lta102",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66681e26390b1-11-06-2024-09-51-34-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66681e21912e0-11-06-2024-09-51-29-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66681e20ad06d-11-06-2024-09-51-28-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66681e2125ce5-11-06-2024-09-51-29-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66681e2207e95-11-06-2024-09-51-30-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Candolim, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [
      {
        _id: "666c27fd06109546220470b2",
        title: "Budgeted Villas",
        color: "#72c43c",
      },
    ],
    is_favourite: false,
  },
  {
    id: "66640fa2a84aa4ca6d014047",
    title: "LTA107",
    price: 12000,
    sale_price: null,
    on_sale: null,
    slug: "lta107",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66640fa329710-08-06-2024-08-00-35-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66640fa399d2c-08-06-2024-08-00-35-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66640fa426cfa-08-06-2024-08-00-36-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66640fa4e5f5f-08-06-2024-08-00-36-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66640fa55ef34-08-06-2024-08-00-37-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Reis Magos, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Private Pool",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/66643734920da-08-06-2024-10-49-24-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "6667ea453f12f41b9809cda2",
    title: "LTA125",
    price: 5500,
    sale_price: null,
    on_sale: null,
    slug: "lta125",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667ea4fa6fae-11-06-2024-06-10-23-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667ea4e3c8ab-11-06-2024-06-10-22-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667ea4d94dc8-11-06-2024-06-10-21-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667ea4acf88b-11-06-2024-06-10-18-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667ea4b7cd5b-11-06-2024-06-10-19-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Arpora, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [
      {
        _id: "666c27fd06109546220470b2",
        title: "Budgeted Villas",
        color: "#72c43c",
      },
    ],
    is_favourite: false,
  },
  {
    id: "66a9d1e5aa24e6c5c40e6d02",
    title: "LTA130",
    price: 6000,
    sale_price: null,
    on_sale: null,
    slug: "lta130",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA130/66a9d200106fd-31-07-2024-05-56-16-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA130/66a9d20a815b5-31-07-2024-05-56-26-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA130/66a9d20840097-31-07-2024-05-56-24-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA130/66a9d2057200a-31-07-2024-05-56-21-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA130/66a9d208926e0-31-07-2024-05-56-24-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Calangute, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [],
    is_favourite: false,
  },
  {
    id: "6667f5bd53d7caca1e06c714",
    title: "LTA166",
    price: 5500,
    sale_price: null,
    on_sale: null,
    slug: "lta166",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f5c0adc73-11-06-2024-06-59-12-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f5c5adf1a-11-06-2024-06-59-17-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f5cb014af-11-06-2024-06-59-23-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6667f5d4e4fda-11-06-2024-06-59-32-65dc79161c449b0a390fbc02.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA166/667bf1f6040ed-26-06-2024-10-48-22-65dc79161c449b0a390fbc02.webp",
    ],
    parent: "Candolim, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [
      {
        _id: "666c27fd06109546220470b2",
        title: "Budgeted Villas",
        color: "#72c43c",
      },
    ],
    is_favourite: false,
  },
  {
    id: "673842acefc457fcb10c4e56",
    title: "LTA167(106)",
    price: 6000,
    sale_price: null,
    on_sale: null,
    slug: "lta167(106)",
    beds: 1,
    gallery: [
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA167%28106%29/673843532f604-16-11-2024-07-01-39-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA167%28106%29/6738435547d7a-16-11-2024-07-01-41-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA167%28106%29/6738436817a3a-16-11-2024-07-02-00-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA167%28106%29/6738435706bcd-16-11-2024-07-01-43-66aa213df59e744be90334e3.webp",
      "https://s3.ap-south-1.amazonaws.com/local.losttraveller/villas/LTA167%28106%29/67384358694c5-16-11-2024-07-01-44-66aa213df59e744be90334e3.webp",
    ],
    parent: "Parra, North Goa",
    is_available: true,
    partial_payment: false,
    attributes: [
      {
        title: "Housekeeping",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/6664381a16b87-08-06-2024-10-53-14-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
      {
        title: "Caretaker On Call",
        icon: "https://s3.ap-south-1.amazonaws.com/local.losttraveller/images/666ab5981ebed-13-06-2024-09-02-16-65dc79161c449b0a390fbc02.svg",
        order: "0",
      },
    ],
    tags: [],
    is_favourite: false,
  },
];
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle="Tour List View" pageName="Tour List" search />
      <section className="tour-list-page py-100 rel z-1">
        <div className="container">
          <div className="row">
            <TourSidebar />
            <div className="col-lg-9">
              <div className="shop-shorter rel z-3 mb-20">
                <ul className="grid-list mb-15 me-2">
                  <li>
                    <a href="#">
                      <i className="fal fa-border-all" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-list" />
                    </a>
                  </li>
                </ul>
                <div className="sort-text mb-15 me-4 me-xl-auto">
                  34 Tours found
                </div>
                <div className="sort-text mb-15 me-4">Sort By</div>
                <select>
                  <option value="default" selected="">
                    Short By
                  </option>
                  <option value="new">Newness</option>
                  <option value="old">Oldest</option>
                  <option value="high-to-low">High To Low</option>
                  <option value="low-to-high">Low To High</option>
                </select>
              </div>

              <div className="destination-container">
                {villaData.map((destination) => (
                  <div
                    key={destination.id}
                    className="destination-item style-three bgc-lighter"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      {destination.parent && (
                        <span className={`badge ${destination.badgeClass}`}>
                          {destination.parent}
                        </span>
                      )}
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src={destination.gallery[0]}
                        alt={destination.title}
                      />
                    </div>
                    <div className="content">
                      <div className="destination-header">
                        <span className="location">
                          <i className="fal fa-map-marker-alt" />{" "}
                          {destination.title}
                          {/* {destination.parent} */}
                        </span>

                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <h5>
                        <Link href="tour-details">{destination.parent}</Link>
                      </h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {destination.attributes.map((attr, index) => (
                          <span class="badge text-dark border m-1 border-black rounded-pill border-3">
                            {attr.title}
                          </span>
                          // <span class="badge badge-pill badge-dark">Dark</span>
                          // <span
                          //   key={index}
                          //   className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center"
                          // >
                          //   {attr.title}
                          // </span>
                        ))}
                      </div>

                      <p>{destination?.description}</p>
                      <ul className="blog-meta">
                        <li>
                          1 BHK
                          {/* <i className="far fa-clock" /> {"1 BHK"} */}
                        </li>
                        <li
                          className={
                            destination.partial_payment ? "text-success" : ""
                          }
                        >
                          {destination.partial_payment
                            ? "Pay 50% to book now"
                            : null}
                          {/* <i className="far fa-user" /> {destination.guests} */}
                        </li>
                      </ul>

                      <div className="destination-footer">
                        <span className="price">
                          <span>
                            {destination.price.toLocaleString("en-IN", {
                              maximumFractionDigits: 0,
                              style: "currency",
                              currency: "INR",
                            })}
                          </span>
                        </span>

                        <Link
                          href="tour-details"
                          className="theme-btn style-two style-three"
                        >
                          <span data-hover="Book Now">Book Now</span>
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <ul
                className="pagination pt-15 flex-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="far fa-chevron-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    1<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="far fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </ReveloLayout>
  );
};

export default page;

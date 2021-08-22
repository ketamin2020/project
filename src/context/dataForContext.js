import sliderMob from "../imagesDev/slider_mob.png";
import sliderDesc from "../imagesDev/slider_desk.png";
import card from "../imagesDev/card.png";
import categories_1 from "../images/categories/categories_1.png";
import categories_2 from "../images/categories/categories_2.png";
import categories_3 from "../images/categories/categories_3.png";
import categories_4 from "../images/categories/categories_4.png";
import categories_5 from "../images/categories/categories_5.png";
import categories_6 from "../images/categories/categories_6.png";
import cars from "../images/aboutService/cars.svg";
import boxes from "../images/aboutService/boxes.svg";
import managment from "../images/aboutService/management.svg";

const data = {
  navBarLink: [
    { linkName: "Магазины", path: "/store" },
    { linkName: "Доставка", path: "/delivery" },
    { linkName: "Контакты", path: "/contacts" },
    { linkName: "Сервис", path: "/services" },
    { linkName: "Оптовикам", path: "/wholesalers" },
  ],
  navBarPhone: "+7 (921) 912-34-56",
  mainNavLink: [
    { linkName: "Чехлы" },
    { linkName: "Стекла" },
    { linkName: "Аксессуары" },
    { linkName: "Новинки" },
    { linkName: "Распродажа" },
    { linkName: "Создать свой чехол" },
  ],
  sliderMob: [
    {
      images: sliderMob,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderMob,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderMob,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderMob,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
  ],
  sliderDesk: [
    {
      images: sliderDesc,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderDesc,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderDesc,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
    {
      images: sliderDesc,
      title: "Акция лета 2021 – на все чехлы iphone",
      subTitle: "1+1=3",
    },
  ],

  cards: [
    {
      image: card,
      title: "Чехол силиконовый для Iphone 8",
      subTitle: "Cиликоновый чехол для iPhone SE/8/7 Lightweight Case ",
      oldPrice: 3000,
      price: 2500,
    },
    {
      image: card,
      title: "Чехол силиконовый для Iphone 8",
      subTitle: "Cиликоновый чехол для iPhone SE/8/7 Lightweight Case ",
      oldPrice: 3000,
      price: 2500,
    },
    {
      image: card,
      title: "Чехол силиконовый для Iphone 8",
      subTitle: "Cиликоновый чехол для iPhone SE/8/7 Lightweight Case ",
      oldPrice: 3000,
      price: 2500,
    },
  ],

  categoties: [
    { title: "Чехлы", image: categories_1 },
    { title: "Кабели и адаптеры", image: categories_2 },
    { title: "Защитные стекла", image: categories_3 },
    { title: "Наушники и колонки", image: categories_4 },
    { title: "Повербанки", image: categories_5 },
    { title: "Моноподы и штативы", image: categories_6 },
  ],

  outService: [
    {
      image: cars,
      title: "Тщательно выбираем поставщиков",
      text: "Мы являемся поставщиками самых качественных и разнообразных товаров от проверенных производителей со всего мира.",
    },
    {
      image: boxes,
      title: "С умом формируем ассортимент",
      text: "В наличии — более чем 5000 различных наименований цифровых продуктов, а также всевозможные аксессуары ",
    },
    {
      image: managment,
      title: "Сотрудничаем с лучшими на рынке",
      text: "Вас приятно удивят наши цены и возможность приобрести некоторые виды продукции оптом. ",
    },
  ],
};
export default data;

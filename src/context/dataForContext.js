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
import facebookIcon from "../images/footer/facebook.svg";
import instagramIcon from "../images/footer/instagram.svg";
import telegramIcon from "../images/footer/telegram.svg";
import vkIcon from "../images/footer/vkontakte.svg";
import service_icon1 from "../images/serviceCenter/service_icon1.svg";
import service_icon2 from "../images/serviceCenter/service_icon2.svg";
import service_icon3 from "../images/serviceCenter/service_icon3.svg";
import service_icon4 from "../images/serviceCenter/service_icon4.svg";

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
  accessories: [
    {
      title: "Чехлы",
      image: categories_1,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
    {
      title: "Кабели и адаптеры",
      image: categories_2,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
    {
      title: "Защитные стекла",
      image: categories_3,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
    {
      title: "Наушники и колонки",
      image: categories_4,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
    {
      title: "Повербанки",
      image: categories_5,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
    {
      title: "Моноподы и штативы",
      image: categories_6,
      subTitle: [
        { item: "Силиконовые " },
        { item: "Деревянные" },
        { item: "Светящиеся " },
        { item: "С наклейками" },
        { item: "Детские" },
      ],
    },
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

  footer: {
    products: {
      title: "Продукция",
      links: [
        { linkName: "Каталог", path: "/" },
        { linkName: "Конструктор чехлов", path: "/" },
        { linkName: "Новинки", path: "/" },
        { linkName: "Акции", path: "/" },
      ],
    },
    information: {
      title: "Информация",
      links: [
        { linkName: "Адреса магазинов", path: "/" },
        { linkName: "Доставка", path: "/" },
        { linkName: "Оплата", path: "/" },
        { linkName: "Сервис", path: "/" },
        { linkName: "Возврат товара", path: "/" },
      ],
    },
    companies: {
      title: "Компания",
      links: [
        { linkName: "О нас", path: "/" },
        { linkName: "Оптовикам", path: "/" },
        { linkName: "Вакансии", path: "/" },
        { linkName: "Контакты", path: "/" },
        { linkName: "Публичная оферта", path: "/" },
      ],
    },
  },

  socialImage: [
    { image: telegramIcon },
    { image: facebookIcon },
    { image: instagramIcon },
    { image: vkIcon },
  ],

  serviceCenter: {
    title: "Сервисный центр",
    subTitle:
      "Качественные комплектующие на популярные модели всегда в наличии. Не надо ждать!",
    about:
      "Быстро изготовим ключи, печати, сделаем фото на документы и поможем со сканированием и распечаткой документов",
    cards: [
      {
        image: service_icon1,
        title: "Дисплеи",
        text: "Оригинальная сочность и качество изображения, оригинальная яркость и четкость цветопередачи, оригинальная чувствительность Touchscreen.",
      },
      {
        image: service_icon2,
        title: "Шлейфы",
        text: "Электронные компоненты (камеры, разъемы зарядки, микрофоны) на шлейфах полностью соответствуют стандартам производителей",
      },
      {
        image: service_icon3,
        title: "Кнопки",
        text: "Износостойкие кнопки из материалов оригинального производства. Наши кнопки не вызывают аллергии и выполнени из экологичного пластика",
      },
      {
        image: service_icon4,
        title: "Аккумуляторы",
        text: "От производителей, обеспечивающих более 1000 циклов заряда/разряда. Каждая батарея проходит дополнительный контроль разряда и заряда",
      },
    ],
    bannerText:
      "Вызовите курьера за 399 р, сэкономьте время а мы проведем ремонт за 1 день!",
  },
};
export default data;

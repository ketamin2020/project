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
import serviceMapIcon from "../images/serviceCenter/serviceMapIcon.svg";
import map from "../images/contacts/map.png";
import pictogram from "../imagesDev/pictogram.png";
import salares_mob from "../images/wholsalers/salesBg_mob.png";
import salares_desktop from "../images/wholsalers/salesBg_desktop.png";
import bg_desktop from "../images/aboutCompany/bg_desktop.png";
import bg_mob from "../images/aboutCompany/bg_mob.png";
import card_1 from "../images/aboutCompany/card_1.png";
import card_2 from "../images/aboutCompany/card_2.png";
import card_3 from "../images/aboutCompany/card_3.png";
import phones from "../images/aboutCompany/phones.png";
import phoneProduct from "../imagesDev/phoneProducts.png";
import phoneProduct1 from "../imagesDev/productPhone1.png";

const data = {
  navBarLink: [
    { linkName: "Магазины", path: "/store" },
    { linkName: "Доставка", path: "/delivery" },
    { linkName: "Контакты", path: "/contacts" },
    { linkName: "Сервис", path: "/services" },
    { linkName: "Оптовикам", path: "/wholesalers" },
  ],
  navBarPhone: "+7 (921) 912-34-56",
  email: "hr@mobilus.ru",
  address: "Москва, 197374, ул. Оптиков, д. 4",
  map: map,
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
    serviceMapIcon: serviceMapIcon,
    bannerText:
      "Вызовите курьера за 399 р, сэкономьте время а мы проведем ремонт за 1 день!",
  },

  vacancies: [
    {
      position: "Продавец-консультант",
      experience: "2-3 года",
      salary: "45000-55000 р.",
      info: "Оформление по ТК, премии по итогам работы",
    },
    {
      position: "Инженер по ремонту телефонов",
      experience: "2-3 года",
      salary: "4500000-5500000 р.",
      info: "Оформление по ТК, премии по итогам работы",
    },
    {
      position: "Продавец-консультант",
      experience: "2-3 года",
      salary: "45000-55000 р.",
      info: "Оформление по ТК, премии по итогам работы",
    },
    {
      position: "Продавец-консультант",
      experience: "2-3 года",
      salary: "45000-55000 р.",
      info: "Оформление по ТК, премии по итогам работы",
    },
    {
      position: "Продавец-консультант",
      experience: "2-3 года",
      salary: "45000-55000 р.",
      info: "Оформление по ТК, премии по итогам работы",
    },
  ],

  busketGoods: [
    {
      image: pictogram,
      article: 4422345,
      name: "Чехол силиконовый Iphone 12",
      count: 2,
      price: 2300,
      oldPrice: 3333,
    },
    {
      image: pictogram,
      article: 4422345,
      name: "Защитное стекло Iphone 8 Ultra 8G Megastanless steel Gorilla Glass`",
      count: 1,
      price: 2300,
      oldPrice: "",
    },
    {
      image: pictogram,
      article: 4422345,
      name: "Чехол силиконовый Iphone 12",
      count: 2,
      price: 2300,
      oldPrice: 3333,
    },
    {
      image: pictogram,
      article: 4422345,
      name: "Чехол силиконовый Iphone 12",
      count: "",
      price: 2300,
      oldPrice: "",
    },
  ],

  whoolsalers: {
    salares_mob: salares_mob,
    salares_desktop: salares_desktop,
    bgTitle:
      "Чехлы на смартфоны оптом с вашими принтами или символикой от 120 р.",
    whatWeDo: "Что мы предлагаем",
    whatWeDoText:
      "Также, выбирайте из десятков принтов и моделей смартфонов в нашей коллекции, которая постоянно пополняется красивыми и актуальными рисунками. Брутальные или нежные, яркие или сдержанные, лаконичные или пёстрые - у нас есть принты на любой вкус, стиль и настроение.",
    variantTitle: "Варианты сотрудничества для партнеров",
    variant: [
      {
        title: "Оптовые закупки",
        subTitle:
          "Оптовые закупки от 5 тыс руб. Просто авторизуетесь, как юр лицо и совершаете покупки по оптовым ценам. Доставка бесплатно по Москве! Отправка по России и СНГ ",
      },
      {
        title: "Дропшиппинг",
        subTitle:
          "Дропшиппинг – партнер продаёт у себя на сайте или любой из торговых площадок, мы изготавливаем и осуществляем логистику. Прибыль делим.",
      },
    ],
    variantCards: [
      {
        text: "Печатаем на любых чехлах, любого цвета: пластиковые, силиконовые, кожаные, деревянные, противоударные, комбинированные сублимационные, состоят из плотного силикона и металлической пластины.",
      },
      {
        text: "Используем два вида печати – УФ и Сублимацию. Имеется возможность покрыть лаком отдельные элементы или полностью всё изображение. Для более интересного подхода, можно наложить несколько слоёв краски, тем самым придать объёмность и рельефность изображению. ",
      },
      {
        text: "Премиальные износостойкие краски и лаки, качественные материалы изделия, японское оборудование и контроль качества производства - это то, что позволяет нам производить не только красивые, но тактильно приятные чехлы",
      },
    ],
  },
  aboutCompany: {
    cards: [
      { text: "Изготовление от 1го дня, в зависимости от заказа." },
      { text: "Оплата произвести можно наличными, б/н. Работаем с ндс и без." },
      { text: "Постоянным клиентам предлагаем пост оплатную систему расчёта" },
      {
        text: "Доставку осуществляем транспортными компаниями СДЭК, Достависта, Почта России",
      },
    ],
    bg_desktop: bg_desktop,
    bg_mob: bg_mob,
    images: [{ image: card_1 }, { image: card_2 }, { image: card_3 }],

    phones: phones,
    title: "О компании Мобилиус",
    text: "Компания Мобилиус существует на рынке аксессуаров для телефонов с 2013 года и имеет собственную розничную сеть магазинов, что позволяет забирать свои заказы покупателям, в различных районах Москвы. Имеет огромный опыт в продаже и производстве чехлов для телефонов, следит за актуальными трендами и выделяется оригинальностью принтов и высочайшим качеством своей продукции. Наша продукция представлена на нашем сайте, на всех известных площадках Маркетплейсов: Ozon, Wildberries, Яндекс Маркет, также в Instagram и Avito.",
    subTitle:
      "Собственная торговая марка M Cover – это современный дизайн, высочайшее качество и доступная цена. ",
    text1:
      "Компания Мобилиус предоставляет высочайший сервис, и готовы предложить широкий спектр предоставляемых услуг, включающий в себя ремонт компьютеров, ноутбуков и телефонов, изготовление ключей, копировальные и фото услуги. Также занимаемся изготовлением различной сувенирной продукции и печатаем на всех полезных и важных вещах любой компании и готовы взять на себя заказ до 1млн единиц для изготовления, будто печать на шариковых ручках, или фирменные ежедневники, эксклюзивные рельефные вывески или таблички.",
    subTitle1: "Печатные мощности и превосходное оборудование",
    text2:
      'позволяют компании Мобилиус, предлагать своим клиентам такие опции и возможности печати, которые не могут предложить большинство других компаний на рынке РФ, и удовлетворять запросы самых взыскательных клиентов. Мобилиус гордится качеством предлагаемой печати, реализуемому благодаря лучшему японскому (не китайскому, не корейскому). При печати используются дорогие, качественные, оригинальные краски (не заменители, не аналоги). Принты от M cover являются износостойкими, не стираются от "проведения ногтем" и радуют своих клиентов на протяжении долгого времени.',
  },
  shopsAddresess: [
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
    {
      address: "Москва, 197374, ул. Оптиков, д. 4",
      phone: "+7 999 234-34-64",
      workTime: "Ежедневно, с 9:00 до 21:00",
      metroColorBranch: "#9BDF71",
      metroName: "Отрадное",
      howGoinTo:
        "Бульвар Дмитрия Донского. Павильон находится в подземном переходе станции метро Бульвар Дмитрия Донского. При входе в метро , вход №7/8.",
    },
  ],

  productImage: [
    { image: phoneProduct },
    { image: phoneProduct },
    { image: phoneProduct },
  ],
};
export default data;

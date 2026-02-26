import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Phones' },
    { id: 2, name: 'Бытовая техника' },
    { id: 3, name: 'Компьютеры' },
    { id: 4, name: 'ТВ, АУДИО, ВИДЕО' },
  ];

  private readonly products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful A16 chip.',
      price: 404000,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h80/83559340900382.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/hbd/83559337099294.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-zelenyi-113137974/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Apple iPhone 17 Pro 256Gb NanoSIM+eSIM',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 822702,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ',
      description:
        'Samsung Galaxy S24 Ultra 5G — флагманский смартфон с непревзойденными возможностями для тех, кто требует от устройства максимальной производительности и стиля.',
      price: 641550,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hba/84963583459358.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Apple iPhone 16 128Gb NanoSIM+eSIM',
      description:
        'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень',
      price: 450000,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h4f/87295472074782.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hf1/87295472107550.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-fioletovyi-123727182/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Unihertz Tank 3 Pro 16 ГБ/512 ГБ',
      description:
        'Unihertz Tank 3 Pro 16 ГБ/512 ГБ — это мощный и надёжный смартфон, который сочетает в себе высокую производительность, защиту от внешних воздействий и современные технологии',
      price: 480000,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/had/85542884573214.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/had/85542884573214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h0f/85542884704286.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/unihertz-tank-3-pro-16-gb-512-gb-chernyi-117807634/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 6,
      name: 'Аэрогриль Merlin FD-1017B 16 л черно-серебристый',
      description:
        'Аэрогриль FD-1017B — современное решение для приготовления вкусных и полезных блюд с минимальными усилиями. С мощностью 2100 Вт и объёмом 16 литров',
      price: 54990,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/pde/89142750.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/pda/89142751.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pd7/89142752.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/merlin-fd-1017b-16-l-cherno-serebristyi-150681417/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 7,
      name: 'Пылесос AINOMI A1 Premium Power Черный',
      description:
        'AINOMI A1 Premium Power — это современный вертикальный беспроводной пылесос с мощностью 400 Вт, созданный для идеальной уборки любых поверхностей. ',
      price: 79900,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pd2/87533453.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc2/p78/80690959.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p69/62456898.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p69/62456898.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/ainomi-a1-premium-power-chernyi-mokryi-asfal-t-137712147/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 8,
      name: 'Увлажнитель воздуха MiBaby Mi001',
      description:
        'Портативный увлажнитель воздуха используют, как аромадиффузор и наслаждаются ароматерапией в квартире или офисе.',
      price: 4990,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p2e/8582072.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p32/8582073.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 9,
      name: 'Hansa ACS-09W55 белый + монтажный комплект',
      description:
        'Unihertz Tank 3 Pro 16 ГБ/512 ГБ — это мощный и надёжный смартфон, который сочетает в себе высокую производительность, защиту от внешних воздействий и современные технологии',
      price: 144990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p26/39983305.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p26/39983306.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p26/39983307.JPG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p29/39983310.JPG?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hansa-acs-09w55-belyi-montazhnyi-komplekt-137334570/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 2,
    },
    {
      id: 10,
      name: 'Мясорубка MONTERO PRO MG2800',
      description:
        'Мясорубка MONTERO PRO MG-2800 – мощь и удобство для вашей кухни! ',
      price: 35990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p94/pda/107187484.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p33/pe9/54705276.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p07/pf0/54705278.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/pc1/54705280.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/mjasorubka-montero-pro-mg2800-chernyi-133432499/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 11,
      name: 'LINEUP i5-12400F / RTX 4060 8 Гб / 32 Гб / SSD 1048 Гб / Win 11 Pro',
      description:
        'Готовьтесь к новому уровню производительности с нашим ультимативным ПК-комплектом. ',
      price: 583399,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p54/76205796.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/pa7/99590773.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p30/pa7/99590774.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p14/pa7/99590775.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lineup-lineup-full-dest-chernyi-134259788/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 12,
      name: 'GoodGame i5-14400F / RTX 5060 Ti 16 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
      description: 'Объем SSD1000 Гб',
      price: 857000,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p19/35994026.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p19/35994026.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/goodgame-i514400f5060ti16gb-belyi-137927437/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 13,
      name: 'UniComp Xeon E5-2666 v3 / RTX 2060 6 Гб / 32 Гб / SSD 512 Гб / Win 11 Pro',
      description:
        'Откройте для себя мощный игровой ПК UniComp, созданный для тех, кто ценит высокую производительность и надежность как в играх, так и в других задачах.',
      price: 347990,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pb9/44988501.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pb8/44988502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/pfa/71024614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/pb8/44988504.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/unicomp-samurai-pc-100-xeon-e5-2666-v3-rtx-2060-6-gb-32-gb-ssd-512-gb-win-11-belyi-108892745/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 14,
      name: 'LINEUP i5-14400 / RTX 5060 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
      description:
        'Полный комплект ПК — всё, что нужно для игр и работы!\n• ⚡ Мощный Intel Core i5‑14400',
      price: 679000,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p43/45177693.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1a/p27/98411362.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p27/98411364.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p27/98411364.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lineup-5060140222-chernyi-140465557/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 3,
    },
    {
      id: 15,
      name: 'ITBRO i5-10400F / RTX 2060 Super 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
      description:
        'Полный игровой комплект: высокопроизводительный процессор Intel Core i5 10400F и 8 гигабайтная видеокара от NVIDIA GeForce RTX 2060 super что делает его настоящим монстром среди других аналогов ',
      price: 519000,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/p80/58288284.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/p80/58288284.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/itbro-i5-10400f-rtx-2060-super-32gb-1000-ssd-win-11-pro-128865278/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 16,
      name: 'Наушники GERLAX GH-34 черный',
      description:
        '. С беспроводным подключением и современным дизайном, они станут вашим незаменимым спутником в любых задачах.✨',
      price: 2769,
      rating: 4.6,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 17,
      name: 'Наушники Apple AirPods 4 ',
      description:
        'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 60802,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 18,
      name: 'Умная колонка Яндекс Станция Лайт YNDX-00025',
      description:
        'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка',
      price: 55000,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h36/64362963599390.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 19,
      name: 'Игровая приставка Retro game stick M8 + 10000 игр + 2 беспроводных джойстика',
      description:
        'Портативная игровая консоль нового формата (GameStick), включает в себя 10 различных ретро приставок (Sega, Dendy, PlayStation 1 и другие).м спутником в любых задачах.✨',
      price: 6700,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/hf6/65102527954974.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/hf6/65102527954974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/hb6/85558260793374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/ha7/85558260826142.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/retro-game-stick-m8-10000-igr-2-besprovodnyh-dzhoistika-105215362/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 20,
      name: 'Портативная колонка BT SPEAKER ZQS-4239',
      description:
        '. С беспроводным подключением и современным дизайном, они станут вашим незаменимым спутником в любых задачах.✨',
      price: 4298,
      rating: 4.7,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB',
      likes: 0,
      categoryId: 4,
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}

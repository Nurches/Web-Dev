import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful A16 chip.',
      price: 404000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h80/83559340900382.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/hbd/83559337099294.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-zelenyi-113137974/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 2,
      name: 'Рюкзак 4.10 Avenue',
      description: 'стильное и практичное решение для повседневного использования',
      price: 4990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p88/31680836.jpeg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/pb4/31680851.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p8b/31680837.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/pae/31680853.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/rjukzak-4-10-avenue-6767-iskusstvennaja-kozha-chernyi-136746994/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 3,
      name: 'Кроссовки синий',
      description: 'Кроссовки 2125431 — стильное и удобное решение для повседневного использования, идеально подходящее для активного образа жизни.',
      price: 3681,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hb3/86812487548958.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hff/86812487680030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h71/86812487745566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h2f/86812487942174.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/krossovki-krossovki-2125431-sinii-42-110727093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 4,
      name: 'Apple Watch SE GPS Gen.2',
      description: 'Полны достоинств. Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности',
      price: 139900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 5,
      name: 'Apple AirPods 4',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 61453,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 6,
      name: 'Бортик защитный NYRA',
      description: 'Высокий сетчатый детский защитный барьер от падений NYRA - это готовый комплект - из двух бортиков 200 см, одного бортика 180 см и соединительной планки, который крепится в изголовье.',
      price: 33990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/p50/59292413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p50/59292413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p50/59292414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/p50/59292415.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bortik-zaschitnyi-nyra-200x180-sm-3sht-seryi-137444463/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 7,
      name: 'Телевизор Yasin 32E9000',
      description: 'Yasin 32E9000 2025 года получил полное обновление, улучшив как производительность, так и дизайн, чтобы предложить пользователям еще более совершенный опыт.',
      price: 50935,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/pf7/58296734.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p58/pf7/58296734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/pf7/58296735.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/pf4/58296740.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/yasin-32e9000-81-sm-chernyi-101748828/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 8,
      name: 'Фитнес-браслет WHOOP 5.0 PEAK',
      description: 'WHOOP 5.0 Peak — продвинутый фитнес-браслет для здоровья, восстановления и продуктивности. ',
      price: 144844,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pce/50063335.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p46/53950456.jpeg?format=gallery-mediumm'
      ],
      link: 'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 9,
      name: 'Отпариватель AVENTIX PAR200',
      description: 'AVENTIX 2 в 1 мінсіз тегістік пен стиль бірнеше минутта! 1300 Вт қуаты қалың маталарды да оңай тегістейді Керамикалық жабын матаны қорғап жеңіл сырғиды',
      price: 13499,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5a/p4f/61023363.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/p56/61023365.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-aventix-par200-fioletovyi-144751155/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
    {
      id: 10,
      name: 'Свитшот QAZAQ REPUBLIC born qazaq',
      description: 'свитшот. удобная и практичная одежда на любой сезон. в коллекции есть как базовые, так и модели с принтом. выполнена в фирменном лекале qr.',
      price: 17990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/pf9/62501696.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paa/pf9/62501696.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/pf9/62501697.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/pf9/62501699.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/svitshot-qazaq-republic-born-qazaq-10272002043-belyi-xs-145135369/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtASuL8uhvTtgdBxTzQVI1gmpjogR7qAKhfNY3ZYx1gT099INgV_g3oaAm8dEALw_wcB'
    },
  ]
}

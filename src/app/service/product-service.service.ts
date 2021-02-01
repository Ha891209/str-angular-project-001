import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
   providedIn: 'root'
})
export class ProductServiceService {

   list: Product[] = [
      {
         "id": 1,
         "catId": 1,
         "name": "Szombat esti őrület",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/00/5212_32.jpg",
         "price": 3000,
         "stock": 60,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 2,
         "catId": 2,
         "name": "Álomépítők",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2020/208/09/326447_1595834974.4647.jpg",
         "price": 1200,
         "stock": 5,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 3,
         "catId": 1,
         "name": "Lódító hódító",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/12/49283_46.jpg",
         "price": 1200,
         "stock": 1,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 4,
         "catId": 1,
         "name": "Parasztvakítás",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2021/6/10/340739_1610012767.4184.jpg",
         "price": 4500,
         "stock": 5,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 5,
         "catId": 1,
         "name": "Little",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/22/17/311481_1548259916.8665.jpg",
         "price": 1000,
         "stock": 47,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 6,
         "catId": 1,
         "name": "Kémecském",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2020/49/11/319994_1582108101.796.jpg",
         "price": 1478,
         "stock": 14,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 7,
         "catId": 1,
         "name": "Hirtelen 30",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/45759_35.jpg",
         "price": 6574,
         "stock": 23,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 8,
         "catId": 1,
         "name": "Rövidzárlat 2.",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/04/20821_6.jpg",
         "price": 3000,
         "stock": 10,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 9,
         "catId": 1,
         "name": "Rövidzárlat",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/44504_74.jpg",
         "price": 1000,
         "stock": 60,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 10,
         "catId": 2,
         "name": "A róka és a kutya",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/03/19176_33.jpg",
         "price": 4700,
         "stock": 70,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 11,
         "catId": 1,
         "name": "Kőkemény diri",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/47215_40.jpg",
         "price": 4500,
         "stock": 20,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 12,
         "catId": 1,
         "name": "Ebgondolat",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/143/10/320163_1558688197.3916.jpg",
         "price": 4500,
         "stock": 1,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 13,
         "catId": 1,
         "name": "Nicsak, ki beszél most!",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/46459_12.jpg",
         "price": 1150,
         "stock": 70,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 14,
         "catId": 1,
         "name": "Reszkessetek, kutyaütők!",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2018/199/11/106803_1531992321.5824.jpg",
         "price": 999,
         "stock": 12,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 15,
         "catId": 1,
         "name": "Ne játssz a tűzzel",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/303/19/320140_1572547984.191.jpg",
         "price": 1150,
         "stock": 23,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 16,
         "catId": 1,
         "name": "Sonic, a sündisznó",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2020/27/12/277009_1580209993.7033.jpg",
         "price": 5999,
         "stock": 70,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 17,
         "catId": 1,
         "name": "Képtelen kampány",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/01/10132_37.jpg",
         "price": 5999,
         "stock": 20,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 18,
         "catId": 1,
         "name": "A hangok",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2015/35/22/148789.jpg",
         "price": 1000,
         "stock": 47,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 19,
         "catId": 1,
         "name": "Kipurcant a bébicsősz, anyának egy szót se!",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/47443_41.jpg",
         "price": 1700,
         "stock": 47,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 20,
         "catId": 1,
         "name": "Tűzoltó kutya",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/45762_38.jpg",
         "price": 4500,
         "stock": 14,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 21,
         "catId": 1,
         "name": "Lekapcsolódás",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/23/87149_39.jpg",
         "price": 4700,
         "stock": 40,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 22,
         "catId": 1,
         "name": "Kivonat",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/04/21495_49.jpg",
         "price": 5999,
         "stock": 170,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 23,
         "catId": 1,
         "name": "Mia és a fehér oroszlán",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/91/12/309547_1554199827.9833.jpg",
         "price": 1700,
         "stock": 1,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 24,
         "catId": 1,
         "name": "Gagyi lovag",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/04/20046_50.jpg",
         "price": 3000,
         "stock": 47,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 25,
         "catId": 1,
         "name": "Garfield 2",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/03/17034_8.jpg",
         "price": 999,
         "stock": 70,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 26,
         "catId": 1,
         "name": "A légy 2.",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2014/268/15/45850_1.jpg",
         "price": 6574,
         "stock": 47,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 27,
         "catId": 1,
         "name": "A pláza ásza",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/05/23714_7.jpg",
         "price": 6574,
         "stock": 40,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 28,
         "catId": 1,
         "name": "A gondozoo",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/13/53464_47.jpg",
         "price": 3000,
         "stock": 60,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 29,
         "catId": 1,
         "name": "Rocksuli",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/10/44241_36.jpg",
         "price": 1700,
         "stock": 170,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 30,
         "catId": 1,
         "name": "Instant család",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/20/13/306568_1548075214.597.jpg",
         "price": 4500,
         "stock": 40,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 31,
         "catId": 1,
         "name": "BÚÉK",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2018/287/09/311671_1539589186.5596.jpg",
         "price": 4700,
         "stock": 1,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 32,
         "catId": 1,
         "name": "Egy kutya hazatér",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2019/9/02/305114_1547082296.3327.jpg",
         "price": 4700,
         "stock": 170,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 33,
         "catId": 1,
         "name": "Az árva",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/06/29286_28.jpg",
         "price": 6574,
         "stock": 5,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 34,
         "catId": 2,
         "name": "Aladdin",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/10/44091_91.jpg",
         "price": 1000,
         "stock": 14,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 35,
         "catId": 2,
         "name": "A szépség és a szörnyeteg",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/45731_7.jpg",
         "price": 3000,
         "stock": 40,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 36,
         "catId": 1,
         "name": "Átejtve",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2018/133/10/292912_1526286112.9495.jpg",
         "price": 1200,
         "stock": 5,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 37,
         "catId": 2,
         "name": "Herkules",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/46453_6.jpg",
         "price": 2100,
         "stock": 20,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 38,
         "catId": 2,
         "name": "A Notre Dame-i toronyőr",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/03/18444_42.jpg",
         "price": 1200,
         "stock": 12,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 39,
         "catId": 2,
         "name": "Vili, a veréb",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/13/53181_37.jpg",
         "price": 2100,
         "stock": 60,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 40,
         "catId": 1,
         "name": "Creepshow - A rémmesék könyve",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2014/267/05/25466_1.jpg",
         "price": 5999,
         "stock": 40,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 41,
         "catId": 1,
         "name": "Libabőr 2: Hullajó Halloween",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2018/297/12/292040_1540462335.4066.jpg",
         "price": 1000,
         "stock": 1,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 42,
         "catId": 1,
         "name": "Barátom, Róbert Gida",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2018/213/11/302639_1533202189.4645.jpg",
         "price": 1200,
         "stock": 1,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 43,
         "catId": 1,
         "name": "Az élet csodaszép",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/10/44242_37.jpg",
         "price": 1200,
         "stock": 20,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 44,
         "catId": 1,
         "name": "Vaklárma",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/03/19578_10.jpg",
         "price": 1200,
         "stock": 50,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 45,
         "catId": 1,
         "name": "Csoda a 34. utcában",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/46427_50.jpg",
         "price": 999,
         "stock": 1,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 46,
         "catId": 1,
         "name": "Semmit a szemnek",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2014/266/06/11435_1.jpg",
         "price": 1478,
         "stock": 5,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 47,
         "catId": 1,
         "name": "A massza",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/03/17082_53.jpg",
         "price": 6574,
         "stock": 40,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 48,
         "catId": 2,
         "name": "Denver, az utolsó dinoszaurusz",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2017/249/20/213977_1504808330.7446.jpg",
         "price": 6574,
         "stock": 20,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 49,
         "catId": 1,
         "name": "Rémálmok",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/14/54998_45.jpg",
         "price": 4700,
         "stock": 70,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 50,
         "catId": 1,
         "name": "Az igazi csoda",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/2017/322/13/279811_1511093553.1703.jpg",
         "price": 1000,
         "stock": 70,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 51,
         "catId": 1,
         "name": "Torrente 4.",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/05/24736_24.jpg",
         "price": 4700,
         "stock": 47,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 52,
         "catId": 1,
         "name": "Torrente 3. - A védelmező",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/292/23/4375_28.jpg",
         "price": 4700,
         "stock": 60,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 53,
         "catId": 1,
         "name": "A szoba",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2016/5/18/163323.jpg",
         "price": 4700,
         "stock": 10,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 54,
         "catId": 1,
         "name": "Versenyfutás az idővel",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/294/02/96638_24.jpg",
         "price": 1000,
         "stock": 5,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 55,
         "catId": 1,
         "name": "Smart Cookies",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/294/02/96613_1.jpg",
         "price": 2100,
         "stock": 5,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 56,
         "catId": 1,
         "name": "Szülői felügyelet nélkül",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/18/69853_41.jpg",
         "price": 1200,
         "stock": 20,
         "featured": false,
         "discounted": false,
         "active": true
      },
      {
         "id": 57,
         "catId": 1,
         "name": "Seholország",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/12/48638_33.jpg",
         "price": 999,
         "stock": 14,
         "featured": true,
         "discounted": true,
         "active": true
      },
      {
         "id": 58,
         "catId": 1,
         "name": "Különös kívánság",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/12/50523_49.jpg",
         "price": 1700,
         "stock": 14,
         "featured": true,
         "discounted": false,
         "active": true
      },
      {
         "id": 59,
         "catId": 1,
         "name": "Jöttünk, láttunk, visszamennénk 2. - Az időalagút",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/45854_46.jpg",
         "price": 5999,
         "stock": 14,
         "featured": false,
         "discounted": true,
         "active": true
      },
      {
         "id": 60,
         "catId": 1,
         "name": "Bolondos péntek",
         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam sunt obcaecati quas minus deserunt excepturi eum perferendis earum quo ducimus officia. Odio itaque officia aspernatur aut a fuga cum? ",
         "image": "https://www.mafab.hu/static/profiles/2014/293/11/47657_12.jpg",
         "price": 2100,
         "stock": 23,
         "featured": false,
         "discounted": true,
         "active": true
      }
   ];

   filmList: Product[] = this.list
      .filter(item => item.catId === 1);

   cartoonList: Product[] = this.list
      .filter(item => item.catId === 2);

   discountedList: Product[] = this.list
      .filter(item => item.discounted);

   featuredFilmsList: Product[] = this.list
      .filter(item => item.featured && item.catId === 1);

   featuredCartoonsList: Product[] = this.list
      .filter(item => item.featured && item.catId === 2);

   constructor() { }
}

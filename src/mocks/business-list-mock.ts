import {Business} from '../schemas/Business';
import {Address} from '../schemas/Address';
import {businessMock} from '../mocks/business-mock';

let bobsPizza: Business = new Business(
  'Bob\'s Pizza',
  'https://www.yelp.com/biz/bobs-pizza-norwalk',
  '415555555',
  'https://s3-media3.fl.yelpcdn.com/bphoto/wQfykQq69YZ2Zx7UARVfNg/ms.jpg', 
  new Address(
    'Norwalk',
    [
      "14505 Pioneer Blvd",
      "Norwalk, CA 90650"
    ],
      '90650',
      'USA',
    [
      '14505 Pioneer Blvd'
    ],
    'CA'
  ),
  "My parents have been coming here since they first opened. This pizza place is the best! We usually get the pepperoni and mushroom pizza and we are never...",
  4.5,
  59
)

let fioreWoodFiredPizza: Business = new Business(
  'Fiore Wood Fired Pizza',
  'https://www.yelp.com/biz/fiore-wood-fired-pizza-provo?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=6A2aQhfeX7b26TIIEMINhA',
  '0000000000',
  'https://s3-media4.fl.yelpcdn.com/bphoto/axGnEnIogHrljd9bL4TFGg/ms.jpg', 
  new Address(
    'Provo',
    [
      "Provo, UT"
    ],
      '84601',
      'USA',
    [],
    'UT'
  ),
  "I was able to try Fiore at the Winter Farmer's Market Downtown at the Rio Grande. Though it was still \"breakfast\" hours, Fiore's options looked so much...",
  4,
  28
)


export let businessListMock:Business[] = [
  businessMock,
  bobsPizza,
  fioreWoodFiredPizza
]
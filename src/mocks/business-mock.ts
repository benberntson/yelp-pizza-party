import {Business} from '../schemas/Business';
import {Address} from '../schemas/Address';

export let businessMock: Business = new Business(
  'Giorgio\'s Pizza',
  'http://www.giorgiospizza.com/',
  '415-668-1266',
  'https://s3-media3.fl.yelpcdn.com/bphoto/aHGOnOo21VrX9k-Z0vUR_A/ms.jpg', 
  new Address(
    'Sanfrancisco',
    [
      '151 Clement St.'
    ],
    '94118',
    'USA',
    [
      '151 Clement St.'
    ],
    'CA'
  ),
  'Bring me... THE BAT!',
  3.5,
  787
)
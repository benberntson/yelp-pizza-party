import {Business} from '../schemas/Business';
import {Address} from '../schemas/Address';

export let businessMock: Business = new Business(
  'Giorgio\'s Pizza',
  'http://www.giorgiospizza.com/',
  '415-668-1266',
  'http://www.giorgiospizza.com/wp-content/uploads/2016/07/giorgios-pizza-san-francisco-home1.png',
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
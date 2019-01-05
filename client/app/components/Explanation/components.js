import Envelope from './envelope.jpg';
import Map from './map.jpg';
import Stamp from './stamp.jpg';

const ExplainComponents = [{
  id: 'choose',
  title: 'Select an issue',
  text: 'Choose your postcard.',
  img: Envelope
}, {
  id: 'find',
  title: 'Choose your representatives',
  text: 'We find matches for your address.',
  img: Map
}, {
  id: 'send',
  //?
  title: 'Make your voice heard',
  text: 'We send the postcard for you!',
  img: Stamp
}]

export default ExplainComponents;

/*
 * Explanation Messages
 *
 * This contains all the text for the Explanation component.
 */
import { defineMessages } from 'react-intl';
import components from './components';

let messages = {};

components.forEach(c => {
  messages[`${c.id}_message`] = {
    id: `app.components.Explanation.${c.id}`,
    defaultMessage: `${c.text}`
  }
})

export default defineMessages({
  header: {
    id: 'app.components.Explanation.header',
    defaultMessage: 'This is the Explanation component !',
  },
});

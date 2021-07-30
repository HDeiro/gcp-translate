require('dotenv').config();

import { SupportedLanguages, translate } from "./utils/translate";

(async () => {
  const translated = await translate('["Pig", "Dog", "Cat"]', SupportedLanguages.Portuguese);
  console.log(JSON.parse(translated));
})();

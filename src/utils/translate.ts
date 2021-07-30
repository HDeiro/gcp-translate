const { Translate } = require('@google-cloud/translate').v2;

let translateInstance: any;

// https://cloud.google.com/translate/docs/languages
export enum SupportedLanguages {
  Portuguese = 'pt',
  English = 'en',
  Spanish = 'es',
  French = 'fr'
};

export const getInstance = () => {
  if (translateInstance) {
    return translateInstance;
  }

  const credentials = JSON.parse(process.env.CREDENTIALS);

  translateInstance = new Translate({
    credentials,
    projectId: credentials.project_id
  });

  return translateInstance;
}

export const translate = async (
  text: string,
  target: string
): Promise<string> => {
  const [translated] = await getInstance().translate(text, target);
  return translated;
}



import axios from 'axios';


interface DictionaryApiResponse {
  // The 'meta' object contains metadata about the entry, including its unique identifier.
  meta: {
    id: string; // A unique identifier for the entry.
  };

  // The 'hwi' object provides information about the headword (main form of the word).
  hwi: {
    // The actual headword text.
    hw: string;

    // An array of phonetic pronunciations, each with metadata and audio URL.
    prs: {
      // The written pronunciation text.
      mw: string;

      // The URL to an audio file of the pronunciation.
      sound: {
        audio: string;
      };
    }[];
  };
  fl: string; 
  

  

  def: Array<{
    sseq: Array<
      Array<
        Array<
          [
            string,
            {
              sn: string;
              dt: any[]; 
            }
          ]
        >
      >
    >;
  }>;
  et: Array<Array<[string, string]>>; 
  
  shortdef: string[]; 
}

export const getWordDefinition = async (word: string): Promise<string | null> => {
  try {
    const apiKey = 'ADD-YOUR-APIKEY-HERE';
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=${apiKey}`;

    const response = await axios.get<DictionaryApiResponse[]>(apiUrl);

    if (response.data && response.data.length > 0) {
      const wordDefinition = response.data[0]; 

      if (wordDefinition.shortdef.length !== 0 && wordDefinition.et.length !== 0) {


        return JSON.stringify([wordDefinition.hwi.prs[0].mw, wordDefinition.shortdef[0]]);  
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching word definition:', error);
    return null;
  }
};
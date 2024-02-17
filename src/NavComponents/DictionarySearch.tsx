import React, { useState, useEffect } from 'react';
import { getWordDefinition } from './DictionaryService';

const DictionarySearch: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [definition, setDefinition] = useState<string | null>(null);
  const [searchedWords, setSearchedWords] = useState<{ word: string; definition: string | null }[]>([]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [notFoundMessage, setNotFoundMessage] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);

    // Consider adding basic input validation here (e.g., minimum word length)
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      getDictionary();
    }
  };

  const cleanUpDefinition = (definition: string): string => {
    // Use a regular expression to remove tags like {it}, {ldquo}, {rdquo}, etc.
    return definition.replace(/{[^}]+}/g, '');
  };

  const getDictionary = async () => {
    try {
      const wordDefinition = await getWordDefinition(word);

      // Update the state with the word definition
      setDefinition(wordDefinition);
      // Add the searched word and its definition to the list
      setSearchedWords((prevWords) => [...prevWords, { word, definition: wordDefinition }]);
      if (!wordDefinition) {
        setNotFoundMessage(true);
      }
    } catch (error) {
            // Show an error message to the user
      console.error('Error fetching word definition:', error);
    }
  };

  // Function to format the definition array
  const formatDefinition = (definitionArray: string[] | null) => {
    if (!definitionArray) return '';

    return definitionArray.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ));
  };

  const handleClose = () => {
    setDefinition(null);
    setWord("");

  };

  const handleBookmark = () => {
    const bookmarkWord = word;
    const bookmarkDef = JSON.stringify(definition);

    if (bookmarkWord && !bookmarked.includes(bookmarkWord)) {
      setBookmarked((prevBookmarked) => [...prevBookmarked, bookmarkWord, bookmarkDef]);
    }
  };

  return (
    <div id="dictonary-search">
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>
          <input
            placeholder="Dictionary search"
            type="text"
            value={word}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Handle Enter key press
            aria-label="Dictionary search input"
            aria-describedby="search-results" // Assume you have an element with this ID
            autoComplete="off" // Prevent browser suggestions
          />
          <button style={{ width: '48px',  height: '48px' }} className='btn-add' onClick={getDictionary}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875Z" fill="orange" />
            </svg>
          </button>
        </div>

        {definition ? (
          <div className='modal-background'>
            <div className='modal'>
              <div style={{position:'absolute', marginLeft:'85%'}} onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 28 28" fill="none">
                <path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM10.9941 17.4863C10.5283 17.4863 10.1592 17.1172 10.1592 16.6426C10.1592 16.4316 10.2471 16.2207 10.4141 16.0625L12.8047 13.6631L10.4141 11.2725C10.2471 11.1143 10.1592 10.9033 10.1592 10.6924C10.1592 10.2178 10.5283 9.85742 10.9941 9.85742C11.2402 9.85742 11.4336 9.93652 11.5918 10.0947L13.9912 12.4854L16.3994 10.0859C16.5752 9.91895 16.7598 9.83984 16.9971 9.83984C17.4629 9.83984 17.832 10.209 17.832 10.6748C17.832 10.8945 17.7441 11.0879 17.5771 11.2637L15.1865 13.6631L17.5771 16.0537C17.7354 16.2207 17.8232 16.4229 17.8232 16.6426C17.8232 17.1172 17.4541 17.4863 16.9795 17.4863C16.7422 17.4863 16.54 17.3984 16.373 17.2402L13.9912 14.8584L11.6094 17.2402C11.4512 17.4072 11.2402 17.4863 10.9941 17.4863Z" fill="#eee"/>
              </svg>
              </div>
      
              <h3>{word}{formatDefinition(JSON.parse(definition))}</h3>
              <button onClick={handleBookmark} style={{ width:'100%', height:'44px'}}>          

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 20" fill="none">
                <path d="M1.99902 19.3223C2.47363 19.3223 2.78125 19.0762 3.52832 18.3467L6.9209 14.9893C6.95605 14.9453 7.03516 14.9453 7.07031 14.9893L10.4717 18.3467C11.2188 19.0762 11.5176 19.3223 12.001 19.3223C12.7041 19.3223 13.1436 18.8389 13.1436 18.0479V2.70215C13.1436 0.953125 12.2295 0.0302734 10.498 0.0302734H3.49316C1.76172 0.0302734 0.847656 0.953125 0.847656 2.70215V18.0479C0.847656 18.8389 1.28711 19.3223 1.99902 19.3223Z" fill="#eee"/>
              </svg>
              </button>
            </div>
          </div>
        ): ""}
        {notFoundMessage ? 
          <div className='modal-background'>

            <div  style={{borderRadius:'1000px',zIndex:'100000',position:'absolute', marginLeft: '72%' , marginTop:'15%'}} onClick={() => setNotFoundMessage(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 28 28" fill="none">
                <path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM10.9941 17.4863C10.5283 17.4863 10.1592 17.1172 10.1592 16.6426C10.1592 16.4316 10.2471 16.2207 10.4141 16.0625L12.8047 13.6631L10.4141 11.2725C10.2471 11.1143 10.1592 10.9033 10.1592 10.6924C10.1592 10.2178 10.5283 9.85742 10.9941 9.85742C11.2402 9.85742 11.4336 9.93652 11.5918 10.0947L13.9912 12.4854L16.3994 10.0859C16.5752 9.91895 16.7598 9.83984 16.9971 9.83984C17.4629 9.83984 17.832 10.209 17.832 10.6748C17.832 10.8945 17.7441 11.0879 17.5771 11.2637L15.1865 13.6631L17.5771 16.0537C17.7354 16.2207 17.8232 16.4229 17.8232 16.6426C17.8232 17.1172 17.4541 17.4863 16.9795 17.4863C16.7422 17.4863 16.54 17.3984 16.373 17.2402L13.9912 14.8584L11.6094 17.2402C11.4512 17.4072 11.2402 17.4863 10.9941 17.4863Z" fill="#eee"/>
              </svg>
              </div>
            <div className='modal'>
                    
            <h3>We did not find the word you are looking for</h3>
          </div>
          </div>
        : ""
        }
      </div>
    </div>
  );
};

export default DictionarySearch;

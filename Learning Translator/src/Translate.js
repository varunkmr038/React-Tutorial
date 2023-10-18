import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Icon, TextArea } from "semantic-ui-react";
import { useEffect } from "react";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setselectedLanguage] = useState("");
  const [languageList, setLanguageList] = useState([]);
  const [translatedText, setTranslatedText] = useState("");
  const [detectLanguage, setDetectLanguage] = useState("");

  const languages = (selectedLang) => {
    setselectedLanguage(selectedLang.target.value);
  };

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((response) => {
      setLanguageList(response.data);
    });
    getLanguageSource();
  }, [inputText]);

  const getLanguageSource = () => {
    if (inputText) {
      axios
        .post(`https://libretranslate.de/detect`, {
          q: inputText,
        })
        .then((response) => {
          setDetectLanguage(response.data[0].language);
        });
    }
  };

  const translateText = () => {
    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguage,
      target: selectedLanguage,
    };

    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      setTranslatedText(response.data.translatedText);
    });
  };

  return (
    <>
      <div className="app-header">
        <h2 className="header">Translator</h2>
      </div>

      <div className="app-header">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder="Type text to translate"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />

            <select className="language-selector" onChange={languages}>
              <option>Please select language...</option>
              {languageList.map((lang) => {
                return <option value={lang.code}>{lang.name}</option>;
              })}
            </select>

            <Form.Field
              control={TextArea}
              placeholder="Your result"
              value={translatedText}
            />

            <Button color="instagram" size="large" onClick={translateText}>
              <Icon name="translate" />
              Translate
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Translate;

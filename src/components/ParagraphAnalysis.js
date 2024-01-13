import React, { useState } from "react";
import "./ParagraphAnalysis.css";


const Paragraph = () => {
  const [textBody, setTextBody] = useState('');
  const [character, setCharacter] = useState(0);
  const [word, setWord] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [spaces, setSpaces] = useState(0);
  const [punctuations, setPunctuation] = useState(0);

  function onChange(event) {
    const inputText = event.target.value;
    setTextBody(inputText);

    setCharacter(inputText.length);

    const words = inputText.split(/\s+/);
    setWord(words.filter((word) => word.length > 0).length);

    const sentences = inputText.split(/[.!?]+/);
    setSentence(sentences.filter((sentence) => sentence.length > 0).length);

    const paragraphs = inputText.split(/\n+/);
    setParagraph(paragraphs.filter((paragraph) => paragraph.length > 0).length);

    setSpaces(inputText.split(' ').length - 1);

    const punctuationCount = inputText.split(/[.,;:'"!?()[\]{}-]+/).length - 1;
    setPunctuation(punctuationCount);
  }

  return (
    <div>
    <textarea
      rows={12}
      cols={177}
      placeholder="Type, or copy/paste your content here."
      className="ps-2 pt-2"
      value={textBody}
      onChange={onChange}
    />
    <div className="w-[83rem] mt-10">
      <table className=" w-full border">
        <thead>
          <tr>
            <th className="">Characters</th>
            <th className="">Words</th>
            <th className="">Sentences</th>
            <th className="">Paragraphs</th>
            <th className="">Spaces</th>
            <th className="">Punctuations</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="ps-24">{character}</td>
            <td className="ps-24">{word}</td>
            <td className="ps-24">{sentence}</td>
            <td className="ps-24">{paragraph}</td>
            <td className="ps-24">{spaces}</td>
            <td className="ps-24">{punctuations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Paragraph;

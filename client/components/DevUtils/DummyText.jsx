import React from 'react';
import dummyTextStrings from './dummyText.constants';

const DummyText = (props) => {
  const numParagraphs = props.numParagraphs;
  let theText = '';


  for (let i = 0; i < numParagraphs; i++) {
    const randIndex = Math.floor(Math.random() * dummyTextStrings.length);
    theText = `${theText} <p>${dummyTextStrings[randIndex]}</p>`;
  }
  const theHtml = {__html: theText};

  return (
    <div dangerouslySetInnerHTML={theHtml} />
  );
};

export default DummyText;

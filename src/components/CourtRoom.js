import React, { useState } from 'react';
import './CourtRoom.css';

const CourtRoom = ({ number }) => {
  const [petitioner, setPetitioner] = useState('');
  const [respondent, setRespondent] = useState('');
  const [mainText, setMainText] = useState('');
  const [nextMatch, setNextMatch] = useState('');

  return (
    <div className="courtroom">
      <h2 className="courtroom-title">Court Room - {number}</h2>
      <div className="courtroom-content">
        <div className="courtroom-left">
          <div className="input-group">
            <label htmlFor={`petitioner-${number}`}>Petitioner :</label>
            <input
              type="text"
              id={`petitioner-${number}`}
              value={petitioner}
              onChange={(e) => setPetitioner(e.target.value)}
              placeholder="Enter petitioner name"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`respondent-${number}`}>Respondent :</label>
            <input
              type="text"
              id={`respondent-${number}`}
              value={respondent}
              onChange={(e) => setRespondent(e.target.value)}
              placeholder="Enter respondent name"
            />
          </div>
        </div>
        <div className="courtroom-right">
          <textarea
            className="main-textarea"
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            placeholder="Current Status..."
          />
        </div>
      </div>
      <div className="courtroom-bottom">
        <div className="input-group">
          <label htmlFor={`nextmatch-${number}`}>Next Match :</label>
          <input
            type="text"
            id={`nextmatch-${number}`}
            value={nextMatch}
            onChange={(e) => setNextMatch(e.target.value)}
            placeholder="Enter next match details"
          />
        </div>
      </div>
    </div>
  );
};

export default CourtRoom;


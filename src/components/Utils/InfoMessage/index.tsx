import React from 'react';
import './info.global.scss';

type InfoMessageProps = {
  message: string;
};

function InfoMessage({ message }: InfoMessageProps) {
  return (
    <div className="infoMessage">
      <p>{message}</p>
    </div>
  );
}

export default InfoMessage;

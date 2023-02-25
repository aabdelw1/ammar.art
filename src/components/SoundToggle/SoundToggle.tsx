import React from 'react';
import { styled } from '@style';

import { ThemeContext } from '@components/ThemeContext';
import { IconButton } from '@components/IconButton'

const SoundToggle = () => {
  const { soundMode, setSoundMode } = React.useContext(ThemeContext);

  if (!soundMode) {
    return null;
  }

  const nextPreference = soundMode !== 'on' ? 'on' : 'off';
  const title = `Toggle Sound ${nextPreference}`;

  return (
    <ToggleButton
      aria-label={title}
      title={title}
      onClick={() => {
        setSoundMode(nextPreference);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0"        
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
        color="var(--colors-text)"
      >
        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
        <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
      </svg>
    </ToggleButton>
  );
};

const ToggleButton = styled(IconButton, {
  display: 'flex',
  alignItems: 'center',
  margin: '1px 0 0',
});

export default SoundToggle;
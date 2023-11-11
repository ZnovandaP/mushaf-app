import * as React from 'react';

export default function Audio({ src }: { src: string }) {
  return (
    <audio controls style={{ width: '100%' }}>
      <source
        src={src}
        type="audio/mp3"
      />
    </audio>
  );
}

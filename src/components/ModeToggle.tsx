import React from 'react';

const ModeToggle = ({ value, onChange }: { value: string; onChange: (...args: any[]) => any }) => (
  <div className="calc-mode">
    <label className="calc-mode-label" htmlFor="formula">
      <input type="radio" name="mode" id="formula" onChange={onChange} value="formula" checked={value === 'formula'} />
      Formula
    </label>
    <label className="calc-mode-label" htmlFor="immediate">
      <input
        type="radio"
        name="mode"
        id="immediate"
        onChange={onChange}
        value="immediate"
        checked={value === 'immediate'}
      />
      Immediate
    </label>
  </div>
);

export default ModeToggle;

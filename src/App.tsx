import React, { ChangeEventHandler, useState } from 'react';
import ColorPickerPanel from './ColorPicker/ColorPickerPanel';
import { Color } from './ColorPicker/color';

function App() {
  const [color, setColor] = useState<Color>(new Color('rgb(22,119,255)'));

  const handleHueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const hsv = color.toHsv();
    let val = +e.target.value;

    setColor(new Color({
      h: val,
      s: hsv.s,
      v: hsv.v,
    }))
  }

  const handleVChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const hsv = color.toHsv();
    let val = +e.target.value;

    setColor(new Color({
      h: hsv.h,
      s: hsv.s,
      v: val,
    }))
  }

  return (
    <div style={{ width: '300px' }}>
      <ColorPickerPanel value={color} onChange={newColor => setColor(newColor)}></ColorPickerPanel>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: '260px'}}>
          <div>
            色相：<input type='range' min={0} max={360} step={0.1} value={color.toHsv().h} onChange={handleHueChange} />
          </div>
          <div>
            明度：<input type='range' min={0} max={1} step={0.01} value={color.toHsv().v} onChange={handleVChange} />
          </div>
        </div>
        <div style={{ width: 35, height: 35, background: color.toRgbString() }}></div>
      </div>
    </div>
  );
}

export default App;
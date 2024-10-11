import { CSSProperties, useState } from "react";
import cs from 'classnames';
import './index.scss';
import { ColorType } from "./interface";
import { Color } from "./color";
import Palette from "./Palette";
import { useControllableValue } from "ahooks";


export interface ColorPickerProps {
    className?: string;
    style?: CSSProperties;
    value?: ColorType;
    defaultValue?: ColorType;
    onChange?:(color: Color) => void;
}

function ColorPickerPanel(props: ColorPickerProps) {

    const {
        className,
        style,
        value,
        onChange
    } = props;

    /* const [colorValue, setColorValue] = useState<Color>(() => {
        if(value instanceof Color) {
            return value;
        }
        return new Color(value);
    }) */

    // 同时支持受控和非受控
    const [colorValue, setColorValue] = useControllableValue<Color>(props);
    const classNames = cs("color-picker", className);

    const onPaletteColorChange = (color: Color) => {
        setColorValue(color);
        onChange?.(color);
    }

    return <div className={classNames} style={style}>
        <Palette color={colorValue} onChange={onPaletteColorChange}></Palette>
    </div>
}

export default ColorPickerPanel;
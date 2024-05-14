import React, { useState } from 'react';
import '../styles/handles-styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const RadialProgressBar = ({value, icon, maxValue}) => {
    

    const calcColor = (value, maxValue) => {
        // Прогресс в процентах
        const progress = (value / maxValue) * 100;
      
        // Основной цвет в формате RGB
        const green = [0, 255, 0]; // Зеленый цвет
        const red = [255, 0, 0];   // Красный цвет
      
        // Линейная интерполяция между зеленым и красным цветами
        const mainColor = [
          Math.round(green[0] + (red[0] - green[0]) * (progress / 100)),
          Math.round(green[1] + (red[1] - green[1]) * (progress / 100)),
          Math.round(green[2] + (red[2] - green[2]) * (progress / 100))
        ];
      
        // Второстепенный цвет - темный оттенок основного цвета
        const secondaryColor = mainColor.map(color => Math.max(color - 50, 0));
        // Возвращаем основной и второстепенный цвета в формате RGB
        return {
          mainColor: `rgb(${mainColor.join(', ')})`,
          secondaryColor: `rgb(${secondaryColor.join(', ')})`
        };
      };

    const [colors, setColor] = useState(calcColor(value, maxValue));

    return(
        <div className='circular-stack' style={{background: colors.secondaryColor}}>
            <CircularProgressbar styles={{path: {stroke: colors.mainColor}}} value={value} circleRatio={1}/>
            <div className='circular-icon' style={{background: colors.mainColor}}>{icon}</div>
        </div>
    )
};

export default RadialProgressBar;
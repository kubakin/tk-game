import { useState, useEffect } from "react";

export interface PositionInterface {
  coords: {
    longitude: number;
    latitude: number;
  };
  timestamp: number;
}
export const usePosition = () => {
  const [position, setPosition] = useState<PositionInterface>();
  const [error, setError] = useState(null);

  const onChange = (val) => {
    // Здесь мы могли бы сохранить весь объект position, но для
    // ясности давайте явно перечислим, какие свойства нас интересуют.
    // console.log(val);
    setPosition(val);
    // setPosition({latitude, longitude});
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      console.log("Геолокация не поддерживается браузером");
      return;
    }

    // Подписываемся на изменение геопозиции браузера.
    const watcher = geo.watchPosition(onChange, onError);

    // В случае, если компонент будет удаляться с экрана
    // производим отписку от слежки, чтобы не засорять память.
    // return () => geo.clearWatch(watcher);
  }, []);

  return { position, error };
};

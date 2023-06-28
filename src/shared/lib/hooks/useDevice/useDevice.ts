import { useEffect, useState } from 'react';

/*
	Установили либу react-device-detect - весит 12кб, многовато для такой фичи.
 	Лучше сделать кастомный хук useDevice.
	Но если по идее нужно подгружать через lazy разные компоненты в чанки,
	то наверное нужна либа(погуглить lazyLoad с хуком useDevice)
*/

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

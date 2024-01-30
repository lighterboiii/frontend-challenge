import React, { FC, useEffect, useState } from "react";
import { getCars } from "../../api";


const Main: FC = () => {
  const [cats, setCats] = useState<any>([]);

  useEffect(() => {
    const fetchCarsImages = async () => {
      try {
        const images = await getCars(10);
        setCats(images);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCarsImages();
  }, []);

  return (
    <div>
      {cats.map((cat: any) => (
        <div key={cat.id}>
          <img src={cat.url} alt="фотка котика" />
        </div>
      ))}
    </div>
  )
};

export default Main;
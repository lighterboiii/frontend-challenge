import React, { FC, useEffect, useState } from "react";
import { getCars } from "../../api";
import Loader from "../../components/Loader/Loader";
import './AllCats.scss';

const AllCats: FC = () => {
  const [cats, setCats] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  console.log(cats);

  useEffect(() => {
    const fetchCarsImages = async () => {
      try {
        const images = await getCars(10);
        setCats(images);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCarsImages();
  }, []);

  if (loading) {
    return <Loader text="Котики в пути" />
  }

  return (
    <div className="cats">
      {cats.map((cat: any) => (
        <div key={cat.id} className="cats__cat">
          <img src={cat.url} alt="фотка котика" className="cats__catImage" />
        </div>
      ))}
    </div>
  )
};

export default AllCats;
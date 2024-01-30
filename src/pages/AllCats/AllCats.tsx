import React, { FC, useEffect, useState } from "react";
import { addFavouriteCar, getCars } from "../../api";
import Loader from "../../components/Loader/Loader";
import './AllCats.scss';
import { TCat } from "../../utils/types";

const AllCats: FC = () => {
  const [cats, setCats] = useState<TCat[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchCarsImages = async () => {
      try {
        const images = await getCars(15);
        const catWithClickState = images.map((cat: TCat) => ({ ...cat, isClicked: false }));
        setCats(catWithClickState);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCarsImages();
  }, []);

  const handleAddToFavs = async (catId: string) => {
    try {
      await addFavouriteCar(catId);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (clickedCatId: string) => {
    handleAddToFavs(String(clickedCatId));
    setCats((prevCats: TCat[]) => prevCats.map((cat: TCat) => cat.id === clickedCatId ? { ...cat, isClicked: !cat.isClicked } : cat));
  }

  if (loading) {
    return <Loader text="Котики в пути" />
  }

  return (
    <div className="cats">
      {cats.map((cat: TCat) => (
        <div key={cat.id} className="cats__cat">
          <img src={cat.url} alt="фотка котика" className="cats__catImage" />
          <button
            className={cat.isClicked ? "cats__clickedButton" : "cats__addToFavButton"}
            onClick={() => handleClick(cat.id)}>
          </button>
        </div>
      ))}
    </div>
  )
};

export default AllCats;
import { FC, useEffect, useState } from "react";
import { getFavouriteCars, removeCarFromFavourites } from "../../api";
import Loader from "../../components/Loader/Loader";
import './FavCats.scss';
import { TFavourite } from "../../utils/types";

const Favourites: FC = () => {
  const [favs, setFavs] = useState<TFavourite[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(favs);
  const fetchFavourites = async () => {
    try {
      const favCatsData = await getFavouriteCars();
      console.log(favCatsData);
      const favsWithInitialClickState = favCatsData.map((cat: TFavourite) => ({ ...cat, isClicked: true }));
      setFavs(favsWithInitialClickState);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchFavourites();
  }, []);

  const handleDeleteFromFavs = async (catId: string) => {
    try {
      setLoading(true);
      await removeCarFromFavourites(catId);
      await fetchFavourites();
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <Loader text="Проверка котиков" />
  }

  if (favs.length === 0) {
    return <div className="empty">В списке любимых котиков пока никого нет :с</div>
  }

  return (
    <div className="cats">
      {favs.map((cat: TFavourite) => (
        <div key={cat.id} className="cats__cat">
          <img src={cat.image.url} alt="фотка котика" className="cats__catImage" />
          <button
            className={cat.isClicked ? "cats__clickedButton" : "cats__addToFavButton"}
            onClick={() => handleDeleteFromFavs(String(cat.id))}
            >
          </button>
        </div>
      ))}
    </div>
  )
};

export default Favourites;
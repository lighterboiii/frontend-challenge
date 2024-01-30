import { FC, useEffect, useState } from "react";
import { getFavouriteCars } from "../../api";
import Loader from "../../components/Loader/Loader";
import './FavCats.scss';

const Favourites: FC = () => {
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(favs);
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favCatsData = await getFavouriteCars();
        setFavs(favCatsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFavourites();
  }, []);

  if (loading) {
    return <Loader text="Котики в пути" />
  }

  if (favs.length === 0) {
    return <div className="empty">В списке любимых котиков пока никого нет :с</div>
  }

  return (
    <div>
      {favs.map((cat: any) => (
        <div key={cat.id} className="cats__cat">
          <img src={cat.url} alt="фотка котика" className="cats__catImage" />
        </div>
      ))}
    </div>
  )
};

export default Favourites;
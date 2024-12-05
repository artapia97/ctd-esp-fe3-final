import { useContextGlobal } from "../Context/Context";
import { Link } from "react-router-dom";


const Card = ({ dentist }) => {

  const { name, username, id } = dentist;
  const { state, dispatch } = useContextGlobal();

  const isFav = state.favs.some((fav) => fav.id === id);

  const toggleFav = () => {
    if (isFav) {
      dispatch({
        type: "REMOVE_FAV",
        payload: { ...dentist },
      });
      alert("Dentist removed from favorites");
    } else {
      dispatch({
        type: "ADD_FAV",
        payload: { ...dentist },
      });
      alert("Dentist added successfully");
    }
  };

  return (
    <div className="card">
        <Link to={`/detail/${id}`}>
          <img src="../../public/images/doctor.jpg" alt="" />
          <h3>{name}</h3>
          <h3>{username}</h3>
        </Link>

        <button className="favButton" onClick={toggleFav}
        >
          {isFav ? "⭐" : "☆"}
        </button>
    </div>
  );
};

export default Card;

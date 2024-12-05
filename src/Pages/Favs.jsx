import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";


const Favs = () => {
  const { state, dispatch } = useContextGlobal();

  const clearFavs = () => {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      dispatch({ type: "CLEAR_FAVS" });
    }
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {state.favs.length > 0 && (
          <button className="clearButton" onClick={clearFavs}>
            Clear All Favorites
          </button>
        )}

      <div className='card-grid'>
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
        </div>
      </div>
    </>
  );
};

export default Favs;

import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context';

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}

      </div>
    </main>
  )
}

export default Home;
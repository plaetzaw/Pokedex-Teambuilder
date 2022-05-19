import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import Link from 'next/Link'

export default function DexEntry({ pokemon }) {
  console.log(pokemon);
  const {
    query: { id },
  } = useRouter();

  const Name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  const Picture = pokemon.image;

  const StatTable = pokemon.stats.map((stat) => {
    const Stat = stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1);
    let StatName = Stat;
    if (Stat === "Hp") {
      StatName = "HP";
    } else if (Stat === "Special-attack") {
      StatName = "Special Attack";
    } else if (Stat === "Special-defense") {
      StatName = "Special Defense";
    }

    return (
      <tr key={stat.stat.name}>
        <td>{StatName}</td>
        <td>{stat.base_stat}</td>
      </tr>
    );
  });

  const Types = pokemon.types.map((type, index) => {
    const Type = type.type.name[0].toUpperCase() + type.type.name.substring(1);
    // console.log(type)
    return <div key={index}>{Type}</div>;
  });

  return (
    <>
      <Link href={"/"}>RETURN</Link>
      <div className={styles.layout}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h1 className={styles.name}>{Name}</h1>
              {Types}
            </div>
            <div className={styles.image}>
              <img src={Picture} />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Stat</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{StatTable}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await res.json();
    const dexId = ("00" + params.id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${dexId}.png`;
    return {
      props: {
        pokemon,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

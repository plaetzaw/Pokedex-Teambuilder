import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import Link from 'next/link'

export default function DexEntry({ pokemon }) {
    // console.log(pokemon)
  const {query: { id } } = useRouter();

  const Name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  const Picture = pokemon.image;
  let BST = 0
  let statColor

  const Kilograms = pokemon.weight*0.1
  const Pounds = (Kilograms*2.20462).toFixed(2)
  const Meters = (pokemon.height*0.1).toFixed(2)
  const Feet = (Meters*3.28084).toFixed(2)


  const StatTable = pokemon.stats.map((stat) => {
    BST += stat.base_stat;
    const Stat = stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1);
    let StatName = Stat;
    if (Stat === "Hp") {
      StatName = "HP";
    } else if (Stat === "Special-attack") {
      StatName = "Special Attack";
    } else if (Stat === "Special-defense") {
      StatName = "Special Defense";
    }

    switch (Stat) {
        case 'Hp': {
            statColor = '#E32925'
            break
        }
        case 'Attack': {
            statColor = '#F89E33'
            break
        }
        case 'Defense': {
            statColor = '#ECD715'
            break
        }
        case 'Special-attack': {
            statColor = '#55B847'
            break
        }
        case 'Special-defense': {
            statColor = '#63CADE'
            break
        }
        case 'Speed': {
            statColor = '#8B4A9D'
            break
        }
        default: {
            statColor = '#D23C95'
        }
    }

    return (
      <tr key={stat.stat.name}>
        <td style={{width: '125px', textAlign:'left'}}>{StatName}</td>
        <td style={{width: '255px', backgroundColor: 'grey'}}>
            <div style={{width: `calc(100% * ${stat.base_stat}/255)`, height: '25px', backgroundColor: `${statColor}`, overflow: 'hidden'}}><b>{stat.base_stat}</b></div>
        </td>
      </tr>
    );
  });

  const Types = pokemon.types.map((type, index) => {
    const Type = type.type.name[0].toUpperCase() + type.type.name.substring(1);
    let typeColor
    switch (Type) {
        case 'Grass': {
            typeColor = 'green'
            break
        }
        case 'Poison': {
            typeColor = 'purple'
            break
        }
        case 'Normal': {
            typeColor = 'grey'
            break
        }
        case 'Fire': {
            typeColor = 'red'
            break
        }
        case 'Water': {
            typeColor = 'blue'
            break
        }
        case 'Grass': {
            typeColor = 'green'
            break
        }
        case 'Electric': {
            typeColor = '#ECD715'
            break
        }
        case 'Ice': {
            typeColor = 'teal'
            break
        }
        case 'Fighting': {
            typeColor = 'darkred'
            break
        }
        case 'Ground': {
            typeColor = 'brown'
            break
        }
        case 'Flying': {
            typeColor = 'lightblue'
            break
        }
        case 'Fire': {
            typeColor = 'red'
            break
        }
        case 'Psychic': {
            typeColor = '#8B4A9D'
            break
        }
        case 'Bug': {
            typeColor = 'lightgreen'
            break
        }
        case 'Rock': {
            typeColor = 'tan'
            break
        }
        case 'Ghost': {
            typeColor = 'purple'
            break
        }
        case 'Dark': {
            typeColor = 'grey'
            break
        }
        case 'Dragon': {
            typeColor = 'darkblue'
            break
        }
        case 'Steel': {
            typeColor = 'grey'
            break
        }
        case 'Fairy': {
            typeColor = 'pink'
            break
        }
        default: 
            typeColor = 'red'
    }
             
    return <div className={styles.type} style={{backgroundColor: `${typeColor}`}} key={index}>{Type}</div>;
  });


  const AlternateForms = pokemon.alternateForms.map((form) => {     
      let pokemon = form.value
      const Name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
      let altBST = 0
      const AltPicture = (pokemon.sprites.other["official-artwork"].front_default === null) ? Picture : pokemon.sprites.other["official-artwork"].front_default 
      const Kilograms = pokemon.weight*0.1
      const Pounds = (Kilograms*2.20462).toFixed(2)
      const Meters = (pokemon.height*0.1).toFixed(2)
      const Feet = (Meters*3.28084).toFixed(2)

      const Types = pokemon.types.map((type, index) => {
        const Type = type.type.name[0].toUpperCase() + type.type.name.substring(1);
        let typeColor
        switch (Type) {
            case 'Grass': {
                typeColor = 'green'
                break
            }
            case 'Poison': {
                typeColor = 'purple'
                break
            }
            case 'Normal': {
                typeColor = 'grey'
                break
            }
            case 'Fire': {
                typeColor = 'red'
                break
            }
            case 'Water': {
                typeColor = 'blue'
                break
            }
            case 'Grass': {
                typeColor = 'green'
                break
            }
            case 'Electric': {
                typeColor = '#ECD715'
                break
            }
            case 'Ice': {
                typeColor = 'teal'
                break
            }
            case 'Fighting': {
                typeColor = 'darkred'
                break
            }
            case 'Ground': {
                typeColor = 'brown'
                break
            }
            case 'Flying': {
                typeColor = 'lightblue'
                break
            }
            case 'Fire': {
                typeColor = 'red'
                break
            }
            case 'Psychic': {
                typeColor = '#8B4A9D'
                break
            }
            case 'Bug': {
                typeColor = 'lightgreen'
                break
            }
            case 'Rock': {
                typeColor = 'tan'
                break
            }
            case 'Ghost': {
                typeColor = 'purple'
                break
            }
            case 'Dark': {
                typeColor = 'grey'
                break
            }
            case 'Dragon': {
                typeColor = 'darkblue'
                break
            }
            case 'Steel': {
                typeColor = 'grey'
                break
            }
            case 'Fairy': {
                typeColor = 'pink'
                break
            }
            default: 
                typeColor = 'red'
        }
                 
        return <div className={styles.type} style={{backgroundColor: `${typeColor}`}} key={index}>{Type}</div>;
      });


      const StatTable = pokemon.stats.map((stat) => {
        altBST += stat.base_stat;
        const Stat = stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1);
        let StatName = Stat;
        if (Stat === "Hp") {
          StatName = "HP";
        } else if (Stat === "Special-attack") {
          StatName = "Special Attack";
        } else if (Stat === "Special-defense") {
          StatName = "Special Defense";
        }
    
        switch (Stat) {
            case 'Hp': {
                statColor = '#E32925'
                break
            }
            case 'Attack': {
                statColor = '#F89E33'
                break
            }
            case 'Defense': {
                statColor = '#ECD715'
                break
            }
            case 'Special-attack': {
                statColor = '#55B847'
                break
            }
            case 'Special-defense': {
                statColor = '#63CADE'
                break
            }
            case 'Speed': {
                statColor = '#8B4A9D'
                break
            }
            default: {
                statColor = '#D23C95'
            }
        }
    
        return (
          <tr key={stat.stat.name}>
            <td style={{width: '125px', textAlign:'left'}}>{StatName}</td>
            <td style={{width: '255px', backgroundColor: 'grey'}}>
                <div style={{width: `calc(100% * ${stat.base_stat}/255)`, height: '25px', backgroundColor: `${statColor}`, overflow: 'hidden'}}><b>{stat.base_stat}</b></div>
            </td>
          </tr>
        );
      });


      return (
        <div className={styles.card} key={pokemon.id}>
        {/* <p className={styles.dexNumber}>{pokemon.id}</p> */}
          <div className={styles.row}>
            <div className={styles.column}>
              <h1 className={styles.name}>{Name}</h1>
              <div className={styles.cardItem}><p>Height: {Feet} ft</p></div>
              <div className={styles.cardItem}><p>Weight: {Pounds} lbs</p></div>
              <div className={styles.cardItem}>BST: {altBST}</div>
              <div className={styles.row}>Types: {Types}</div>
            </div>
            <div className={styles.image}>
            <Image 
              src={AltPicture}
              height={250}
              width={250}/>
            </div>
          </div>
          <table style={{borderSpacing: '5px'}}>
            <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Stat</th>
                <th>Total</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>{StatTable}</tbody>
          </table>      
          </div>
      )
  })

  return (
    <>
        <Head>
        <title>{Name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/"><div className={styles.returnToDex}><a>Return to Dex</a></div></Link>
      <div className={styles.layout}>
        <div className={styles.card}>
        <p className={styles.dexNumber}>{pokemon.id}</p>
          <div className={styles.row}>
            <div className={styles.column}>
              <h1 className={styles.name}>{Name}</h1>
              <div className={styles.cardItem}><p>Height: {Feet} ft</p></div>
              <div className={styles.cardItem}><p>Weight: {Pounds} lbs</p></div>
              <div className={styles.cardItem}>BST: {BST}</div>
              <div className={styles.row}>Types: {Types}</div>
            </div>

            <div className={styles.image}>
              {/* <img src={Picture} /> */}
            <Image src={Picture} 
              height={250}
              width={250}
              />
            </div>
          </div>
          <table style={{borderSpacing: '5px'}}>
            <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Stat</th>
                <th>Total</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>{StatTable}</tbody>
          </table>
        </div>
        {AlternateForms}
      </div>
    </>
  );
}

export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    const list = await res.json()
    return {
        paths: list.results.map((pokemon) => ({
          params: { id: pokemon.name.toString() },
        })),
        fallback: false,
      };
    }

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await res.json();
    const dexId = ("00" + pokemon.id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${dexId}.png`;
    let alternateForms = []
    let megaOrRegionalForm = []
    //Here we are checking to see if the pokmeon has multiple forms
    const formdetails = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
    const variations = await formdetails.json()
    pokemon.variations = variations
    // console.log('number of variations', variations.varieties.length)
    if (variations.varieties.length > 1) {
        for (let i = 0; i < variations.varieties.length; i++) {
            if (variations.varieties[i].is_default === false) {
                megaOrRegionalForm.push(variations.varieties[i].pokemon.url)
            }
        } 
    }

    async function getVariants() {
        let newForms = await Promise.allSettled(megaOrRegionalForm.map((form) => fetch(form).then((r) => r.json())))
        return newForms
    }
    if (megaOrRegionalForm.length > 0) {
        alternateForms = await getVariants()
    }
    pokemon.alternateForms = alternateForms


    return {
      props: {
        pokemon,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

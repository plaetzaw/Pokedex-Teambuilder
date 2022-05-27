// import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const dexNumber = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${dexNumber}.png`;
      return {
        ...pokeman,
        image,
        dexNumber
      };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}

// const Home: NextPage = () => {
const Home = ({ pokemon }) => {
  // console.log(pokemon);
  const [filterPokemon, setFilterPokemon] = useState([])

  useEffect(() => {
    const filterMon = () => {
      setFilterPokemon(pokemon)
    }
    filterMon()
  }, [])

  console.log(filterPokemon)


  const filter = (filterMon) => {
    let updateArray = []
    pokemon.map(poke => {
      if (poke.name.includes(filterMon)) {
        updateArray.push(poke)
      } 
    })
    setFilterPokemon(updateArray)
  }

  const selectGeneration = async (nums) => {
    let pokemonByGen = []
    pokemon.map(poke => {
      if (poke.dexNumber >= nums.low && poke.dexNumber <= nums.high) {
        pokemonByGen.push(poke)
      } 
    })
    setFilterPokemon(pokemonByGen)
  }




  const DexEntry = filterPokemon.map((pokemon, index) => {
  // const DexEntry = filterPokemon.map((pokemon, index) => {
    const Name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

    return (
      <Link key={index} href={`/pokemon/${pokemon.name}`}>
      <div  className={styles.dexCard}>
        <p className={styles.dexNumber}>{pokemon.dexNumber}</p> 
        <h3 className={styles.dexName}> {Name}</h3>
          <a><Image src={pokemon.image} height="250px" width="250px" /></a>
      </div>
      </Link>
    );
  });

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokemon Gen1-Gen8 Pokedex" />
        <link rel="icon" href="/masterball.png" />
      </Head>
      <div className={styles.header}>
        <div className={styles.mobileTitleText}><h1>Pokedex</h1></div>
        <div className={styles.headerButtonCol}>
          <div className={styles.headerMiniCol}>
          <h4>Filter by Generation</h4>
          <div>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 1, high: 151})}}>Gen 1</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 152, high: 250})}}>Gen 2</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 252, high: 386})}}>Gen 3</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 387, high: 493})}}>Gen 4</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 494, high: 649})}}>Gen 5</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 650, high: 721})}}>Gen 6</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 722, high: 809})}}>Gen 7</button>
          <button className={styles.sampleButton} onClick={() => {selectGeneration({low: 810, high: 898})}}>Gen 8</button>
          </div>
          </div>
        </div>
      <h1 className={styles.titleText}>Pokedex</h1>
      <div className={styles.headerMiniCol}>
      <h4>Filter by Pokemon</h4>
      <input className={styles.search} onChange={(e => {filter(e.target.value)})}/>
      </div>

      </div>

      <div className={styles.dexLayout}>{DexEntry}</div>
    </>
  );
};

export default Home;

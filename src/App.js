import { GlobalStyle, CardsContainer } from "./GlobalStyled";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} nome={nome} setNome={setNome} />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            return pokemon.id.includes(id);
          })
          .filter((pokemon) => {
            return pokemon.name.english
              .toLowerCase()
              .includes(nome.toLowerCase());
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;

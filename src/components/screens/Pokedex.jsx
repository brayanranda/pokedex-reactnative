import { Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi } from "../../api/Pokemon";

export default function Pokedex() {
  // Los estados que van en [] van a mandar sobre el useEffect
  // Por ej: Si yo tengo un estado en [] y si este es modificado, el useEffect se vuelve a ejecutar
  useEffect(() => {
    // Hay que hacer una función anonima auto-ejecutable
    (async () => {
      await loadPokemons();
    })();
  }, []);
  // loadPokemons Tambien es promesa por lo tanto en el useEffect tambien hay que hacer un async await
  const loadPokemons = async () => {
    try {
      // getPokemonApi devuelve una promesa y hay que resolverla con await
      const response = await getPokemonApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}

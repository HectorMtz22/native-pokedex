import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getPokemonsFavoriteApi, deleteStorageApi } from "../api/favorite";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  const getFav = async () => {
    const res = await getPokemonsFavoriteApi();
    console.log(res);
  };

  const deleteAll = async () => {
    return await deleteStorageApi();
  };

  return (
    <View>
      <Button title="Envia" onPress={getFav} />
      <Button title="Borra" onPress={deleteAll} />
    </View>
  );
}

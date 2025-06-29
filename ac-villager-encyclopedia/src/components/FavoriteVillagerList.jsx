import React from "react";
import { useVillagerStore } from "../store/useVillagerStore";

export default function FavoriteVillagerList() {
  
  const favorites = useVillagerStore(state => state.favorites);
  
  return (
    <div>
      <h2>관심 주민 목록</h2>
      <ul>
        {favorites.length == 0 ? (
          <li>관심주민이 없습니다.</li> 
        ) : (
          favorites.map((v) => (
          <li key = {v.name}>
            <img src = {v.img} alt = {v.name} width = "50" />
            {v.name}
          </li>
          )
        ))}
      </ul>
    </div>
  )
}
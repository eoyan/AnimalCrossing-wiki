import React, { useState } from 'react';
import VillagerList from './components/VillagerList';
import VillagerDetail from './components/VillagerDetail';
import './css/App.css';
import FavoriteVillagerList from './components/FavoriteVillagerList';

export default function App() {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <div className="App">
      <div className="title">
        <h1>동물의 숲 주민 도감</h1>
      </div>

      <div className="container">
        <div className="villager-list-wrapper">
          <VillagerList onSelect={setSelectedName} />
        </div>

        <div className="villager-detail">
          {selectedName ? (
            <VillagerDetail name={selectedName} />
          ) : (
            <p>주민을 선택해 주세요</p>
          )}

          <div className = "favorite-villagers">
            <FavoriteVillagerList />
          </div>
        </div>
      </div>
    </div>
  );
}
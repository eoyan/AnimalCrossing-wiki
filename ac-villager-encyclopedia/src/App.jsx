import React, { useState } from 'react';
import VillagerList from './components/VillagerList';
import VillagerDetail from './components/VillagerDetail';

export default function App() {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <div>
      <h1>동물의 숲 주민 도감</h1>

      {/* 주민 리스트 - SWR 사용 */}
      <VillagerList onSelect={setSelectedName} selectedName={selectedName} />
      
      {/* 선택한 주민 상세정보 - TanStackQuery 사용 */}
      
      {selectedName && <VillagerDetail name = {selectedName} />}
      {!selectedName && <p>주민을 선택해 주세요</p>}
    </div>
  );
}
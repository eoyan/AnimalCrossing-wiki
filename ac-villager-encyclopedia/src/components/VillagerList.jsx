import React from 'react';
import useVillagers from '../hooks/useVillagers';

export default function VillagerList({ onSelect, selectedName }) {
  const { villagers, isLoading, isError } = useVillagers();

  if (isLoading) return <p>주민 목록을 불러오는 중입니다...</p>;
  if (isError) return <p>주민 목록 불러오기 실패</p>;
  

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '2rem',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {villagers
        ?.filter((v) => v.personality === 'Peppy' || v.species === 'Squirrel') // 활발한 성격 주민과 개구리
        .map((v) => (
          <li
            key={v.id}
            style={{
              width: '160px',
              height: '180px',
              cursor: 'pointer',
              backgroundColor: selectedName === v.name ? '#eef' : '#fff',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              textAlign: 'center',
            }}
            onClick={() => onSelect(v.name)}
          >
            <img
              src={v.image_url}
              alt={v.name}
              width="50%"
              height="auto"
            />
            <span style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
              {v.name}
            </span>
          </li>
        ))}
    </ul>
  );
}
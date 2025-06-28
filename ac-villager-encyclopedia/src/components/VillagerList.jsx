import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

export default function VillagerList({ onSelect, selectedName }) {

    const fetcher = async (url) => 
        await axios.get(url, {
            headers : {
                'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_API_KEY,
                'Accept-Version': '1.0.0',
            },
    }).then((res) => res.data);

    const { data, error, isLoading } = useSWR(
        'https://api.nookipedia.com/villagers?game=nh', fetcher);

    if (error) return ( <p>주민 데이터를 불러오지 못하였습니다.</p> ); 
    if (isLoading) return ( <p> 주민 데이터를 불러오는 중입니다.</p> );

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
            {data
                ?.filter((v) => ['Raymond', 'Punchy', 'Lolly', 'Kid Cat', 'Rosie', 'Tangy', 'Felicity' ].includes(v.name))
                .map ((v) => (
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
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import '../css/VillagerList.css';

export default function VillagerList({ onSelect}) {

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
        <ul className = "villager-list">
            {data
                ?.filter((v) => ['Raymond', 'Lolly', 'Sasha', 'Punchy', 'Judy', 'Felicity' ].includes(v.name))
                .map ((v) => (
                    
            <li 
                className = "villager-card"
                key={v.id}
                onClick={() => onSelect(v.name)}
            >
                <img 
                    src={v.image_url} 
                    alt={v.name}/>
                <span>
                    {v.name}
                </span>
            </li>
        ))}
        </ul>
        
    );
}
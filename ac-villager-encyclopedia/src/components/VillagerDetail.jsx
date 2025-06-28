import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useVillagerDetail({ name }) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['villager', name],
        queryFn: async () => await
            axios.get(`https://api.nookipedia.com/villagers?name=${encodeURIComponent(name)}`,
            {
                method: 'GET',
                headers: {
                'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_API_KEY,
                'Accept-Version': '1.0.0', 
                },
            })
            .then(
                (res) => res.data[0]),
        enabled: !!name, 
    });

    if (isLoading) return <p>로딩중</p>
    if (error) return <p>주민 상세 정보를 불러오는데 실패하였습니다.</p>;

    return (
        <div>
            <h2> {data.name} 상세 정보</h2>
            <img src = {data.image_url} alt = {data.name} width = "100" />
            <ul>
                <li>생일 : {data.birthday_month} {data.birthday_day}</li>
                <li>종 : {data.species}</li>
                <li>좋아하는 말 : {data.quote || '정보 없음'}</li>
                <li>성격: {data.personality}</li>
            </ul>
        </div>
    )
}
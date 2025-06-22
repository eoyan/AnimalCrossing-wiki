import React from 'react';
import useVillagerDetail from '../hooks/useVillagerDetail';

export default function VillagerDetail({name}) {
    const { data, isLoading, error } = useVillagerDetail(name);
    console.log('상세 데이터:', data);

    if (isLoading) return <p>주민 정보 로딩 중...</p>
    if (error) return <p>주민 정보를 불러오는 데 실패했습니다.</p>;

    // 주민의 상세 정보를 표시하는 컴포넌트 
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

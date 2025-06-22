import { useQuery } from '@tanstack/react-query';
import fetchVillagerDetail from '../api/fetchVillagerDetail';

export default function useVillagerDetail(name) {
    return useQuery({
        queryKey: ['villager', name],
        queryFn: () => fetchVillagerDetail(name),
        enabled: !!name, // name이 있을때만 요청 쿼리 보냄
    });
}

// 현재 주민 상세 정보를 가져오는 커스텀 훅 - TanStack Query 사용 
// 특정 주민의 이름이나 enabled 옵션 처럼 조건부 요청에 용이
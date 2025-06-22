import useSWR from 'swr';
import fetchVillagers from '../api/fetchVillagers';

export default function useVillagers() {


    const { data, error, isLoading } = useSWR(
        ['villagers'], // 캐시 키 
        () => fetchVillagers() 
        // fetcher가 API를 통해 데이터를 가져오면, SWR은 Villagers라는 키로 메모리 캐시에 저장해둠
        // 이후 동일한 키로 요청이 오면, 서버에 가기 전에 캐시된 데이터를 먼저 반환하고 백그라운드에서 최신화(갱신) 시도 
        // stale-while-revalidate 전략 
    );

    return {
        villagers: data,
        isLoading,
        isError: error,
    };
}

// 현재 주민 목록을 가져오는 커스텀 훅 - SWR 사용 
// 요청이 단순하고 반복 조회가 잦아 캐싱 효과가 크다
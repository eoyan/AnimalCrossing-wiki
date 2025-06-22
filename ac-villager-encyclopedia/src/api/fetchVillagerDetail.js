const fetchVillagerDetail = async (name) => {
    const response = await fetch(
      `https://api.nookipedia.com/villagers?name=${encodeURIComponent(name)}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_API_KEY,
          'Accept-Version': '1.0.0',
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch villager detail');
    }
  
    const [villager] = await response.json();
    return villager;
  };
  
  export default fetchVillagerDetail;
// 현재 주민의 상세 정보를 가져오는 함수
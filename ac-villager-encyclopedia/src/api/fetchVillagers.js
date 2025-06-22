import axios from 'axios';

const fetchVillagers = async(name) => {
    const res = await axios.get(
        'https://api.nookipedia.com/villagers?game=nh',
        {
            headers : {
                'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_API_KEY,
                'Accept-Version': '1.0.0',
            },
        }
    );
    return res.data;
}

export default fetchVillagers;

// 현재 주민 목록을 가져오는 함수
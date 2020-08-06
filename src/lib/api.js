import axios from 'axios';

export const getApi = async () => {
    console.log("들어옴 ?")
    try {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=korea&appid=85371cbe35ae28de9a3accc94cc81626`);
    } catch (error) {
        console.log(error);
    }
}
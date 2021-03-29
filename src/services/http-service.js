import axios from 'axios';
export const getApi = async (url) => {
    console.log(url);
    try {
        const data = await axios.get(url);
        return data.data;
    } catch (error) {
        return {};
    }
};
export const putApi = async (url, data) => {
    try {
        const data = await axios.put(url);
        return data.data;
    } catch (error) {
        return {};
    }
};
export const postApi = async (url, data) => {
    try {
        const data = await axios.post(url);
        return data.data;
    } catch (error) {
        return {};
    }
};

export const deleteApi = async (url) => {
    try {
        const data = await axios.delete(url);
        return data.data;
    } catch (error) {
        return {};
    }
};

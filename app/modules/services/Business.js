import API from './api';

export const getBusinessList = async () => {
    return API.get('business').then((res) => {
        return res.data.businesses;
      })
      .catch((error) => {
        throw error;
      });
}
export const addBusiness = async (name) => {
    return API.post('business', {name}).then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
}
export const updateBusiness = async (id,name) => {
    return API.put('business/' + id, {name}).then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
}
export const deleteBusiness = async (id) => {
    return API.delete('business/' + id).then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
}
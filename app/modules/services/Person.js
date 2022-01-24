import API from './api';

export const getPersonList = (businessId) => {
    return API.get('business/' + businessId + '/persons').then((res) => {
        return res.data.persons;
      })
      .catch((error) => {
        return error.response;
      });
}
export const addPerson = async (id, person) => {
    return API.post('business/' + id + '/persons', person).then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
}
export const updatePerson = async (id,personId, person) => {
    return API.put('business/' + id + '/persons/' + personId, person).then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
}
export const deletePerson = async (id, personId) => {
    return API.delete('business/' + id + '/persons/' + personId).then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
}
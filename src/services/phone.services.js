const URL = '/phone';

const getAllPhonesService = () => {
	return service.get(`${URL}/`);
};

const getPhoneDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

export { getAllPhonesService, getPhoneDetailsService };
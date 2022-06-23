export const getDataFromLS = () => {
	const localStorageData = JSON.parse(localStorage.getItem('calendar-data'));
    if(localStorageData){
        return localStorageData.map(i => {
			return {
				...i,
				datetime:new Date(i.datetime)
			}
		});
    }else{
        return [];
    }
}

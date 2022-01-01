import usersDataService from "./services/users.service";

export const retrieveUsers = ()=>async(dispatch) => {
    try {
      const res = await ContactDataService.getAll();
  
      dispatch({
        type: RETRIEVE_CONTACTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

import axios from "axios";
import authService from '../services/auth-service';
import axiosService from '../services/axios-service';

//Actions funstions

// PROJECTS ACTIONS ---------------------------

const axiosInstance = axiosService.getInstance();

export const fetchProjectsSuccess = (projects) => {
  return {
    type: "FETCH_PROJECTS_SUCCESS",
    payload: projects
  };
};

export const fetchProjects = () => {
  return dispatch =>  {
    axios.get('/api/v1/projects')
    .then(res => res.data)
    .then(projects => dispatch(fetchProjectsSuccess(projects)) 
    );
  }
}

export const fetchProjectByIdInit = () => {
  return{
    type:"FETCH_PROJECT_BY_ID_INIT"
  }
}


export const fetchProjectByIdSuccess = (project) => {
  return {
    type: "FETCH_PROJECT_BY_ID_SUCCESS",
    payload: project
  };
};

export const fetchProjectById = (projectId) => {
    return function(dispatch){
     dispatch(fetchProjectByIdInit());

    axios.get(`/api/v1/projects/${projectId}`)
    .then(res => res.data)
    .then(project => dispatch(fetchProjectByIdSuccess(project))
    );     
  };
};

// Add project to Current and get finished

export const addToCurrent = (project) => {
  return axiosInstance.patch('/user/add', project)
              .then(res => console.log("in add actions", res),
                    err => Promise.reject(err.response.data.errors)
                    )
}

//CURRENT PROJECTS 

const getCurrentSuccess = (current) => {
  return {
    type: "GET_CURRENT_SUCCESS",
    payload:current
  }
}

const getCurrentFailure = (errors) => {
  return {
    type: "GET_CURRENT_FAILURES",
    errors
  }
}

export const getCurrent = () => {
  return dispatch => {
    return axiosInstance.get("/user/current").then(
        res => dispatch(getCurrentSuccess(res.data)),
        err => Promise.reject(err.response)
      )
    .catch(
       dispatch(({response}) => {
             dispatch(getCurrentFailure(response));
       })
      )
  }
}
// AUTH ATIONS ---------------------------

const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS"
  }
}

const loginFailure = (errors) => {
  return {
    type: "LOGIN_FAILURE",
    errors
  }
}

export const register = (userData) => {
  return axios.post('/api/v1/user/register', {...userData}).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}

export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (userData) => {
  return dispatch => {
    return axios.post('/api/v1/user/auth', {...userData})
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }
}

export const logout = () => {
  authService.invalidateUser();

  return {
    type: "LOGOUT"
  }
}

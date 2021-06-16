import * as ActionType from '../../actionTypes';

const initialState={
    countryUser:"",
    IdUser:"",
    kindMaraton:"",
    deatailsUser:"",
    deatailsMaratonUser:"",
    deatailsRulls:"",
    runStep:null
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.COUNTRY_USER_SAVED:
            return{
                ...state,
                countryUser:action.payload
            }
        case ActionType.ID_USER_SAVED:
             return{
               ...state,
               IdUser:action.payload
            } 
         case ActionType.KIND_MARATON_SAVED:
             return{
              ...state,
              kindMaraton:action.payload
             } 
        case ActionType.DEATAILS_USER_SAVED:
            return{
                ...state,
                deatailsUser:action.payload

            }   
        case ActionType.DEATAILS_MARATON_USER_SAVED:
            return{
                 ...state,
                 deatailsMaratonUser:action.payload
    
            }   
        case ActionType.DEATAILS_RULLS_USER_SAVED:
            return{
                ...state,
                deatailsRulls:action.payload
            }   
         case ActionType.RUN_A_STEP:
           
            return{
               ...state,
               step:action.payload
            }    
      default:
          return state
        
         
    }
}


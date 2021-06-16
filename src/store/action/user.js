
import * as ActionType from '../../actionTypes';

export const countryUserSaved=(country)=>{
   return{
       type:ActionType.COUNTRY_USER_SAVED,
       payload:country
   }
}

export const idUserSaved=(id)=>{
    return{
        type:ActionType.ID_USER_SAVED,
        payload:id
    }
 }

 export const kinkMaratonSaved=(kind)=>{
    return{
        type:ActionType.KIND_MARATON_SAVED,
        payload:kind
    }
 }

 export const runAStep=(step)=>{
    return{
        type:ActionType.RUN_A_STEP,
        payload:step
    }
 }

 export const saveDeatailsUser=(deatailsUser)=>{
    return{
        type:ActionType.DEATAILS_USER_SAVED,
        payload:deatailsUser
    }
 }

 export const saveDeatailsMaratonUser=(deatailMaratonsUser)=>{
    return{
        type:ActionType.DEATAILS_MARATON_USER_SAVED,
        payload:deatailMaratonsUser
    }
 }

 export const saveDeatailsRullsUser=(deatailRulls)=>{
    return{
        type:ActionType.DEATAILS_RULLS_USER_SAVED,
        payload:deatailRulls
    }
 }
import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import produce from "immer";
import { pender } from "redux-pender";

//액션 타입 선언
const GET_WEATHER_API = 'GET_WEATHER_API';

//액션 함수 생성
export const getWeather = createAction(GET_WEATHER_API, () => api.getApi());

//초기값 선언
const initialState = {
    data: null
};

// 리듀서를 만들고 내보내준다.
export default handleActions(  
    {
      ...pender({
        type: GET_WEATHER_API,
        onSuccess: (state, { payload: response }) => {
          return produce(state, draft => {
            draft.data = { ...response };
          });
        }
      })
    },
    initialState
  );


import React,{ Component } from 'react';
import WeatherList from '../components/WeatherList';
import { connect } from "react-redux";
import * as weatherActions from "../store/modules/weather";
import { bindActionCreators } from "redux";

class WeatherContainer extends Component{
    state ={
        data : null
    };

    getWeather = async () => {
        const { WeatherActions } = this.props;
        console.log("시작")
        try {
           await weatherActions.getWeather();
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount(){
        this.getWeather();
    }

    render(){
        return(
            <div>
                나느 컨테이너
                <WeatherList />
            </div>
        )
    }

}

export default connect(
    // weather.js 리덕스에서 만든 state와 액션을 받아와서 현재 컴포넌트에서 사용할 수 있도록 props로 보내준다.
    state => ({
      data: state.weather.data
    }),
    dispatch => ({
      WeatherActions: bindActionCreators(weatherActions, dispatch)
    })
  )(WeatherContainer);
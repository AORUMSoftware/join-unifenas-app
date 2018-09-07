import { combineReducers } from 'redux'
import CalendarReducer from '../features/calendar/calendarreducer'
import AboutReducer from '../features/about/aboutreducer'
import ThemeReducer from '../features/theme/themereducer'
import SponsorsReducer from '../features/sponsors/sponsorsreducer'

const rootReducer = combineReducers({
    calendar: CalendarReducer,
    about: AboutReducer,
    theme: ThemeReducer,
    sponsors: SponsorsReducer,
})

export default rootReducer
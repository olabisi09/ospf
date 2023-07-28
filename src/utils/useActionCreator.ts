import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit'
import {increment, decrement} from '../store/stepSlice';

export const useActionCreator = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        increment,
        decrement
    }, dispatch)
}
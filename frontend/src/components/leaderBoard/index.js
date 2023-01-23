import React from 'react';
import { NavBarTeacher } from '../Teacher/NavBarTeacher';
import Board from './board';
import { Footer } from '../Footer';
import './styles.css';

const LeaderBoard = () => {
    return ( <div>
        <NavBarTeacher />
        <Board className="boardd" />
        <Footer />

    </div> );
}
 
export default LeaderBoard;
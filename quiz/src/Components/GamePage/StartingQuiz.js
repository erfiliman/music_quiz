import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import socket from "../../sockets";
import {checkAnswer} from "../../Redux/actions";
import Player from "./Player";
import RoundResults from "./RoundResults";

const StartingQuiz = () => {
	const question = useSelector(state => state.gamePageReducer.currentQuestion);
	const [audio, setAudio] = useState();
	const answers = useSelector(state => state.gamePageReducer.currentAnswers);
	const showResult = useSelector(state => state.gamePageReducer.showResult);
	const roomId = useSelector(state => state.gamePageReducer.roomId);
	const disableButtons = useSelector(state => state.gamePageReducer.answered);
	const time = useSelector(state => state.gamePageReducer.time);
	const dispatch = useDispatch();


	const onClickAnswerItem = (index) => {
		if (!disableButtons) {
			dispatch(checkAnswer({roomId: roomId, answer: answers[index].artists + "-" + answers[index].name}, time))
			answers[index].isActive = true;
		}

	}

	return (
			showResult? <RoundResults/>:
				<div className="quiz-container">
					<div className="timer-game">{time + 1}</div>
					<Player url={question}/>
					<div className="answers-game">
						{
							answers.map((item, index)=>{
								return (
									<div className={`answer-item-game ${disableButtons? `answer-item-game_disabled ${item.isActive!=undefined&&"answer-item-game_selected"}` :""}`} key={`answer-item-game-${index}`} onClick={()=>onClickAnswerItem(index)}>
										{`${item.artists} – ${item.name}`}
									</div>
								)
							})
						}
					</div>
				</div>
	);
};

export default StartingQuiz;

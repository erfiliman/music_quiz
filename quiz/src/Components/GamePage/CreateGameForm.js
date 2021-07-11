import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import NumberCounter from "../Forms/NumberCounter";
import ButtonChoose from "../Forms/ButtonChoose";
import {setStartGame, startGame} from "../../Redux/actions";

const CreateGameForm = () => {
	const isHost = useSelector((state)=> state.gamePageReducer.isHost);
	const roomId = useSelector((state)=> state.gamePageReducer.roomId);
	const dispatch = useDispatch();
	const [inputName, setInputName] = useState(useSelector((state => state.app.username)));
	const [gameMode, setGameMode] = useState(0);
	const [inputPlaylist, setInputPlaylist] = useState();
	const [inputCountMusic, setInputCountMusic] = useState(5);
	const [inputAnswerTime, setInputAnswerTime] = useState(15);
	const optionsSelect = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]
	const optionsGameMode = [
		{ description: "Classic Mode", img: require('./../../img/gears.png').default },
		{ description: "Classic Mode", img: require('./../../img/gears.png').default },
	]
	const handlerInputName = (e)=>{
		e.preventDefault();
		setInputName(e.target.value);
	}

	useEffect(()=>{
	},[])

	const handlerInputPlaylist = (e)=>{
		setInputPlaylist(e.value);
	}
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderRadius: "15px"
		}),
		menu: (provided, state) => ({
			...provided,
			borderRadius: "15px",
			overflow: "hidden"
		})
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(startGame({roomId: roomId, playlist: inputPlaylist, count: inputCountMusic, time: inputAnswerTime, mode: gameMode}))
	}
	return (
		<form className="form form-create-game" onSubmit={onSubmitHandler}>
			<div className="title-1">Create Game</div>
			<div className="form-row">
					<span className="form-label">
						Username:
					</span>
			</div>
			<div className="form-row">
				<input type="text" className="form-text" value={inputName} onChange={handlerInputName}/>
			</div>
			<div className="form-row">
					<span className="form-label">
						Playlist:
					</span>
			</div>
			<div className="form-row">
				<Select styles={customStyles} className="form-select" isDisabled={!isHost} options={optionsSelect} selectedValue={inputPlaylist} onChange={handlerInputPlaylist}/>
			</div>
			<div className="form-row">
				<span className="form-label">
					Count of Music:
				</span> 
			</div>
			<div className="form-row">
				<NumberCounter setValue={setInputCountMusic} value={inputCountMusic} min="5" max="20" disabled={!isHost}/>
			</div>
			<div className="form-row">
				<span className="form-label">
					Seconds to answer:
				</span>
			</div>
			<div className="form-row">
				<NumberCounter setValue={setInputAnswerTime} value={inputAnswerTime} min="5" max="30" disabled={!isHost}/>
			</div>
			<div className="form-row">
				<span className="form-label">
					Game mode:
				</span>
			</div>
			<div className="form-row form-row_group-btn">
				{
					optionsGameMode.map((item, index)=> <ButtonChoose key={index+"-buttonChoose"} index={index} handler={setGameMode} img={item.img} isActive={index==gameMode} description={item.description}/>)
				}
			</div>
			{
				isHost&&<div className="form-row">
					<input type="submit" value="Start" className="button button_blue form-create-game-btn"/>
				</div>
			}
		</form>
	);
};

export default CreateGameForm;

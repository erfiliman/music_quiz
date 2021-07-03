import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {useSelector} from "react-redux";
import NumberCounter from "../Forms/NumberCounter";
import ButtonChoose from "../Forms/ButtonChoose";

const CreateGameForm = () => {
	const isHost = useSelector((state)=> state.gamePageReducer.isHost);
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
		console.log(inputCountMusic)
	},[])

	const handlerInputPlaylist = (e)=>{
		setInputPlaylist(e.value);
	}
	return (
		<form className="form form-create-game">
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
				<Select className="form-select" isDisabled={!isHost} options={optionsSelect} selectedValue={inputPlaylist} onChange={handlerInputPlaylist}/>
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
					optionsGameMode.map((item, index)=> <ButtonChoose index={index} handler={setGameMode} img={item.img} isActive={index==gameMode} description={item.description}/>)
				}
			</div>
		</form>
	);
};

export default CreateGameForm;

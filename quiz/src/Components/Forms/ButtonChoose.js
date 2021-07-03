import React, {useState} from 'react';

const ButtonChoose = ({index, handler, img, isActive, description}) => {
	return (
		<button type="button" className={`button-choose-form ${isActive? "button-choose-form_active": ""}`} onClick={()=> handler(index)}>
			<div className="button-choose-form__img">
				<img src={img} alt="" className=""/>
			</div>
			<div className="button-choose-form__description">
				<span>{description}</span>
			</div>
		</button>
	);
};

export default ButtonChoose;

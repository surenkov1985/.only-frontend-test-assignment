import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
import { setChecked, setName } from "../../stores/actions"

import {Label, LabelText, InputError, InputEl, CheckLabel, CheckInput, Submit, FalseCheck, FalseCheckBack} from "../StyledComponents";
import FormError from "../FormError"

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 95px;
	width: 640px;
`;

export default function Auth({className}) {
	const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
		mode: "onBlur"
	});


	const [error, setError] = useState("");

	let auth =useSelector((state) => {

		const {checkReducer} = state;
		return checkReducer.checked
	});
	const dispatch = useDispatch();

	// Пользователя test.user@example.com не существует
	const loginInput = {
		text: "Логин",
		type: "text",
		name: "login",
		required: "Обязательное поле",
		message: "Логин должен быть в формате test@test.io",
		placeholder: "Введите логин",
		pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
	};

	const passwordInput = {
		text: "Пароль",
		type: "password",
		name: "password",
		required: "Обязательное поле",
		message: "Пароль дожен содержать минимум 5 символов",
		placeholder: "Введите пароль",
		pattern: /\w{5,}/
	};

	function onSubmit(data) {

		fetch("users.json")
			.then(res => res.json())
			.then(json => {
				console.log(json);
				const user = json.find(res => res.login === data.login);

				console.log(user)
				if (user.login === data.login && user.password === data.password ) {

					dispatch(setName(data.login));
					dispatch(setChecked(true));
					setError("")
				} else if (!user || user.password !== data.password){

					setError(`Неверный логин или пароль`)
				}else if (!user.login){

					setError(`Пользователя ${data.login} не существует`)
				}
			})
			.catch(err => console.log(err))
		reset()
	}

	return (
		<FormContainer className={className} onSubmit={handleSubmit(onSubmit)}>
			{error && <FormError error={error}/>}
			<Label>
				<LabelText>{loginInput.text}</LabelText>
				<InputEl
					type={loginInput.type}
					placeholder={loginInput.placeholder}
					{...register(loginInput.name, {required: loginInput.required, pattern: {value: loginInput.pattern, message: loginInput.message}})}
				/>
				<InputError>
					{errors?.login && <span>{errors?.login?.message || "Error!"}</span>}
				</InputError>
			</Label>
			<Label>
				<LabelText>{passwordInput.text}</LabelText>
				<InputEl type={passwordInput.type} placeholder={passwordInput.placeholder} {...register(passwordInput.name, {required: passwordInput.required, pattern: {value: passwordInput.pattern, message: passwordInput.message}})}/>
				<InputError>
					{errors?.password && <span>{errors?.password?.message || "Error!"}</span>}
				</InputError>
			</Label>
			<CheckLabel>
				<CheckInput type="checkbox"/>
				<FalseCheck className="form__false-check" >
					<FalseCheckBack className="form__false-bg"/>
				</FalseCheck>
				<span>Запомнить пароль</span>
			</CheckLabel>
			<Submit type="submit" disabled={!isValid} value="Войти"/>
		</FormContainer>
	)
}
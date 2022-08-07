import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import {Label, LabelText, InputError, InputEl} from "./StyledComponents";
import FormError from "./FormError"

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 95px;
	width: 640px;
`;

export default function Form({className}) {

	const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
		mode: "onBlur"
	});

	const [formData, setFormData] = useState({});
	const [status, setStatus] = useState(null);

	useEffect(() => {
		console.log(formData)

		fetch("users.json")
			.then(res => res.json())
			.then(json => {
				console.log(json);
				const user = json.find(res => res.login === formData.login);

				console.log(user)
				if (user.login === formData.login) {
					setStatus(true)
				} else {
					setStatus(false)
				}

				console.log(status)
			})

			// .catch(err => console.log(err))
	}, [formData]);

	// Пользователя test.user@example.com не существует
	const [error, setError] = useState("");

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
		message: "Пароль дожен содержать минимум 1 символ, 1 число, 1 строчню букву, 1 прописную букву",
		placeholder: "Введите пароль",
		pattern: /(?=^.{5,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
	};

	function onSubmit(data) {

		setFormData({...data});
		reset()
	}

	return (
		<FormContainer className={className} onSubmit={handleSubmit(onSubmit)}>
			{error && <FormError error={error}/>}
			<Label>
				<LabelText>{loginInput.text}</LabelText>
				<InputEl type={loginInput.type} placeholder={loginInput.placeholder} {...register(loginInput.name, {required: loginInput.required, pattern: {value: loginInput.pattern, message: loginInput.message}})}/>
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

			<label className="form__check-label">
				<input type="checkbox" id="checkbox" className="form__checkbox"/>
				<span className="form__false-check">
						<span className="form__false-bg"/>
					</span>
				<span>Запомнить пароль</span>
			</label>
			<input type="submit" className="form__submit" disabled={!isValid} value="Войти"/>
		</FormContainer>
	)
}
import { validateForms } from '../functions/validate-forms'

const rules = [
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя!'
			}
		]
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		telError: 'Введите корректный телефон',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!'
			}
		]
	},
	{
		ruleSelector: '.input-email',
		tel: true,
		telError: 'Введите корректный email',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email!'
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Введите корректный email!'
			}

		]
	}
];

const afterForm = () => {
	alert('Заявка отправленна, мы свяжемся с вами в ближайшее время.');
};

validateForms('.form-body', rules, afterForm);
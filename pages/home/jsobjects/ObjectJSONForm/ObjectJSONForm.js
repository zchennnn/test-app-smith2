export default {
	index: 1,
	setDefaultFields: () => {
		storeValue('formFieldsIndex', 1)
		storeValue('formFields', {
			"name": "John",
		});
	},
	setFields: () => {
		storeValue('formFields', {
			...appsmith.store.formFields,
			['field_' + appsmith.store.formFieldsIndex ]: "20/02/1990",
		})
		storeValue('formFieldsIndex', appsmith.store.formFieldsIndex + 1);
	},
}
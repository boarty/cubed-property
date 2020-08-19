// Following four functions show and hide the employment sections in section 3.

function showEmployedSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'block'
	const employedClass = document.getElementById('yes-employed-button')
	employedClass.className = "option-buttons-selected"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const selfEmployedClass = document.getElementById('self-employed-button')
	selfEmployedClass.className = "option-buttons"
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const studentClass = document.getElementById('student-button')
	studentClass.className = "option-buttons"
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const benefitClass = document.getElementById('benefits-button')
	benefitClass.className = "option-buttons"
	const noEmployed = document.getElementById('no-employement-details-form')
	noEmployed.style.display = 'none'
	const noEmployedClass = document.getElementById('no-employed-button')
	noEmployedClass.className = "option-buttons"
	document.getElementById('dummy-employed').value = "Yes"
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
}

document.getElementById('yes-employed-button').onclick = showEmployedSection

function showSelfEmployedSection() {
	document.getElementById('employment-details-form').style.display = 'none'
	document.getElementById('yes-employed-button').className = "option-buttons"
	document.getElementById('self-employment-details-form').style.display = 'block'
	document.getElementById('self-employed-button').className = "option-buttons-selected"
	document.getElementById('student-details-form').style.display = 'none'
	document.getElementById('student-button').className = "option-buttons"
	document.getElementById('benefits-details-form').style.display = 'none'
	document.getElementById('benefits-button').className = "option-buttons"
	document.getElementById('no-employement-details-form').style.display = 'none'
	document.getElementById('no-employed-button').className = "option-buttons"

	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = "Self-employed"
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
}

document.getElementById('self-employed-button').onclick = showSelfEmployedSection

function showStudentSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const employedClass = document.getElementById('yes-employed-button')
	employedClass.className = "option-buttons"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const selfEmployedClass = document.getElementById('self-employed-button')
	selfEmployedClass.className = "option-buttons"
	const student = document.getElementById('student-details-form')
	student.style.display = 'block'
	const studentClass = document.getElementById('student-button')
	studentClass.className = "option-buttons-selected"
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const benefitClass = document.getElementById('benefits-button')
	benefitClass.className = "option-buttons"
	const noEmployed = document.getElementById('no-employement-details-form')
	noEmployed.style.display = 'none'
	const noEmployedClass = document.getElementById('no-employed-button')
	noEmployedClass.className = "option-buttons"

	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = "Student"
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
}

document.getElementById('student-button').onclick = showStudentSection

function showBenefitsSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const employedClass = document.getElementById('yes-employed-button')
	employedClass.className = "option-buttons"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const selfEmployedClass = document.getElementById('self-employed-button')
	selfEmployedClass.className = "option-buttons"
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const studentClass = document.getElementById('student-button')
	studentClass.className = "option-buttons"
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'block'
	const benefitClass = document.getElementById('benefits-button')
	benefitClass.className = "option-buttons-selected"
	const noEmployed = document.getElementById('no-employement-details-form')
	noEmployed.style.display = 'none'
	const noEmployedClass = document.getElementById('no-employed-button')
	noEmployedClass.className = "option-buttons"

	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = "Housing Benefits"
	document.getElementById('dummy-no-employed').value = ""
}

document.getElementById('benefits-button').onclick = showBenefitsSection

function noEmploymentSections() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const employedClass = document.getElementById('yes-employed-button')
	employedClass.className = "option-buttons"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const selfEmployedClass = document.getElementById('self-employed-button')
	selfEmployedClass.className = "option-buttons"
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const studentClass = document.getElementById('student-button')
	studentClass.className = "option-buttons"
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const benefitClass = document.getElementById('benefits-button')
	benefitClass.className = "option-buttons"
	const noEmployed = document.getElementById('no-employement-details-form')
	noEmployed.style.display = 'block'
	const noEmployedClass = document.getElementById('no-employed-button')
	noEmployedClass.className = "option-buttons-selected"

	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = "No"
}

document.getElementById('no-employed-button').onclick = noEmploymentSections

// function showEmployedSection() {
// 	const employed = document.getElementById('employment-details-form')
// 	employed.style.display = 'block'
// 	// document.getElementById("employed-select").selectedIndex = "3"
// }

// Following functions show / hide guarantor's employment sections.

function gtEmploymentSection() {
	document.getElementById('gt-employment-details-form').style.display = 'block'
	document.getElementById('gt-self-employment-details-form').style.display = 'none'
	document.getElementById('gt-no-employement-details-form').style.display = 'none'
	document.getElementById('gt-yes-employed-button').className = 'option-buttons-selected'
	document.getElementById('gt-self-employed-button').className = 'option-buttons'
	document.getElementById('gt-no-employed-button').className = 'option-buttons'
	document.getElementById('dummy-gt-yes-employed').value = "Yes"
	document.getElementById('dummy-gt-self-employed').value = ""
	document.getElementById('dummy-yes-employed').value = ""
}

document.getElementById('gt-yes-employed-button').onclick = gtEmploymentSection

function gtSelfEmploymentSection() {
	document.getElementById('gt-employment-details-form').style.display = 'none'
	document.getElementById('gt-self-employment-details-form').style.display = 'block'
	document.getElementById('gt-no-employement-details-form').style.display = 'none'
	document.getElementById('gt-yes-employed-button').className = 'option-buttons'
	document.getElementById('gt-self-employed-button').className = 'option-buttons-selected'
	document.getElementById('gt-no-employed-button').className = 'option-buttons'
	document.getElementById('dummy-gt-yes-employed').value = ""
	document.getElementById('dummy-gt-self-employed').value = "Self-employed"
	document.getElementById('dummy-yes-employed').value = ""
}

document.getElementById('gt-self-employed-button').onclick = gtSelfEmploymentSection

function gtNoEmploymentSection() {
	document.getElementById('gt-employment-details-form').style.display = 'none'
	document.getElementById('gt-self-employment-details-form').style.display = 'none'
	document.getElementById('gt-no-employement-details-form').style.display = 'block'
	document.getElementById('gt-yes-employed-button').className = 'option-buttons'
	document.getElementById('gt-self-employed-button').className = 'option-buttons'
	document.getElementById('gt-no-employed-button').className = 'option-buttons-selected'
	document.getElementById('dummy-gt-yes-employed').value = ""
	document.getElementById('dummy-gt-self-employed').value = ""
	document.getElementById('dummy-yes-employed').value = "No"
}

document.getElementById('gt-no-employed-button').onclick = gtNoEmploymentSection

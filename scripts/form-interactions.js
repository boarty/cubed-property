// Following four functions show and hide the employment sections in section 3.

function showEmployedSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'block'
	const employedValue = document.getElementById('yes-employed-button')
	employedValue.className = "option-buttons-selected"
	employedValue.value = "Employed"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'

	const selfEmployedValue = document.getElementById('self-employed-button')
	selfEmployedValue.value = ""
	const studentValue = document.getElementById('student-button')
	studentValue.value = ""
	const benefitValue = document.getElementById('benefits-button')
	benefitValue.value = ""
	const noEmployedValue = document.getElementById('no-employed-button')
	noEmployedValue.value = ""
}

document.getElementById('yes-employed-button').onclick = showEmployedSection

function showSelfEmployedSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'block'
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const employedValue = document.getElementById('yes-employed-button')
	employedValue.value = ""
	const selfEmployedValue = document.getElementById('self-employed-button')
	selfEmployedValue.value = "Self-employed"
	const studentValue = document.getElementById('student-button')
	studentValue.value = ""
	const benefitValue = document.getElementById('benefits-button')
	benefitValue.value = ""
	const noEmployedValue = document.getElementById('no-employed-button')
	noEmployedValue.value = ""
}

document.getElementById('self-employed-button').onclick = showSelfEmployedSection

function showStudentSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const student = document.getElementById('student-details-form')
	student.style.display = 'block'
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const employedValue = document.getElementById('yes-employed-button')
	employedValue.value = ""
	const selfEmployedValue = document.getElementById('self-employed-button')
	selfEmployedValue.value = ""
	const studentValue = document.getElementById('student-button')
	studentValue.value = "Student"
	const benefitValue = document.getElementById('benefits-button')
	benefitValue.value = ""
	const noEmployedValue = document.getElementById('no-employed-button')
	noEmployedValue.value = ""
}

document.getElementById('student-button').onclick = showStudentSection

function showBenefitsSection() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'block'
	const employedValue = document.getElementById('yes-employed-button')
	employedValue.value = ""
	const selfEmployedValue = document.getElementById('self-employed-button')
	selfEmployedValue.value = ""
	const studentValue = document.getElementById('student-button')
	studentValue.value = ""
	const benefitValue = document.getElementById('benefits-button')
	benefitValue.value = "Housing Benefits"
	const noEmployedValue = document.getElementById('no-employed-button')
	noEmployedValue.value = ""
}

document.getElementById('benefits-button').onclick = showBenefitsSection

function hideEmploymentSections() {
	const employed = document.getElementById('employment-details-form')
	employed.style.display = 'none'
	employed.value = "employed"
	const selfEmployed = document.getElementById('self-employment-details-form')
	selfEmployed.style.display = 'none'
	const student = document.getElementById('student-details-form')
	student.style.display = 'none'
	const benefit = document.getElementById('benefits-details-form')
	benefit.style.display = 'none'
	const employedValue = document.getElementById('yes-employed-button')
	employedValue.value = ""
	const selfEmployedValue = document.getElementById('self-employed-button')
	selfEmployedValue.value = ""
	const studentValue = document.getElementById('student-button')
	studentValue.value = ""
	const benefitValue = document.getElementById('benefits-button')
	benefitValue.value = ""
	const noEmployedValue = document.getElementById('no-employed-button')
	noEmployedValue.value = "Not employed"
}

document.getElementById('no-employed-button').onclick = hideEmploymentSections

// function showEmployedSection() {
// 	const employed = document.getElementById('employment-details-form')
// 	employed.style.display = 'block'
// 	// document.getElementById("employed-select").selectedIndex = "3"
// }

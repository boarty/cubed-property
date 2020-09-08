// Following four functions show and hide the employment sections in section 3.

const employed = document.getElementById('employment-details-form')
const selfEmployed = document.getElementById('self-employment-details-form')
const student = document.getElementById('student-details-form')
const benefit = document.getElementById('benefits-details-form')
const noEmployed = document.getElementById('no-employement-details-form')

const employedClass = document.getElementById('yes-employed-button')
const selfEmployedClass = document.getElementById('self-employed-button')
const studentClass = document.getElementById('student-button')
const benefitClass = document.getElementById('benefits-button')
const noEmployedClass = document.getElementById('no-employed-button')

// EMPLOYED REQUIRED VARIABLES //
const employedJobTitle = document.getElementById('employed-job-title')
const employedCompanyName = document.getElementById('employed-company-name')
const employedEmployerAdd = document.getElementById('employed-employer-address')
const employedEmployerTown = document.getElementById('employed-employer-town')
const employedEmployerPostcode = document.getElementById('employed-employer-postcode')
const employedEmploymentType = document.getElementById('employment-type-dropdown')
const employedEmploymentLength = document.getElementById('employed-employment-length')
const employedSalary = document.getElementById('employed-salary')

//TOGGLE EMPLOYED FIELDS ON AND OFF//
function employedRequiredOn() {
	employedJobTitle.required = true
	employedCompanyName.required = true
	employedEmployerAdd.required = true
	employedEmployerTown.required = true
	employedEmployerPostcode.required = true
	employedEmploymentType.required = true
	employedEmploymentLength.required = true
	employedSalary.required = true
}

function employedRequiredOff() {
	employedJobTitle.removeAttribute("required")
	employedCompanyName.removeAttribute("required")
	employedEmployerAdd.removeAttribute("required")
	employedEmployerTown.removeAttribute("required")
	employedEmployerPostcode.removeAttribute("required")
	employedEmploymentType.removeAttribute("required")
	employedEmploymentLength.removeAttribute("required")
	employedSalary.removeAttribute("required")
}

//SELF-EMPLOYED REQUIRED VARIABLES//
const selfEmployedLength = document.getElementById('self-employed-length')
const selfEmployedProfession = document.getElementById('self-employed-profession')
const selfEmployedSalary = document.getElementById('self-employed-salary')
const selfEmployedRefName = document.getElementById('self-employed-ref-name')
const selfEmployedRefNumber = document.getElementById('self-employed-ref-number')
const selfEmployedRefEmail = document.getElementById('self-employed-ref-email')
const selfEmployedRefRelationship = document.getElementById('self-employed-ref-relationship')

//TOGGLE SELF-EMPLOYED FIELDS ON AND OFF//
function selfEmployedRequiredOn() {
	selfEmployedLength.required = true
	selfEmployedProfession.required = true
	selfEmployedSalary.required = true
	selfEmployedRefName.required = true
	selfEmployedRefNumber.required = true
	selfEmployedRefEmail.required = true
	selfEmployedRefRelationship.required = true
}

function selfEmployedRequiredOff() {
	selfEmployedLength.removeAttribute("required")
	selfEmployedProfession.removeAttribute("required")
	selfEmployedSalary.removeAttribute("required")
	selfEmployedRefName.removeAttribute("required")
	selfEmployedRefNumber.removeAttribute("required")
	selfEmployedRefEmail.removeAttribute("required")
	selfEmployedRefRelationship.removeAttribute("required")
}

//STUDENT REQUIRED VARIABLES//
const studentUnivName = document.getElementById('student-univ-name')
const studentCourseName = document.getElementById('student-course-name')

//TOGGLE STUDENT FIELDS ON AND OFF//
function studentRequiredOn() {
	studentUnivName.required = true
	studentCourseName.required = true
}

function studentRequiredOff() {
	studentUnivName.removeAttribute("required")
	studentCourseName.removeAttribute("required")
}

//UNEMPLOYMENT DETAILS VARIABLE//
const noEmploymentDetails = document.getElementById('no-employed-details')

//TOGGLE DETAILS ON AND OFF//
function noEmployedDetailsOn() {
	noEmploymentDetails.required = true
}

function noEmployedDetailsOff() {
	noEmploymentDetails.removeAttribute("required")
}

function showEmployedSection() {
	employed.style.display = 'block'
	employedClass.className = "option-buttons-selected"
	selfEmployed.style.display = 'none'
	selfEmployedClass.className = "option-buttons"
	student.style.display = 'none'
	studentClass.className = "option-buttons"
	benefit.style.display = 'none'
	benefitClass.className = "option-buttons"
	noEmployed.style.display = 'none'
	noEmployedClass.className = "option-buttons"
	document.getElementById('dummy-employed').value = "Employed"
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
	employedRequiredOn()
	selfEmployedRequiredOff()
	studentRequiredOff()
	noEmployedDetailsOff()
}

document.getElementById('yes-employed-button').onclick = showEmployedSection

function showSelfEmployedSection() {
	employed.style.display = 'none'
	employedClass.className = "option-buttons"
	selfEmployed.style.display = 'block'
	selfEmployedClass.className = "option-buttons-selected"
	student.style.display = 'none'
	studentClass.className = "option-buttons"
	benefit.style.display = 'none'
	benefitClass.className = "option-buttons"
	noEmployed.style.display = 'none'
	noEmployedClass.className = "option-buttons"
	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = "Self-employed"
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
	employedRequiredOff()
	selfEmployedRequiredOn()
	studentRequiredOff()
	noEmployedDetailsOff()
}

document.getElementById('self-employed-button').onclick = showSelfEmployedSection

function showStudentSection() {
	employed.style.display = 'none'
	employedClass.className = "option-buttons"
	selfEmployed.style.display = 'none'
	selfEmployedClass.className = "option-buttons"
	student.style.display = 'block'
	studentClass.className = "option-buttons-selected"
	benefit.style.display = 'none'
	benefitClass.className = "option-buttons"
	noEmployed.style.display = 'none'
	noEmployedClass.className = "option-buttons"
	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = "Student"
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = ""
	employedRequiredOff()
	selfEmployedRequiredOff()
	studentRequiredOn()
	noEmployedDetailsOff()
}

document.getElementById('student-button').onclick = showStudentSection

function showBenefitsSection() {
	employed.style.display = 'none'
	employedClass.className = "option-buttons"
	selfEmployed.style.display = 'none'
	selfEmployedClass.className = "option-buttons"
	student.style.display = 'none'
	studentClass.className = "option-buttons"
	benefit.style.display = 'block'
	benefitClass.className = "option-buttons-selected"
	noEmployed.style.display = 'none'
	noEmployedClass.className = "option-buttons"
	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = "Housing Benefits"
	document.getElementById('dummy-no-employed').value = ""
	employedRequiredOff()
	selfEmployedRequiredOff()
	studentRequiredOff()
	noEmployedDetailsOff()
}

document.getElementById('benefits-button').onclick = showBenefitsSection

function noEmploymentSections() {
	employed.style.display = 'none'
	employedClass.className = "option-buttons"
	selfEmployed.style.display = 'none'
	selfEmployedClass.className = "option-buttons"
	student.style.display = 'none'
	studentClass.className = "option-buttons"
	benefit.style.display = 'none'
	benefitClass.className = "option-buttons"
	noEmployed.style.display = 'block'
	noEmployedClass.className = "option-buttons-selected"
	document.getElementById('dummy-employed').value = ""
	document.getElementById('dummy-self-employed').value = ""
	document.getElementById('dummy-student').value = ""
	document.getElementById('dummy-benefits').value = ""
	document.getElementById('dummy-no-employed').value = "Other"
	employedRequiredOff()
	selfEmployedRequiredOff()
	studentRequiredOff()
	noEmployedDetailsOn()
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
	document.getElementById('dummy-gt-yes-employed').value = "Employed"
	document.getElementById('dummy-gt-self-employed').value = ""
	document.getElementById('dummy-gt-no-employed').value = ""
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
	document.getElementById('dummy-gt-no-employed').value = ""
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
	document.getElementById('dummy-gt-no-employed').value = "Other"
}

document.getElementById('gt-no-employed-button').onclick = gtNoEmploymentSection

function addProperty2() {
	document.getElementById('address-hist-p2').style.display = 'block'
	document.getElementById('add-address2').style.display = 'none'
	document.getElementById('remove-address2').style.display = 'block'
}

document.getElementById('add-address2').onclick = addProperty2

function removeProperty2() {
	document.getElementById('address-hist-p2').style.display = 'none'
	document.getElementById('remove-address2').style.display = 'none'
	document.getElementById('add-address2').style.display = 'block'
}

document.getElementById('remove-address2').onclick = removeProperty2

function addProperty3() {
	document.getElementById('address-hist-p3').style.display = 'block'
	document.getElementById('add-address3').style.display = 'none'
	document.getElementById('remove-address3').style.display = 'block'
}

document.getElementById('add-address3').onclick = addProperty3

function removeProperty3() {
	document.getElementById('address-hist-p3').style.display = 'none'
	document.getElementById('remove-address3').style.display = 'none'
	document.getElementById('add-address3').style.display = 'block'
}

document.getElementById('remove-address3').onclick = removeProperty3


// SHOW / HIDE PREVIOUS HOUSEMATE DIV

function showPrevHousemate() {
	document.getElementById('prev-housmemate-details').style.display = 'block'
}

document.getElementById('shared-house-yes').onclick = showPrevHousemate

function hidePrevHousemate() {
	document.getElementById('prev-housmemate-details').style.display = 'none'
}

document.getElementById('shared-house-no').onclick = hidePrevHousemate


// SHOW / HIDE RESIDENTIAL STATUS DIV

function showResidential() {
	document.getElementById('resident-details').style.display = 'block'
	document.getElementById('resident-passport-upload').style.display = 'none'
}

document.getElementById('british-no').onclick = showResidential

function hideResidential() {
	document.getElementById('resident-details').style.display = 'none'
	document.getElementById('resident-passport-upload').style.display = 'block'
}

document.getElementById('british-yes').onclick = hideResidential


// SHOW OR HIDE GUARANTOR'S HOMEOWNER DETAILS

function gtHomeownerOther() {
	var homeowner = document.getElementById('gt-homeowner-dropdown')
	if (homeowner.value === "Other") {
		document.getElementById('gt-homeowner-other').style.display = 'block'
	} else {
		document.getElementById('gt-homeowner-other').style.display = 'none'
	}
}


// SHOW OR HIDE APPLICANT'S EMPLOYMENT DETAILS

function employmentTypeDetails() {
	var employmentType = document.getElementById('employment-type-dropdown')
	if (employmentType.value === "Other") {
		document.getElementById('employment-type-other').style.display = 'block'
	} else {
		document.getElementById('employment-type-other').style.display = 'none'
	}
}

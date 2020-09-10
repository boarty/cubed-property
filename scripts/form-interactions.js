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

//GUARANTOR EMPLOYED VARIABLES//
const guarEmpJobTitle = document.getElementById('gt-employed-job-title')
const guarEmpCompanyName = document.getElementById('gt-employed-company-name')
const guarEmpLandlineNumber = document.getElementById('gt-employed-landline-number')
const guarEmpRefFName = document.getElementById('gt-employed-ref-fname')
const guarEmpRefLName = document.getElementById('gt-employed-ref-lname')
const guarEmpRefMob = document.getElementById('gt-employed-ref-mob-num')
const guarEmpRefLandline = document.getElementById('gt-employed-ref-landline-num')
const guarEmpRefEmail = document.getElementById('gt-employed-ref-email')

//TOGGLE GUARANTOR EMPLOYED REQUIRED ON AND OFF//
function guarEmpRequiredOn() {
	guarEmpJobTitle.required = true
	guarEmpCompanyName.required = true
	guarEmpLandlineNumber.required = true
	guarEmpRefFName.required = true
	guarEmpRefLName.required = true
	guarEmpRefMob.required = true
	guarEmpRefLandline.required = true
	guarEmpRefEmail.required = true
}

function guarEmpRequiredOff() {
	guarEmpJobTitle.removeAttribute("required")
	guarEmpCompanyName.removeAttribute("required")
	guarEmpLandlineNumber.removeAttribute("required")
	guarEmpRefFName.removeAttribute("required")
	guarEmpRefLName.removeAttribute("required")
	guarEmpRefMob.removeAttribute("required")
	guarEmpRefLandline.removeAttribute("required")
	guarEmpRefEmail.removeAttribute("required")
}

//GUARANTOR SELF-EMPLOYED VARIABLES//
const guarSelfEmpLength = document.getElementById('gt-self-employed-length')
const guarSelfEmpProfession = document.getElementById('gt-self-employed-profession')
const guarSelfEmpSalary = document.getElementById('gt-self-employed-salary')
const guarSelfEmpRefFullName = document.getElementById('gt-self-employed-ref-fname')
const guarSelfEmpRefMobNum = document.getElementById('gt-self-employed-ref-mob-num')
const guarSelfEmpRefLandlineNum = document.getElementById('gt-self-employed-ref-landline-num')
const guarSelfEmpRefEmail = document.getElementById('gt-self-employed-ref-email')

//TOGGLE GUARANTOR SELF-EMPLOYED REQUIRED ON AND OFF//
function guarSelfEmpRequiredOn() {
	guarSelfEmpLength.required = true
	guarSelfEmpProfession.required = true
	guarSelfEmpSalary.required = true
	guarSelfEmpRefFullName.required = true
	guarSelfEmpRefMobNum.required = true
	guarSelfEmpRefLandlineNum.required = true
	guarSelfEmpRefEmail.required = true
}

function guarSelfEmpRequiredOff() {
	guarSelfEmpLength.removeAttribute("required")
	guarSelfEmpProfession.removeAttribute("required")
	guarSelfEmpSalary.removeAttribute("required")
	guarSelfEmpRefFullName.removeAttribute("required")
	guarSelfEmpRefMobNum.removeAttribute("required")
	guarSelfEmpRefLandlineNum.removeAttribute("required")
	guarSelfEmpRefEmail.removeAttribute("required")
}

//GUARANTOR UNEMPLOYMENT DETAILS VARIABLE//
const guarNoEmploymentDetails = document.getElementById('guar-no-employed-details')

//TOGGLE DETAILS ON AND OFF//
function guarNoEmployedDetailsOn() {
	guarNoEmploymentDetails.required = true
}

function guarNoEmployedDetailsOff() {
	guarNoEmploymentDetails.removeAttribute("required")
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

//SHOW AND HIDE QUESTIONS RELATED TO GUARANTOR EMPLOYMENT//
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
	guarEmpRequiredOn()
	guarSelfEmpRequiredOff()
	guarNoEmployedDetailsOff()
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
	guarEmpRequiredOff()
	guarSelfEmpRequiredOn()
	guarNoEmployedDetailsOff()
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
	guarEmpRequiredOff()
	guarSelfEmpRequiredOff()
	guarNoEmployedDetailsOn()
}

document.getElementById('gt-no-employed-button').onclick = gtNoEmploymentSection

//ADD AND REMOVE PROPERTY HISTORY//
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

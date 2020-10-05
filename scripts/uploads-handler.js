let uploadedFiles = [];
const defaultDropzoneOptions = {
    url: 'https://europe-west2-cubed-1600512143678.cloudfunctions.net/uploadFile',
    //url: 'http://localhost:5001/cubed-1600512143678/europe-west2/uploadFile',
    maxFilesize: null,
	createImageThumbnails: false,
	autoDiscover: false,
	acceptedFiles: 'image/*,application/pdf',
	timeout: 180*1000,
	processing: function(file) {
		// When a file upload starts, disable the upload file button.
		document.querySelector('button.upload-button').setAttribute('disabled', '');
		document.querySelector('button[type="submit"]').setAttribute('disabled', '');
	},
	success: function(file, response) {
		if (response.name) {
			file.previewElement.querySelector('span[data-dz-name]').innerText = response.name;
			uploadedFiles.push(response);
		}

		file.previewElement.querySelector('.dz-progress').remove(); // Remove Progressbar
		file.previewElement.querySelector('.far').classList.add(getIconFromImageType(file.type));
		file.previewElement.querySelector('.dz-details').style.removeProperty('display');
	},
	complete: function(file) {
		// When a file upload finishes, enable the upload file button.
		document.querySelector('button.upload-button').removeAttribute('disabled');
		document.querySelector('button[type="submit"]').removeAttribute('disabled');
	},
    previewTemplate: `
		<div class="dz-preview dz-file-preview">
			<div class="dz-details" style="display: none">
				<span class="dz-filename"><i class="upload-icon far"></i><span data-dz-name></span></span>
				<i class="upload-remove far fa-trash-alt" data-dz-remove></i>
			</div>
			<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
			<div class="dz-error-message additional-info additional-error"><span data-dz-errormessage></span></div>
        </div>
    `
};


// Wait until the page has finished loading and then initialize Dropzone
window.addEventListener('load', function() {
	const defaultClickableElement = 'button.upload-button';

    const bankStatementUpload = new Dropzone("div#bank-statement-upload", {
		...defaultDropzoneOptions,
		params: {
			document: 'bank-statement',
			element: 'bank-statement-upload'
		},
		clickable: 'div#bank-statement-upload > ' + defaultClickableElement,
		init: () => dropzoneInit('bank-statement-upload')
	});

    const applicantPhotoUpload = new Dropzone("div#applicant-photo-upload", {
    ...defaultDropzoneOptions,
    params: {
      document: 'applicant-photo',
      element: 'applicant-photo-upload'
    },
    clickable: 'div#applicant-photo-upload > ' + defaultClickableElement,
    init: () => dropzoneInit('applicant-photo-upload')
  });

    const visaDocumentUpload = new Dropzone("div#visa-document-upload", {
    ...defaultDropzoneOptions,
    params: {
      document: 'visa-document',
      element: 'visa-document-upload'
    },
    clickable: 'div#visa-document-upload > ' + defaultClickableElement,
    init: () => dropzoneInit('visa-document-upload')
  });

    const utilityDocumentUpload = new Dropzone("div#utility-document-upload", {
    ...defaultDropzoneOptions,
    params: {
      document: 'utility-document',
      element: 'utility-document-upload'
    },
    clickable: 'div#utility-document-upload > ' + defaultClickableElement,
    init: () => dropzoneInit('utility-document-upload')
  });

    const payslipDocumentUpload = new Dropzone("div#payslip-document-upload", {
    ...defaultDropzoneOptions,
    params: {
      document: 'employment-document',
      element: 'payslip-document-upload'
    },
    clickable: 'div#payslip-document-upload > ' + defaultClickableElement,
    init: () => dropzoneInit('payslip-document-upload')
  });

    const residentPassportUpload = new Dropzone("div#resident-passport-document-upload", {
		...defaultDropzoneOptions,
		params: {
			document: 'resident-passport',
			element: 'resident-passport-document-upload'
		},
		clickable: 'div#resident-passport-document-upload > ' + defaultClickableElement,
		init: () => dropzoneInit('resident-passport-document-upload')
	});

    const passportUpload = new Dropzone("div#passport-document-upload", {
		...defaultDropzoneOptions,
		params: {
			document: 'passport',
			element: 'passport-document-upload'
		},
		clickable: 'div#passport-document-upload > ' + defaultClickableElement,
		init: () => dropzoneInit('passport-document-upload')
	});
});

function dropzoneInit(elementId) {
	document.getElementById(elementId).classList.add('dropzone');
}

function getIconFromImageType(mime) {
	const imageType = mime.split('/')[1];
	return imageType === 'pdf' ? 'fa-file-pdf' : 'fa-file-image';
}

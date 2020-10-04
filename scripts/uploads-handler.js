const defaultDropzoneOptions = {
    url: 'https://europe-west2-cubed-1600512143678.cloudfunctions.net/uploadFile',
    maxFilesize: null,
	createImageThumbnails: false,
	autoDiscover: false,
	acceptedFiles: 'image/*,application/pdf',
	timeout: 60*1000,
	processing: function(file) {
		// When a file upload starts, disable the upload file button.
		document.querySelector('button.upload-button').setAttribute('disabled', '');
	},
	success: function(file, response) {
		if (response.name) {
			file.previewElement.querySelector('span[data-dz-name]').innerText = response.name;
		}

		file.previewElement.querySelector('.dz-progress').remove(); // Remove Progressbar
		file.previewElement.querySelector('.far').classList.add(getIconFromImageType(file.type));
		file.previewElement.querySelector('.dz-details').style.removeProperty('display');
	},
	complete: function(file) {
		// When a file upload finishes, enable the upload file button.
		document.querySelector('button.upload-button').removeAttribute('disabled');
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

function _(id) {return document.getElementById(id); }
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'INNOCENT LAW RWANDA';
	document.querySelector('#company-desc').innerHTML = `
	We are a full service  commercial& corporate  law firm established in 2018. 
	We are one of the fast growing law firms in Rwanda  dealing with different aspects of law practice.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We are a full service  commercial& corporate  law firm established in 2018. 
	We are one of the fast growing law firms in Rwanda  dealing with different aspects of law practice.
	
	Innocent Law Rwanda  is probably one of the most 
	sought after and fastest growing in the last four (4) years. 
	It has grown to have a reputation of successfully handling very complex and landmark cases  
	that have enriched the jurisprudence and practice of law in Rwanda.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `To be Rwanda's best law firm that will promote and fight 
	for equal justice of the infringed to get justice.`;

	// middle section in about us
	document.aboutimg.src = './images/Image from iOS (7).jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Innocent Law  offers a wide range  of services and resources that you would expect from a law firm of our prestige and caliber, 
	combining extensive experience & knowledge of the business transactions. `;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To be Rwanda's Best Commercial & 
	Corporate  Law Firm, offering commercially& Corporate 
	 legal solutions and consistent in meeting our clients' 
	satisfaction both domestic level and international level.`;


	// In contact us section
	document.querySelector('#address').innerHTML = 'GIKONDO KIGALI RWANDA';
	document.querySelector('#street').innerHTML = 'KK 31 AV ';
	document.querySelector('#email').innerHTML = 'muramira3@gmail.com';
	document.querySelector('#phone').innerHTML = '+250787314139';

	// Link to social media
	document.querySelector('#facebook').href = 'https://www.facebook.com/innocentmuramira';
	document.querySelector('#twitter').href = 'https://twitter.com/innocentlaw_?s=08';
	document.querySelector('#instagram').href = 'https://www.instagram.com/lawyerinnocent/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250787314139';
	document.querySelector('#youtube').href = 'https://youtu.be/DkreV4KjvmE';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com/in/innocent-muramira-20542b137';

}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/Image from iOS (7).jpg',
	'./images/Image from iOS (2).jpg',
];


function changeImages() {
	function _(id) {
		return document.getElementById(id);
	}

	if (_('slider_image') !== null) {
		_('slider_image').setAttribute('src', images[i]);
		_('imgservice').setAttribute('src', serviceImages[j].image);

		document.querySelector('#title-service').innerHTML = serviceImages[j].title;
		document.querySelector('#text-service').innerHTML = serviceImages[j].text;

		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		if (j < serviceImages.length - 1) {
			j++;
		} else {
			j = 0;
		}
	}

	setTimeout('changeImages()', 5000);
}

function click_hamburger() {
	function _(id) {return document.getElementById(id); }
	_("hamburger_btn").click();
}

	function send_email() {
		function _(id) {return document.getElementById(id); }
		const x = _("slider_image");
		console.log('change image function', x);
		var status = _("response_status");
		if(_("email_from").value !== "" && _("email_from").value.includes("@") && _("contact_message").value !== ""){
			status.innerHTML = "Sending message ...";
			var formdata = new FormData();
			formdata.append("email", _("email_from").value );
			formdata.append("message", _("contact_message").value );
			var ajax = new XMLHttpRequest();
			ajax.open("POST", "send_email.php");
			ajax.onreadystatechange = function () {
				if(ajax.readyState == 4 && ajax.status == 200) {
					if(ajax.responseText == "success") {
						_("email_from").value = "";
						_("contact_message").value = "";
						status.innerHTML = 'Thanks your message is sent';
						setTimeout(function(){ status.innerHTML = ""; }, 5000);
					} else {
						status.innerHTML = ajax.responseText;
						_("my_btn").disabled = false;
						setTimeout(function(){ status.innerHTML = ""; }, 5000);
					}
				}
			}
			ajax.send(formdata);
		}
	}
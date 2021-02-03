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
	document.logo.src = './images/logo.jpeg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'RUDA INVESTMENT LTD';
	document.querySelector('#company-desc').innerHTML = `
					Specializes in brick manufacturing, small and medium  residential houses construction and land brokerage.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `It was back in 2017 when both Alex and David embarked on a journey to build their own houses. Rent was a burden for both of us and we wanted to have our own places before getting married. It was a very tough journey but yet very rewarding. We soon realized that construction materials, bricks to be specific were very expensive and of low quality. The quality on the local market was not good and yet still not affordable. The good quality bricks such as those manufactured with modern tech were very expensive costing an arm and a leg.

Since we were high school friends and we both knew each other very well, we decided to work together on finding a solution to the problem. We later found out that employing modern technology in Rwanda was very expensive as most equipment were to be imported from abroad. 

We started a small factory using traditional methods of molding. We started with handmade bricks that are bigger in size and made sure they are fully burnt to ensure they are hard. We are very proud to say that we migrated from traditional methods and now using machines to manufacture bricks. The result is a very hard brick with very high tensile strength as it is heavily compressed by the machine. Our bricks also have very sharp and beautiful edges. 

Our bricks are bigger in size which saves our customers labor days. They are also very cost effective as they require no plastering due to the sharpness of the edges.

We now employ more than 100 seasonal employees. We are making a very big impact in our community as we have employed more people and made bricks affordable without compromising quality.

We strive to make construction easy by making durable, beautiful and affordable bricks.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `To make construction easy by producing quality and affordable bricks.`;

	// middle section in about us
	document.aboutimg.src = './images/ruda4.jpeg';
	document.querySelector('#img-caption').innerHTML = ``;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To be the leading company in producing quality and affordable bricks in Rwanda.`;

	// In team section
	document.firstimg.src = './images/david.jpeg';
	document.querySelector('#first-name').innerHTML =
		'Karemera Gakumba David, CEO';
	document.querySelector(
		'#first-position'
	).innerHTML = `David before founding RUDA INVESTMENT served key roles in sales and leadership in big companies and NGOs in Rwanda including Airtel and YWCA-Rwanda. This groomed his skills in business development and leadership, entrepreneurship and community service. He holds a BSc in Electronics and Communication Systems Engineering from National University of Rwanda. He has been the CEO of RUDA Investment since 2017. `;

	document.fouthimg.src = './images/alex.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Alex Rugema, COO';
	document.querySelector(
		'#fouth-position'
	).innerHTML = `Alex Comes from RUDA with an experience startups. He founded a telecom company back in 2013 while he was still a college student in the USA where the company served people in more than 100 countries. Even though the company later failed, Alex never stopped the zeal of innovating. Alex is great at sales, product prototyping, as well as very resilient. RUDA Investment has grown significantly from two co-founders to more than 100 seasonal workers.`;

	// In contact us section
	document.querySelector('#address').innerHTML =
		'Northen province, Rurindo District, Shyorongi Sector, Rutonde Cell, Rweya Village.';
	document.querySelector('#email').innerHTML = 'kagadave@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788751379';

	// Link to social media
	document.querySelector('#facebook').href =
		'https://web.facebook.com/RUDA-Investment-Ltd-588014954875342';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788751379';
}

// images sliding
let i = 0;
let j = 0;
const images = [
	'./images/ruda1.jpeg',
	'./images/ruda3.jpeg',
	'./images/ruda4.jpeg',
	'./images/ruda7.jpeg',
	'./images/ruda8.jpeg',
	'./images/ruda9.jpeg',
	'./images/ruda10.jpeg',
];

const serviceImages = [
	{
		image: './images/ruda2.jpeg',
		title: 'FIRED BRICKS(MPUNYU)',
		text: `We are manufacturers of durable and affordable fired clay bricks. This is our da-to-day business. RUDA bricks are manufactured using modern technology where clay is compressed by a machine. The resulting brick is well shaped with sharp edges. The bricks are then burnt in a kiln at over 1000 Degrees Celsius for hardening purposes. Our bricks have a very high tensile strength, sharp edges. RUDA bricks require no plastering at all.
`,
	},
	{
		image: './images/ruda5.jpeg',
		title: 'SMALL AND MEDIUM RESIDENTIAL CONSTRUCTION (CADASTIRE)',
		text: `RUDA constructs small and medium residential houses for sale. We also contract with individuals and companies to build residential houses for them.
`,
	},
	{
		image: './images/ruda6.jpeg',
		title: 'LAND BROKERAGE',
		text: `RUDA connects the buyers and sellers of land in Kigali. We’ve served a number of foreign investors in spotting and buying strategic land for investment in Kigali. We help them in paper acquisitions from the land center.  We’ve as well served individual customers and companies in buying and selling land in Kigali.`,
	},
];

function changeImages() {
	document.slide.src = images[i];
	document.imgservice.src = serviceImages[j].image;

	document.querySelector('#title-service').innerHTML = serviceImages[j].title;
	document.querySelector('#text-service').innerHTML = serviceImages[j].text;

	if (i < images.length - 1) {
		i++;
	} else if (j < serviceImages.length - 1) {
		j++;
	} else {
		i = 0;
		j = 0;
	}
	setTimeout('changeImages()', 3000);
}
window.onload = changeImages;

function submitForm() {
	var status = _("response_status");
	status.innerHTML = "Please wait ...";
	var formdata = new FormData();
	formdata.append("email", _("email_from").value );
	formdata.append("message", _("contact_message").value );
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "send_email.php");
	ajax.onreadystatechange = function () {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success") {
				_("status").innerHTML = '<h2>Thanks your message is sent<h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("my_btn").disabled = false;
			}
		}
	}
	ajax.send(formdata);
}
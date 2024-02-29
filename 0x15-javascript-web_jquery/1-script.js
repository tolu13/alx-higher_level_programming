const jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.2.1.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = function()
{
	$(document).ready(function()
		{
			$('header').css('color', '#FF0000');

		});

};

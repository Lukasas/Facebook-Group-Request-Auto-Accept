//console.log("Here!");
//setTimeout(clickButtons, 3000);
//setTimeout(location.reload(), 1000 * 60 * 5);
setInterval(() => {
	let admin_parent_node = document.getElementById("count_badge_admin_activity").parentElement;
	admin_parent_node.childNodes[1].click();

	setTimeout(() => {
		let member_parent_node = document.getElementById("count_badge_requests").parentElement;
		member_parent_node.childNodes[1].click();
		setTimeout(clickButtons, 2000);
	}, 2000);
}, Math.random() * 5000 + 8000);

function clickButtons()
{
	if (document.getElementsByName("approve_all")[0] !== undefined)
	{
		document.getElementsByName("approve_all")[0].click();
		document.getElementsByClassName("layerConfirm _4jy0 _4jy3 _4jy1 _51sy selected _42ft")[0].click();
	}
}
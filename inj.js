setTimeout(() => {
	let member_parent_node = document.getElementById("count_badge_requests").parentElement;
	member_parent_node.childNodes[1].click();
	setTimeout(() => {
		clickButtons();
	}, 2000);
}, 2000);


setTimeout(location.reload, 5 * 1000 * 60);

function clickButtons()
{
	if (document.getElementsByName("approve_all")[0] !== undefined)
	{
		document.getElementsByName("approve_all")[0].click();
		document.getElementsByClassName("layerConfirm _4jy0 _4jy3 _4jy1 _51sy selected _42ft")[0].click();
	}
}
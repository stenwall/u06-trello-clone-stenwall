$(()=>{
	$("#todo-list-body, #doing-list-body, #done-list-body")
    .sortable({
		connectWith: ".list-body"
	})
    .disableSelection();
});
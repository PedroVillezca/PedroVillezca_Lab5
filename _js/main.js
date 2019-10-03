function setUp() {
	let addButton = $("#addButton")
	let textField = $("#addText")
	let list = $("#list")
	$(addButton).on("click", function(e) {
		e.preventDefault()
		let item = $('<li></li>')
		$(item).append($('<p></p>', {
			text: $(textField).val()
		}))
		$(item).append($('<button></button>', {
			text: "Check",
			type: "button",
			class: "check",
			click: function(e) {
				e.preventDefault()
				let p = $(this).siblings("p")
				if ($(p).css('text-decoration') != 'none solid rgb(0, 0, 0)') {
					$(p).css('text-decoration', 'none solid rgb(0, 0, 0)')
				} else {
					$(p).css('text-decoration', 'line-through solid rgb(0, 0, 0)')
				}
				
			}
		}))
		$(item).append($('<button></button>', {
			text: "Delete",
			type: "button",
			class: "delete",
			click: function(e) {
				e.preventDefault()
				$(this).parent().remove()
			}
		}))
		$(list).append($(item))
	})
}

console.log("on")
setUp()